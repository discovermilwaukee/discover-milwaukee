// pages/api/subscribe.js
// Handles newsletter subscription via Beehiiv API

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const BEEHIIV_API_KEY = process.env.BEEHIIV_API_KEY || '6SGtpBYn2GJJZZhMSHFDVfgiOaTSnEOUkQo7EJpXNcZUPcEjxYX0l9kYYkwW7ufF';
  const BEEHIIV_PUBLICATION_ID = process.env.BEEHIIV_PUBLICATION_ID || 'pub_a0bde97b-d296-4b50-9f66-758a56829696';

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'website',
          utm_medium: 'organic',
        }),
      }
    );

    const data = await response.json();
    
    console.log('Beehiiv API response:', response.status, data);

    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      console.error('Beehiiv API error:', data);
      return res.status(response.status).json({ error: data.message || 'Subscription failed', details: data });
    }
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
