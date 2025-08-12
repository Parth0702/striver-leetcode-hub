# 🤖 AI DSA Learning Hub

An intelligent web application that uses AI to analyze programming videos and provide detailed, readable summaries instead of redirecting to external sites.

## ✨ Features

### 🎯 AI-Powered Video Analysis
- **Smart Summaries**: Get concise overviews of any programming video
- **Detailed Content**: Extract key concepts, algorithms, and explanations
- **Full Transcripts**: Complete text version of video content
- **Key Points**: Bullet-point highlights of important topics

### 🚀 User Experience
- **No Redirects**: Everything happens on your site
- **Instant Results**: AI processes videos in 20-30 seconds
- **Sample Videos**: Pre-loaded Striver DSA videos to try
- **Mobile Responsive**: Works perfectly on all devices

### 🔧 Technical Features
- **Serverless Architecture**: Vercel functions for scalability
- **Real-time Processing**: Live status updates during analysis
- **Error Handling**: Robust error management and user feedback
- **Clean UI**: Modern, gradient design with smooth animations

## 🌐 Live Demos

- **Main Site**: [index.html](https://striver-leetcode-hub.vercel.app) - Full-featured AI analysis
- **Demo Version**: [demo.html](https://striver-leetcode-hub.vercel.app/demo.html) - Simplified demo

## 🎮 How to Use

1. **Paste YouTube URL**: Any programming/DSA video URL
2. **Click Analyze**: AI processes the video content
3. **Get Results**: Receive detailed summaries and insights
4. **Learn Efficiently**: Read instead of watching long videos

## 🎯 Perfect For

- **Quick Reviews**: Get video summaries before watching
- **Study Notes**: Extract key points for revision
- **Time Saving**: Understand content without full video
- **Accessibility**: Text-based learning for different preferences

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Vercel Serverless Functions
- **AI**: Bhindi YouTube Analyzer API
- **Deployment**: Vercel Platform

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Fork this repository
2. Connect to [Vercel](https://vercel.com)
3. Add environment variable: `BHINDI_API_KEY`
4. Deploy automatically

### Option 2: GitHub Pages (Demo Mode)
1. Go to repository Settings → Pages
2. Source: Deploy from branch → main
3. Access at: `username.github.io/striver-leetcode-hub`

## 🔑 Environment Variables

For full functionality, add to Vercel:
```
BHINDI_API_KEY=your_bhindi_api_key_here
```

## 📁 Project Structure

```
├── index.html          # Main AI analysis interface
├── demo.html           # Demo version with mock data
├── api/
│   ├── analyze-video.js # Video analysis endpoint
│   └── check-status/    # Status checking endpoint
└── README.md           # This file
```

## 🎯 Sample Videos to Try

- **Arrays**: `https://www.youtube.com/watch?v=37E9ckMDdTk`
- **Linked Lists**: `https://www.youtube.com/watch?v=Nq7ok-OyEpg`
- **Binary Trees**: `https://www.youtube.com/watch?v=_SiwrPXG9-g`

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📝 License

MIT License - Use freely for your learning journey!

## 🎉 What Makes This Special

Instead of just redirecting to YouTube or LeetCode, this hub:
- **Extracts** video content using AI
- **Summarizes** complex topics into readable text
- **Highlights** key concepts and algorithms
- **Saves time** by providing instant insights
- **Enhances learning** with structured content

Perfect for developers who prefer reading over watching videos or want quick summaries before diving into full content!