// Vercel serverless function for code execution
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { code, language = 'python' } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'Code is required' });
    }

    try {
        // Call Bhindi Code Interpreter API
        const response = await fetch('https://api.bhindi.ai/code-interpreter/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.BHINDI_API_KEY}`,
            },
            body: JSON.stringify({
                code,
                language,
                timeoutMs: 30000
            })
        });

        const data = await response.json();

        if (data.success) {
            res.status(200).json({
                success: true,
                output: data.output,
                executionTime: data.executionTime,
                error: data.error
            });
        } else {
            res.status(400).json({
                success: false,
                error: data.error || 'Code execution failed'
            });
        }

    } catch (error) {
        console.error('Code execution error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
}