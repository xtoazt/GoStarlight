// api/key.js
export default function handler(req, res) {
    const apiKey = process.env.API_KEY;
    if (req.method === 'GET') {
        res.status(200).json({ apiKey });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
