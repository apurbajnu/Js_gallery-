1

		var gallery={

						container: $('.modal'), // modal container


						effect:{
								on:'slideDown',
								off: 'slideUp'
							},

						init: function(){
								
								$('#img-gallery')
									.children('li')
										.bind('click', this.appear);


								},// end of init

					

						appear: function(){
									$this=$(this);

								$this.children('img').parent().addClass('active');


								$src= $this.children('img').attr('src');
								$text=$this.children('p').text();
								  // console.log(gallery.container);
			

								if (gallery.container.is(':hidden')) {// is not visible 
									// current_src=gallery.container.find('.img-holder img').attr('src');
									// 	console.log(current_src);
							
											gallery.prev_next.call(gallery.container);// prev next function // calling modal 
											gallery.close.call(gallery.container);//close function
											gallery.container.find('.img-holder img').attr('src', $src);// modal image
											gallery.container.find('.text-holder p').text($text);
											
											gallery.container[gallery.effect.on]();

											// setInterval(function(){
											// 	$('.next').trigger('click');
											// }, 3000)

								};
								
								
								
								}, // end of appear


						close:function(){

							if($('button.close').length)return;

							$this=$(this);
							$('<button class=close>x</button>')
								.prependTo(this)
										.on('click',
											function()
												{	
														$( "button.next" ).remove(); // to avoid duplicate of next and pre button remove it. 
														$( "button.prev" ).remove();
														$this[gallery.effect.off]();
														$('li.active').removeClass('active');		
														
												}) // end 

						},//end of close


						prev_next:function(){

							if($('button.next').length)return;

							$this=$(this);

							first_src= $('ul#img-gallery li').first().children('img').attr('src');
							first_txt=$('ul#img-gallery li').first().children('p').text();
							last_src= $('ul#img-gallery li').last().children('img').attr('src');
							last_txt=$('ul#img-gallery li').last().children('p').text();


							$('<button class=next>>></button>')
								.prependTo($this)
									.bind('click', function(){
									current_src=$this.find('.img-holder img').attr('src');
									//console.log(current_src);
										
									

													if (current_src==last_src) {
														var next_li=$('ul').children('li').first().addClass('active');
														 	$('ul').children('li').last().removeClass('active');
													
													}else{
														var next_li=$('.active').next('li').addClass('active');
																	next_li.prev('li').removeClass('active');

													}
										var next_src= next_li.children('img').attr('src');
										var next_txt= next_li.children('p').text();
										
										//console.log(next_src);
										$this.find('.img-holder img').attr('src', next_src);
										$this.find('.text-holder p').text(next_txt);


								});

							$('<button class=prev><<</button>')
								.prependTo($this)
									.bind('click', function(){
										current_src=$this.find('.img-holder img').attr('src');

										

													if (current_src==first_src) {

														 var prev_li=$('ul').children('li').last().addClass('active');
														 	$('ul').children('li').first().removeClass('active');									
													}else{

														var prev_li=$('.active').prev('li').addClass('active');
														prev_li.next('li').removeClass('active');
													}
										var prev_src= prev_li.children('img').attr('src');
										var prev_txt= prev_li.children('p').text();
										
										$this.find('.img-holder img').attr('src', prev_src);
										$this.find('.text-holder p').text(prev_txt);


								})

								



						} //end of prev_next






		}// end of gallery


	
	