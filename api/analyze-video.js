// Vercel serverless function for video analysis
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { videoUrl, analysisType = 'summary' } = req.body;

    if (!videoUrl) {
        return res.status(400).json({ error: 'Video URL is required' });
    }

    try {
        // Call Bhindi YouTube Analyzer API
        const response = await fetch('https://api.bhindi.ai/youtube-analyzer/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.BHINDI_API_KEY}`,
            },
            body: JSON.stringify({
                videoUrl,
                analysisType
            })
        });

        const data = await response.json();

        if (data.success) {
            res.status(200).json({
                success: true,
                requestId: data.requestId
            });
        } else {
            res.status(400).json({
                success: false,
                error: data.error || 'Analysis failed'
            });
        }

    } catch (error) {
        console.error('Video analysis error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
}