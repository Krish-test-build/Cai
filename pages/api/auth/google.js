import { OAuth2Client } from 'google-auth-library';
import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { sub, email, name, picture } = ticket.getPayload();

    await dbConnect();

    let user = await User.findOne({ googleId: sub });
    
    if (!user) {
      user = await User.create({
        googleId: sub,
        email,
        name,
        profilePicture: picture,
      });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Authentication failed', error: error.message });
  }
}
