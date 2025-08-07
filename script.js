// Sample video data
const videos = [
    {
        id: 'dQw4w9WgXcQ',
        title: 'Never Gonna Give You Up',
        channel: 'Rick Astley',
        views: '1.2B views',
        date: 'Oct 25, 2009',
        description: 'The official video for "Never Gonna Give You Up" by Rick Astley.\n\nFollow Rick Astley:\nWebsite: https://www.rickastley.co.uk\nFacebook: https://www.facebook.com/RickAstley\nTwitter: https://twitter.com/rickastley\nInstagram: https://www.instagram.com/officialrickastley/',
        likes: '12M',
        dislikes: '120K'
    },
    {
        id: '9bZkp7q19f0',
        title: 'Gangnam Style',
        channel: 'PSY',
        views: '4.5B views',
        date: 'Jul 15, 2012',
        description: 'PSY - GANGNAM STYLE(강남스타일) M/V\n\nPSY - "I LUV IT" M/V @ https://youtu.be/Xvjnoagk6GU\nPSY - "New Face" M/V @https://youtu.be/OwJPPaEyqhI\nPSY - 8TH ALBUM "4X2=8" on iTunes @ https://smarturl.it/PSY_8thAlbum\n\nPSY - GANGNAM STYLE(강남스타일) on iTunes @ http://smarturl.it/PsyGangnam\n\n#PSY #싸이 #GANGNAMSTYLE #강남스타일',
        likes: '24M',
        dislikes: '890K'
    },
    {
        id: 'kJQP7kiw5Fk',
        title: 'Luis Fonsi - Despacito ft. Daddy Yankee',
        channel: 'Luis Fonsi',
        views: '8.1B views',
        date: 'Jan 12, 2017',
        description: '“Despacito” disponible ya en todas las plataformas digitales: https://UMLE.lnk.to/DOoUzFp\n\n“Imposible” disponible ya en todas las plataformas digitales: https://UMLE.lnk.to/IMPOSIBLEFp\n\n“Calypso” disponible ya en todas las plataformas digitales: https://UMLE.lnk.to/CLYPSFp\n\nEchame La Culpa disponible ya en todas las plataformas digitales: https://UMLE.lnk.to/ELCFp\n\nBest of Luis Fonsi / Lo mejor Luis Fonsi: https://goo.gl/KLWPSa\nSubscribe here: https://goo.gl/nkhcGc',
        likes: '50M',
        dislikes: '1.2M'
    },
    {
        id: 'JGwWNGJdvx8',
        title: 'Ed Sheeran - Shape of You',
        channel: 'Ed Sheeran',
        views: '6.1B views',
        date: 'Jan 30, 2017',
        description: 'The official music video for Ed Sheeran - Shape Of You\n\nSubtract, the new album, out 05.05.2023. Pre-order: https://es.lnk.to/subtract\n\nTaken from the studio album ÷ (divide) released in 2017, which featured the hit singles \'Castle on the Hill\', \'Galway Girl\', \'Perfect\' & \'Happier\'.\n\nSubscribe to the Ed Sheeran channel for all the best and latest official music videos, behind the scenes and live performances. http://bit.ly/SubscribeToEdSheeran\n\nSee more official videos from Ed Sheeran here: https://www.youtube.com/watch?v=ryJgDL9jzKk&list=PLjp0AEEJ0-fGKG_3skl0e1FQlJfnx-TJz',
        likes: '38M',
        dislikes: '1.1M'
    },
    {
        id: 'RgKAFK5djSk',
        title: 'Wiz Khalifa - See You Again ft. Charlie Puth',
        channel: 'Wiz Khalifa',
        views: '6.4B views',
        date: 'Apr 6, 2015',
        description: 'See You Again by Wiz Khalifa ft. Charlie Puth from Furious 7: The Album available now.\n\nDownload here: https://atlantic.lnk.to/furious7\n\nDirected by: Marc Klasfeld\n\nFollow Wiz Khalifa:\nhttps://www.twitter.com/wizkhalifa\nhttps://www.facebook.com/wizkhalifa\nhttps://www.instagram.com/mistercap\n\nFollow Charlie Puth:\nhttps://www.twitter.com/charlieputh\nhttps://www.facebook.com/charlieputh\nhttps://www.instagram.com/charlieputh',
        likes: '42M',
        dislikes: '1.3M'
    },
    {
        id: 'RgKAFK5djSk',
        title: 'pk dark - See You Again ft. Charlie Puth',
        channel: 'Wiz Khalifa',
        views: '6.4B views',
        date: 'Apr 6, 2015',
        description: 'See You Again by Wiz Khalifa ft. Charlie Puth from Furious 7: The Album available now.\n\nDownload here: https://atlantic.lnk.to/furious7\n\nDirected by: Marc Klasfeld\n\nFollow Wiz Khalifa:\nhttps://www.twitter.com/wizkhalifa\nhttps://www.facebook.com/wizkhalifa\nhttps://www.instagram.com/mistercap\n\nFollow Charlie Puth:\nhttps://www.twitter.com/charlieputh\nhttps://www.facebook.com/charlieputh\nhttps://www.instagram.com/charlieputh',
        likes: '42M',
        dislikes: '1.3M'
    },
    {
        id: 'OPf0YbXqDm0',
        title: 'Mark Ronson - Uptown Funk ft. Bruno Mars',
        channel: 'Mark Ronson',
        views: '5.1B views',
        date: 'Nov 19, 2014',
        description: 'Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars\n\nDownload Uptown Funk: http://smarturl.it/UptownFunk\n\nDirected by Bruno Mars and Cameron Duddy\n\nFollow Mark Ronson:\nhttp://www.markronson.co.uk\nhttp://www.facebook.com/markronson\nhttp://www.twitter.com/markronson\nhttp://www.instagram.com/markronson\n\nFollow Bruno Mars:\nhttp://www.brunomars.com\nhttp://www.facebook.com/brunomars\nhttp://www.twitter.com/brunomars\nhttp://www.instagram.com/brunomars',
        likes: '32M',
        dislikes: '980K'
    }
];

// Initialize the homepage
function initHomepage() {
    const videoContainer = document.getElementById('video-container');
    
    if (videoContainer) {
        // Display all videos
        displayVideos(videos);
        
        // Setup search functionality
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchVideos();
            }
        });
        
        searchButton.addEventListener('click', searchVideos);
    }
}

// Display videos on the homepage
function displayVideos(videosToDisplay) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';
    
    videosToDisplay.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.addEventListener('click', () => openVideoPage(video.id));
        
        videoCard.innerHTML = `
            <div class="thumbnail">
                <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" alt="${video.title}">
                <div class="video-duration">3:45</div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p class="channel-name">${video.channel}</p>
                <p class="video-stats">${video.views} • ${video.date}</p>
            </div>
        `;
        
        videoContainer.appendChild(videoCard);
    });
}

// Search videos by title
function searchVideos() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        displayVideos(videos);
        return;
    }
    
    const filteredVideos = videos.filter(video => 
        video.title.toLowerCase().includes(searchTerm) || 
        video.channel.toLowerCase().includes(searchTerm)
    );
    
    displayVideos(filteredVideos);
}

// Open video page with the selected video
function openVideoPage(videoId) {
    // Store the selected video ID in localStorage
    localStorage.setItem('selectedVideo', videoId);
    
    // Redirect to the video page
    window.location.href = 'video.html';
}

// Initialize the video page
function initVideoPage() {
    const videoIframe = document.getElementById('video-iframe');
    const videoTitle = document.getElementById('video-title');
    const channelName = document.getElementById('channel-name');
    const videoViews = document.getElementById('video-views');
    const videoDate = document.getElementById('video-date');
    const videoDescription = document.getElementById('video-description');
    const likeCount = document.getElementById('like-count');
    const dislikeCount = document.getElementById('dislike-count');
    const suggestionsContainer = document.querySelector('.video-suggestions');
    
    // Get the selected video ID from localStorage
    const selectedVideoId = localStorage.getItem('selectedVideo');
    
    // Find the video in our data
    const selectedVideo = videos.find(video => video.id === selectedVideoId) || videos[0];
    
    // Populate the video page with the selected video data
    if (videoIframe) {
        videoIframe.src = `https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`;
    }
    
    if (videoTitle) videoTitle.textContent = selectedVideo.title;
    if (channelName) channelName.textContent = selectedVideo.channel;
    if (videoViews) videoViews.textContent = selectedVideo.views.split(' ')[0];
    if (videoDate) videoDate.textContent = selectedVideo.date;
    if (videoDescription) videoDescription.textContent = selectedVideo.description;
    if (likeCount) likeCount.textContent = selectedVideo.likes;
    if (dislikeCount) dislikeCount.textContent = selectedVideo.dislikes;
    
    // Display suggested videos (all other videos except the current one)
    const suggestedVideos = videos.filter(video => video.id !== selectedVideo.id);
    
    if (suggestionsContainer) {
        suggestedVideos.forEach(video => {
            const suggestedVideo = document.createElement('div');
            suggestedVideo.className = 'suggested-video';
            suggestedVideo.addEventListener('click', () => openVideoPage(video.id));
            
            suggestedVideo.innerHTML = `
                <div class="suggested-thumbnail">
                    <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" alt="${video.title}">
                </div>
                <div class="suggested-info">
                    <h4>${video.title}</h4>
                    <p>${video.channel}</p>
                    <p>${video.views}</p>
                </div>
            `;
            
            suggestionsContainer.appendChild(suggestedVideo);
        });
    }
    
    // Setup like/dislike buttons
    const likeButton = document.querySelector('.like-button');
    const dislikeButton = document.querySelector('.dislike-button');
    
    if (likeButton) {
        likeButton.addEventListener('click', () => {
            const currentLikes = parseInt(likeCount.textContent.replace(/[^\d]/g, ''));
            likeCount.textContent = formatNumber(currentLikes + 1);
        });
    }
    
    if (dislikeButton) {
        dislikeButton.addEventListener('click', () => {
            const currentDislikes = parseInt(dislikeCount.textContent.replace(/[^\d]/g, ''));
            dislikeCount.textContent = formatNumber(currentDislikes + 1);
        });
    }
}

// Helper function to format numbers (e.g., 1000 -> 1K)
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Initialize the appropriate page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('video-container')) {
        initHomepage();
    } else if (document.getElementById('video-iframe')) {
        initVideoPage();
    }
});
