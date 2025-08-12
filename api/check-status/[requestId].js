// Vercel serverless function to check analysis status
export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { requestId } = req.query;

    if (!requestId) {
        return res.status(400).json({ error: 'Request ID is required' });
    }

    try {
        // Call Bhindi YouTube Analyzer status API
        const response = await fetch(`https://api.bhindi.ai/youtube-analyzer/status/${requestId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.BHINDI_API_KEY}`,
            }
        });

        const data = await response.json();

        if (data.success) {
            res.status(200).json({
                status: data.status,
                results: data.results || null
            });
        } else {
            res.status(400).json({
                status: 'FAILED',
                error: data.error || 'Status check failed'
            });
        }

    } catch (error) {
        console.error('Status check error:', error);
        res.status(500).json({
            status: 'ERROR',
            error: 'Internal server error'
        });
    }
}