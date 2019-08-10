(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = false,
		playlist = [
	
		{
			title: 'Forever Love',
			artist: '十年前,我听这首歌,心里想着她,现在,我唱这首歌，你在我身边。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/fb4c0d11945ab47b7979cf5f73ebd8fe.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/Forever%20love01.mp3',
			volume:'3461',
			user:'张先生',
			style:'别墅区求婚',
			city:'中国·上海',
			ogg: ''
		},
		{
			title: '为了遇见你',
			artist: '终于遇见你了，为了遇见最好的你 ，珍惜自己，才配得起最好的你。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/07294b0e4552aba193e5b2db4e21213d.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E4%B8%BA%E4%BA%86%E9%81%87%E8%A7%81%E4%BD%A001.mp3',
			volume:'7853',
			user:'李先生',
			style:'草坪求婚',
			city:'中国·北京',
			ogg: ''
		},
		{
			title: '终于等到你',
			artist: '我相信所有的等待到最后都会不期而遇，相爱是吸引，为了等到你。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/45c13d22e4e9777bb6d14084121bc6f4.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E7%BB%88%E4%BA%8E%E7%AD%89%E5%88%B0%E4%BD%A001.mp3',
			volume:'4574',
			user:'王先生',
			style:'海上求婚',
			city:'中国·重庆',
			ogg: ''
		},
		{
			title: '往后余生',
			artist: '多幸运在最美的年纪遇见你，爱上你，天涯海角愿陪你到底。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/ad4f110b26e9d41988a2ee61ec7590e7.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E5%BE%80%E5%90%8E%E4%BD%99%E7%94%9F02.mp3',
			volume:'4567',
			user:'赵先生',
			style:'家里求婚',
			city:'中国·深圳',
			ogg: ''
		},
		{
			title: '多幸运',
			artist: '希望与你一起走过青春的芳华，且往后的余生跟你一起谈一世情长。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/e37c10be2c6ada22a82930233a01b9ff.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E5%A4%9A%E5%B9%B8%E8%BF%9001.mp3',
			volume:'4523',
			user:'黄先生',
			style:'西餐厅求婚',
			city:'中国·广州',
			ogg: ''
		},
		{
			title: '爱的就是你',
			artist: '难免会吵吵闹闹，但你依旧是我的唯一，永远不会分离。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/8136108a2ab6c6aeff39850e45e1a713.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E7%88%B1%E7%9A%84%E5%B0%B1%E6%98%AF%E4%BD%A001.mp3',
			volume:'7863',
			user:'刘先生',
			style:'草坪求婚',
			city:'中国·厦门',
			ogg: ''
		},
		{
			title: '给你们',
			artist: '遇见的每一个人都是缘分注定，能够走到最后的一定要好好珍惜。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/19e0accabfb2203ccc7c156b3cd04bbd.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E7%BB%99%E4%BD%A0%E4%BB%AC01.mp3',
			volume:'5467',
			user:'彭先生',
			style:'电影院求婚',
			city:'中国·福建',
			ogg: ''
		},
		{
			title: '一次就好',
			artist: '青春最美好的事，就是和喜欢的人一起闹，感谢那个人还在我身边。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/1019920bd20ed2a877de577a75b8bf66.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E4%B8%80%E6%AC%A1%E5%B0%B1%E5%A5%BD01.mp3',
			volume:'8245',
			user:'张先生',
			style:'校园求婚',
			city:'中国·成都',
			ogg: ''
		},
		{
			title: '小情歌',
			artist: '只想对你说，你是我愿意用生命去守护的最爱的女孩。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/a40f0b34dab3c8e1319b5cf97ac41e3f.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E5%B0%8F%E6%83%85%E6%AD%8C01.mp3',
			volume:'9427',
			user:'孙先生',
			style:'会议室求婚',
			city:'中国·南宁',
			ogg: ''
		},
		{
			title: '爱很简单',
			artist: '我与世界只差一个你，因为是你，所以晚一点也没有关系。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/aa441027379f75179e4df7e475e9891e.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E7%88%B1%E5%BE%88%E7%AE%80%E5%8D%9501.mp3',
			volume:'6871',
			user:'钱先生',
			style:'露天求婚',
			city:'中国·青岛',
			ogg: ''
		},
		{
			title: '当你老了',
			artist: '爱很简单，最好的感觉是当我朝你看过去时，你已经在凝视着我。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/f22108c1d133cf7091aa61eef0352294.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E5%BD%93%E4%BD%A0%E8%80%81%E4%BA%8601.mp3',
			volume:'4581',
			user:'康先生',
			style:'洲际酒店求婚',
			city:'中国·上海',
			ogg: ''
		},
		{
			title: '我要你',
			artist: '一直不期望你更完美，因为我只需要你能让我感觉到我就是你的。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/00e1be5e47e6b694a4054a237cee9cfd.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E6%88%91%E8%A6%81%E4%BD%A001.mp3',
			volume:'3457',
			user:'白先生',
			style:'篮球场求婚',
			city:'中国·天津',
			ogg: ''
		},
		{
			title: '小幸运',
			artist: '那些年，我们一起追过的剧，是我们爱情最美的见证。',
			album: '魔兽世界 - 亡灵序曲.mp3',
			cover: 'https://www.onemeet.com/uploads/images/20190127/dd93df75c50e570bf622f6285e4a8d87.jpg',
			mp3: 'https://om4001388521-1258313538.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E4%B9%90/%E5%B0%8F%E5%B9%B8%E8%BF%9001.mp3',
			volume:'4024',
			user:'郭先生',
			style:'草坪求婚',
			city:'中国·重庆',
			ogg: ''
		}];

	// Load playlist
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		$('#playlist').append('<li>'+item.title+'<span>'+item.user +'&nbsp;&nbsp;&nbsp;&nbsp;'+ '<i class=" icon-headphones">'+'</i>'+item.volume+'</span>'+'</li>');
		
		
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	
	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
		document.getElementById('video').pause();
			$('.zanting').hide();
			$('.bofang').show();
			$("#video").attr('src',"");
	}
	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}
	

	// Update progress
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress_music .pace').css('width', ratio + '%');
		$('.progress_music .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider
	$('.progress_music .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress_music .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function(i){
		var item = playlist[i],
			newaudio = $('<audio id="audio">').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">' +'<div class="cover_zhegai">'+'</div>' +'<div class="cover_user">'+'<div class="cover_city">'+item.city+'</div>'+'<div class="cover_style">'+item.style+'</div>'+'</div>');
		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+'<marquee behavior="scroll" direction="up" onmouseover=this.stop() onmouseout=this.start()  loop="infinite" scrollamount="2" scrolldelay="30">'+item.artist+'</marquee>'+'</span><span class="album">'+'</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress_music', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);