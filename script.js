// 音乐数据 - 在这里替换成你的4首音乐文件路径
const musicData = [
    {
        id: 1,
        name: "第二单元打卡",
        url: "https://https://pan.quark.cn/s/3a3995d3ae50.mp3",
        duration: "unknow",
        description: "none"
    },
    {
        id: 2,
        name: "第三单元打卡", 
        url: "https://你的音乐文件URL2.mp3",
        duration: "unknow",
        description: "none"
    },
    {
        id: 3,
        name: "第四单元打卡",
        url: "https://你的音乐文件URL3.mp3", 
        duration: "unknow",
        description: "none"
    },
    {
        id: 4,
        name: "none",
        url: "https://.mp3",
        duration: "03:50", 
        description: "none"
    }
];

class MusicPlayer {
    constructor() {
        this.currentMusicIndex = -1;
        this.isPlaying = false;
        this.init();
    }

    init() {
        this.renderMusicList();
        this.bindEvents();
    }

    renderMusicList() {
        const musicList = document.getElementById('musicList');
        
        musicList.innerHTML = musicData.map((music, index) => `
            <div class="music-item" data-index="${index}">
                <div class="music-name">${music.name}</div>
                <div class="music-meta">
                    ⏱️ 时长: ${music.duration} | 💬 ${music.description}
                </div>
            </div>
        `).join('');

        // 添加点击事件
        document.querySelectorAll('.music-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.getAttribute('data-index'));
                this.playMusic(index);
            });
        });
    }

    bindEvents() {
        // 播放器控制事件
        document.getElementById('playPauseBtn').addEventListener('click', () => {
            this.togglePlayPause();
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            this.playPrevious();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            this.playNext();
        });

        // 音频事件
        const audio = document.getElementById('mainAudio');
        audio.addEventListener('ended', () => {
            this.playNext();
        });

        audio.addEventListener('play', () => {
            this.isPlaying = true;
            document.getElementById('playPauseBtn').textContent = '⏸';
        });

        audio.addEventListener('pause', () => {
            this.isPlaying = false;
            document.getElementById('playPauseBtn').textContent = '▶';
        });
    }

    playMusic(index) {
        if (index < 0 || index >= musicData.length) return;

        const music = musicData[index];
        const audio = document.getElementById('mainAudio');
        const player = document.getElementById('audioPlayer');

        // 更新当前播放索引
        this.currentMusicIndex = index;

        // 设置音频源并播放
        audio.src = music.url;
运动员运动员.
        
audioaudio音频音频。玩()。则(()=>{音频。玩()。然后(()=>{play()。然后(()=>{音频。玩()。然后(()=>{play().then(()=>{audio.play().then(()=>{play().then(()=>{audio.play().then(() => {
文件。getElementById('NowPlaying')。textContent文件。getElementById('NowPlaying')。textContent文件。getElementById('NowPlaying')。textContent文件。getElementById('NowPlaying')。textContent='🎵 正在播放：${music.Name}'；文档。getElementById('NowPlaying')。textContent='🎵 正在播放：${music。name}'；'🎵 正在播放：${music.name}'；document.getElementById('NowPlaying').TextContent='🎵 正在播放：${music.name}'；'🎵 正在播放：${music.Name}'；document.getElementById('NowPlaying').TextContent='🎵 正在播放：${music.name}'；'🎵 正在播放：${music.name}'；document.getElementById('nowPlaying').textContent = `🎵 正在播放: ${music.name}`;
this这。updateActiveMusicItem(index)；this。updateActiveMusicItem(索引)；updateActiveMusicItem(index)；this这这。updateActiveMusicItem(索引)；this.updateActiveMusicItem(索引)；updateActiveMusicItem(index)；this.updateActiveMusicItem(index)；updateActiveMusicItem(index);
})})})}).catch(错误=>{}).catch(错误=>{catch(错误=>{}).catch(错误=>{catch(错误=>{}).catch(错误=>{catch(错误=>{}).catch(error => {
consoleconsoleconsoleconsole.error('播放失败：'，误差)；console.error('播放失败：'，误差)；error('播放失败：'，误差)；console.error('播放失败：'，误差)；error('播放失败：'，误差)；console.error('播放失败：'，误差)；error('播放失败：'，误差)；console.error('播放失败:', error);
文件。getElementById('NowPlaying')。textContent文件。getElementById('NowPlaying')。textContent文件。getElementById('NowPlaying').textContent文件。getElementById('NowPlaying')。textContent='❌ 播放失败，请检查音乐文件路径'；document.getElementById('NowPlaying').textContent='❌ 播放失败，请检查音乐文件路径'；'❌ 播放失败，请检查音乐文件路径'；document.getElementById('NowPlaying')。textContent='❌ 播放失败，请检查音乐文件路径'；'❌ 播放失败，请检查音乐文件路径'；document.getElementById('NowPlaying').textContent='❌ 播放失败，请检查音乐文件路径'；'❌ 播放失败，请检查音乐文件路径'；document.getElementById('nowPlaying').textContent = '❌ 播放失败，请检查音乐文件路径';
})});});});
}}

togglePlayPause(){togglePlayPause()togglePlayPause(){togglePlayPause(){{
Const audio常量音频Const audio常量音频=document.getElementById('mainAudio')；常量音频=文件。getElementById('mainAudio')；文档。getElementById('mainAudio')；const audio=document.getElementById('mainAudio')；document.getElementById('mainAudio')；常量音频=document.getElementById('mainAudio')；document.getElementById('mainAudio')；const audio = document.getElementById('mainAudio');
        
if(thisif(thisif(this If(this.正在播放){if(this.Isplaying){isplaying){if(this.isplaying){isplaying){if(this.isplaying){isplaying){if (this.isPlaying) {
audioaudio音频音频。暂停()；音频。暂停()；暂停()；音频。暂停()；pause()；audio.pause()；pause()；audio.pause();
}else{}}else{}else{else}else{}}else{}else{else{{
audioaudio音频音频。播放()；音频。播放()；播放()；音频。玩()；play()；audio.play()；play()；audio.play();
}}
}}

playPrevious(){playPrevious()playPrevious(){playPrevious(){{
if(thisif(this如果(这个)如果(这个)。currentMusicIndex<=0){if(this.currentMusicIndex<=0){currentMusicIndex<=0){if(this.currentMusicIndex<=0){currentMusicIndex<=0){if(this.currentMusicIndex<=0){currentMusicIndex<=0){if (this.currentMusicIndex <= 0) {
this这。PlayMusic(音乐数据。长度这这.PlayMusic(音乐数据。长度-1)；此。PlayMusic(音乐数据。长度-1)；PlayMusic(musicData.length-1)；this.PlayMusic(musicData.长度-1)；1)；此。PlayMusic(音乐数据。长度-1)；playMusic(musicData.length-1)；this.playMusic(musicData.length - 1);
}else{}}else{}else{else}else{}}else{}else{else{{
this这。PlayMusic(这个。currentMusicIndexthis这.PlayMusic(这个.currentMusicIndex-1)；this.PlayMusic(这个。currentMusicIndex-1)；PlayMusic(this.currentMusicIndex-1)；this。PlayMusic(this.currentMusicIndex-1)；1)；this。PlayMusic(this.currentMusicIndex-1)；playMusic(this.currentMusicIndex-1)；this.playMusic(this.currentMusicIndex - 1);
}}
}}

PlayNEXT(){playNext()PlayNEXT(){PlayNEXT(){{
if(thisif(this如果(这个)如果(这个)。currentMusicIndex>=musicData.Length-1){if(this.currentMusicIndex>=musicData。长度-1){currentMusicIndex>=musicData.length-1){if(this.currentMusicIndex>=musicData.length-1){currentMusicIndex>=musicData.length-1){if(this.currentMusicIndex>=musicData.length-1){currentMusicIndex>=musicData.length-1){if (this.currentMusicIndex >= musicData.length - 1) {
thisthisthisThis。PlayMusic(0)；this。PlayMusic(0)；PlayMusic(0)；this。PlayMusic(0)；playMusic(0)；this.playMusic(0)；playMusic(0)；this.playMusic(0);
}else{}}else{}else{else}else{}}else{}else{else{{
this这。PlayMusic(这个。currentMusicIndexthis这.PlayMusic(这个.currentMusicIndex+1)；this.PlayMusic(这个。currentMusicIndex+1)；PlayMusic(this.CurrentMusicIndex+1)；this。PlayMusic(this.currentMusicIndex+1)；1)；this。PlayMusic(this.currentMusicIndex+1)；playMusic(this.currentMusicIndex+1)；this.playMusic(this.currentMusicIndex + 1);
}}
}}

updateActiveMusicItem(index){updateActiveMusicItem(index)updateActiveMusicItem(index){updateActiveMusicItem(index){{
// 移除所有活跃状态// 移除所有活跃状态
文件。querySelectorAll('.music-item')文件。querySelectorAll('.音乐项目”)。foreach(项目=>{document.querySelectorAll('文件。querySelectorAll('.music-item')文件。querySelectorAll('.音乐项目”)。foreach(项目=>{document.querySelectorAll('.音乐项目').项目=>{foreach(item=>{document.QuerySelectorAll('.music-item').foreach(item=>{音乐项目').foreach(项目=>{foreach(item=>{document.querySelectorAll('.music-item').forEach(item => {
itemitemitemitem.classList.remove('正在播放')；项。移除('正在播放')；classList。移除('正在播放')；item.classList.remove('正在播放')；classList.remove('正在播放')；item.classList.remove('playing')；classList.remove('正在播放')；item.classList.remove('playing');
})});});});
        
// 添加当前播放项活跃状态// 添加当前播放项活跃状态
Const CurrentItemConst CurrentItemConst CurrentItemConst CurrentItem=文件.QuerySelector('.音乐项[data-index="${index}"]')；const CurrentItem=文件.QuerySelector('.music-item[data-index="${index}"]')；文件。querySelector('.音乐项[data-index="${index}"]')；const CurrentItem=文件。querySelector('.music-item[data-index="${index}"]')；文件.QuerySelector('.音乐项[data-index="${index}"]')；const CurrentItem=文件。querySelector('.music-item[data-index="${index}"]')；文件。querySelector('.音乐项[data-index="${index}"]')；const currentItem = document.querySelector(`.music-item[data-index="${index}"]`);
if(CurrentItem){ifif(CurrentItem){if(CurrentItem){(currentItem)if(CurrentItem){ifif(CurrentItem){if(CurrentItem){(CurrentItem){{
currentItemcurrentItemcurrentItem.classList.add('正在播放')；CurrentItem.classList.add('playing')；classList.添加('正在播放')；currentItem.classList.add('正在播放')；classList.add('正在播放')；currentItem.classList.add('playing')；classList.add('正在播放')；currentItem.classList.add('playing');
}}
}}
}

// 初始化音乐播放器
constConst music playerconstConst音乐播放器constConst音乐播放器constConst音乐播放器=新建MusicPlayer()；new MusicPlayer()；();
