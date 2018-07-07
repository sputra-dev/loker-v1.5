var $=jQuery;
$(document).ready(function (){
if(jQuery('.fancybox').length > 0){
jQuery(".fancybox").fancybox({
openEffect: 'elastic',
closeEffect: 'elastic',
});
}
if(jQuery('.fancybox-video').length > 0){
jQuery('.fancybox-video').fancybox({
maxWidth: 800,
maxHeight: 600,
fitToView: false,
width: '70%',
height: '70%',
autoSize: false,
closeClick: false,
openEffect: 'none',
closeEffect: 'none'
});
}
if(jQuery('.jobsearch_progressbar1').length > 0){
jQuery('.jobsearch_progressbar1').progressBar({
percentage: false,
backgroundColor: "#dbdbdb",
barColor: jobsearch_plugin_vars.careerfy_theme_color,
animation: true,
height: "6",
});
}
jQuery('.selectize-select').selectize({
plugins: ['remove_button'],
});
jQuery('.sort-records-per-page').selectize({
allowEmptyOption: true,
});
});
var location_box=jQuery('input[name="location"]');
var location_ajax_box=jQuery('.jobsearch_searchloc_div .jobsearch_search_location_field');
function JobsearchGetClientLocation(){
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(JobsearchShowClientPosition);
}else{
console.log("Geolocation is not supported by this browser.");
}}
function JobsearchShowClientPosition(position){
var lat=position.coords.latitude;
var lng=position.coords.longitude;
if(lat!=''&&lng!=''){
var pos={
lat: lat,
lng: lng
};
var dataString="lat=" + pos.lat + "&lng=" + pos.lng + "&action=jobsearch_get_location_with_latlng";
jQuery.ajax({
type: "POST",
url: jobsearch_plugin_vars.ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(location_box.length > 0){
location_box.val(response.address);
}
if(location_ajax_box.length > 0){
location_ajax_box.val(response.address);
}}
});
}}
jQuery(document).ready(function (){
if(location_box.length > 0){
JobsearchGetClientLocation();
}});
jQuery(document).on('submit', 'form', function (er){
var this_form=jQuery(this);
if(this_form.find('input[type="checkbox"][name="terms_cond_check"]').length > 0){
var checkbox=this_form.find('input[type="checkbox"][name="terms_cond_check"]');
if(!checkbox.is(":checked")){
er.preventDefault();
alert(jobsearch_plugin_vars.accpt_terms_cond);
return false;
}}
});
function jobsearch_accept_terms_cond_pop(this_form){
if(this_form.find('input[type="checkbox"][name="terms_cond_check"]').length > 0){
var checkbox=this_form.find('input[type="checkbox"][name="terms_cond_check"]');
if(!checkbox.is(":checked")){
alert(jobsearch_plugin_vars.accpt_terms_cond);
return 'no';
}}
return 'yes';
}
jQuery('#user-sector').find('option').first().val('');
jQuery('#user-sector').attr('placeholder', jobsearch_plugin_vars.select_sector);
jQuery('#job-sector').attr('placeholder', jobsearch_plugin_vars.select_sector);
$(window).on('load', function (){
});
jQuery(document).on('click', '.show-toggle-filter-list', function (){
var _this=jQuery(this);
var more_txt=jobsearch_plugin_vars.see_more_txt;
var less_txt=jobsearch_plugin_vars.see_less_txt;
if(_this.hasClass('jobsearch-loadmore-locations')){
var this_loader=_this.find('.loc-filter-loder');
var this_appender=_this.parent('.jobsearch-checkbox-toggle').find('>ul');
var this_pnm=parseInt(_this.attr('data-pnum'));
var this_tpgs=parseInt(_this.attr('data-tpgs'));
var this_rid=_this.attr('data-rid');
var this_cousw=_this.attr('data-cousw');
this_loader.html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
page_num: this_pnm,
t_pgs: this_tpgs,
param_rid: this_rid,
param_cousw: this_cousw,
action: 'jobsearch_load_more_filter_locs_to_list',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.list!=='undefined'&&response.list!=''){
this_appender.append(response.list);
if(this_pnm < this_tpgs){
_this.attr('data-pnum', (this_pnm + 1));
}else{
_this.remove();
}}
this_loader.html('');
});
request.fail(function (jqXHR, textStatus){
this_loader.html('');
});
return false;
}
var etarget=_this.prev('ul').find('li.filter-more-fields');
if(etarget.hasClass('f_showing')){
etarget.hide();
_this.html(more_txt);
etarget.removeClass('f_showing');
}else{
etarget.show();
_this.html(less_txt);
etarget.addClass('f_showing');
}});
function jobsearch_modal_popup_open(target){
jQuery('#' + target).removeClass('fade').addClass('fade-in');
jQuery('body').addClass('jobsearch-modal-active');
}
jQuery(document).on('click', '.jobsearch-modal .modal-close', function (){
jQuery('.jobsearch-modal').removeClass('fade-in').addClass('fade');
jQuery('body').removeClass('jobsearch-modal-active');
});
jQuery('.modal-content-area').on('click', function (e){
if(e.target!==e.currentTarget)
return;
jQuery('.jobsearch-modal').removeClass('fade-in').addClass('fade');
jQuery('body').removeClass('jobsearch-modal-active');
});
jQuery(document).on('click', '.jobsearch-open-signin-tab', function (){
jobsearch_modal_popup_open('JobSearchModalLogin');
jQuery('.reg-tologin-btn').trigger('click');
});
jQuery(document).on('click', '.jobsearch-open-register-tab', function (){
jobsearch_modal_popup_open('JobSearchModalLogin');
jQuery('.register-form').trigger('click');
});
jQuery(document).on('click', '.jobsearch-send-email-popup-btn', function (){
jobsearch_modal_popup_open('JobSearchSendEmailModal');
});
jQuery(document).on('click', '.jobsearch-add-resume-to-list', function (){
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var download_cv=_this.attr('data-download');
var this_loader=jQuery(this).next('.resume-loding-msg');
this_loader.html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
candidate_id: this_id,
download_cv: download_cv,
action: 'jobsearch_add_employer_resume_to_list',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.error!=='undefined'&&response.error=='1'){
this_loader.html(response.msg);
return false;
}
if(typeof response.dbn!=='undefined'&&response.dbn!=''){
_this.hide();
_this.parent('.shortlisting-user-btn').hide();
_this.parent('.shortlisting-user-btn').html(response.dbn).slideDown();
return false;
}
if(typeof response.msg!=='undefined'&&response.msg!=''){
this_loader.html(response.msg);
_this.html('<i class="jobsearch-icon jobsearch-add-list"></i> ' + jobsearch_plugin_vars.shortlisted_str);
_this.removeClass('jobsearch-add-resume-to-list');
}});
request.fail(function (jqXHR, textStatus){
this_loader.html(jobsearch_plugin_vars.error_msg);
});
});
$(document).on('click', '.jobsearch-candidate-ct-form', function (e){
e.preventDefault();
var this_id=$(this).data('id'),
msg_form=$('#ct-form-' + this_id),
ajax_url=jobsearch_plugin_vars.ajax_url,
msg_con=msg_form.find('.jobsearch-ct-msg'),
msg_name=msg_form.find('input[name="u_name"]'),
msg_email=msg_form.find('input[name="u_email"]'),
msg_phone=msg_form.find('input[name="u_number"]'),
msg_txt=msg_form.find('textarea[name="u_msg"]'),
user_id=msg_form.attr('data-uid'),
error=0;
var get_terr_val=jobsearch_accept_terms_cond_pop(msg_form);
if(get_terr_val!='yes'){
return false;
}
if(msg_form.find('.jobsearch-open-signin-tab').length > 0){
msg_form.find('.jobsearch-open-signin-tab').trigger('click');
return false;
}
var email_pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
if(msg_name.val()==''){
error=1;
msg_name.css({"border": "1px solid #ff0000"});
}else{
msg_name.css({"border": "1px solid #efefef"});
}
if(msg_email.val()==''){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
if(!email_pattern.test(msg_email.val())){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
msg_email.css({"border": "1px solid #efefef"});
}}
if(msg_txt.val()==''){
error=1;
msg_txt.css({"border": "1px solid #ff0000"});
}else{
msg_txt.css({"border": "1px solid #efefef"});
}
if(error==0){
msg_con.html('<em class="fa fa-refresh fa-spin"></em>');
var request=$.ajax({
url: ajax_url,
method: "POST",
data: {
u_name: msg_name.val(),
u_email: msg_email.val(),
u_phone: msg_phone.val(),
u_msg: msg_txt.val(),
u_candidate_id: user_id,
action: 'jobsearch_candidate_contact_form_submit',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'){
msg_name.val('');
msg_email.val('');
msg_phone.val('');
msg_txt.val('');
msg_con.html(response.msg);
}else{
msg_con.html(jobsearch_plugin_vars.error_msg);
}});
request.fail(function (jqXHR, textStatus){
msg_con.html(jobsearch_plugin_vars.error_msg);
});
}
return false;
});
$(document).on('click', '.jobsearch-employer-ct-form', function (e){
e.preventDefault();
var this_id=$(this).data('id'),
msg_form=$('#ct-form-' + this_id),
ajax_url=jobsearch_plugin_vars.ajax_url,
msg_con=msg_form.find('.jobsearch-ct-msg'),
msg_name=msg_form.find('input[name="u_name"]'),
msg_email=msg_form.find('input[name="u_email"]'),
msg_phone=msg_form.find('input[name="u_number"]'),
msg_txt=msg_form.find('textarea[name="u_msg"]'),
user_id=msg_form.attr('data-uid'),
error=0;
var get_terr_val=jobsearch_accept_terms_cond_pop(msg_form);
if(get_terr_val!='yes'){
return false;
}
if(msg_form.find('.jobsearch-open-signin-tab').length > 0){
msg_form.find('.jobsearch-open-signin-tab').trigger('click');
return false;
}
var email_pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
if(msg_name.val()==''){
error=1;
msg_name.css({"border": "1px solid #ff0000"});
}else{
msg_name.css({"border": "1px solid #efefef"});
}
if(msg_email.val()==''){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
if(!email_pattern.test(msg_email.val())){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
msg_email.css({"border": "1px solid #efefef"});
}}
if(msg_txt.val()==''){
error=1;
msg_txt.css({"border": "1px solid #ff0000"});
}else{
msg_txt.css({"border": "1px solid #efefef"});
}
if(error==0){
msg_con.html('<em class="fa fa-refresh fa-spin"></em>');
var request=$.ajax({
url: ajax_url,
method: "POST",
data: {
u_name: msg_name.val(),
u_email: msg_email.val(),
u_phone: msg_phone.val(),
u_msg: msg_txt.val(),
u_employer_id: user_id,
action: 'jobsearch_employer_contact_form_submit',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'){
msg_name.val('');
msg_email.val('');
msg_phone.val('');
msg_txt.val('');
msg_con.html(response.msg);
}else{
msg_con.html(jobsearch_plugin_vars.error_msg);
}});
request.fail(function (jqXHR, textStatus){
msg_con.html(jobsearch_plugin_vars.error_msg);
});
}
return false;
});
jQuery(document).on('click', '.send-job-email-btn', function (){
jQuery('form#jobsearch_send_to_email_form').submit();
});
jQuery('form#jobsearch_send_to_email_form').on('submit', function (e){
e.preventDefault();
var _form=jQuery(this);
var submit_btn=_form.find('.send-job-email-btn');
var msg_con=_form.find('.send-email-msg-box');
var loader_con=_form.find('.send-email-loader-box');
var uemail=_form.find('input[name="send_email_to"]');
var usubject=_form.find('input[name="send_email_subject"]');
var msg=_form.find('textarea[name="send_email_content"]');
var form_data=_form.serialize();
var get_terr_val=jobsearch_accept_terms_cond_pop(_form);
if(get_terr_val!='yes'){
return false;
}
var email_pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
var e_error=0;
if(msg.val()==''){
msg.css({"border": "1px solid #ff0000"});
e_error=1;
}
if(uemail.val()==''||!email_pattern.test(uemail.val())){
uemail.css({"border": "1px solid #ff0000"});
e_error=1;
}
if(usubject.val()==''){
usubject.css({"border": "1px solid #ff0000"});
e_error=1;
}
if(e_error==1){
return false;
}
if(!submit_btn.hasClass('jobsearch-loading')){
msg.css({"border": "1px solid #eceeef"});
uemail.css({"border": "1px solid #eceeef"});
usubject.css({"border": "1px solid #eceeef"});
submit_btn.addClass('jobsearch-loading');
msg_con.hide();
loader_con.show();
loader_con.html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: form_data,
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.msg&&response.msg!=''){
msg_con.html(response.msg);
msg_con.slideDown();
}
if('undefined'!==typeof response.error&&response.error=='1'){
msg_con.removeClass('alert-success').addClass('alert-danger');
}else{
msg_con.removeClass('alert-danger').addClass('alert-success');
}
submit_btn.removeClass('jobsearch-loading');
loader_con.hide();
loader_con.html('');
});
request.fail(function (jqXHR, textStatus){
submit_btn.removeClass('jobsearch-loading');
loader_con.hide();
loader_con.html('');
});
}
return false;
});
function jobsearchReplaceAll(str, find, replace){
return str.replace(new RegExp(find, 'g'), replace);
}
jQuery(document).on('click', '.jobsearch-applyjob-fb-btn', function (){
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var this_loader=_this.find('i');
var this_msg_con=_this.parents('ul').next('.apply-msg');
this_loader.attr('class', 'fa fa-refresh fa-spin');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
job_id: this_id,
action: 'jobsearch_applying_job_with_facebook',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'&&response.msg!=''){
this_loader.attr('class', 'jobsearch-icon jobsearch-facebook-logo-1');
this_msg_con.html(response.msg);
this_msg_con.show();
return false;
}
if(typeof response.redirect_url!=='undefined'&&response.redirect_url!=''){
var red_url=jobsearchReplaceAll(response.redirect_url, '#038;', '');
window.location.href=red_url;
}else{
this_loader.attr('class', 'jobsearch-icon jobsearch-facebook-logo-1');
}});
request.fail(function (jqXHR, textStatus){
this_loader.attr('class', 'jobsearch-icon jobsearch-facebook-logo-1');
});
});
jQuery(document).on('click', '.jobsearch-applyjob-linkedin-btn', function (){
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var this_loader=_this.find('i');
var this_msg_con=_this.parents('ul').next('.apply-msg');
this_loader.attr('class', 'fa fa-refresh fa-spin');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
job_id: this_id,
action: 'jobsearch_applying_job_with_linkedin',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'&&response.msg!=''){
this_loader.attr('class', 'jobsearch-icon jobsearch-linkedin-logo');
this_msg_con.html(response.msg);
this_msg_con.show();
return false;
}
if(typeof response.redirect_url!=='undefined'&&response.redirect_url!=''){
var red_url=jobsearchReplaceAll(response.redirect_url, '#038;', '');
window.location.href=red_url;
}else{
this_loader.attr('class', 'jobsearch-icon jobsearch-linkedin-logo');
}});
request.fail(function (jqXHR, textStatus){
this_loader.attr('class', 'jobsearch-icon jobsearch-linkedin-logo');
});
});
jQuery(document).on('click', '.jobsearch-applyjob-google-btn', function (){
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var this_loader=_this.find('i');
var this_msg_con=_this.parents('ul').next('.apply-msg');
this_loader.attr('class', 'fa fa-refresh fa-spin');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
job_id: this_id,
action: 'jobsearch_applying_job_with_google',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'&&response.msg!=''){
this_loader.attr('class', 'fa fa-google-plus');
this_msg_con.html(response.msg);
this_msg_con.show();
return false;
}
if(typeof response.redirect_url!=='undefined'&&response.redirect_url!=''){
var red_url=jobsearchReplaceAll(response.redirect_url, '#038;', '');
window.location.href=red_url;
}else{
this_loader.attr('class', 'fa fa-google-plus');
}});
request.fail(function (jqXHR, textStatus){
this_loader.attr('class', 'fa fa-google-plus');
});
});
jQuery(document).on('click', '.employer-access-btn', function (){
jQuery('.employer-access-msg').slideDown();
});
jQuery(document).on('click', '.jobsearch-open-dloadres-popup', function (){
jobsearch_modal_popup_open('JobSearchDLoadResModal');
});
jQuery(window).on('load', function (){
if(jQuery('.grid').length > 0&&jQuery('.grid-item').length > 0){
jQuery('.grid').isotope({
itemSelector: '.grid-item',
percentPosition: true,
masonry: {
fitWidth: false
}});
}});
jQuery('.location_location1').on('change', function (e){
e.preventDefault();
var this_id=jQuery(this).data('randid'),
nextfieldelement=jQuery(this).data('nextfieldelement'),
nextfieldval=jQuery(this).data('nextfieldval'),
ajax_url=jobsearch_plugin_vars.ajax_url,
location_location1=jQuery('#location_location1_' + this_id),
location_location2=jQuery('#location_location2_' + this_id);
jQuery('.location_location2_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
location_location: location_location1.val(),
nextfieldelement: nextfieldelement,
nextfieldval: nextfieldval,
action: 'jobsearch_location_load_location2_data',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
location_location2.html(response.html);
jQuery('.location_location2_' + this_id).html('');
if(nextfieldval!=''){
jQuery('.location_location2').trigger('change');
}}
});
request.fail(function (jqXHR, textStatus){
});
return false;
});
jQuery('.location_location2').on('change', function (e){
e.preventDefault();
var this_id=jQuery(this).data('randid'),
nextfieldelement=jQuery(this).data('nextfieldelement'),
nextfieldval=jQuery(this).data('nextfieldval'),
ajax_url=jobsearch_plugin_vars.ajax_url,
location_location2=jQuery('#location_location2_' + this_id),
location_location3=jQuery('#location_location3_' + this_id);
jQuery('.location_location3_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
location_location: location_location2.val(),
nextfieldelement: nextfieldelement,
nextfieldval: nextfieldval,
action: 'jobsearch_location_load_location2_data',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
location_location3.html(response.html);
jQuery('.location_location3_' + this_id).html('');
if(nextfieldval!=''){
jQuery('.location_location3').trigger('change');
}}
});
request.fail(function (jqXHR, textStatus){
});
return false;
});
jQuery('.location_location3').on('change', function (e){
e.preventDefault();
var this_id=jQuery(this).data('randid'),
nextfieldelement=jQuery(this).data('nextfieldelement'),
nextfieldval=jQuery(this).data('nextfieldval'),
ajax_url=jobsearch_plugin_vars.ajax_url,
location_location3=jQuery('#location_location3_' + this_id),
location_location4=jQuery('#location_location4_' + this_id);
jQuery('.location_location4_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
location_location: location_location3.val(),
nextfieldelement: nextfieldelement,
nextfieldval: nextfieldval,
action: 'jobsearch_location_load_location2_data',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
location_location4.html(response.html);
jQuery('.location_location4_' + this_id).html('');
}});
request.fail(function (jqXHR, textStatus){
});
return false;
});
var $=jQuery;
$(document).ready(function (){
'use strict';
jQuery('.user_field').on('click', function (e){
e.preventDefault();
var this_id=jQuery(this).data('randid'),
loaded=jQuery(this).data('loaded'),
role=jQuery(this).data('role'),
user_field=jQuery('#user_field_' + this_id),
ajax_url=jobsearch_plugin_vars.ajax_url,
force_std=jQuery(this).data('forcestd');
if(loaded!=true){
jQuery('.user_loader_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
force_std: force_std,
role: role,
action: 'jobsearch_load_all_users_data',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
user_field.html(response.html);
jQuery('.user_loader_' + this_id).html('');
user_field.data('loaded', true);
}});
request.fail(function (jqXHR, textStatus){
});
}
return false;
});
jQuery('.custom_post_field').on('click', function (e){
e.preventDefault();
var this_id=jQuery(this).data('randid'),
loaded=jQuery(this).data('loaded'),
posttype=jQuery(this).data('posttype'),
custom_field=jQuery('#custom_post_field_' + this_id),
ajax_url=jobsearch_plugin_vars.ajax_url,
force_std=jQuery(this).data('forcestd');
if(loaded!=true){
jQuery('.custom_post_loader_' + this_id).html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
force_std: force_std,
posttype: posttype,
action: 'jobsearch_load_all_custom_post_data',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html){
custom_field.html(response.html);
jQuery('.custom_post_loader_' + this_id).html('');
custom_field.data('loaded', true);
}});
request.fail(function (jqXHR, textStatus){
});
}
return false;
});
});
function jobsearch_multicap_all_functions(){
var all_elements=jQuery(".g-recaptcha");
for (var i=0; i < all_elements.length; i++){
var id=all_elements[i].getAttribute('id');
var site_key=all_elements[i].getAttribute('data-sitekey');
if(null!=id){
grecaptcha.render(id, {
'sitekey': site_key
});
}}
}
function jobsearch_captcha_reload(admin_url, captcha_id){
"use strict";
var dataString='&action=jobsearch_captcha_reload&captcha_id=' + captcha_id;
jQuery.ajax({
type: "POST",
url: admin_url,
data: dataString,
dataType: 'html',
success: function (data){
jQuery("#" + captcha_id + "_div").html(data);
}});
}
jQuery(window).load(function (){
var $iframe=$('iframe');
$iframe.ready(function (){
if($iframe.length > 0){
$iframe.attr('id', 'gre-iframe');
}
$iframe.find("body").append('<div class="sdsdsdssdsdsdssd">fdg fgd gg dfg dfg dfg df gdfg</div>');
});
});
window.djangoReCaptcha={
list: [],
setup: function (){
$('.g-recaptcha').each(function (){
var $container=$(this);
var config=$container.data();
alert($container.attr('class'));
djangoReCaptcha.init($container, config);
});
$(window).on('resize orientationchange', function (){
$(djangoReCaptcha.list).each(function (idx, el){
djangoReCaptcha.resize.apply(null, el);
});
});
},
init: function ($container, config){
grecaptcha.render($container.get(0), config);
alert(3434);
var captchaSize, scaleFactor;
var $iframe=$container.find('iframe').eq(0);
$iframe.on('load', function (){
$container.addClass('g-recaptcha-initted');
captchaSize=captchaSize||{w: $iframe.width() - 2, h: $iframe.height()};
djangoReCaptcha.resize($container, captchaSize);
djangoReCaptcha.list.push([$container, captchaSize]);
});
},
};
window.djangoReCaptchaSetup=window.djangoReCaptcha.setup;
jQuery(document).on('click', '.load-more-team', function (){
var _this=jQuery(this),
total_pages=_this.attr('data-pages'),
cur_page=_this.attr('data-page'),
this_rand=_this.attr('data-rand'),
employer_id=_this.attr('data-id'),
ajax_url=jobsearch_plugin_vars.ajax_url;
var members_holder=jQuery('#members-holder-' + this_rand);
var this_html=_this.html();
if(!_this.hasClass('jobsearch-loading')){
_this.addClass('jobsearch-loading');
_this.html('<i class="fa fa-refresh fa-spin"></i> ' + jobsearch_plugin_vars.loading);
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
total_pages: total_pages,
cur_page: cur_page,
employer_id: employer_id,
action: 'jobsearch_load_employer_team_next_page',
},
dataType: "json"
});
request.done(function (response){
if('undefined'!==typeof response.html&&response.html!=''){
members_holder.append(response.html);
members_holder.find('.new-entries').slideDown().removeClass('new-entries');
var current_page=parseInt(cur_page) + 1;
_this.attr('data-page', current_page);
if(current_page==total_pages){
_this.hide();
}}
_this.html(this_html);
_this.removeClass('jobsearch-loading');
});
request.fail(function (jqXHR, textStatus){
_this.html(this_html);
_this.removeClass('jobsearch-loading');
});
}
return false;
});
jQuery(document).on('click', ".jobsearch-click-btn", function (){
jQuery(this).parents('.jobsearch-search-filter-toggle').find('.jobsearch-checkbox-toggle').slideToggle("slow");
jQuery(this).parents('.jobsearch-search-filter-toggle').toggleClass("jobsearch-remove-padding");
return false;
});
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:5,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);
!function(a,b){"function"==typeof define&&define.amd?define("sifter",b):"object"==typeof exports?module.exports=b():a.Sifter=b()}(this,function(){var a=function(a,b){this.items=a,this.settings=b||{diacritics:!0}};a.prototype.tokenize=function(a){if(a=e(String(a||"").toLowerCase()),!a||!a.length)return[];var b,c,d,g,i=[],j=a.split(/ +/);for(b=0,c=j.length;b<c;b++){if(d=f(j[b]),this.settings.diacritics)for(g in h)h.hasOwnProperty(g)&&(d=d.replace(new RegExp(g,"g"),h[g]));i.push({string:j[b],regex:new RegExp(d,"i")})}return i},a.prototype.iterator=function(a,b){var c;c=g(a)?Array.prototype.forEach||function(a){for(var b=0,c=this.length;b<c;b++)a(this[b],b,this)}:function(a){for(var b in this)this.hasOwnProperty(b)&&a(this[b],b,this)},c.apply(a,[b])},a.prototype.getScoreFunction=function(a,b){var c,e,f,g,h;c=this,a=c.prepareSearch(a,b),f=a.tokens,e=a.options.fields,g=f.length,h=a.options.nesting;var i=function(a,b){var c,d;return a?(a=String(a||""),d=a.search(b.regex),d===-1?0:(c=b.string.length/a.length,0===d&&(c+=.5),c)):0},j=function(){var a=e.length;return a?1===a?function(a,b){return i(d(b,e[0],h),a)}:function(b,c){for(var f=0,g=0;f<a;f++)g+=i(d(c,e[f],h),b);return g/a}:function(){return 0}}();return g?1===g?function(a){return j(f[0],a)}:"and"===a.options.conjunction?function(a){for(var b,c=0,d=0;c<g;c++){if(b=j(f[c],a),b<=0)return 0;d+=b}return d/g}:function(a){for(var b=0,c=0;b<g;b++)c+=j(f[b],a);return c/g}:function(){return 0}},a.prototype.getSortFunction=function(a,c){var e,f,g,h,i,j,k,l,m,n,o;if(g=this,a=g.prepareSearch(a,c),o=!a.query&&c.sort_empty||c.sort,m=function(a,b){return"$score"===a?b.score:d(g.items[b.id],a,c.nesting)},i=[],o)for(e=0,f=o.length;e<f;e++)(a.query||"$score"!==o[e].field)&&i.push(o[e]);if(a.query){for(n=!0,e=0,f=i.length;e<f;e++)if("$score"===i[e].field){n=!1;break}n&&i.unshift({field:"$score",direction:"desc"})}else for(e=0,f=i.length;e<f;e++)if("$score"===i[e].field){i.splice(e,1);break}for(l=[],e=0,f=i.length;e<f;e++)l.push("desc"===i[e].direction?-1:1);return j=i.length,j?1===j?(h=i[0].field,k=l[0],function(a,c){return k*b(m(h,a),m(h,c))}):function(a,c){var d,e,f;for(d=0;d<j;d++)if(f=i[d].field,e=l[d]*b(m(f,a),m(f,c)))return e;return 0}:null},a.prototype.prepareSearch=function(a,b){if("object"==typeof a)return a;b=c({},b);var d=b.fields,e=b.sort,f=b.sort_empty;return d&&!g(d)&&(b.fields=[d]),e&&!g(e)&&(b.sort=[e]),f&&!g(f)&&(b.sort_empty=[f]),{options:b,query:String(a||"").toLowerCase(),tokens:this.tokenize(a),total:0,items:[]}},a.prototype.search=function(a,b){var c,d,e,f,g=this;return d=this.prepareSearch(a,b),b=d.options,a=d.query,f=b.score||g.getScoreFunction(d),a.length?g.iterator(g.items,function(a,e){c=f(a),(b.filter===!1||c>0)&&d.items.push({score:c,id:e})}):g.iterator(g.items,function(a,b){d.items.push({score:1,id:b})}),e=g.getSortFunction(d,b),e&&d.items.sort(e),d.total=d.items.length,"number"==typeof b.limit&&(d.items=d.items.slice(0,b.limit)),d};var b=function(a,b){return"number"==typeof a&&"number"==typeof b?a>b?1:a<b?-1:0:(a=i(String(a||"")),b=i(String(b||"")),a>b?1:b>a?-1:0)},c=function(a,b){var c,d,e,f;for(c=1,d=arguments.length;c<d;c++)if(f=arguments[c])for(e in f)f.hasOwnProperty(e)&&(a[e]=f[e]);return a},d=function(a,b,c){if(a&&b){if(!c)return a[b];for(var d=b.split(".");d.length&&(a=a[d.shift()]););return a}},e=function(a){return(a+"").replace(/^\s+|\s+$|/g,"")},f=function(a){return(a+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},g=Array.isArray||"undefined"!=typeof $&&$.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},h={a:"[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",b:"[b␢βΒB฿𐌁ᛒ]",c:"[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",d:"[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",e:"[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",f:"[fƑƒḞḟ]",g:"[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",h:"[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",i:"[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",j:"[jȷĴĵɈɉʝɟʲ]",k:"[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",l:"[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",n:"[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",o:"[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",p:"[pṔṕṖṗⱣᵽƤƥᵱ]",q:"[qꝖꝗʠɊɋꝘꝙq̃]",r:"[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",s:"[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",t:"[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",u:"[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",v:"[vṼṽṾṿƲʋꝞꝟⱱʋ]",w:"[wẂẃẀẁŴŵẄẅẆẇẈẉ]",x:"[xẌẍẊẋχ]",y:"[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",z:"[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"},i=function(){var a,b,c,d,e="",f={};for(c in h)if(h.hasOwnProperty(c))for(d=h[c].substring(2,h[c].length-1),e+=d,a=0,b=d.length;a<b;a++)f[d.charAt(a)]=c;var g=new RegExp("["+e+"]","g");return function(a){return a.replace(g,function(a){return f[a]}).toLowerCase()}}();return a}),function(a,b){"function"==typeof define&&define.amd?define("microplugin",b):"object"==typeof exports?module.exports=b():a.MicroPlugin=b()}(this,function(){var a={};a.mixin=function(a){a.plugins={},a.prototype.initializePlugins=function(a){var c,d,e,f=this,g=[];if(f.plugins={names:[],settings:{},requested:{},loaded:{}},b.isArray(a))for(c=0,d=a.length;c<d;c++)"string"==typeof a[c]?g.push(a[c]):(f.plugins.settings[a[c].name]=a[c].options,g.push(a[c].name));else if(a)for(e in a)a.hasOwnProperty(e)&&(f.plugins.settings[e]=a[e],g.push(e));for(;g.length;)f.require(g.shift())},a.prototype.loadPlugin=function(b){var c=this,d=c.plugins,e=a.plugins[b];if(!a.plugins.hasOwnProperty(b))throw new Error('Unable to find "'+b+'" plugin');d.requested[b]=!0,d.loaded[b]=e.fn.apply(c,[c.plugins.settings[b]||{}]),d.names.push(b)},a.prototype.require=function(a){var b=this,c=b.plugins;if(!b.plugins.loaded.hasOwnProperty(a)){if(c.requested[a])throw new Error('Plugin has circular dependency ("'+a+'")');b.loadPlugin(a)}return c.loaded[a]},a.define=function(b,c){a.plugins[b]={name:b,fn:c}}};var b={isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}};return a}),function(a,b){"function"==typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],b):"object"==typeof exports?module.exports=b(require("jquery"),require("sifter"),require("microplugin")):a.Selectize=b(a.jQuery,a.Sifter,a.MicroPlugin)}(this,function(a,b,c){"use strict";var d=function(a,b){if("string"!=typeof b||b.length){var c="string"==typeof b?new RegExp(b,"i"):b,d=function(a){var b=0;if(3===a.nodeType){var e=a.data.search(c);if(e>=0&&a.data.length>0){var f=a.data.match(c),g=document.createElement("span");g.className="highlight";var h=a.splitText(e),i=(h.splitText(f[0].length),h.cloneNode(!0));g.appendChild(i),h.parentNode.replaceChild(g,h),b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName))for(var j=0;j<a.childNodes.length;++j)j+=d(a.childNodes[j]);return b};return a.each(function(){d(this)})}};a.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;var a=this.parentNode;a.replaceChild(this.firstChild,this),a.normalize()}).end()};var e=function(){};e.prototype={on:function(a,b){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(b)},off:function(a,b){var c=arguments.length;return 0===c?delete this._events:1===c?delete this._events[a]:(this._events=this._events||{},void(a in this._events!=!1&&this._events[a].splice(this._events[a].indexOf(b),1)))},trigger:function(a){if(this._events=this._events||{},a in this._events!=!1)for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}},e.mixin=function(a){for(var b=["on","off","trigger"],c=0;c<b.length;c++)a.prototype[b[c]]=e.prototype[b[c]]};var f=/Mac/.test(navigator.userAgent),g=65,h=13,i=27,j=37,k=38,l=80,m=39,n=40,o=78,p=8,q=46,r=16,s=f?91:17,t=f?18:17,u=9,v=1,w=2,x=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("input").validity,y=function(a){return"undefined"!=typeof a},z=function(a){return"undefined"==typeof a||null===a?null:"boolean"==typeof a?a?"1":"0":a+""},A=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},B={};B.before=function(a,b,c){var d=a[b];a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)}},B.after=function(a,b,c){var d=a[b];a[b]=function(){var b=d.apply(a,arguments);return c.apply(a,arguments),b}};var C=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},D=function(a,b){var c;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}},E=function(a,b,c){var d,e=a.trigger,f={};a.trigger=function(){var c=arguments[0];return b.indexOf(c)===-1?e.apply(a,arguments):void(f[c]=arguments)},c.apply(a,[]),a.trigger=e;for(d in f)f.hasOwnProperty(d)&&e.apply(a,f[d])},F=function(a,b,c,d){a.on(b,c,function(b){for(var c=b.target;c&&c.parentNode!==a[0];)c=c.parentNode;return b.currentTarget=c,d.apply(this,[b])})},G=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var c=document.selection.createRange(),d=document.selection.createRange().text.length;c.moveStart("character",-a.value.length),b.start=c.text.length-d,b.length=d}return b},H=function(a,b,c){var d,e,f={};if(c)for(d=0,e=c.length;d<e;d++)f[c[d]]=a.css(c[d]);else f=a.css();b.css(f)},I=function(b,c){if(!b)return 0;var d=a("<test>").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).text(b).appendTo("body");H(c,d,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]);var e=d.width();return d.remove(),e},J=function(a){var b=null,c=function(c,d){var e,f,g,h,i,j,k,l;c=c||window.event||{},d=d||{},c.metaKey||c.altKey||(d.force||a.data("grow")!==!1)&&(e=a.val(),c.type&&"keydown"===c.type.toLowerCase()&&(f=c.keyCode,g=f>=97&&f<=122||f>=65&&f<=90||f>=48&&f<=57||32===f,f===q||f===p?(l=G(a[0]),l.length?e=e.substring(0,l.start)+e.substring(l.start+l.length):f===p&&l.start?e=e.substring(0,l.start-1)+e.substring(l.start+1):f===q&&"undefined"!=typeof l.start&&(e=e.substring(0,l.start)+e.substring(l.start+1))):g&&(j=c.shiftKey,k=String.fromCharCode(c.keyCode),k=j?k.toUpperCase():k.toLowerCase(),e+=k)),h=a.attr("placeholder"),!e&&h&&(e=h),i=I(e,a)+4,i!==b&&(b=i,a.width(i),a.triggerHandler("resize")))};a.on("keydown keyup update blur",c),c()},K=function(a){var b=document.createElement("div");return b.appendChild(a.cloneNode(!0)),b.innerHTML},L=function(a,b){b||(b={});var c="Selectize";console.error(c+": "+a),b.explanation&&(console.group&&console.group(),console.error(b.explanation),console.group&&console.groupEnd())},M=function(c,d){var e,f,g,h,i=this;h=c[0],h.selectize=i;var j=window.getComputedStyle&&window.getComputedStyle(h,null);if(g=j?j.getPropertyValue("direction"):h.currentStyle&&h.currentStyle.direction,g=g||c.parents("[dir]:first").attr("dir")||"",a.extend(i,{order:0,settings:d,$input:c,tabIndex:c.attr("tabindex")||"",tagType:"select"===h.tagName.toLowerCase()?v:w,rtl:/rtl/i.test(g),eventNS:".selectize"+ ++M.count,highlightedValue:null,isOpen:!1,isDisabled:!1,isRequired:c.is("[required]"),isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===d.loadThrottle?i.onSearchChange:D(i.onSearchChange,d.loadThrottle)}),i.sifter=new b(this.options,{diacritics:d.diacritics}),i.settings.options){for(e=0,f=i.settings.options.length;e<f;e++)i.registerOption(i.settings.options[e]);delete i.settings.options}if(i.settings.optgroups){for(e=0,f=i.settings.optgroups.length;e<f;e++)i.registerOptionGroup(i.settings.optgroups[e]);delete i.settings.optgroups}i.settings.mode=i.settings.mode||(1===i.settings.maxItems?"single":"multi"),"boolean"!=typeof i.settings.hideSelected&&(i.settings.hideSelected="multi"===i.settings.mode),i.initializePlugins(i.settings.plugins),i.setupCallbacks(),i.setupTemplates(),i.setup()};return e.mixin(M),"undefined"!=typeof c?c.mixin(M):L("Dependency MicroPlugin is missing",{explanation:'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'}),a.extend(M.prototype,{setup:function(){var b,c,d,e,g,h,i,j,k,l,m=this,n=m.settings,o=m.eventNS,p=a(window),q=a(document),u=m.$input;if(i=m.settings.mode,j=u.attr("class")||"",b=a("<div>").addClass(n.wrapperClass).addClass(j).addClass(i),c=a("<div>").addClass(n.inputClass).addClass("items").appendTo(b),d=a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex",u.is(":disabled")?"-1":m.tabIndex),h=a(n.dropdownParent||b),e=a("<div>").addClass(n.dropdownClass).addClass(i).hide().appendTo(h),g=a("<div>").addClass(n.dropdownContentClass).appendTo(e),(l=u.attr("id"))&&(d.attr("id",l+"-selectized"),a("label[for='"+l+"']").attr("for",l+"-selectized")),m.settings.copyClassesToDropdown&&e.addClass(j),b.css({width:u[0].style.width}),m.plugins.names.length&&(k="plugin-"+m.plugins.names.join(" plugin-"),b.addClass(k),e.addClass(k)),(null===n.maxItems||n.maxItems>1)&&m.tagType===v&&u.attr("multiple","multiple"),m.settings.placeholder&&d.attr("placeholder",n.placeholder),!m.settings.splitOn&&m.settings.delimiter){var w=m.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");m.settings.splitOn=new RegExp("\\s*"+w+"+\\s*")}u.attr("autocorrect")&&d.attr("autocorrect",u.attr("autocorrect")),u.attr("autocapitalize")&&d.attr("autocapitalize",u.attr("autocapitalize")),m.$wrapper=b,m.$control=c,m.$control_input=d,m.$dropdown=e,m.$dropdown_content=g,e.on("mouseenter","[data-selectable]",function(){return m.onOptionHover.apply(m,arguments)}),e.on("mousedown click","[data-selectable]",function(){return m.onOptionSelect.apply(m,arguments)}),F(c,"mousedown","*:not(input)",function(){return m.onItemSelect.apply(m,arguments)}),J(d),c.on({mousedown:function(){return m.onMouseDown.apply(m,arguments)},click:function(){return m.onClick.apply(m,arguments)}}),d.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return m.onKeyDown.apply(m,arguments)},keyup:function(){return m.onKeyUp.apply(m,arguments)},keypress:function(){return m.onKeyPress.apply(m,arguments)},resize:function(){m.positionDropdown.apply(m,[])},blur:function(){return m.onBlur.apply(m,arguments)},focus:function(){return m.ignoreBlur=!1,m.onFocus.apply(m,arguments)},paste:function(){return m.onPaste.apply(m,arguments)}}),q.on("keydown"+o,function(a){m.isCmdDown=a[f?"metaKey":"ctrlKey"],m.isCtrlDown=a[f?"altKey":"ctrlKey"],m.isShiftDown=a.shiftKey}),q.on("keyup"+o,function(a){a.keyCode===t&&(m.isCtrlDown=!1),a.keyCode===r&&(m.isShiftDown=!1),a.keyCode===s&&(m.isCmdDown=!1)}),q.on("mousedown"+o,function(a){if(m.isFocused){if(a.target===m.$dropdown[0]||a.target.parentNode===m.$dropdown[0])return!1;m.$control.has(a.target).length||a.target===m.$control[0]||m.blur(a.target)}}),p.on(["scroll"+o,"resize"+o].join(" "),function(){m.isOpen&&m.positionDropdown.apply(m,arguments)}),p.on("mousemove"+o,function(){m.ignoreHover=!1}),this.revertSettings={$children:u.children().detach(),tabindex:u.attr("tabindex")},u.attr("tabindex",-1).hide().after(m.$wrapper),a.isArray(n.items)&&(m.setValue(n.items),delete n.items),x&&u.on("invalid"+o,function(a){a.preventDefault(),m.isInvalid=!0,m.refreshState()}),m.updateOriginalInput(),m.refreshItems(),m.refreshState(),m.updatePlaceholder(),m.isSetup=!0,u.is(":disabled")&&m.disable(),m.on("change",this.onChange),u.data("selectize",m),u.addClass("selectized"),m.trigger("initialize"),n.preload===!0&&m.onSearchChange("")},setupTemplates:function(){var b=this,c=b.settings.labelField,d=b.settings.optgroupLabelField,e={optgroup:function(a){return'<div class="optgroup">'+a.html+"</div>"},optgroup_header:function(a,b){return'<div class="optgroup-header">'+b(a[d])+"</div>"},option:function(a,b){return'<div class="option">'+b(a[c])+"</div>"},item:function(a,b){return'<div class="item">'+b(a[c])+"</div>"},option_create:function(a,b){return'<div class="create">Add <strong>'+b(a.input)+"</strong>&hellip;</div>"}};b.settings.render=a.extend({},e,b.settings.render)},setupCallbacks:function(){var a,b,c={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(a in c)c.hasOwnProperty(a)&&(b=this.settings[c[a]],b&&this.on(a,b))},onClick:function(a){var b=this;b.isFocused||(b.focus(),a.preventDefault())},onMouseDown:function(b){var c=this,d=b.isDefaultPrevented();a(b.target);if(c.isFocused){if(b.target!==c.$control_input[0])return"single"===c.settings.mode?c.isOpen?c.close():c.open():d||c.setActiveItem(null),!1}else d||window.setTimeout(function(){c.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(b){var c=this;return c.isFull()||c.isInputHidden||c.isLocked?void b.preventDefault():void(c.settings.splitOn&&setTimeout(function(){var b=c.$control_input.val();if(b.match(c.settings.splitOn))for(var d=a.trim(b).split(c.settings.splitOn),e=0,f=d.length;e<f;e++)c.createItem(d[e])},0))},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||a.which);return this.settings.create&&"multi"===this.settings.mode&&b===this.settings.delimiter?(this.createItem(),a.preventDefault(),!1):void 0},onKeyDown:function(a){var b=(a.target===this.$control_input[0],this);if(b.isLocked)return void(a.keyCode!==u&&a.preventDefault());switch(a.keyCode){case g:if(b.isCmdDown)return void b.selectAll();break;case i:return void(b.isOpen&&(a.preventDefault(),a.stopPropagation(),b.close()));case o:if(!a.ctrlKey||a.altKey)break;case n:if(!b.isOpen&&b.hasOptions)b.open();else if(b.$activeOption){b.ignoreHover=!0;var c=b.getAdjacentOption(b.$activeOption,1);c.length&&b.setActiveOption(c,!0,!0)}return void a.preventDefault();case l:if(!a.ctrlKey||a.altKey)break;case k:if(b.$activeOption){b.ignoreHover=!0;var d=b.getAdjacentOption(b.$activeOption,-1);d.length&&b.setActiveOption(d,!0,!0)}return void a.preventDefault();case h:return void(b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),a.preventDefault()));case j:return void b.advanceSelection(-1,a);case m:return void b.advanceSelection(1,a);case u:return b.settings.selectOnTab&&b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),b.isFull()||a.preventDefault()),void(b.settings.create&&b.createItem()&&a.preventDefault());case p:case q:return void b.deleteSelection(a)}return!b.isFull()&&!b.isInputHidden||(f?a.metaKey:a.ctrlKey)?void 0:void a.preventDefault()},onKeyUp:function(a){var b=this;if(b.isLocked)return a&&a.preventDefault();var c=b.$control_input.val()||"";b.lastValue!==c&&(b.lastValue=c,b.onSearchChange(c),b.refreshOptions(),b.trigger("type",c))},onSearchChange:function(a){var b=this,c=b.settings.load;c&&(b.loadedSearches.hasOwnProperty(a)||(b.loadedSearches[a]=!0,b.load(function(d){c.apply(b,[a,d])})))},onFocus:function(a){var b=this,c=b.isFocused;return b.isDisabled?(b.blur(),a&&a.preventDefault(),!1):void(b.ignoreFocus||(b.isFocused=!0,"focus"===b.settings.preload&&b.onSearchChange(""),c||b.trigger("focus"),b.$activeItems.length||(b.showInput(),b.setActiveItem(null),b.refreshOptions(!!b.settings.openOnFocus)),b.refreshState()))},onBlur:function(a,b){var c=this;if(c.isFocused&&(c.isFocused=!1,!c.ignoreFocus)){if(!c.ignoreBlur&&document.activeElement===c.$dropdown_content[0])return c.ignoreBlur=!0,void c.onFocus(a);var d=function(){c.close(),c.setTextboxValue(""),c.setActiveItem(null),c.setActiveOption(null),c.setCaret(c.items.length),c.refreshState(),b&&b.focus&&b.focus(),c.ignoreFocus=!1,c.trigger("blur")};c.ignoreFocus=!0,c.settings.create&&c.settings.createOnBlur?c.createItem(null,!1,d):d()}},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(b){var c,d,e=this;b.preventDefault&&(b.preventDefault(),b.stopPropagation()),d=a(b.currentTarget),d.hasClass("create")?e.createItem(null,function(){e.settings.closeAfterSelect&&e.close()}):(c=d.attr("data-value"),"undefined"!=typeof c&&(e.lastQuery=null,e.setTextboxValue(""),e.addItem(c),e.settings.closeAfterSelect?e.close():!e.settings.hideSelected&&b.type&&/mouse/.test(b.type)&&e.setActiveOption(e.getOption(c))))},onItemSelect:function(a){var b=this;b.isLocked||"multi"===b.settings.mode&&(a.preventDefault(),b.setActiveItem(a.currentTarget,a))},load:function(a){var b=this,c=b.$wrapper.addClass(b.settings.loadingClass);b.loading++,a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0),a&&a.length&&(b.addOption(a),b.refreshOptions(b.isFocused&&!b.isInputHidden)),b.loading||c.removeClass(b.settings.loadingClass),b.trigger("load",a)}])},setTextboxValue:function(a){var b=this.$control_input,c=b.val()!==a;c&&(b.val(a).triggerHandler("update"),this.lastValue=a)},getValue:function(){return this.tagType===v&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a,b){var c=b?[]:["change"];E(this,c,function(){this.clear(b),this.addItems(a,b)})},setActiveItem:function(b,c){var d,e,f,g,h,i,j,k,l=this;if("single"!==l.settings.mode){if(b=a(b),!b.length)return a(l.$activeItems).removeClass("active"),l.$activeItems=[],void(l.isFocused&&l.showInput());if(d=c&&c.type.toLowerCase(),"mousedown"===d&&l.isShiftDown&&l.$activeItems.length){for(k=l.$control.children(".active:last"),g=Array.prototype.indexOf.apply(l.$control[0].childNodes,[k[0]]),h=Array.prototype.indexOf.apply(l.$control[0].childNodes,[b[0]]),g>h&&(j=g,g=h,h=j),e=g;e<=h;e++)i=l.$control[0].childNodes[e],l.$activeItems.indexOf(i)===-1&&(a(i).addClass("active"),l.$activeItems.push(i));c.preventDefault()}else"mousedown"===d&&l.isCtrlDown||"keydown"===d&&this.isShiftDown?b.hasClass("active")?(f=l.$activeItems.indexOf(b[0]),l.$activeItems.splice(f,1),b.removeClass("active")):l.$activeItems.push(b.addClass("active")[0]):(a(l.$activeItems).removeClass("active"),l.$activeItems=[b.addClass("active")[0]]);l.hideInput(),this.isFocused||l.focus()}},setActiveOption:function(b,c,d){var e,f,g,h,i,j=this;j.$activeOption&&j.$activeOption.removeClass("active"),j.$activeOption=null,b=a(b),b.length&&(j.$activeOption=b.addClass("active"),!c&&y(c)||(e=j.$dropdown_content.height(),f=j.$activeOption.outerHeight(!0),c=j.$dropdown_content.scrollTop()||0,g=j.$activeOption.offset().top-j.$dropdown_content.offset().top+c,h=g,i=g-e+f,g+f>e+c?j.$dropdown_content.stop().animate({scrollTop:i},d?j.settings.scrollDuration:0):g<c&&j.$dropdown_content.stop().animate({scrollTop:h},d?j.settings.scrollDuration:0)))},selectAll:function(){var a=this;"single"!==a.settings.mode&&(a.$activeItems=Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")),a.$activeItems.length&&(a.hideInput(),a.close()),a.focus())},hideInput:function(){var a=this;a.setTextboxValue(""),a.$control_input.css({opacity:0,position:"absolute",left:a.rtl?1e4:-1e4}),a.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0}),this.isInputHidden=!1},focus:function(){var a=this;a.isDisabled||(a.ignoreFocus=!0,a.$control_input[0].focus(),window.setTimeout(function(){a.ignoreFocus=!1,a.onFocus()},0))},blur:function(a){this.$control_input[0].blur(),this.onBlur(null,a)},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.sortField;return"string"==typeof b&&(b=[{field:b}]),{fields:a.searchField,conjunction:a.searchConjunction,sort:b}},search:function(b){var c,d,e,f=this,g=f.settings,h=this.getSearchOptions();if(g.score&&(e=f.settings.score.apply(this,[b]),"function"!=typeof e))throw new Error('Selectize "score" setting must be a function that returns a function');if(b!==f.lastQuery?(f.lastQuery=b,d=f.sifter.search(b,a.extend(h,{score:e})),f.currentResults=d):d=a.extend(!0,{},f.currentResults),g.hideSelected)for(c=d.items.length-1;c>=0;c--)f.items.indexOf(z(d.items[c].id))!==-1&&d.items.splice(c,1);return d},refreshOptions:function(b){var c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;"undefined"==typeof b&&(b=!0);var t=this,u=a.trim(t.$control_input.val()),v=t.search(u),w=t.$dropdown_content,x=t.$activeOption&&z(t.$activeOption.attr("data-value"));for(g=v.items.length,"number"==typeof t.settings.maxOptions&&(g=Math.min(g,t.settings.maxOptions)),h={},i=[],c=0;c<g;c++)for(j=t.options[v.items[c].id],k=t.render("option",j),l=j[t.settings.optgroupField]||"",m=a.isArray(l)?l:[l],e=0,f=m&&m.length;e<f;e++)l=m[e],t.optgroups.hasOwnProperty(l)||(l=""),h.hasOwnProperty(l)||(h[l]=document.createDocumentFragment(),i.push(l)),h[l].appendChild(k);for(this.settings.lockOptgroupOrder&&i.sort(function(a,b){var c=t.optgroups[a].$order||0,d=t.optgroups[b].$order||0;return c-d}),n=document.createDocumentFragment(),c=0,g=i.length;c<g;c++)l=i[c],t.optgroups.hasOwnProperty(l)&&h[l].childNodes.length?(o=document.createDocumentFragment(),o.appendChild(t.render("optgroup_header",t.optgroups[l])),o.appendChild(h[l]),n.appendChild(t.render("optgroup",a.extend({},t.optgroups[l],{html:K(o),dom:o})))):n.appendChild(h[l]);if(w.html(n),t.settings.highlight&&v.query.length&&v.tokens.length)for(w.removeHighlight(),c=0,g=v.tokens.length;c<g;c++)d(w,v.tokens[c].regex);if(!t.settings.hideSelected)for(c=0,g=t.items.length;c<g;c++)t.getOption(t.items[c]).addClass("selected");p=t.canCreate(u),p&&(w.prepend(t.render("option_create",{input:u})),s=a(w[0].childNodes[0])),t.hasOptions=v.items.length>0||p,t.hasOptions?(v.items.length>0?(r=x&&t.getOption(x),r&&r.length?q=r:"single"===t.settings.mode&&t.items.length&&(q=t.getOption(t.items[0])),q&&q.length||(q=s&&!t.settings.addPrecedence?t.getAdjacentOption(s,1):w.find("[data-selectable]:first"))):q=s,t.setActiveOption(q),b&&!t.isOpen&&t.open()):(t.setActiveOption(null),b&&t.isOpen&&t.close())},addOption:function(b){var c,d,e,f=this;if(a.isArray(b))for(c=0,d=b.length;c<d;c++)f.addOption(b[c]);else(e=f.registerOption(b))&&(f.userOptions[e]=!0,f.lastQuery=null,f.trigger("option_add",e,b))},registerOption:function(a){var b=z(a[this.settings.valueField]);return"undefined"!=typeof b&&null!==b&&!this.options.hasOwnProperty(b)&&(a.$order=a.$order||++this.order,this.options[b]=a,b)},registerOptionGroup:function(a){var b=z(a[this.settings.optgroupValueField]);return!!b&&(a.$order=a.$order||++this.order,this.optgroups[b]=a,b)},addOptionGroup:function(a,b){b[this.settings.optgroupValueField]=a,(a=this.registerOptionGroup(b))&&this.trigger("optgroup_add",a,b)},removeOptionGroup:function(a){this.optgroups.hasOwnProperty(a)&&(delete this.optgroups[a],this.renderCache={},this.trigger("optgroup_remove",a))},clearOptionGroups:function(){this.optgroups={},this.renderCache={},this.trigger("optgroup_clear")},updateOption:function(b,c){var d,e,f,g,h,i,j,k=this;if(b=z(b),f=z(c[k.settings.valueField]),null!==b&&k.options.hasOwnProperty(b)){if("string"!=typeof f)throw new Error("Value must be set in option data");j=k.options[b].$order,f!==b&&(delete k.options[b],g=k.items.indexOf(b),g!==-1&&k.items.splice(g,1,f)),c.$order=c.$order||j,k.options[f]=c,h=k.renderCache.item,i=k.renderCache.option,h&&(delete h[b],delete h[f]),i&&(delete i[b],delete i[f]),k.items.indexOf(f)!==-1&&(d=k.getItem(b),e=a(k.render("item",c)),d.hasClass("active")&&e.addClass("active"),d.replaceWith(e)),k.lastQuery=null,k.isOpen&&k.refreshOptions(!1)}},removeOption:function(a,b){var c=this;a=z(a);var d=c.renderCache.item,e=c.renderCache.option;d&&delete d[a],e&&delete e[a],delete c.userOptions[a],delete c.options[a],c.lastQuery=null,c.trigger("option_remove",a),c.removeItem(a,b)},clearOptions:function(){var a=this;a.loadedSearches={},a.userOptions={},a.renderCache={},a.options=a.sifter.items={},a.lastQuery=null,a.trigger("option_clear"),a.clear()},getOption:function(a){return this.getElementWithValue(a,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(b,c){var d=this.$dropdown.find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},getElementWithValue:function(b,c){if(b=z(b),"undefined"!=typeof b&&null!==b)for(var d=0,e=c.length;d<e;d++)if(c[d].getAttribute("data-value")===b)return a(c[d]);return a()},getItem:function(a){return this.getElementWithValue(a,this.$control.children())},addItems:function(b,c){for(var d=a.isArray(b)?b:[b],e=0,f=d.length;e<f;e++)this.isPending=e<f-1,this.addItem(d[e],c)},addItem:function(b,c){var d=c?[]:["change"];E(this,d,function(){var d,e,f,g,h,i=this,j=i.settings.mode;return b=z(b),i.items.indexOf(b)!==-1?void("single"===j&&i.close()):void(i.options.hasOwnProperty(b)&&("single"===j&&i.clear(c),"multi"===j&&i.isFull()||(d=a(i.render("item",i.options[b])),h=i.isFull(),i.items.splice(i.caretPos,0,b),i.insertAtCaret(d),(!i.isPending||!h&&i.isFull())&&i.refreshState(),i.isSetup&&(f=i.$dropdown_content.find("[data-selectable]"),i.isPending||(e=i.getOption(b),g=i.getAdjacentOption(e,1).attr("data-value"),i.refreshOptions(i.isFocused&&"single"!==j),g&&i.setActiveOption(i.getOption(g))),!f.length||i.isFull()?i.close():i.positionDropdown(),i.updatePlaceholder(),i.trigger("item_add",b,d),i.updateOriginalInput({silent:c})))))})},removeItem:function(b,c){var d,e,f,g=this;d=b instanceof a?b:g.getItem(b),b=z(d.attr("data-value")),e=g.items.indexOf(b),e!==-1&&(d.remove(),d.hasClass("active")&&(f=g.$activeItems.indexOf(d[0]),g.$activeItems.splice(f,1)),g.items.splice(e,1),g.lastQuery=null,!g.settings.persist&&g.userOptions.hasOwnProperty(b)&&g.removeOption(b,c),e<g.caretPos&&g.setCaret(g.caretPos-1),g.refreshState(),g.updatePlaceholder(),g.updateOriginalInput({silent:c}),g.positionDropdown(),g.trigger("item_remove",b,d))},createItem:function(b,c){var d=this,e=d.caretPos;b=b||a.trim(d.$control_input.val()||"");var f=arguments[arguments.length-1];if("function"!=typeof f&&(f=function(){}),"boolean"!=typeof c&&(c=!0),!d.canCreate(b))return f(),!1;d.lock();var g="function"==typeof d.settings.create?this.settings.create:function(a){var b={};return b[d.settings.labelField]=a,b[d.settings.valueField]=a,b},h=C(function(a){if(d.unlock(),!a||"object"!=typeof a)return f();var b=z(a[d.settings.valueField]);return"string"!=typeof b?f():(d.setTextboxValue(""),d.addOption(a),d.setCaret(e),d.addItem(b),d.refreshOptions(c&&"single"!==d.settings.mode),void f(a))}),i=g.apply(this,[b,h]);return"undefined"!=typeof i&&h(i),!0},refreshItems:function(){this.lastQuery=null,this.isSetup&&this.addItem(this.items),this.refreshState(),this.updateOriginalInput()},refreshState:function(){this.refreshValidityState(),this.refreshClasses()},refreshValidityState:function(){if(!this.isRequired)return!1;var a=!this.items.length;this.isInvalid=a,this.$control_input.prop("required",a),this.$input.prop("required",!a)},refreshClasses:function(){var b=this,c=b.isFull(),d=b.isLocked;b.$wrapper.toggleClass("rtl",b.rtl),b.$control.toggleClass("focus",b.isFocused).toggleClass("disabled",b.isDisabled).toggleClass("required",b.isRequired).toggleClass("invalid",b.isInvalid).toggleClass("locked",d).toggleClass("full",c).toggleClass("not-full",!c).toggleClass("input-active",b.isFocused&&!b.isInputHidden).toggleClass("dropdown-active",b.isOpen).toggleClass("has-options",!a.isEmptyObject(b.options)).toggleClass("has-items",b.items.length>0),b.$control_input.data("grow",!c&&!d)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(a){var b,c,d,e,f=this;if(a=a||{},f.tagType===v){for(d=[],b=0,c=f.items.length;b<c;b++)e=f.options[f.items[b]][f.settings.labelField]||"",d.push('<option value="'+A(f.items[b])+'" selected="selected">'+A(e)+"</option>");d.length||this.$input.attr("multiple")||d.push('<option value="" selected="selected"></option>'),
f.$input.html(d.join(""))}else f.$input.val(f.getValue()),f.$input.attr("value",f.$input.val());f.isSetup&&(a.silent||f.trigger("change",f.$input.val()))},updatePlaceholder:function(){if(this.settings.placeholder){var a=this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder),a.triggerHandler("update",{force:!0})}},open:function(){var a=this;a.isLocked||a.isOpen||"multi"===a.settings.mode&&a.isFull()||(a.focus(),a.isOpen=!0,a.refreshState(),a.$dropdown.css({visibility:"hidden",display:"block"}),a.positionDropdown(),a.$dropdown.css({visibility:"visible"}),a.trigger("dropdown_open",a.$dropdown))},close:function(){var a=this,b=a.isOpen;"single"===a.settings.mode&&a.items.length&&(a.hideInput(),a.$control_input.blur()),a.isOpen=!1,a.$dropdown.hide(),a.setActiveOption(null),a.refreshState(),b&&a.trigger("dropdown_close",a.$dropdown)},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0),this.$dropdown.css({width:a.outerWidth(),top:b.top,left:b.left})},clear:function(a){var b=this;b.items.length&&(b.$control.children(":not(input)").remove(),b.items=[],b.lastQuery=null,b.setCaret(0),b.setActiveItem(null),b.updatePlaceholder(),b.updateOriginalInput({silent:a}),b.refreshState(),b.showInput(),b.trigger("clear"))},insertAtCaret:function(b){var c=Math.min(this.caretPos,this.items.length);0===c?this.$control.prepend(b):a(this.$control[0].childNodes[c]).before(b),this.setCaret(c+1)},deleteSelection:function(b){var c,d,e,f,g,h,i,j,k,l=this;if(e=b&&b.keyCode===p?-1:1,f=G(l.$control_input[0]),l.$activeOption&&!l.settings.hideSelected&&(i=l.getAdjacentOption(l.$activeOption,-1).attr("data-value")),g=[],l.$activeItems.length){for(k=l.$control.children(".active:"+(e>0?"last":"first")),h=l.$control.children(":not(input)").index(k),e>0&&h++,c=0,d=l.$activeItems.length;c<d;c++)g.push(a(l.$activeItems[c]).attr("data-value"));b&&(b.preventDefault(),b.stopPropagation())}else(l.isFocused||"single"===l.settings.mode)&&l.items.length&&(e<0&&0===f.start&&0===f.length?g.push(l.items[l.caretPos-1]):e>0&&f.start===l.$control_input.val().length&&g.push(l.items[l.caretPos]));if(!g.length||"function"==typeof l.settings.onDelete&&l.settings.onDelete.apply(l,[g])===!1)return!1;for("undefined"!=typeof h&&l.setCaret(h);g.length;)l.removeItem(g.pop());return l.showInput(),l.positionDropdown(),l.refreshOptions(!0),i&&(j=l.getOption(i),j.length&&l.setActiveOption(j)),!0},advanceSelection:function(a,b){var c,d,e,f,g,h,i=this;0!==a&&(i.rtl&&(a*=-1),c=a>0?"last":"first",d=G(i.$control_input[0]),i.isFocused&&!i.isInputHidden?(f=i.$control_input.val().length,g=a<0?0===d.start&&0===d.length:d.start===f,g&&!f&&i.advanceCaret(a,b)):(h=i.$control.children(".active:"+c),h.length&&(e=i.$control.children(":not(input)").index(h),i.setActiveItem(null),i.setCaret(a>0?e+1:e))))},advanceCaret:function(a,b){var c,d,e=this;0!==a&&(c=a>0?"next":"prev",e.isShiftDown?(d=e.$control_input[c](),d.length&&(e.hideInput(),e.setActiveItem(d),b&&b.preventDefault())):e.setCaret(e.caretPos+a))},setCaret:function(b){var c=this;if(b="single"===c.settings.mode?c.items.length:Math.max(0,Math.min(c.items.length,b)),!c.isPending){var d,e,f,g;for(f=c.$control.children(":not(input)"),d=0,e=f.length;d<e;d++)g=a(f[d]).detach(),d<b?c.$control_input.before(g):c.$control.append(g)}c.caretPos=b},lock:function(){this.close(),this.isLocked=!0,this.refreshState()},unlock:function(){this.isLocked=!1,this.refreshState()},disable:function(){var a=this;a.$input.prop("disabled",!0),a.$control_input.prop("disabled",!0).prop("tabindex",-1),a.isDisabled=!0,a.lock()},enable:function(){var a=this;a.$input.prop("disabled",!1),a.$control_input.prop("disabled",!1).prop("tabindex",a.tabIndex),a.isDisabled=!1,a.unlock()},destroy:function(){var b=this,c=b.eventNS,d=b.revertSettings;b.trigger("destroy"),b.off(),b.$wrapper.remove(),b.$dropdown.remove(),b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:d.tabindex}).show(),b.$control_input.removeData("grow"),b.$input.removeData("selectize"),a(window).off(c),a(document).off(c),a(document.body).off(c),delete b.$input[0].selectize},render:function(b,c){var d,e,f="",g=!1,h=this;return"option"!==b&&"item"!==b||(d=z(c[h.settings.valueField]),g=!!d),g&&(y(h.renderCache[b])||(h.renderCache[b]={}),h.renderCache[b].hasOwnProperty(d))?h.renderCache[b][d]:(f=a(h.settings.render[b].apply(this,[c,A])),"option"===b||"option_create"===b?f.attr("data-selectable",""):"optgroup"===b&&(e=c[h.settings.optgroupValueField]||"",f.attr("data-group",e)),"option"!==b&&"item"!==b||f.attr("data-value",d||""),g&&(h.renderCache[b][d]=f[0]),f[0])},clearCache:function(a){var b=this;"undefined"==typeof a?b.renderCache={}:delete b.renderCache[a]},canCreate:function(a){var b=this;if(!b.settings.create)return!1;var c=b.settings.createFilter;return a.length&&("function"!=typeof c||c.apply(b,[a]))&&("string"!=typeof c||new RegExp(c).test(a))&&(!(c instanceof RegExp)||c.test(a))}}),M.count=0,M.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}},a.fn.selectize=function(b){var c=a.fn.selectize.defaults,d=a.extend({},c,b),e=d.dataAttr,f=d.labelField,g=d.valueField,h=d.optgroupField,i=d.optgroupLabelField,j=d.optgroupValueField,k=function(b,c){var h,i,j,k,l=b.attr(e);if(l)for(c.options=JSON.parse(l),h=0,i=c.options.length;h<i;h++)c.items.push(c.options[h][g]);else{var m=a.trim(b.val()||"");if(!d.allowEmptyOption&&!m.length)return;for(j=m.split(d.delimiter),h=0,i=j.length;h<i;h++)k={},k[f]=j[h],k[g]=j[h],c.options.push(k);c.items=j}},l=function(b,c){var k,l,m,n,o=c.options,p={},q=function(a){var b=e&&a.attr(e);return"string"==typeof b&&b.length?JSON.parse(b):null},r=function(b,e){b=a(b);var i=z(b.val());if(i||d.allowEmptyOption)if(p.hasOwnProperty(i)){if(e){var j=p[i][h];j?a.isArray(j)?j.push(e):p[i][h]=[j,e]:p[i][h]=e}}else{var k=q(b)||{};k[f]=k[f]||b.text(),k[g]=k[g]||i,k[h]=k[h]||e,p[i]=k,o.push(k),b.is(":selected")&&c.items.push(i)}},s=function(b){var d,e,f,g,h;for(b=a(b),f=b.attr("label"),f&&(g=q(b)||{},g[i]=f,g[j]=f,c.optgroups.push(g)),h=a("option",b),d=0,e=h.length;d<e;d++)r(h[d],f)};for(c.maxItems=b.attr("multiple")?null:1,n=b.children(),k=0,l=n.length;k<l;k++)m=n[k].tagName.toLowerCase(),"optgroup"===m?s(n[k]):"option"===m&&r(n[k])};return this.each(function(){if(!this.selectize){var e,f=a(this),g=this.tagName.toLowerCase(),h=f.attr("placeholder")||f.attr("data-placeholder");h||d.allowEmptyOption||(h=f.children('option[value=""]').text());var i={placeholder:h,options:[],optgroups:[],items:[]};"select"===g?l(f,i):k(f,i),e=new M(f,a.extend(!0,{},c,i,b))}})},a.fn.selectize.defaults=M.defaults,a.fn.selectize.support={validity:x},M.define("drag_drop",function(b){if(!a.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var c=this;c.lock=function(){var a=c.lock;return function(){var b=c.$control.data("sortable");return b&&b.disable(),a.apply(c,arguments)}}(),c.unlock=function(){var a=c.unlock;return function(){var b=c.$control.data("sortable");return b&&b.enable(),a.apply(c,arguments)}}(),c.setup=function(){var b=c.setup;return function(){b.apply(this,arguments);var d=c.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:c.isLocked,start:function(a,b){b.placeholder.css("width",b.helper.css("width")),d.css({overflow:"visible"})},stop:function(){d.css({overflow:"hidden"});var b=c.$activeItems?c.$activeItems.slice():null,e=[];d.children("[data-value]").each(function(){e.push(a(this).attr("data-value"))}),c.setValue(e),c.setActiveItem(b)}})}}()}}),M.define("dropdown_header",function(b){var c=this;b=a.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'"><div class="'+a.titleRowClass+'"><span class="'+a.labelClass+'">'+a.title+'</span><a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a></div></div>'}},b),c.setup=function(){var d=c.setup;return function(){d.apply(c,arguments),c.$dropdown_header=a(b.html(b)),c.$dropdown.prepend(c.$dropdown_header)}}()}),M.define("optgroup_columns",function(b){var c=this;b=a.extend({equalizeWidth:!0,equalizeHeight:!0},b),this.getAdjacentOption=function(b,c){var d=b.closest("[data-group]").find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},this.onKeyDown=function(){var a=c.onKeyDown;return function(b){var d,e,f,g;return!this.isOpen||b.keyCode!==j&&b.keyCode!==m?a.apply(this,arguments):(c.ignoreHover=!0,g=this.$activeOption.closest("[data-group]"),d=g.find("[data-selectable]").index(this.$activeOption),g=b.keyCode===j?g.prev("[data-group]"):g.next("[data-group]"),f=g.find("[data-selectable]"),e=f.eq(Math.min(f.length-1,d)),void(e.length&&this.setActiveOption(e)))}}();var d=function(){var a,b=d.width,c=document;return"undefined"==typeof b&&(a=c.createElement("div"),a.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',a=a.firstChild,c.body.appendChild(a),b=d.width=a.offsetWidth-a.clientWidth,c.body.removeChild(a)),b},e=function(){var e,f,g,h,i,j,k;if(k=a("[data-group]",c.$dropdown_content),f=k.length,f&&c.$dropdown_content.width()){if(b.equalizeHeight){for(g=0,e=0;e<f;e++)g=Math.max(g,k.eq(e).height());k.css({height:g})}b.equalizeWidth&&(j=c.$dropdown_content.innerWidth()-d(),h=Math.round(j/f),k.css({width:h}),f>1&&(i=j-h*(f-1),k.eq(f-1).css({width:i})))}};(b.equalizeHeight||b.equalizeWidth)&&(B.after(this,"positionDropdown",e),B.after(this,"refreshOptions",e))}),M.define("remove_button",function(b){b=a.extend({label:"&times;",title:"Remove",className:"remove",append:!0},b);var c=function(b,c){c.className="remove-single";var d=b,e='<a href="javascript:void(0)" class="'+c.className+'" tabindex="-1" title="'+A(c.title)+'">'+c.label+"</a>",f=function(a,b){return a+b};b.setup=function(){var g=d.setup;return function(){if(c.append){var h=a(d.$input.context).attr("id"),i=(a("#"+h),d.settings.render.item);d.settings.render.item=function(a){return f(i.apply(b,arguments),e)}}g.apply(b,arguments),b.$control.on("click","."+c.className,function(a){a.preventDefault(),d.isLocked||d.clear()})}}()},d=function(b,c){var d=b,e='<a href="javascript:void(0)" class="'+c.className+'" tabindex="-1" title="'+A(c.title)+'">'+c.label+"</a>",f=function(a,b){var c=a.search(/(<\/[^>]+>\s*)$/);return a.substring(0,c)+b+a.substring(c)};b.setup=function(){var g=d.setup;return function(){if(c.append){var h=d.settings.render.item;d.settings.render.item=function(a){return f(h.apply(b,arguments),e)}}g.apply(b,arguments),b.$control.on("click","."+c.className,function(b){if(b.preventDefault(),!d.isLocked){var c=a(b.currentTarget).parent();d.setActiveItem(c),d.deleteSelection()&&d.setCaret(d.items.length)}})}}()};return"single"===this.settings.mode?void c(this,b):void d(this,b)}),M.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]},this.onKeyDown=function(){var c=b.onKeyDown;return function(b){var d,e;return b.keyCode===p&&""===this.$control_input.val()&&!this.$activeItems.length&&(d=this.caretPos-1,d>=0&&d<this.items.length)?(e=this.options[this.items[d]],this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[e])),this.refreshOptions(!0)),void b.preventDefault()):c.apply(this,arguments)}}()}),M});
!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):e.moment=a()}(this,function(){"use strict";function e(){return mn.apply(null,arguments)}function a(e){mn=e}function t(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function s(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function n(e){var a;for(a in e)return!1;return!0}function r(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function _(e,a){var t,s=[];for(t=0;t<e.length;++t)s.push(a(e[t],t));return s}function d(e,a){return Object.prototype.hasOwnProperty.call(e,a)}function i(e,a){for(var t in a)d(a,t)&&(e[t]=a[t]);return d(a,"toString")&&(e.toString=a.toString),d(a,"valueOf")&&(e.valueOf=a.valueOf),e}function o(e,a,t,s){return ca(e,a,t,s,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function u(e){return null==e._pf&&(e._pf=m()),e._pf}function l(e){if(null==e._isValid){var a=u(e),t=un.call(a.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&a.overflow<0&&!a.empty&&!a.invalidMonth&&!a.invalidWeekday&&!a.nullInput&&!a.invalidFormat&&!a.userInvalidated&&(!a.meridiem||a.meridiem&&t);if(e._strict&&(s=s&&0===a.charsLeftOver&&0===a.unusedTokens.length&&void 0===a.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function M(e){var a=o(NaN);return null!=e?i(u(a),e):u(a).userInvalidated=!0,a}function h(e){return void 0===e}function L(e,a){var t,s,n;if(h(a._isAMomentObject)||(e._isAMomentObject=a._isAMomentObject),h(a._i)||(e._i=a._i),h(a._f)||(e._f=a._f),h(a._l)||(e._l=a._l),h(a._strict)||(e._strict=a._strict),h(a._tzm)||(e._tzm=a._tzm),h(a._isUTC)||(e._isUTC=a._isUTC),h(a._offset)||(e._offset=a._offset),h(a._pf)||(e._pf=u(a)),h(a._locale)||(e._locale=a._locale),ln.length>0)for(t in ln)s=ln[t],n=a[s],h(n)||(e[s]=n);return e}function c(a){L(this,a),this._d=new Date(null!=a._d?a._d.getTime():NaN),Mn===!1&&(Mn=!0,e.updateOffset(this),Mn=!1)}function Y(e){return e instanceof c||null!=e&&null!=e._isAMomentObject}function y(e){return 0>e?Math.ceil(e)||0:Math.floor(e)}function p(e){var a=+e,t=0;return 0!==a&&isFinite(a)&&(t=y(a)),t}function f(e,a,t){var s,n=Math.min(e.length,a.length),r=Math.abs(e.length-a.length),_=0;for(s=0;n>s;s++)(t&&e[s]!==a[s]||!t&&p(e[s])!==p(a[s]))&&_++;return _+r}function k(a){e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function D(a,t){var s=!0;return i(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,a),s){for(var n,r=[],_=0;_<arguments.length;_++){if(n="","object"==typeof arguments[_]){n+="\n["+_+"] ";for(var d in arguments[0])n+=d+": "+arguments[0][d]+", ";n=n.slice(0,-2)}else n=arguments[_];r.push(n)}k(a+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),s=!1}return t.apply(this,arguments)},t)}function T(a,t){null!=e.deprecationHandler&&e.deprecationHandler(a,t),hn[a]||(k(t),hn[a]=!0)}function g(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function w(e){var a,t;for(t in e)a=e[t],g(a)?this[t]=a:this["_"+t]=a;this._config=e,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function v(e,a){var t,n=i({},e);for(t in a)d(a,t)&&(s(e[t])&&s(a[t])?(n[t]={},i(n[t],e[t]),i(n[t],a[t])):null!=a[t]?n[t]=a[t]:delete n[t]);for(t in e)d(e,t)&&!d(a,t)&&s(e[t])&&(n[t]=i({},n[t]));return n}function S(e){null!=e&&this.set(e)}function H(e,a,t){var s=this._calendar[e]||this._calendar.sameElse;return g(s)?s.call(a,t):s}function b(e){var a=this._longDateFormat[e],t=this._longDateFormat[e.toUpperCase()];return a||!t?a:(this._longDateFormat[e]=t.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function j(){return this._invalidDate}function x(e){return this._ordinal.replace("%d",e)}function P(e,a,t,s){var n=this._relativeTime[t];return g(n)?n(e,a,t,s):n.replace(/%d/i,e)}function W(e,a){var t=this._relativeTime[e>0?"future":"past"];return g(t)?t(a):t.replace(/%s/i,a)}function A(e,a){var t=e.toLowerCase();Tn[t]=Tn[t+"s"]=Tn[a]=e}function E(e){return"string"==typeof e?Tn[e]||Tn[e.toLowerCase()]:void 0}function F(e){var a,t,s={};for(t in e)d(e,t)&&(a=E(t),a&&(s[a]=e[t]));return s}function z(e,a){gn[e]=a}function O(e){var a=[];for(var t in e)a.push({unit:t,priority:gn[t]});return a.sort(function(e,a){return e.priority-a.priority}),a}function J(a,t){return function(s){return null!=s?(C(this,a,s),e.updateOffset(this,t),this):R(this,a)}}function R(e,a){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+a]():NaN}function C(e,a,t){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+a](t)}function G(e){return e=E(e),g(this[e])?this[e]():this}function I(e,a){if("object"==typeof e){e=F(e);for(var t=O(e),s=0;s<t.length;s++)this[t[s].unit](e[t[s].unit])}else if(e=E(e),g(this[e]))return this[e](a);return this}function N(e,a,t){var s=""+Math.abs(e),n=a-s.length,r=e>=0;return(r?t?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+s}function U(e,a,t,s){var n=s;"string"==typeof s&&(n=function(){return this[s]()}),e&&(Hn[e]=n),a&&(Hn[a[0]]=function(){return N(n.apply(this,arguments),a[1],a[2])}),t&&(Hn[t]=function(){return this.localeData().ordinal(n.apply(this,arguments),e)})}function V(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function $(e){var a,t,s=e.match(wn);for(a=0,t=s.length;t>a;a++)Hn[s[a]]?s[a]=Hn[s[a]]:s[a]=V(s[a]);return function(a){var n,r="";for(n=0;t>n;n++)r+=s[n]instanceof Function?s[n].call(a,e):s[n];return r}}function K(e,a){return e.isValid()?(a=Z(a,e.localeData()),Sn[a]=Sn[a]||$(a),Sn[a](e)):e.localeData().invalidDate()}function Z(e,a){function t(e){return a.longDateFormat(e)||e}var s=5;for(vn.lastIndex=0;s>=0&&vn.test(e);)e=e.replace(vn,t),vn.lastIndex=0,s-=1;return e}function q(e,a,t){Vn[e]=g(a)?a:function(e,s){return e&&t?t:a}}function B(e,a){return d(Vn,e)?Vn[e](a._strict,a._locale):new RegExp(Q(e))}function Q(e){return X(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,a,t,s,n){return a||t||s||n}))}function X(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ee(e,a){var t,s=a;for("string"==typeof e&&(e=[e]),"number"==typeof a&&(s=function(e,t){t[a]=p(e)}),t=0;t<e.length;t++)$n[e[t]]=s}function ae(e,a){ee(e,function(e,t,s,n){s._w=s._w||{},a(e,s._w,s,n)})}function te(e,a,t){null!=a&&d($n,e)&&$n[e](a,t._a,t,e)}function se(e,a){return new Date(Date.UTC(e,a+1,0)).getUTCDate()}function ne(e,a){return e?t(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||sr).test(a)?"format":"standalone"][e.month()]:this._months}function re(e,a){return e?t(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[sr.test(a)?"format":"standalone"][e.month()]:this._monthsShort}function _e(e,a,t){var s,n,r,_=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;12>s;++s)r=o([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return t?"MMM"===a?(n=cn.call(this._shortMonthsParse,_),-1!==n?n:null):(n=cn.call(this._longMonthsParse,_),-1!==n?n:null):"MMM"===a?(n=cn.call(this._shortMonthsParse,_),-1!==n?n:(n=cn.call(this._longMonthsParse,_),-1!==n?n:null)):(n=cn.call(this._longMonthsParse,_),-1!==n?n:(n=cn.call(this._shortMonthsParse,_),-1!==n?n:null))}function de(e,a,t){var s,n,r;if(this._monthsParseExact)return _e.call(this,e,a,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;12>s;s++){if(n=o([2e3,s]),t&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),t||this._monthsParse[s]||(r="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),t&&"MMMM"===a&&this._longMonthsParse[s].test(e))return s;if(t&&"MMM"===a&&this._shortMonthsParse[s].test(e))return s;if(!t&&this._monthsParse[s].test(e))return s}}function ie(e,a){var t;if(!e.isValid())return e;if("string"==typeof a)if(/^\d+$/.test(a))a=p(a);else if(a=e.localeData().monthsParse(a),"number"!=typeof a)return e;return t=Math.min(e.date(),se(e.year(),a)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](a,t),e}function oe(a){return null!=a?(ie(this,a),e.updateOffset(this,!0),this):R(this,"Month")}function me(){return se(this.year(),this.month())}function ue(e){return this._monthsParseExact?(d(this,"_monthsRegex")||Me.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=_r),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function le(e){return this._monthsParseExact?(d(this,"_monthsRegex")||Me.call(this),e?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=dr),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Me(){function e(e,a){return a.length-e.length}var a,t,s=[],n=[],r=[];for(a=0;12>a;a++)t=o([2e3,a]),s.push(this.monthsShort(t,"")),n.push(this.months(t,"")),r.push(this.months(t,"")),r.push(this.monthsShort(t,""));for(s.sort(e),n.sort(e),r.sort(e),a=0;12>a;a++)s[a]=X(s[a]),n[a]=X(n[a]);for(a=0;24>a;a++)r[a]=X(r[a]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function he(e){return Le(e)?366:365}function Le(e){return e%4===0&&e%100!==0||e%400===0}function ce(){return Le(this.year())}function Ye(e,a,t,s,n,r,_){var d=new Date(e,a,t,s,n,r,_);return 100>e&&e>=0&&isFinite(d.getFullYear())&&d.setFullYear(e),d}function ye(e){var a=new Date(Date.UTC.apply(null,arguments));return 100>e&&e>=0&&isFinite(a.getUTCFullYear())&&a.setUTCFullYear(e),a}function pe(e,a,t){var s=7+a-t,n=(7+ye(e,0,s).getUTCDay()-a)%7;return-n+s-1}function fe(e,a,t,s,n){var r,_,d=(7+t-s)%7,i=pe(e,s,n),o=1+7*(a-1)+d+i;return 0>=o?(r=e-1,_=he(r)+o):o>he(e)?(r=e+1,_=o-he(e)):(r=e,_=o),{year:r,dayOfYear:_}}function ke(e,a,t){var s,n,r=pe(e.year(),a,t),_=Math.floor((e.dayOfYear()-r-1)/7)+1;return 1>_?(n=e.year()-1,s=_+De(n,a,t)):_>De(e.year(),a,t)?(s=_-De(e.year(),a,t),n=e.year()+1):(n=e.year(),s=_),{week:s,year:n}}function De(e,a,t){var s=pe(e,a,t),n=pe(e+1,a,t);return(he(e)-s+n)/7}function Te(e){return ke(e,this._week.dow,this._week.doy).week}function ge(){return this._week.dow}function we(){return this._week.doy}function ve(e){var a=this.localeData().week(this);return null==e?a:this.add(7*(e-a),"d")}function Se(e){var a=ke(this,1,4).week;return null==e?a:this.add(7*(e-a),"d")}function He(e,a){return"string"!=typeof e?e:isNaN(e)?(e=a.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function be(e,a){return"string"==typeof e?a.weekdaysParse(e)%7||7:isNaN(e)?null:e}function je(e,a){return e?t(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(a)?"format":"standalone"][e.day()]:this._weekdays}function xe(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Pe(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin}function We(e,a,t){var s,n,r,_=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;7>s;++s)r=o([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return t?"dddd"===a?(n=cn.call(this._weekdaysParse,_),-1!==n?n:null):"ddd"===a?(n=cn.call(this._shortWeekdaysParse,_),-1!==n?n:null):(n=cn.call(this._minWeekdaysParse,_),-1!==n?n:null):"dddd"===a?(n=cn.call(this._weekdaysParse,_),-1!==n?n:(n=cn.call(this._shortWeekdaysParse,_),-1!==n?n:(n=cn.call(this._minWeekdaysParse,_),-1!==n?n:null))):"ddd"===a?(n=cn.call(this._shortWeekdaysParse,_),-1!==n?n:(n=cn.call(this._weekdaysParse,_),-1!==n?n:(n=cn.call(this._minWeekdaysParse,_),-1!==n?n:null))):(n=cn.call(this._minWeekdaysParse,_),-1!==n?n:(n=cn.call(this._weekdaysParse,_),-1!==n?n:(n=cn.call(this._shortWeekdaysParse,_),-1!==n?n:null)))}function Ae(e,a,t){var s,n,r;if(this._weekdaysParseExact)return We.call(this,e,a,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;7>s;s++){if(n=o([2e3,1]).day(s),t&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(n,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(n,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(n,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),t&&"dddd"===a&&this._fullWeekdaysParse[s].test(e))return s;if(t&&"ddd"===a&&this._shortWeekdaysParse[s].test(e))return s;if(t&&"dd"===a&&this._minWeekdaysParse[s].test(e))return s;if(!t&&this._weekdaysParse[s].test(e))return s}}function Ee(e){if(!this.isValid())return null!=e?this:NaN;var a=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=He(e,this.localeData()),this.add(e-a,"d")):a}function Fe(e){if(!this.isValid())return null!=e?this:NaN;var a=(this.day()+7-this.localeData()._week.dow)%7;return null==e?a:this.add(e-a,"d")}function ze(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var a=be(e,this.localeData());return this.day(this.day()%7?a:a-7)}return this.day()||7}function Oe(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ce.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=Mr),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Je(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ce.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=hr),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Re(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||Ce.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Lr),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ce(){function e(e,a){return a.length-e.length}var a,t,s,n,r,_=[],d=[],i=[],m=[];for(a=0;7>a;a++)t=o([2e3,1]).day(a),s=this.weekdaysMin(t,""),n=this.weekdaysShort(t,""),r=this.weekdays(t,""),_.push(s),d.push(n),i.push(r),m.push(s),m.push(n),m.push(r);for(_.sort(e),d.sort(e),i.sort(e),m.sort(e),a=0;7>a;a++)d[a]=X(d[a]),i[a]=X(i[a]),m[a]=X(m[a]);this._weekdaysRegex=new RegExp("^("+m.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+_.join("|")+")","i")}function Ge(){return this.hours()%12||12}function Ie(){return this.hours()||24}function Ne(e,a){U(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),a)})}function Ue(e,a){return a._meridiemParse}function Ve(e){return"p"===(e+"").toLowerCase().charAt(0)}function $e(e,a,t){return e>11?t?"pm":"PM":t?"am":"AM"}function Ke(e){return e?e.toLowerCase().replace("_","-"):e}function Ze(e){for(var a,t,s,n,r=0;r<e.length;){for(n=Ke(e[r]).split("-"),a=n.length,t=Ke(e[r+1]),t=t?t.split("-"):null;a>0;){if(s=qe(n.slice(0,a).join("-")))return s;if(t&&t.length>=a&&f(n,t,!0)>=a-1)break;a--}r++}return null}function qe(e){var a=null;if(!fr[e]&&"undefined"!=typeof module&&module&&module.exports)try{a=cr._abbr,require("./locale/"+e),Be(a)}catch(t){}return fr[e]}function Be(e,a){var t;return e&&(t=h(a)?ea(e):Qe(e,a),t&&(cr=t)),cr._abbr}function Qe(e,a){if(null!==a){var t=pr;return a.abbr=e,null!=fr[e]?(T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=fr[e]._config):null!=a.parentLocale&&(null!=fr[a.parentLocale]?t=fr[a.parentLocale]._config:T("parentLocaleUndefined","specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")),fr[e]=new S(v(t,a)),Be(e),fr[e]}return delete fr[e],null}function Xe(e,a){if(null!=a){var t,s=pr;null!=fr[e]&&(s=fr[e]._config),a=v(s,a),t=new S(a),t.parentLocale=fr[e],fr[e]=t,Be(e)}else null!=fr[e]&&(null!=fr[e].parentLocale?fr[e]=fr[e].parentLocale:null!=fr[e]&&delete fr[e]);return fr[e]}function ea(e){var a;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return cr;if(!t(e)){if(a=qe(e))return a;e=[e]}return Ze(e)}function aa(){return Ln(fr)}function ta(e){var a,t=e._a;return t&&-2===u(e).overflow&&(a=t[Zn]<0||t[Zn]>11?Zn:t[qn]<1||t[qn]>se(t[Kn],t[Zn])?qn:t[Bn]<0||t[Bn]>24||24===t[Bn]&&(0!==t[Qn]||0!==t[Xn]||0!==t[er])?Bn:t[Qn]<0||t[Qn]>59?Qn:t[Xn]<0||t[Xn]>59?Xn:t[er]<0||t[er]>999?er:-1,u(e)._overflowDayOfYear&&(Kn>a||a>qn)&&(a=qn),u(e)._overflowWeeks&&-1===a&&(a=ar),u(e)._overflowWeekday&&-1===a&&(a=tr),u(e).overflow=a),e}function sa(e){var a,t,s,n,r,_,d=e._i,i=kr.exec(d)||Dr.exec(d);if(i){for(u(e).iso=!0,a=0,t=gr.length;t>a;a++)if(gr[a][1].exec(i[1])){n=gr[a][0],s=gr[a][2]!==!1;break}if(null==n)return void(e._isValid=!1);if(i[3]){for(a=0,t=wr.length;t>a;a++)if(wr[a][1].exec(i[3])){r=(i[2]||" ")+wr[a][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(i[4]){if(!Tr.exec(i[4]))return void(e._isValid=!1);_="Z"}e._f=n+(r||"")+(_||""),oa(e)}else e._isValid=!1}function na(a){var t=vr.exec(a._i);return null!==t?void(a._d=new Date(+t[1])):(sa(a),void(a._isValid===!1&&(delete a._isValid,e.createFromInputFallback(a))))}function ra(e,a,t){return null!=e?e:null!=a?a:t}function _a(a){var t=new Date(e.now());return a._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function da(e){var a,t,s,n,r=[];if(!e._d){for(s=_a(e),e._w&&null==e._a[qn]&&null==e._a[Zn]&&ia(e),e._dayOfYear&&(n=ra(e._a[Kn],s[Kn]),e._dayOfYear>he(n)&&(u(e)._overflowDayOfYear=!0),t=ye(n,0,e._dayOfYear),e._a[Zn]=t.getUTCMonth(),e._a[qn]=t.getUTCDate()),a=0;3>a&&null==e._a[a];++a)e._a[a]=r[a]=s[a];for(;7>a;a++)e._a[a]=r[a]=null==e._a[a]?2===a?1:0:e._a[a];24===e._a[Bn]&&0===e._a[Qn]&&0===e._a[Xn]&&0===e._a[er]&&(e._nextDay=!0,e._a[Bn]=0),e._d=(e._useUTC?ye:Ye).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Bn]=24)}}function ia(e){var a,t,s,n,r,_,d,i;a=e._w,null!=a.GG||null!=a.W||null!=a.E?(r=1,_=4,t=ra(a.GG,e._a[Kn],ke(Ya(),1,4).year),s=ra(a.W,1),n=ra(a.E,1),(1>n||n>7)&&(i=!0)):(r=e._locale._week.dow,_=e._locale._week.doy,t=ra(a.gg,e._a[Kn],ke(Ya(),r,_).year),s=ra(a.w,1),null!=a.d?(n=a.d,(0>n||n>6)&&(i=!0)):null!=a.e?(n=a.e+r,(a.e<0||a.e>6)&&(i=!0)):n=r),1>s||s>De(t,r,_)?u(e)._overflowWeeks=!0:null!=i?u(e)._overflowWeekday=!0:(d=fe(t,s,n,r,_),e._a[Kn]=d.year,e._dayOfYear=d.dayOfYear)}function oa(a){if(a._f===e.ISO_8601)return void sa(a);a._a=[],u(a).empty=!0;var t,s,n,r,_,d=""+a._i,i=d.length,o=0;for(n=Z(a._f,a._locale).match(wn)||[],t=0;t<n.length;t++)r=n[t],s=(d.match(B(r,a))||[])[0],s&&(_=d.substr(0,d.indexOf(s)),_.length>0&&u(a).unusedInput.push(_),d=d.slice(d.indexOf(s)+s.length),o+=s.length),Hn[r]?(s?u(a).empty=!1:u(a).unusedTokens.push(r),te(r,s,a)):a._strict&&!s&&u(a).unusedTokens.push(r);u(a).charsLeftOver=i-o,d.length>0&&u(a).unusedInput.push(d),a._a[Bn]<=12&&u(a).bigHour===!0&&a._a[Bn]>0&&(u(a).bigHour=void 0),u(a).parsedDateParts=a._a.slice(0),u(a).meridiem=a._meridiem,a._a[Bn]=ma(a._locale,a._a[Bn],a._meridiem),da(a),ta(a)}function ma(e,a,t){var s;return null==t?a:null!=e.meridiemHour?e.meridiemHour(a,t):null!=e.isPM?(s=e.isPM(t),s&&12>a&&(a+=12),s||12!==a||(a=0),a):a}function ua(e){var a,t,s,n,r;if(0===e._f.length)return u(e).invalidFormat=!0,void(e._d=new Date(NaN));for(n=0;n<e._f.length;n++)r=0,a=L({},e),null!=e._useUTC&&(a._useUTC=e._useUTC),a._f=e._f[n],oa(a),l(a)&&(r+=u(a).charsLeftOver,r+=10*u(a).unusedTokens.length,u(a).score=r,(null==s||s>r)&&(s=r,t=a));i(e,t||a)}function la(e){if(!e._d){var a=F(e._i);e._a=_([a.year,a.month,a.day||a.date,a.hour,a.minute,a.second,a.millisecond],function(e){return e&&parseInt(e,10)}),da(e)}}function Ma(e){var a=new c(ta(ha(e)));return a._nextDay&&(a.add(1,"d"),a._nextDay=void 0),a}function ha(e){var a=e._i,s=e._f;return e._locale=e._locale||ea(e._l),null===a||void 0===s&&""===a?M({nullInput:!0}):("string"==typeof a&&(e._i=a=e._locale.preparse(a)),Y(a)?new c(ta(a)):(t(s)?ua(e):r(a)?e._d=a:s?oa(e):La(e),l(e)||(e._d=null),e))}function La(a){var s=a._i;void 0===s?a._d=new Date(e.now()):r(s)?a._d=new Date(s.valueOf()):"string"==typeof s?na(a):t(s)?(a._a=_(s.slice(0),function(e){return parseInt(e,10)}),da(a)):"object"==typeof s?la(a):"number"==typeof s?a._d=new Date(s):e.createFromInputFallback(a)}function ca(e,a,r,_,d){var i={};return"boolean"==typeof r&&(_=r,r=void 0),(s(e)&&n(e)||t(e)&&0===e.length)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=d,i._l=r,i._i=e,i._f=a,i._strict=_,Ma(i)}function Ya(e,a,t,s){return ca(e,a,t,s,!1)}function ya(e,a){var s,n;if(1===a.length&&t(a[0])&&(a=a[0]),!a.length)return Ya();for(s=a[0],n=1;n<a.length;++n)(!a[n].isValid()||a[n][e](s))&&(s=a[n]);return s}function pa(){var e=[].slice.call(arguments,0);return ya("isBefore",e)}function fa(){var e=[].slice.call(arguments,0);return ya("isAfter",e)}function ka(e){var a=F(e),t=a.year||0,s=a.quarter||0,n=a.month||0,r=a.week||0,_=a.day||0,d=a.hour||0,i=a.minute||0,o=a.second||0,m=a.millisecond||0;this._milliseconds=+m+1e3*o+6e4*i+1e3*d*60*60,this._days=+_+7*r,this._months=+n+3*s+12*t,this._data={},this._locale=ea(),this._bubble()}function Da(e){return e instanceof ka}function Ta(e){return 0>e?-1*Math.round(-1*e):Math.round(e)}function ga(e,a){U(e,0,0,function(){var e=this.utcOffset(),t="+";return 0>e&&(e=-e,t="-"),t+N(~~(e/60),2)+a+N(~~e%60,2)})}function wa(e,a){var t=(a||"").match(e)||[],s=t[t.length-1]||[],n=(s+"").match(jr)||["-",0,0],r=+(60*n[1])+p(n[2]);return"+"===n[0]?r:-r}function va(a,t){var s,n;return t._isUTC?(s=t.clone(),n=(Y(a)||r(a)?a.valueOf():Ya(a).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+n),e.updateOffset(s,!1),s):Ya(a).local()}function Sa(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Ha(a,t){var s,n=this._offset||0;return this.isValid()?null!=a?("string"==typeof a?a=wa(In,a):Math.abs(a)<16&&(a=60*a),!this._isUTC&&t&&(s=Sa(this)),this._offset=a,this._isUTC=!0,null!=s&&this.add(s,"m"),n!==a&&(!t||this._changeInProgress?Na(this,Ja(a-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?n:Sa(this):null!=a?this:NaN}function ba(e,a){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,a),this):-this.utcOffset()}function ja(e){return this.utcOffset(0,e)}function xa(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Sa(this),"m")),this}function Pa(){if(this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var e=wa(Gn,this._i);0===e?this.utcOffset(0,!0):this.utcOffset(wa(Gn,this._i))}return this}function Wa(e){return this.isValid()?(e=e?Ya(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Aa(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ea(){if(!h(this._isDSTShifted))return this._isDSTShifted;var e={};if(L(e,this),e=ha(e),e._a){var a=e._isUTC?o(e._a):Ya(e._a);this._isDSTShifted=this.isValid()&&f(e._a,a.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Fa(){return this.isValid()?!this._isUTC:!1}function za(){return this.isValid()?this._isUTC:!1}function Oa(){return this.isValid()?this._isUTC&&0===this._offset:!1}function Ja(e,a){var t,s,n,r=e,_=null;return Da(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(r={},a?r[a]=e:r.milliseconds=e):(_=xr.exec(e))?(t="-"===_[1]?-1:1,r={y:0,d:p(_[qn])*t,h:p(_[Bn])*t,m:p(_[Qn])*t,s:p(_[Xn])*t,ms:p(Ta(1e3*_[er]))*t}):(_=Pr.exec(e))?(t="-"===_[1]?-1:1,r={y:Ra(_[2],t),M:Ra(_[3],t),w:Ra(_[4],t),d:Ra(_[5],t),h:Ra(_[6],t),m:Ra(_[7],t),s:Ra(_[8],t)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(n=Ga(Ya(r.from),Ya(r.to)),r={},r.ms=n.milliseconds,r.M=n.months),s=new ka(r),Da(e)&&d(e,"_locale")&&(s._locale=e._locale),s}function Ra(e,a){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*a}function Ca(e,a){var t={milliseconds:0,months:0};return t.months=a.month()-e.month()+12*(a.year()-e.year()),e.clone().add(t.months,"M").isAfter(a)&&--t.months,t.milliseconds=+a-+e.clone().add(t.months,"M"),t}function Ga(e,a){var t;return e.isValid()&&a.isValid()?(a=va(a,e),e.isBefore(a)?t=Ca(e,a):(t=Ca(a,e),t.milliseconds=-t.milliseconds,t.months=-t.months),t):{milliseconds:0,months:0}}function Ia(e,a){return function(t,s){var n,r;return null===s||isNaN(+s)||(T(a,"moment()."+a+"(period, number) is deprecated. Please use moment()."+a+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=t,t=s,s=r),t="string"==typeof t?+t:t,n=Ja(t,s),Na(this,n,e),this}}function Na(a,t,s,n){var r=t._milliseconds,_=Ta(t._days),d=Ta(t._months);a.isValid()&&(n=null==n?!0:n,r&&a._d.setTime(a._d.valueOf()+r*s),_&&C(a,"Date",R(a,"Date")+_*s),d&&ie(a,R(a,"Month")+d*s),n&&e.updateOffset(a,_||d))}function Ua(e,a){var t=e.diff(a,"days",!0);return-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse"}function Va(a,t){var s=a||Ya(),n=va(s,this).startOf("day"),r=e.calendarFormat(this,n)||"sameElse",_=t&&(g(t[r])?t[r].call(this,s):t[r]);return this.format(_||this.localeData().calendar(r,this,Ya(s)))}function $a(){return new c(this)}function Ka(e,a){var t=Y(e)?e:Ya(e);return this.isValid()&&t.isValid()?(a=E(h(a)?"millisecond":a),"millisecond"===a?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(a).valueOf()):!1}function Za(e,a){var t=Y(e)?e:Ya(e);return this.isValid()&&t.isValid()?(a=E(h(a)?"millisecond":a),"millisecond"===a?this.valueOf()<t.valueOf():this.clone().endOf(a).valueOf()<t.valueOf()):!1}function qa(e,a,t,s){return s=s||"()",("("===s[0]?this.isAfter(e,t):!this.isBefore(e,t))&&(")"===s[1]?this.isBefore(a,t):!this.isAfter(a,t))}function Ba(e,a){var t,s=Y(e)?e:Ya(e);return this.isValid()&&s.isValid()?(a=E(a||"millisecond"),"millisecond"===a?this.valueOf()===s.valueOf():(t=s.valueOf(),this.clone().startOf(a).valueOf()<=t&&t<=this.clone().endOf(a).valueOf())):!1}function Qa(e,a){return this.isSame(e,a)||this.isAfter(e,a)}function Xa(e,a){return this.isSame(e,a)||this.isBefore(e,a)}function et(e,a,t){var s,n,r,_;return this.isValid()?(s=va(e,this),s.isValid()?(n=6e4*(s.utcOffset()-this.utcOffset()),a=E(a),"year"===a||"month"===a||"quarter"===a?(_=at(this,s),"quarter"===a?_/=3:"year"===a&&(_/=12)):(r=this-s,_="second"===a?r/1e3:"minute"===a?r/6e4:"hour"===a?r/36e5:"day"===a?(r-n)/864e5:"week"===a?(r-n)/6048e5:r),t?_:y(_)):NaN):NaN}function at(e,a){var t,s,n=12*(a.year()-e.year())+(a.month()-e.month()),r=e.clone().add(n,"months");return 0>a-r?(t=e.clone().add(n-1,"months"),s=(a-r)/(r-t)):(t=e.clone().add(n+1,"months"),s=(a-r)/(t-r)),-(n+s)||0}function tt(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function st(){var e=this.clone().utc();return 0<e.year()&&e.year()<=9999?g(Date.prototype.toISOString)?this.toDate().toISOString():K(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):K(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function nt(a){a||(a=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var t=K(this,a);return this.localeData().postformat(t)}function rt(e,a){return this.isValid()&&(Y(e)&&e.isValid()||Ya(e).isValid())?Ja({to:this,from:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()}function _t(e){return this.from(Ya(),e)}function dt(e,a){return this.isValid()&&(Y(e)&&e.isValid()||Ya(e).isValid())?Ja({from:this,to:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()}function it(e){return this.to(Ya(),e)}function ot(e){var a;return void 0===e?this._locale._abbr:(a=ea(e),null!=a&&(this._locale=a),this)}function mt(){return this._locale}function ut(e){switch(e=E(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function lt(e){return e=E(e),void 0===e||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}function Mt(){return this._d.valueOf()-6e4*(this._offset||0)}function ht(){return Math.floor(this.valueOf()/1e3)}function Lt(){return new Date(this.valueOf())}function ct(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Yt(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function yt(){return this.isValid()?this.toISOString():null}function pt(){return l(this)}function ft(){return i({},u(this))}function kt(){return u(this).overflow}function Dt(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Tt(e,a){U(0,[e,e.length],0,a)}function gt(e){return Ht.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function wt(e){return Ht.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function vt(){return De(this.year(),1,4)}function St(){var e=this.localeData()._week;return De(this.year(),e.dow,e.doy)}function Ht(e,a,t,s,n){var r;return null==e?ke(this,s,n).year:(r=De(e,s,n),a>r&&(a=r),bt.call(this,e,a,t,s,n))}function bt(e,a,t,s,n){var r=fe(e,a,t,s,n),_=ye(r.year,0,r.dayOfYear);return this.year(_.getUTCFullYear()),this.month(_.getUTCMonth()),this.date(_.getUTCDate()),this}function jt(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function xt(e){var a=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?a:this.add(e-a,"d")}function Pt(e,a){a[er]=p(1e3*("0."+e))}function Wt(){return this._isUTC?"UTC":""}function At(){return this._isUTC?"Coordinated Universal Time":""}function Et(e){return Ya(1e3*e)}function Ft(){return Ya.apply(null,arguments).parseZone()}function zt(e){return e}function Ot(e,a,t,s){var n=ea(),r=o().set(s,a);return n[t](r,e)}function Jt(e,a,t){if("number"==typeof e&&(a=e,e=void 0),e=e||"",null!=a)return Ot(e,a,t,"month");var s,n=[];for(s=0;12>s;s++)n[s]=Ot(e,s,t,"month");return n}function Rt(e,a,t,s){"boolean"==typeof e?("number"==typeof a&&(t=a,a=void 0),a=a||""):(a=e,t=a,e=!1,"number"==typeof a&&(t=a,a=void 0),a=a||"");var n=ea(),r=e?n._week.dow:0;if(null!=t)return Ot(a,(t+r)%7,s,"day");var _,d=[];for(_=0;7>_;_++)d[_]=Ot(a,(_+r)%7,s,"day");return d}function Ct(e,a){return Jt(e,a,"months")}function Gt(e,a){return Jt(e,a,"monthsShort")}function It(e,a,t){return Rt(e,a,t,"weekdays")}function Nt(e,a,t){return Rt(e,a,t,"weekdaysShort")}function Ut(e,a,t){return Rt(e,a,t,"weekdaysMin");
}function Vt(){var e=this._data;return this._milliseconds=Nr(this._milliseconds),this._days=Nr(this._days),this._months=Nr(this._months),e.milliseconds=Nr(e.milliseconds),e.seconds=Nr(e.seconds),e.minutes=Nr(e.minutes),e.hours=Nr(e.hours),e.months=Nr(e.months),e.years=Nr(e.years),this}function $t(e,a,t,s){var n=Ja(a,t);return e._milliseconds+=s*n._milliseconds,e._days+=s*n._days,e._months+=s*n._months,e._bubble()}function Kt(e,a){return $t(this,e,a,1)}function Zt(e,a){return $t(this,e,a,-1)}function qt(e){return 0>e?Math.floor(e):Math.ceil(e)}function Bt(){var e,a,t,s,n,r=this._milliseconds,_=this._days,d=this._months,i=this._data;return r>=0&&_>=0&&d>=0||0>=r&&0>=_&&0>=d||(r+=864e5*qt(Xt(d)+_),_=0,d=0),i.milliseconds=r%1e3,e=y(r/1e3),i.seconds=e%60,a=y(e/60),i.minutes=a%60,t=y(a/60),i.hours=t%24,_+=y(t/24),n=y(Qt(_)),d+=n,_-=qt(Xt(n)),s=y(d/12),d%=12,i.days=_,i.months=d,i.years=s,this}function Qt(e){return 4800*e/146097}function Xt(e){return 146097*e/4800}function es(e){var a,t,s=this._milliseconds;if(e=E(e),"month"===e||"year"===e)return a=this._days+s/864e5,t=this._months+Qt(a),"month"===e?t:t/12;switch(a=this._days+Math.round(Xt(this._months)),e){case"week":return a/7+s/6048e5;case"day":return a+s/864e5;case"hour":return 24*a+s/36e5;case"minute":return 1440*a+s/6e4;case"second":return 86400*a+s/1e3;case"millisecond":return Math.floor(864e5*a)+s;default:throw new Error("Unknown unit "+e)}}function as(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*p(this._months/12)}function ts(e){return function(){return this.as(e)}}function ss(e){return e=E(e),this[e+"s"]()}function ns(e){return function(){return this._data[e]}}function rs(){return y(this.days()/7)}function _s(e,a,t,s,n){return n.relativeTime(a||1,!!t,e,s)}function ds(e,a,t){var s=Ja(e).abs(),n=__(s.as("s")),r=__(s.as("m")),_=__(s.as("h")),d=__(s.as("d")),i=__(s.as("M")),o=__(s.as("y")),m=n<d_.s&&["s",n]||1>=r&&["m"]||r<d_.m&&["mm",r]||1>=_&&["h"]||_<d_.h&&["hh",_]||1>=d&&["d"]||d<d_.d&&["dd",d]||1>=i&&["M"]||i<d_.M&&["MM",i]||1>=o&&["y"]||["yy",o];return m[2]=a,m[3]=+e>0,m[4]=t,_s.apply(null,m)}function is(e){return void 0===e?__:"function"==typeof e?(__=e,!0):!1}function os(e,a){return void 0===d_[e]?!1:void 0===a?d_[e]:(d_[e]=a,!0)}function ms(e){var a=this.localeData(),t=ds(this,!e,a);return e&&(t=a.pastFuture(+this,t)),a.postformat(t)}function us(){var e,a,t,s=i_(this._milliseconds)/1e3,n=i_(this._days),r=i_(this._months);e=y(s/60),a=y(e/60),s%=60,e%=60,t=y(r/12),r%=12;var _=t,d=r,i=n,o=a,m=e,u=s,l=this.asSeconds();return l?(0>l?"-":"")+"P"+(_?_+"Y":"")+(d?d+"M":"")+(i?i+"D":"")+(o||m||u?"T":"")+(o?o+"H":"")+(m?m+"M":"")+(u?u+"S":""):"P0D"}function ls(e,a){var t=e.split("_");return a%10===1&&a%100!==11?t[0]:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?t[1]:t[2]}function Ms(e,a,t){var s={mm:a?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:a?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===t?a?"хвіліна":"хвіліну":"h"===t?a?"гадзіна":"гадзіну":e+" "+ls(s[t],+e)}function hs(e,a,t){var s={mm:"munutenn",MM:"miz",dd:"devezh"};return e+" "+Ys(s[t],e)}function Ls(e){switch(cs(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}function cs(e){return e>9?cs(e%10):e}function Ys(e,a){return 2===a?ys(e):e}function ys(e){var a={m:"v",b:"v",d:"z"};return void 0===a[e.charAt(0)]?e:a[e.charAt(0)]+e.substring(1)}function ps(e,a,t){var s=e+" ";switch(t){case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}function fs(e){return e>1&&5>e&&1!==~~(e/10)}function ks(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"pár sekund":"pár sekundami";case"m":return a?"minuta":s?"minutu":"minutou";case"mm":return a||s?n+(fs(e)?"minuty":"minut"):n+"minutami";case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(fs(e)?"hodiny":"hodin"):n+"hodinami";case"d":return a||s?"den":"dnem";case"dd":return a||s?n+(fs(e)?"dny":"dní"):n+"dny";case"M":return a||s?"měsíc":"měsícem";case"MM":return a||s?n+(fs(e)?"měsíce":"měsíců"):n+"měsíci";case"y":return a||s?"rok":"rokem";case"yy":return a||s?n+(fs(e)?"roky":"let"):n+"lety"}}function Ds(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}function Ts(e,a,t,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?n[t][0]:n[t][1]}function gs(e,a,t,s){var n={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return a?n[t][2]?n[t][2]:n[t][1]:s?n[t][0]:n[t][1]}function ws(e,a,t,s){var n="";switch(t){case"s":return s?"muutaman sekunnin":"muutama sekunti";case"m":return s?"minuutin":"minuutti";case"mm":n=s?"minuutin":"minuuttia";break;case"h":return s?"tunnin":"tunti";case"hh":n=s?"tunnin":"tuntia";break;case"d":return s?"päivän":"päivä";case"dd":n=s?"päivän":"päivää";break;case"M":return s?"kuukauden":"kuukausi";case"MM":n=s?"kuukauden":"kuukautta";break;case"y":return s?"vuoden":"vuosi";case"yy":n=s?"vuoden":"vuotta"}return n=vs(e,s)+" "+n}function vs(e,a){return 10>e?a?R_[e]:J_[e]:e}function Ss(e,a,t){var s=e+" ";switch(t){case"m":return a?"jedna minuta":"jedne minute";case"mm":return s+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}function Hs(e,a,t,s){var n=e;switch(t){case"s":return s||a?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(s||a?" perc":" perce");case"mm":return n+(s||a?" perc":" perce");case"h":return"egy"+(s||a?" óra":" órája");case"hh":return n+(s||a?" óra":" órája");case"d":return"egy"+(s||a?" nap":" napja");case"dd":return n+(s||a?" nap":" napja");case"M":return"egy"+(s||a?" hónap":" hónapja");case"MM":return n+(s||a?" hónap":" hónapja");case"y":return"egy"+(s||a?" év":" éve");case"yy":return n+(s||a?" év":" éve")}return""}function bs(e){return(e?"":"[múlt] ")+"["+q_[this.day()]+"] LT[-kor]"}function js(e){return e%100===11?!0:e%10===1?!1:!0}function xs(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nokkrar sekúndur":"nokkrum sekúndum";case"m":return a?"mínúta":"mínútu";case"mm":return js(e)?n+(a||s?"mínútur":"mínútum"):a?n+"mínúta":n+"mínútu";case"hh":return js(e)?n+(a||s?"klukkustundir":"klukkustundum"):n+"klukkustund";case"d":return a?"dagur":s?"dag":"degi";case"dd":return js(e)?a?n+"dagar":n+(s?"daga":"dögum"):a?n+"dagur":n+(s?"dag":"degi");case"M":return a?"mánuður":s?"mánuð":"mánuði";case"MM":return js(e)?a?n+"mánuðir":n+(s?"mánuði":"mánuðum"):a?n+"mánuður":n+(s?"mánuð":"mánuði");case"y":return a||s?"ár":"ári";case"yy":return js(e)?n+(a||s?"ár":"árum"):n+(a||s?"ár":"ári")}}function Ps(e,a,t,s){var n={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return a?n[t][0]:n[t][1]}function Ws(e){var a=e.substr(0,e.indexOf(" "));return Es(a)?"a "+e:"an "+e}function As(e){var a=e.substr(0,e.indexOf(" "));return Es(a)?"viru "+e:"virun "+e}function Es(e){if(e=parseInt(e,10),isNaN(e))return!1;if(0>e)return!0;if(10>e)return e>=4&&7>=e?!0:!1;if(100>e){var a=e%10,t=e/10;return Es(0===a?t:a)}if(1e4>e){for(;e>=10;)e/=10;return Es(e)}return e/=1e3,Es(e)}function Fs(e,a,t,s){return a?"kelios sekundės":s?"kelių sekundžių":"kelias sekundes"}function zs(e,a,t,s){return a?Js(t)[0]:s?Js(t)[1]:Js(t)[2]}function Os(e){return e%10===0||e>10&&20>e}function Js(e){return X_[e].split("_")}function Rs(e,a,t,s){var n=e+" ";return 1===e?n+zs(e,a,t[0],s):a?n+(Os(e)?Js(t)[1]:Js(t)[0]):s?n+Js(t)[1]:n+(Os(e)?Js(t)[1]:Js(t)[2])}function Cs(e,a,t){return t?a%10===1&&a%100!==11?e[2]:e[3]:a%10===1&&a%100!==11?e[0]:e[1]}function Gs(e,a,t){return e+" "+Cs(ed[t],e,a)}function Is(e,a,t){return Cs(ed[t],e,a)}function Ns(e,a){return a?"dažas sekundes":"dažām sekundēm"}function Us(e,a,t,s){var n="";if(a)switch(t){case"s":n="काही सेकंद";break;case"m":n="एक मिनिट";break;case"mm":n="%d मिनिटे";break;case"h":n="एक तास";break;case"hh":n="%d तास";break;case"d":n="एक दिवस";break;case"dd":n="%d दिवस";break;case"M":n="एक महिना";break;case"MM":n="%d महिने";break;case"y":n="एक वर्ष";break;case"yy":n="%d वर्षे"}else switch(t){case"s":n="काही सेकंदां";break;case"m":n="एका मिनिटा";break;case"mm":n="%d मिनिटां";break;case"h":n="एका तासा";break;case"hh":n="%d तासां";break;case"d":n="एका दिवसा";break;case"dd":n="%d दिवसां";break;case"M":n="एका महिन्या";break;case"MM":n="%d महिन्यां";break;case"y":n="एका वर्षा";break;case"yy":n="%d वर्षां"}return n.replace(/%d/i,e)}function Vs(e){return 5>e%10&&e%10>1&&~~(e/10)%10!==1}function $s(e,a,t){var s=e+" ";switch(t){case"m":return a?"minuta":"minutę";case"mm":return s+(Vs(e)?"minuty":"minut");case"h":return a?"godzina":"godzinę";case"hh":return s+(Vs(e)?"godziny":"godzin");case"MM":return s+(Vs(e)?"miesiące":"miesięcy");case"yy":return s+(Vs(e)?"lata":"lat")}}function Ks(e,a,t){var s={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},n=" ";return(e%100>=20||e>=100&&e%100===0)&&(n=" de "),e+n+s[t]}function Zs(e,a){var t=e.split("_");return a%10===1&&a%100!==11?t[0]:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?t[1]:t[2]}function qs(e,a,t){var s={mm:a?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===t?a?"минута":"минуту":e+" "+Zs(s[t],+e)}function Bs(e){return e>1&&5>e}function Qs(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"pár sekúnd":"pár sekundami";case"m":return a?"minúta":s?"minútu":"minútou";case"mm":return a||s?n+(Bs(e)?"minúty":"minút"):n+"minútami";case"h":return a?"hodina":s?"hodinu":"hodinou";case"hh":return a||s?n+(Bs(e)?"hodiny":"hodín"):n+"hodinami";case"d":return a||s?"deň":"dňom";case"dd":return a||s?n+(Bs(e)?"dni":"dní"):n+"dňami";case"M":return a||s?"mesiac":"mesiacom";case"MM":return a||s?n+(Bs(e)?"mesiace":"mesiacov"):n+"mesiacmi";case"y":return a||s?"rok":"rokom";case"yy":return a||s?n+(Bs(e)?"roky":"rokov"):n+"rokmi"}}function Xs(e,a,t,s){var n=e+" ";switch(t){case"s":return a||s?"nekaj sekund":"nekaj sekundami";case"m":return a?"ena minuta":"eno minuto";case"mm":return n+=1===e?a?"minuta":"minuto":2===e?a||s?"minuti":"minutama":5>e?a||s?"minute":"minutami":a||s?"minut":"minutami";case"h":return a?"ena ura":"eno uro";case"hh":return n+=1===e?a?"ura":"uro":2===e?a||s?"uri":"urama":5>e?a||s?"ure":"urami":a||s?"ur":"urami";case"d":return a||s?"en dan":"enim dnem";case"dd":return n+=1===e?a||s?"dan":"dnem":2===e?a||s?"dni":"dnevoma":a||s?"dni":"dnevi";case"M":return a||s?"en mesec":"enim mesecem";case"MM":return n+=1===e?a||s?"mesec":"mesecem":2===e?a||s?"meseca":"mesecema":5>e?a||s?"mesece":"meseci":a||s?"mesecev":"meseci";case"y":return a||s?"eno leto":"enim letom";case"yy":return n+=1===e?a||s?"leto":"letom":2===e?a||s?"leti":"letoma":5>e?a||s?"leta":"leti":a||s?"let":"leti"}}function en(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"leS":-1!==e.indexOf("jar")?a.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?a.slice(0,-3)+"nem":a+" pIq"}function an(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"Hu’":-1!==e.indexOf("jar")?a.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?a.slice(0,-3)+"ben":a+" ret"}function tn(e,a,t,s){var n=sn(e);switch(t){case"mm":return n+" tup";case"hh":return n+" rep";case"dd":return n+" jaj";case"MM":return n+" jar";case"yy":return n+" DIS"}}function sn(e){var a=Math.floor(e%1e3/100),t=Math.floor(e%100/10),s=e%10,n="";return a>0&&(n+=Td[a]+"vatlh"),t>0&&(n+=(""!==n?" ":"")+Td[t]+"maH"),s>0&&(n+=(""!==n?" ":"")+Td[s]),""===n?"pagh":n}function nn(e,a,t,s){var n={s:["viensas secunds","'iensas secunds"],m:["'n míut","'iens míut"],mm:[e+" míuts",""+e+" míuts"],h:["'n þora","'iensa þora"],hh:[e+" þoras",""+e+" þoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",""+e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",""+e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",""+e+" ars"]};return s?n[t][0]:a?n[t][0]:n[t][1]}function rn(e,a){var t=e.split("_");return a%10===1&&a%100!==11?t[0]:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?t[1]:t[2]}function _n(e,a,t){var s={mm:a?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:a?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===t?a?"хвилина":"хвилину":"h"===t?a?"година":"годину":e+" "+rn(s[t],+e)}function dn(e,a){var t={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},s=/(\[[ВвУу]\]) ?dddd/.test(a)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(a)?"genitive":"nominative";return t[s][e.day()]}function on(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}var mn,un;un=Array.prototype.some?Array.prototype.some:function(e){for(var a=Object(this),t=a.length>>>0,s=0;t>s;s++)if(s in a&&e.call(this,a[s],s,a))return!0;return!1};var ln=e.momentProperties=[],Mn=!1,hn={};e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;var Ln;Ln=Object.keys?Object.keys:function(e){var a,t=[];for(a in e)d(e,a)&&t.push(a);return t};var cn,Yn={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},yn={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},pn="Invalid date",fn="%d",kn=/\d{1,2}/,Dn={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Tn={},gn={},wn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,vn=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Sn={},Hn={},bn=/\d/,jn=/\d\d/,xn=/\d{3}/,Pn=/\d{4}/,Wn=/[+-]?\d{6}/,An=/\d\d?/,En=/\d\d\d\d?/,Fn=/\d\d\d\d\d\d?/,zn=/\d{1,3}/,On=/\d{1,4}/,Jn=/[+-]?\d{1,6}/,Rn=/\d+/,Cn=/[+-]?\d+/,Gn=/Z|[+-]\d\d:?\d\d/gi,In=/Z|[+-]\d\d(?::?\d\d)?/gi,Nn=/[+-]?\d+(\.\d{1,3})?/,Un=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vn={},$n={},Kn=0,Zn=1,qn=2,Bn=3,Qn=4,Xn=5,er=6,ar=7,tr=8;cn=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var a;for(a=0;a<this.length;++a)if(this[a]===e)return a;return-1},U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),U("MMMM",0,0,function(e){return this.localeData().months(this,e)}),A("month","M"),z("month",8),q("M",An),q("MM",An,jn),q("MMM",function(e,a){return a.monthsShortRegex(e)}),q("MMMM",function(e,a){return a.monthsRegex(e)}),ee(["M","MM"],function(e,a){a[Zn]=p(e)-1}),ee(["MMM","MMMM"],function(e,a,t,s){var n=t._locale.monthsParse(e,s,t._strict);null!=n?a[Zn]=n:u(t).invalidMonth=e});var sr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,nr="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),rr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),_r=Un,dr=Un;U("Y",0,0,function(){var e=this.year();return 9999>=e?""+e:"+"+e}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),A("year","y"),z("year",1),q("Y",Cn),q("YY",An,jn),q("YYYY",On,Pn),q("YYYYY",Jn,Wn),q("YYYYYY",Jn,Wn),ee(["YYYYY","YYYYYY"],Kn),ee("YYYY",function(a,t){t[Kn]=2===a.length?e.parseTwoDigitYear(a):p(a)}),ee("YY",function(a,t){t[Kn]=e.parseTwoDigitYear(a)}),ee("Y",function(e,a){a[Kn]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return p(e)+(p(e)>68?1900:2e3)};var ir=J("FullYear",!0);U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),A("week","w"),A("isoWeek","W"),z("week",5),z("isoWeek",5),q("w",An),q("ww",An,jn),q("W",An),q("WW",An,jn),ae(["w","ww","W","WW"],function(e,a,t,s){a[s.substr(0,1)]=p(e)});var or={dow:0,doy:6};U("d",0,"do","day"),U("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),U("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),U("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),A("day","d"),A("weekday","e"),A("isoWeekday","E"),z("day",11),z("weekday",11),z("isoWeekday",11),q("d",An),q("e",An),q("E",An),q("dd",function(e,a){return a.weekdaysMinRegex(e)}),q("ddd",function(e,a){return a.weekdaysShortRegex(e)}),q("dddd",function(e,a){return a.weekdaysRegex(e)}),ae(["dd","ddd","dddd"],function(e,a,t,s){var n=t._locale.weekdaysParse(e,s,t._strict);null!=n?a.d=n:u(t).invalidWeekday=e}),ae(["d","e","E"],function(e,a,t,s){a[s]=p(e)});var mr="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),ur="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),lr="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Mr=Un,hr=Un,Lr=Un;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ge),U("k",["kk",2],0,Ie),U("hmm",0,0,function(){return""+Ge.apply(this)+N(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ge.apply(this)+N(this.minutes(),2)+N(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+N(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+N(this.minutes(),2)+N(this.seconds(),2)}),Ne("a",!0),Ne("A",!1),A("hour","h"),z("hour",13),q("a",Ue),q("A",Ue),q("H",An),q("h",An),q("HH",An,jn),q("hh",An,jn),q("hmm",En),q("hmmss",Fn),q("Hmm",En),q("Hmmss",Fn),ee(["H","HH"],Bn),ee(["a","A"],function(e,a,t){t._isPm=t._locale.isPM(e),t._meridiem=e}),ee(["h","hh"],function(e,a,t){a[Bn]=p(e),u(t).bigHour=!0}),ee("hmm",function(e,a,t){var s=e.length-2;a[Bn]=p(e.substr(0,s)),a[Qn]=p(e.substr(s)),u(t).bigHour=!0}),ee("hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[Bn]=p(e.substr(0,s)),a[Qn]=p(e.substr(s,2)),a[Xn]=p(e.substr(n)),u(t).bigHour=!0}),ee("Hmm",function(e,a,t){var s=e.length-2;a[Bn]=p(e.substr(0,s)),a[Qn]=p(e.substr(s))}),ee("Hmmss",function(e,a,t){var s=e.length-4,n=e.length-2;a[Bn]=p(e.substr(0,s)),a[Qn]=p(e.substr(s,2)),a[Xn]=p(e.substr(n))});var cr,Yr=/[ap]\.?m?\.?/i,yr=J("Hours",!0),pr={calendar:Yn,longDateFormat:yn,invalidDate:pn,ordinal:fn,ordinalParse:kn,relativeTime:Dn,months:nr,monthsShort:rr,week:or,weekdays:mr,weekdaysMin:lr,weekdaysShort:ur,meridiemParse:Yr},fr={},kr=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T|)(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Dr=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T|)(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Tr=/Z|[+-]\d\d(?::?\d\d)?/,gr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],wr=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],vr=/^\/?Date\((\-?\d+)/i;e.createFromInputFallback=D("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),e.ISO_8601=function(){};var Sr=D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ya.apply(null,arguments);return this.isValid()&&e.isValid()?this>e?this:e:M()}),Hr=D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ya.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:M()}),br=function(){return Date.now?Date.now():+new Date};ga("Z",":"),ga("ZZ",""),q("Z",In),q("ZZ",In),ee(["Z","ZZ"],function(e,a,t){t._useUTC=!0,t._tzm=wa(In,e)});var jr=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var xr=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Pr=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Ja.fn=ka.prototype;var Wr=Ia(1,"add"),Ar=Ia(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Er=D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Tt("gggg","weekYear"),Tt("ggggg","weekYear"),Tt("GGGG","isoWeekYear"),Tt("GGGGG","isoWeekYear"),A("weekYear","gg"),A("isoWeekYear","GG"),z("weekYear",1),z("isoWeekYear",1),q("G",Cn),q("g",Cn),q("GG",An,jn),q("gg",An,jn),q("GGGG",On,Pn),q("gggg",On,Pn),q("GGGGG",Jn,Wn),q("ggggg",Jn,Wn),ae(["gggg","ggggg","GGGG","GGGGG"],function(e,a,t,s){a[s.substr(0,2)]=p(e)}),ae(["gg","GG"],function(a,t,s,n){t[n]=e.parseTwoDigitYear(a)}),U("Q",0,"Qo","quarter"),A("quarter","Q"),z("quarter",7),q("Q",bn),ee("Q",function(e,a){a[Zn]=3*(p(e)-1)}),U("D",["DD",2],"Do","date"),A("date","D"),z("date",9),q("D",An),q("DD",An,jn),q("Do",function(e,a){return e?a._ordinalParse:a._ordinalParseLenient}),ee(["D","DD"],qn),ee("Do",function(e,a){a[qn]=p(e.match(An)[0],10)});var Fr=J("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),A("dayOfYear","DDD"),z("dayOfYear",4),q("DDD",zn),q("DDDD",xn),ee(["DDD","DDDD"],function(e,a,t){t._dayOfYear=p(e)}),U("m",["mm",2],0,"minute"),A("minute","m"),z("minute",14),q("m",An),q("mm",An,jn),ee(["m","mm"],Qn);var zr=J("Minutes",!1);U("s",["ss",2],0,"second"),A("second","s"),z("second",15),q("s",An),q("ss",An,jn),ee(["s","ss"],Xn);var Or=J("Seconds",!1);U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),A("millisecond","ms"),z("millisecond",16),q("S",zn,bn),q("SS",zn,jn),q("SSS",zn,xn);var Jr;for(Jr="SSSS";Jr.length<=9;Jr+="S")q(Jr,Rn);for(Jr="S";Jr.length<=9;Jr+="S")ee(Jr,Pt);var Rr=J("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var Cr=c.prototype;Cr.add=Wr,Cr.calendar=Va,Cr.clone=$a,Cr.diff=et,Cr.endOf=lt,Cr.format=nt,Cr.from=rt,Cr.fromNow=_t,Cr.to=dt,Cr.toNow=it,Cr.get=G,Cr.invalidAt=kt,Cr.isAfter=Ka,Cr.isBefore=Za,Cr.isBetween=qa,Cr.isSame=Ba,Cr.isSameOrAfter=Qa,Cr.isSameOrBefore=Xa,Cr.isValid=pt,Cr.lang=Er,Cr.locale=ot,Cr.localeData=mt,Cr.max=Hr,Cr.min=Sr,Cr.parsingFlags=ft,Cr.set=I,Cr.startOf=ut,Cr.subtract=Ar,Cr.toArray=ct,Cr.toObject=Yt,Cr.toDate=Lt,Cr.toISOString=st,Cr.toJSON=yt,Cr.toString=tt,Cr.unix=ht,Cr.valueOf=Mt,Cr.creationData=Dt,Cr.year=ir,Cr.isLeapYear=ce,Cr.weekYear=gt,Cr.isoWeekYear=wt,Cr.quarter=Cr.quarters=jt,Cr.month=oe,Cr.daysInMonth=me,Cr.week=Cr.weeks=ve,Cr.isoWeek=Cr.isoWeeks=Se,Cr.weeksInYear=St,Cr.isoWeeksInYear=vt,Cr.date=Fr,Cr.day=Cr.days=Ee,Cr.weekday=Fe,Cr.isoWeekday=ze,Cr.dayOfYear=xt,Cr.hour=Cr.hours=yr,Cr.minute=Cr.minutes=zr,Cr.second=Cr.seconds=Or,Cr.millisecond=Cr.milliseconds=Rr,Cr.utcOffset=Ha,Cr.utc=ja,Cr.local=xa,Cr.parseZone=Pa,Cr.hasAlignedHourOffset=Wa,Cr.isDST=Aa,Cr.isLocal=Fa,Cr.isUtcOffset=za,Cr.isUtc=Oa,Cr.isUTC=Oa,Cr.zoneAbbr=Wt,Cr.zoneName=At,Cr.dates=D("dates accessor is deprecated. Use date instead.",Fr),Cr.months=D("months accessor is deprecated. Use month instead",oe),Cr.years=D("years accessor is deprecated. Use year instead",ir),Cr.zone=D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",ba),Cr.isDSTShifted=D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ea);var Gr=Cr,Ir=S.prototype;Ir.calendar=H,Ir.longDateFormat=b,Ir.invalidDate=j,Ir.ordinal=x,Ir.preparse=zt,Ir.postformat=zt,Ir.relativeTime=P,Ir.pastFuture=W,Ir.set=w,Ir.months=ne,Ir.monthsShort=re,Ir.monthsParse=de,Ir.monthsRegex=le,Ir.monthsShortRegex=ue,Ir.week=Te,Ir.firstDayOfYear=we,Ir.firstDayOfWeek=ge,Ir.weekdays=je,Ir.weekdaysMin=Pe,Ir.weekdaysShort=xe,Ir.weekdaysParse=Ae,Ir.weekdaysRegex=Oe,Ir.weekdaysShortRegex=Je,Ir.weekdaysMinRegex=Re,Ir.isPM=Ve,Ir.meridiem=$e,Be("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10,t=1===p(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t}}),e.lang=D("moment.lang is deprecated. Use moment.locale instead.",Be),e.langData=D("moment.langData is deprecated. Use moment.localeData instead.",ea);var Nr=Math.abs,Ur=ts("ms"),Vr=ts("s"),$r=ts("m"),Kr=ts("h"),Zr=ts("d"),qr=ts("w"),Br=ts("M"),Qr=ts("y"),Xr=ns("milliseconds"),e_=ns("seconds"),a_=ns("minutes"),t_=ns("hours"),s_=ns("days"),n_=ns("months"),r_=ns("years"),__=Math.round,d_={s:45,m:45,h:22,d:26,M:11},i_=Math.abs,o_=ka.prototype;o_.abs=Vt,o_.add=Kt,o_.subtract=Zt,o_.as=es,o_.asMilliseconds=Ur,o_.asSeconds=Vr,o_.asMinutes=$r,o_.asHours=Kr,o_.asDays=Zr,o_.asWeeks=qr,o_.asMonths=Br,o_.asYears=Qr,o_.valueOf=as,o_._bubble=Bt,o_.get=ss,o_.milliseconds=Xr,o_.seconds=e_,o_.minutes=a_,o_.hours=t_,o_.days=s_,o_.weeks=rs,o_.months=n_,o_.years=r_,o_.humanize=ms,o_.toISOString=us,o_.toString=us,o_.toJSON=us,o_.locale=ot,o_.localeData=mt,o_.toIsoString=D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",us),o_.lang=Er,U("X",0,0,"unix"),U("x",0,0,"valueOf"),q("x",Cn),q("X",Nn),ee("X",function(e,a,t){t._d=new Date(1e3*parseFloat(e,10))}),ee("x",function(e,a,t){t._d=new Date(p(e))}),e.version="2.15.2",a(Ya),e.fn=Gr,e.min=pa,e.max=fa,e.now=br,e.utc=o,e.unix=Et,e.months=Ct,e.isDate=r,e.locale=Be,e.invalid=M,e.duration=Ja,e.isMoment=Y,e.weekdays=It,e.parseZone=Ft,e.localeData=ea,e.isDuration=Da,e.monthsShort=Gt,e.weekdaysMin=Ut,e.defineLocale=Qe,e.updateLocale=Xe,e.locales=aa,e.weekdaysShort=Nt,e.normalizeUnits=E,e.relativeTimeRounding=is,e.relativeTimeThreshold=os,e.calendarFormat=Ua,e.prototype=Gr;var m_=e,u_=(m_.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,a,t){return 12>e?t?"vm":"VM":t?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"}),l_=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&10>=e%100?3:e%100>=11?4:5},M_={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},h_=function(e){return function(a,t,s,n){var r=l_(a),_=M_[e][l_(a)];return 2===r&&(_=_[t?0:1]),_.replace(/%d/i,a)}},L_=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],c_=(m_.defineLocale("ar-ly",{months:L_,monthsShort:L_,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return 12>e?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:h_("s"),m:h_("m"),mm:h_("m"),h:h_("h"),hh:h_("h"),d:h_("d"),dd:h_("d"),M:h_("M"),MM:h_("M"),y:h_("y"),yy:h_("y")},preparse:function(e){return e.replace(/\u200f/g,"").replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return u_[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}}),m_.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}}),{1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"}),Y_={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},y_=(m_.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return 12>e?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return Y_[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return c_[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}}),m_.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}}),{1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"}),p_={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},f_=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&10>=e%100?3:e%100>=11?4:5},k_={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},D_=function(e){return function(a,t,s,n){var r=f_(a),_=k_[e][f_(a)];return 2===r&&(_=_[t?0:1]),_.replace(/%d/i,a)}},T_=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"],g_=(m_.defineLocale("ar",{months:T_,monthsShort:T_,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,a,t){return 12>e?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:D_("s"),m:D_("m"),mm:D_("m"),h:D_("h"),hh:D_("h"),d:D_("d"),dd:D_("d"),M:D_("M"),MM:D_("M"),y:D_("y"),yy:D_("y")},preparse:function(e){return e.replace(/\u200f/g,"").replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return p_[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return y_[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}}),{1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"}),w_=(m_.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(e){return/^(gündüz|axşam)$/.test(e)},meridiem:function(e,a,t){return 4>e?"gecə":12>e?"səhər":17>e?"gündüz":"axşam"},ordinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(e){if(0===e)return e+"-ıncı";var a=e%10,t=e%100-a,s=e>=100?100:null;return e+(g_[a]||g_[t]||g_[s])},week:{dow:1,doy:7}}),m_.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:Ms,mm:Ms,h:Ms,hh:Ms,d:"дзень",dd:Ms,M:"месяц",MM:Ms,y:"год",yy:Ms},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,a,t){return 4>e?"ночы":12>e?"раніцы":17>e?"дня":"вечара"},ordinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e%10!==2&&e%10!==3||e%100===12||e%100===13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,doy:7}}),m_.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-ев":0===t?e+"-ен":t>10&&20>t?e+"-ти":1===a?e+"-ви":2===a?e+"-ри":7===a||8===a?e+"-ми":e+"-ти"},week:{dow:1,doy:7}}),{1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"}),v_={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},S_=(m_.defineLocale("bn",{months:"জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return v_[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return w_[e]})},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(e,a){return 12===e&&(e=0),"রাত"===a&&e>=4||"দুপুর"===a&&5>e||"বিকাল"===a?e+12:e},meridiem:function(e,a,t){return 4>e?"রাত":10>e?"সকাল":17>e?"দুপুর":20>e?"বিকাল":"রাত"},week:{dow:0,doy:6}}),{1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"}),H_={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"},b_=(m_.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(e){return H_[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return S_[e]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(e,a){return 12===e&&(e=0),"མཚན་མོ"===a&&e>=4||"ཉིན་གུང"===a&&5>e||"དགོང་དག"===a?e+12:e},meridiem:function(e,a,t){return 4>e?"མཚན་མོ":10>e?"ཞོགས་ཀས":17>e?"ཉིན་གུང":20>e?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}}),m_.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:hs,h:"un eur",hh:"%d eur",d:"un devezh",dd:hs,M:"ur miz",MM:hs,y:"ur bloaz",yy:Ls},ordinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){var a=1===e?"añ":"vet";return e+a},week:{dow:1,doy:4}}),m_.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:ps,mm:ps,h:ps,hh:ps,d:"dan",dd:ps,M:"mjesec",MM:ps,y:"godinu",yy:ps},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),m_.defineLocale("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,a){var t=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return("w"===a||"W"===a)&&(t="a"),e+t},week:{dow:1,doy:4}}),"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")),j_="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),x_=(m_.defineLocale("cs",{months:b_,monthsShort:j_,monthsParse:function(e,a){var t,s=[];for(t=0;12>t;t++)s[t]=new RegExp("^"+e[t]+"$|^"+a[t]+"$","i");return s}(b_,j_),shortMonthsParse:function(e){var a,t=[];for(a=0;12>a;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(j_),longMonthsParse:function(e){var a,t=[];for(a=0;12>a;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(b_),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:ks,m:ks,mm:ks,h:ks,hh:ks,d:ks,dd:ks,M:ks,MM:ks,y:ks,yy:ks},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){var a=/сехет$/i.exec(e)?"рен":/ҫул$/i.exec(e)?"тан":"ран";return e+a},past:"%s каялла",s:"пӗр-ик ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},ordinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}}),m_.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var a=e,t="",s=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return a>20?t=40===a||50===a||60===a||80===a||100===a?"fed":"ain":a>0&&(t=s[a]),e+t},week:{dow:1,doy:4}}),m_.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY HH:mm"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:Ds,mm:"%d Minuten",h:Ds,hh:"%d Stunden",d:Ds,dd:Ds,M:Ds,MM:Ds,y:Ds,yy:Ds},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:Ts,mm:"%d Minuten",h:Ts,hh:"%d Stunden",d:Ts,dd:Ts,M:Ts,MM:Ts,y:Ts,yy:Ts},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"]),P_=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],W_=(m_.defineLocale("dv",{months:x_,monthsShort:x_,weekdays:P_,weekdaysShort:P_,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(e){return"މފ"===e},meridiem:function(e,a,t){return 12>e?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:7,doy:12}}),m_.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,a){return/D/.test(a.substring(0,a.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,a,t){return e>11?t?"μμ":"ΜΜ":t?"πμ":"ΠΜ"},isPM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,a){var t=this._calendarEl[e],s=a&&a.hours();return g(t)&&(t=t.apply(a)),t.replace("{}",s%12===1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}}),m_.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),m_.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t}}),m_.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),m_.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),m_.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),m_.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-an de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,a,t){return e>11?t?"p.t.m.":"P.T.M.":t?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}}),"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),A_="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),E_=(m_.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?A_[e.month()]:W_[e.month()]},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),F_="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),z_=(m_.defineLocale("es",{
months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?F_[e.month()]:E_[e.month()]},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),m_.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:gs,m:gs,mm:gs,h:gs,hh:gs,d:gs,dd:"%d päeva",M:gs,MM:gs,y:gs,yy:gs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),{1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"}),O_={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"},J_=(m_.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(e){return/بعد از ظهر/.test(e)},meridiem:function(e,a,t){return 12>e?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return O_[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return z_[e]}).replace(/,/g,"،")},ordinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}}),"nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")),R_=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",J_[7],J_[8],J_[9]],C_=(m_.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:ws,m:ws,mm:ws,h:ws,hh:ws,d:ws,dd:ws,M:ws,MM:ws,y:ws,yy:ws},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){return e+(1===e?"er":"e")}}),m_.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){return e+(1===e?"er":"e")},week:{dow:1,doy:4}}),m_.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(e){return e+(1===e?"er":"")},week:{dow:1,doy:4}}),"jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),G_="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),I_=(m_.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?G_[e.month()]:C_[e.month()]},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"]),N_=["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],U_=["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],V_=["Did","Dil","Dim","Dic","Dia","Dih","Dis"],$_=["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],K_=(m_.defineLocale("gd",{months:I_,monthsShort:N_,monthsParseExact:!0,weekdays:U_,weekdaysShort:V_,weekdaysMin:$_,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},ordinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){var a=1===e?"d":e%10===2?"na":"mh";return e+a},week:{dow:1,doy:4}}),m_.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),m_.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e%10===0&&10!==e?e+" שנה":e+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(e){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)},meridiem:function(e,a,t){return 5>e?"לפנות בוקר":10>e?"בבוקר":12>e?t?'לפנה"צ':"לפני הצהריים":18>e?t?'אחה"צ':"אחרי הצהריים":"בערב"}}),{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"}),Z_={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},q_=(m_.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return Z_[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return K_[e]})},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(e,a){return 12===e&&(e=0),"रात"===a?4>e?e:e+12:"सुबह"===a?e:"दोपहर"===a?e>=10?e:e+12:"शाम"===a?e+12:void 0},meridiem:function(e,a,t){return 4>e?"रात":10>e?"सुबह":17>e?"दोपहर":20>e?"शाम":"रात"},week:{dow:0,doy:6}}),m_.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:Ss,mm:Ss,h:Ss,hh:Ss,d:"dan",dd:Ss,M:"mjesec",MM:Ss,y:"godinu",yy:Ss},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),"vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")),B_=(m_.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,a,t){return 12>e?t===!0?"de":"DE":t===!0?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return bs.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return bs.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:Hs,m:Hs,mm:Hs,h:Hs,hh:Hs,d:Hs,dd:Hs,M:Hs,MM:Hs,y:Hs,yy:Hs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),m_.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(e){return/^(ցերեկվա|երեկոյան)$/.test(e)},meridiem:function(e){return 4>e?"գիշերվա":12>e?"առավոտվա":17>e?"ցերեկվա":"երեկոյան"},ordinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(e,a){switch(a){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ";default:return e}},week:{dow:1,doy:7}}),m_.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"siang"===a?e>=11?e:e+12:"sore"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return 11>e?"pagi":15>e?"siang":19>e?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),m_.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:xs,m:xs,mm:xs,h:"klukkustund",hh:xs,d:xs,dd:xs,M:xs,MM:xs,y:xs,yy:xs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),m_.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",LTS:"Ah時m分s秒",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah時m分",LLLL:"YYYY年M月D日Ah時m分 dddd"},meridiemParse:/午前|午後/i,isPM:function(e){return"午後"===e},meridiem:function(e,a,t){return 12>e?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},ordinalParse:/\d{1,2}日/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}}),m_.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,a){return 12===e&&(e=0),"enjing"===a?e:"siyang"===a?e>=11?e:e+12:"sonten"===a||"ndalu"===a?e+12:void 0},meridiem:function(e,a,t){return 11>e?"enjing":15>e?"siyang":19>e?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}}),m_.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში"},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(e)?e.replace(/წელი$/,"წლის წინ"):void 0},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},ordinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(e){return 0===e?e:1===e?e+"-ლი":20>e||100>=e&&e%20===0||e%100===0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}}),{0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"}),Q_=(m_.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},ordinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(e){var a=e%10,t=e>=100?100:null;return e+(B_[e]||B_[a]||B_[t])},week:{dow:1,doy:7}}),m_.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}}),m_.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 m분",LTS:"A h시 m분 s초",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h시 m분",LLLL:"YYYY년 MMMM D일 dddd A h시 m분"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"일분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},ordinalParse:/\d{1,2}일/,ordinal:"%d일",meridiemParse:/오전|오후/,isPM:function(e){return"오후"===e},meridiem:function(e,a,t){return 12>e?"오전":"오후"}}),{0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"}),X_=(m_.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кече саат] LT",lastWeek:"[Өткен аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},ordinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(e){var a=e%10,t=e>=100?100:null;return e+(Q_[e]||Q_[a]||Q_[t])},week:{dow:1,doy:7}}),m_.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:Ws,past:As,s:"e puer Sekonnen",m:Ps,mm:"%d Minutten",h:Ps,hh:"%d Stonnen",d:Ps,dd:"%d Deeg",M:Ps,MM:"%d Méint",y:Ps,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("lo",{
months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(e){return"ຕອນແລງ"===e},meridiem:function(e,a,t){return 12>e?"ຕອນເຊົ້າ":"ຕອນແລງ"},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},ordinalParse:/(ທີ່)\d{1,2}/,ordinal:function(e){return"ທີ່"+e}}),{m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"}),ed=(m_.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:Fs,m:zs,mm:Rs,h:zs,hh:Rs,d:zs,dd:Rs,M:zs,MM:Rs,y:zs,yy:Rs},ordinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}}),{m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")}),ad=(m_.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:Ns,m:Is,mm:Gs,h:Is,hh:Gs,d:Is,dd:Gs,M:Is,MM:Gs,y:Is,yy:Gs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{words:{m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&4>=e?a[1]:a[2]},translate:function(e,a,t){var s=ad.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+ad.correctGrammaticalCase(e,s)}}),td=(m_.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var e=["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",m:ad.translate,mm:ad.translate,h:ad.translate,hh:ad.translate,d:"dan",dd:ad.translate,M:"mjesec",MM:ad.translate,y:"godinu",yy:ad.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),m_.defineLocale("mi",{months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),m_.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-ев":0===t?e+"-ен":t>10&&20>t?e+"-ти":1===a?e+"-ви":2===a?e+"-ри":7===a||8===a?e+"-ми":e+"-ти"},week:{dow:1,doy:7}}),m_.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(e,a){return 12===e&&(e=0),"രാത്രി"===a&&e>=4||"ഉച്ച കഴിഞ്ഞ്"===a||"വൈകുന്നേരം"===a?e+12:e},meridiem:function(e,a,t){return 4>e?"രാത്രി":12>e?"രാവിലെ":17>e?"ഉച്ച കഴിഞ്ഞ്":20>e?"വൈകുന്നേരം":"രാത്രി"}}),{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"}),sd={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},nd=(m_.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:Us,m:Us,mm:Us,h:Us,hh:Us,d:Us,dd:Us,M:Us,MM:Us,y:Us,yy:Us},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return sd[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return td[e]})},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(e,a){return 12===e&&(e=0),"रात्री"===a?4>e?e:e+12:"सकाळी"===a?e:"दुपारी"===a?e>=10?e:e+12:"सायंकाळी"===a?e+12:void 0},meridiem:function(e,a,t){return 4>e?"रात्री":10>e?"सकाळी":17>e?"दुपारी":20>e?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}}),m_.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?e>=11?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return 11>e?"pagi":15>e?"tengahari":19>e?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),m_.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?e>=11?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return 11>e?"pagi":15>e?"tengahari":19>e?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),{1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"}),rd={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"},_d=(m_.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(e){return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(e){return rd[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return nd[e]})},week:{dow:1,doy:4}}),m_.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"}),dd={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},id=(m_.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return dd[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return _d[e]})},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function(e,a){return 12===e&&(e=0),"राति"===a?4>e?e:e+12:"बिहान"===a?e:"दिउँसो"===a?e>=10?e:e+12:"साँझ"===a?e+12:void 0},meridiem:function(e,a,t){return 3>e?"राति":12>e?"बिहान":16>e?"दिउँसो":20>e?"साँझ":"राति"},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,doy:6}}),"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),od="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),md=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],ud=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,ld=(m_.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return/-MMM-/.test(a)?od[e.month()]:id[e.month()]},monthsRegex:ud,monthsShortRegex:ud,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:md,longMonthsParse:md,shortMonthsParse:md,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),m_.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"}),Md={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"},hd=(m_.defineLocale("pa-in",{months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(e){return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,function(e){return Md[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return ld[e]})},meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(e,a){return 12===e&&(e=0),"ਰਾਤ"===a?4>e?e:e+12:"ਸਵੇਰ"===a?e:"ਦੁਪਹਿਰ"===a?e>=10?e:e+12:"ਸ਼ਾਮ"===a?e+12:void 0},meridiem:function(e,a,t){return 4>e?"ਰਾਤ":10>e?"ਸਵੇਰ":17>e?"ਦੁਪਹਿਰ":20>e?"ਸ਼ਾਮ":"ਰਾਤ"},week:{dow:0,doy:6}}),"styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")),Ld="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),cd=(m_.defineLocale("pl",{months:function(e,a){return""===a?"("+Ld[e.month()]+"|"+hd[e.month()]+")":/D MMMM/.test(a)?Ld[e.month()]:hd[e.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:$s,mm:$s,h:$s,hh:$s,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:$s,y:"rok",yy:$s},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("pt-br",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº"}),m_.defineLocale("pt",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),m_.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:Ks,h:"o oră",hh:Ks,d:"o zi",dd:Ks,M:"o lună",MM:Ks,y:"un an",yy:Ks},week:{dow:1,doy:7}}),[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i]),Yd=(m_.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:cd,longMonthsParse:cd,shortMonthsParse:cd,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В следующее] dddd [в] LT";case 1:case 2:case 4:return"[В следующий] dddd [в] LT";case 3:case 5:case 6:return"[В следующую] dddd [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:qs,mm:qs,h:"час",hh:qs,d:"день",dd:qs,M:"месяц",MM:qs,y:"год",yy:qs},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,a,t){return 4>e?"ночи":12>e?"утра":17>e?"дня":"вечера"},ordinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:7}}),m_.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},ordinalParse:/\d{1,2} වැනි/,ordinal:function(e){return e+" වැනි"},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(e){return"ප.ව."===e||"පස් වරු"===e},meridiem:function(e,a,t){return e>11?t?"ප.ව.":"පස් වරු":t?"පෙ.ව.":"පෙර වරු"}}),"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")),yd="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),pd=(m_.defineLocale("sk",{months:Yd,monthsShort:yd,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:Qs,m:Qs,mm:Qs,h:Qs,hh:Qs,d:Qs,dd:Qs,M:Qs,MM:Qs,y:Qs,yy:Qs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:Xs,m:Xs,mm:Xs,h:Xs,hh:Xs,d:Xs,dd:Xs,M:Xs,MM:Xs,y:Xs,yy:Xs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),m_.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,a,t){return 12>e?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&4>=e?a[1]:a[2]},translate:function(e,a,t){var s=pd.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+pd.correctGrammaticalCase(e,s)}}),fd=(m_.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){var e=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:pd.translate,mm:pd.translate,h:pd.translate,hh:pd.translate,d:"дан",dd:pd.translate,M:"месец",MM:pd.translate,y:"годину",yy:pd.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),{words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&4>=e?a[1]:a[2]},translate:function(e,a,t){var s=fd.words[t];return 1===t.length?a?s[0]:s[1]:e+" "+fd.correctGrammaticalCase(e,s)}}),kd=(m_.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var e=["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:fd.translate,mm:fd.translate,h:fd.translate,hh:fd.translate,d:"dan",dd:fd.translate,M:"mesec",MM:fd.translate,y:"godinu",yy:fd.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),m_.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,a,t){return 11>e?"ekuseni":15>e?"emini":19>e?"entsambama":"ebusuku"},meridiemHour:function(e,a){return 12===e&&(e=0),"ekuseni"===a?e:"emini"===a?e>=11?e:e+12:"entsambama"===a||"ebusuku"===a?0===e?0:e+12:void 0},ordinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}}),m_.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"e":1===a?"a":2===a?"a":"e";return e+t},week:{dow:1,doy:4}}),m_.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}}),{1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"}),Dd={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"},Td=(m_.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinalParse:/\d{1,2}வது/,ordinal:function(e){return e+"வது"},preparse:function(e){return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,function(e){return Dd[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return kd[e]})},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(e,a,t){return 2>e?" யாமம்":6>e?" வைகறை":10>e?" காலை":14>e?" நண்பகல்":18>e?" எற்பாடு":22>e?" மாலை":" யாமம்"},meridiemHour:function(e,a){return 12===e&&(e=0),"யாமம்"===a?2>e?e:e+12:"வைகறை"===a||"காலை"===a?e:"நண்பகல்"===a&&e>=10?e:e+12},week:{dow:0,doy:6}}),m_.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},ordinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function(e,a){return 12===e&&(e=0),"రాత్రి"===a?4>e?e:e+12:"ఉదయం"===a?e:"మధ్యాహ్నం"===a?e>=10?e:e+12:"సాయంత్రం"===a?e+12:void 0},meridiem:function(e,a,t){return 4>e?"రాత్రి":10>e?"ఉదయం":17>e?"మధ్యాహ్నం":20>e?"సాయంత్రం":"రాత్రి"},week:{dow:0,doy:6}}),m_.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,a,t){return 12>e?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}}),m_.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"[Ngayon sa] LT",nextDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),"pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")),gd=(m_.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:en,past:an,s:"puS lup",m:"wa’ tup",mm:tn,h:"wa’ rep",hh:tn,d:"wa’ jaj",dd:tn,M:"wa’ jar",MM:tn,y:"wa’ DIS",yy:tn},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"}),wd=(m_.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(e){if(0===e)return e+"'ıncı";var a=e%10,t=e%100-a,s=e>=100?100:null;return e+(gd[a]||gd[t]||gd[s])},week:{dow:1,doy:7}}),m_.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,a,t){return e>11?t?"d'o":"D'O":t?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:nn,m:nn,mm:nn,h:nn,hh:nn,d:nn,dd:nn,M:nn,MM:nn,y:nn,yy:nn},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),m_.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}}),m_.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}}),m_.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:dn,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:on("[Сьогодні "),nextDay:on("[Завтра "),lastDay:on("[Вчора "),nextWeek:on("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return on("[Минулої] dddd [").call(this);case 1:case 2:case 4:return on("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:_n,mm:_n,h:"годину",hh:_n,d:"день",dd:_n,M:"місяць",MM:_n,y:"рік",yy:_n},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,a,t){return 4>e?"ночі":12>e?"ранку":17>e?"дня":"вечора"},ordinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}}),m_.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}}),m_.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,a,t){return 12>e?t?"sa":"SA":t?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),m_.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10,t=1===~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th";return e+t},week:{dow:1,doy:4}}),m_.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm分",LTS:"Ah点m分s秒",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah点mm分",LLLL:"YYYY年MMMD日ddddAh点mm分",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah点mm分",llll:"YYYY年MMMD日ddddAh点mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"下午"===a||"晚上"===a?e+12:e>=11?e:e+12},meridiem:function(e,a,t){var s=100*e+a;return 600>s?"凌晨":900>s?"早上":1130>s?"上午":1230>s?"中午":1800>s?"下午":"晚上"},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[点整]":"[今天]LT"},nextDay:function(){return 0===this.minutes()?"[明天]Ah[点整]":"[明天]LT"},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[点整]":"[昨天]LT"},nextWeek:function(){var e,a;return e=m_().startOf("week"),a=this.diff(e,"days")>=7?"[下]":"[本]",0===this.minutes()?a+"dddAh点整":a+"dddAh点mm"},lastWeek:function(){var e,a;return e=m_().startOf("week"),a=this.unix()<e.unix()?"[上]":"[本]",0===this.minutes()?a+"dddAh点整":a+"dddAh点mm"},sameElse:"LL"},ordinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}}),m_.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm分",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah點mm分",LLLL:"YYYY年MMMD日ddddAh點mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah點mm分",llll:"YYYY年MMMD日ddddAh點mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"中午"===a?e>=11?e:e+12:"下午"===a||"晚上"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return 600>s?"凌晨":900>s?"早上":1130>s?"上午":1230>s?"中午":1800>s?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}}),m_.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm分",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah點mm分",LLLL:"YYYY年MMMD日ddddAh點mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah點mm分",llll:"YYYY年MMMD日ddddAh點mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,a){return 12===e&&(e=0),"凌晨"===a||"早上"===a||"上午"===a?e:"中午"===a?e>=11?e:e+12:"下午"===a||"晚上"===a?e+12:void 0},meridiem:function(e,a,t){var s=100*e+a;return 600>s?"凌晨":900>s?"早上":1130>s?"上午":1230>s?"中午":1800>s?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}}),m_);return wd.locale("en"),wd});
!function(t){"function"==typeof define&&define.amd?define(["jquery","moment"],t):"object"==typeof exports?module.exports=t(require("jquery"),require("moment")):t(jQuery,moment)}(function(t,e){function n(t){return it(t,Qt)}function i(t,e){e.left&&t.css({"border-left-width":1,"margin-left":e.left-1}),e.right&&t.css({"border-right-width":1,"margin-right":e.right-1})}function r(t){t.css({"margin-left":"","margin-right":"","border-left-width":"","border-right-width":""})}function s(){t("body").addClass("fc-not-allowed")}function o(){t("body").removeClass("fc-not-allowed")}function a(e,n,i){var r=Math.floor(n/e.length),s=Math.floor(n-r*(e.length-1)),o=[],a=[],u=[],h=0;l(e),e.each(function(n,i){var l=n===e.length-1?s:r,c=t(i).outerHeight(!0);c<l?(o.push(i),a.push(c),u.push(t(i).height())):h+=c}),i&&(n-=h,r=Math.floor(n/o.length),s=Math.floor(n-r*(o.length-1))),t(o).each(function(e,n){var i=e===o.length-1?s:r,l=a[e],h=u[e],c=i-(l-h);l<i&&t(n).height(c)})}function l(t){t.height("")}function u(e){var n=0;return e.find("> *").each(function(e,i){var r=t(i).outerWidth();r>n&&(n=r)}),n++,e.width(n),n}function h(t,e){var n,i=t.add(e);return i.css({position:"relative",left:-1}),n=t.outerHeight()-e.outerHeight(),i.css({position:"",left:""}),n}function c(e){var n=e.css("position"),i=e.parents().filter(function(){var e=t(this);return/(auto|scroll)/.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==n&&i.length?i:t(e[0].ownerDocument||document)}function d(t,e){var n=t.offset(),i=n.left-(e?e.left:0),r=n.top-(e?e.top:0);return{left:i,right:i+t.outerWidth(),top:r,bottom:r+t.outerHeight()}}function f(t,e){var n=t.offset(),i=p(t),r=n.left+w(t,"border-left-width")+i.left-(e?e.left:0),s=n.top+w(t,"border-top-width")+i.top-(e?e.top:0);return{left:r,right:r+t[0].clientWidth,top:s,bottom:s+t[0].clientHeight}}function g(t,e){var n=t.offset(),i=n.left+w(t,"border-left-width")+w(t,"padding-left")-(e?e.left:0),r=n.top+w(t,"border-top-width")+w(t,"padding-top")-(e?e.top:0);return{left:i,right:i+t.width(),top:r,bottom:r+t.height()}}function p(t){var e,n=t[0].offsetWidth-t[0].clientWidth,i=t[0].offsetHeight-t[0].clientHeight;return n=v(n),i=v(i),e={left:0,right:0,top:0,bottom:i},m()&&"rtl"==t.css("direction")?e.left=n:e.right=n,e}function v(t){return t=Math.max(0,t),t=Math.round(t)}function m(){return null===Xt&&(Xt=y()),Xt}function y(){var e=t("<div><div/></div>").css({position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}).appendTo("body"),n=e.children(),i=n.offset().left>e.offset().left;return e.remove(),i}function w(t,e){return parseFloat(t.css(e))||0}function S(t){return 1==t.which&&!t.ctrlKey}function b(t){var e=t.originalEvent.touches;return e&&e.length?e[0].pageX:t.pageX}function E(t){var e=t.originalEvent.touches;return e&&e.length?e[0].pageY:t.pageY}function D(t){return/^touch/.test(t.type)}function T(t){t.addClass("fc-unselectable").on("selectstart",H)}function C(t){t.removeClass("fc-unselectable").off("selectstart",H)}function H(t){t.preventDefault()}function R(t,e){var n={left:Math.max(t.left,e.left),right:Math.min(t.right,e.right),top:Math.max(t.top,e.top),bottom:Math.min(t.bottom,e.bottom)};return n.left<n.right&&n.top<n.bottom&&n}function x(t,e){return{left:Math.min(Math.max(t.left,e.left),e.right),top:Math.min(Math.max(t.top,e.top),e.bottom)}}function I(t){return{left:(t.left+t.right)/2,top:(t.top+t.bottom)/2}}function k(t,e){return{left:t.left-e.left,top:t.top-e.top}}function M(e){var n,i,r=[],s=[];for("string"==typeof e?s=e.split(/\s*,\s*/):"function"==typeof e?s=[e]:t.isArray(e)&&(s=e),n=0;n<s.length;n++)i=s[n],"string"==typeof i?r.push("-"==i.charAt(0)?{field:i.substring(1),order:-1}:{field:i,order:1}):"function"==typeof i&&r.push({func:i});return r}function B(t,e,n){var i,r;for(i=0;i<n.length;i++)if(r=L(t,e,n[i]))return r;return 0}function L(t,e,n){return n.func?n.func(t,e):N(t[n.field],e[n.field])*(n.order||1)}function N(e,n){return e||n?null==n?-1:null==e?1:"string"===t.type(e)||"string"===t.type(n)?String(e).localeCompare(String(n)):e-n:0}function z(t,e){var n,i,r,s,o=t.start,a=t.end,l=e.start,u=e.end;if(a>l&&o<u)return o>=l?(n=o.clone(),r=!0):(n=l.clone(),r=!1),a<=u?(i=a.clone(),s=!0):(i=u.clone(),s=!1),{start:n,end:i,isStart:r,isEnd:s}}function F(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days"),ms:t.time()-n.time()})}function A(t,n){return e.duration({days:t.clone().stripTime().diff(n.clone().stripTime(),"days")})}function G(t,n,i){return e.duration(Math.round(t.diff(n,i,!0)),i)}function V(t,e){var n,i,r;for(n=0;n<Jt.length&&(i=Jt[n],!((r=P(i,t,e))>=1&&vt(r)));n++);return i}function O(t,e){var n=V(t);return"week"===n&&"object"==typeof e&&e.days&&(n="day"),n}function P(t,n,i){return null!=i?i.diff(n,t,!0):e.isDuration(n)?n.as(t):n.end.diff(n.start,t,!0)}function _(t,e,n){var i;return tt(n)?(e-t)/n:(i=n.asMonths(),Math.abs(i)>=1&&vt(i)?e.diff(t,"months",!0)/i:e.diff(t,"days",!0)/n.asDays())}function W(t,e){var n,i;return tt(t)||tt(e)?t/e:(n=t.asMonths(),i=e.asMonths(),Math.abs(n)>=1&&vt(n)&&Math.abs(i)>=1&&vt(i)?n/i:t.asDays()/e.asDays())}function Y(t,n){var i;return tt(t)?e.duration(t*n):(i=t.asMonths(),Math.abs(i)>=1&&vt(i)?e.duration({months:i*n}):e.duration({days:t.asDays()*n}))}function q(t){return{start:t.start.clone(),end:t.end.clone()}}function U(t,e){return t=q(t),e.start&&(t.start=j(t.start,e)),e.end&&(t.end=K(t.end,e.end)),t}function j(t,e){return t=t.clone(),e.start&&(t=J(t,e.start)),e.end&&t>=e.end&&(t=e.end.clone().subtract(1)),t}function Z(t,e){return(!e.start||t>=e.start)&&(!e.end||t<e.end)}function $(t,e){return(!e.start||t.end>=e.start)&&(!e.end||t.start<e.end)}function Q(t,e){return(!e.start||t.start>=e.start)&&(!e.end||t.end<=e.end)}function X(t,e){return(t.start&&e.start&&t.start.isSame(e.start)||!t.start&&!e.start)&&(t.end&&e.end&&t.end.isSame(e.end)||!t.end&&!e.end)}function K(t,e){return(t.isBefore(e)?t:e).clone()}function J(t,e){return(t.isAfter(e)?t:e).clone()}function tt(t){return Boolean(t.hours()||t.minutes()||t.seconds()||t.milliseconds())}function et(t){return"[object Date]"===Object.prototype.toString.call(t)||t instanceof Date}function nt(t){return/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(t)}function it(t,e){var n,i,r,s,o,a,l={};if(e)for(n=0;n<e.length;n++){for(i=e[n],r=[],s=t.length-1;s>=0;s--)if("object"==typeof(o=t[s][i]))r.unshift(o);else if(void 0!==o){l[i]=o;break}r.length&&(l[i]=it(r))}for(n=t.length-1;n>=0;n--){a=t[n];for(i in a)i in l||(l[i]=a[i])}return l}function rt(t){var e=function(){};return e.prototype=t,new e}function st(t,e){for(var n in t)ot(t,n)&&(e[n]=t[n])}function ot(t,e){return te.call(t,e)}function at(e){return/undefined|null|boolean|number|string/.test(t.type(e))}function lt(e,n,i){if(t.isFunction(e)&&(e=[e]),e){var r,s;for(r=0;r<e.length;r++)s=e[r].apply(n,i)||s;return s}}function ut(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t]}function ht(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function ct(t){return t.replace(/&.*?;/g,"")}function dt(e){var n=[];return t.each(e,function(t,e){null!=e&&n.push(t+":"+e)}),n.join(";")}function ft(e){var n=[];return t.each(e,function(t,e){null!=e&&n.push(t+'="'+ht(e)+'"')}),n.join(" ")}function gt(t){return t.charAt(0).toUpperCase()+t.slice(1)}function pt(t,e){return t-e}function vt(t){return t%1==0}function mt(t,e){var n=t[e];return function(){return n.apply(t,arguments)}}function yt(t,e,n){var i,r,s,o,a,l=function(){var u=+new Date-o;u<e?i=setTimeout(l,e-u):(i=null,n||(a=t.apply(s,r),s=r=null))};return function(){s=this,r=arguments,o=+new Date;var u=n&&!i;return i||(i=setTimeout(l,e)),u&&(a=t.apply(s,r),s=r=null),a}}function wt(n,i,r){var s,o,a,l,u=n[0],h=1==n.length&&"string"==typeof u;return e.isMoment(u)||et(u)||void 0===u?l=e.apply(null,n):(s=!1,o=!1,h?ee.test(u)?(u+="-01",n=[u],s=!0,o=!0):(a=ne.exec(u))&&(s=!a[5],o=!0):t.isArray(u)&&(o=!0),l=i||s?e.utc.apply(e,n):e.apply(null,n),s?(l._ambigTime=!0,l._ambigZone=!0):r&&(o?l._ambigZone=!0:h&&l.utcOffset(u))),l._fullCalendar=!0,l}function St(t){return"en"!==t.locale()?t.clone().locale("en"):t}function bt(){}function Et(t,e){var n;return ot(e,"constructor")&&(n=e.constructor),"function"!=typeof n&&(n=e.constructor=function(){t.apply(this,arguments)}),n.prototype=rt(t.prototype),st(e,n.prototype),st(t,n),n}function Dt(t,e){st(e,t.prototype)}function Tt(t,e){t.then=function(n){return"function"==typeof n&&n(e),t}}function Ct(t){t.then=function(e,n){return"function"==typeof n&&n(),t}}function Ht(t,e){return!t&&!e||!(!t||!e)&&(t.component===e.component&&Rt(t,e)&&Rt(e,t))}function Rt(t,e){for(var n in t)if(!/^(component|left|right|top|bottom)$/.test(n)&&t[n]!==e[n])return!1;return!0}function xt(t){return{start:t.start.clone(),end:t.end?t.end.clone():null,allDay:t.allDay}}function It(t){var e=Mt(t);return"background"===e||"inverse-background"===e}function kt(t){return"inverse-background"===Mt(t)}function Mt(t){return ut((t.source||{}).rendering,t.rendering)}function Bt(t){var e,n,i={};for(e=0;e<t.length;e++)n=t[e],(i[n._id]||(i[n._id]=[])).push(n);return i}function Lt(t,e){return t.start-e.start}function Nt(n){var i,r,s,o,a=Zt.dataAttrPrefix;return a&&(a+="-"),i=n.data(a+"event")||null,i&&(i="object"==typeof i?t.extend({},i):{},r=i.start,null==r&&(r=i.time),s=i.duration,o=i.stick,delete i.start,delete i.time,delete i.duration,delete i.stick),null==r&&(r=n.data(a+"start")),null==r&&(r=n.data(a+"time")),null==s&&(s=n.data(a+"duration")),null==o&&(o=n.data(a+"stick")),r=null!=r?e.duration(r):null,s=null!=s?e.duration(s):null,o=Boolean(o),{eventProps:i,startTime:r,duration:s,stick:o}}function zt(t,e){var n,i;for(n=0;n<e.length;n++)if(i=e[n],i.leftCol<=t.rightCol&&i.rightCol>=t.leftCol)return!0;return!1}function Ft(t,e){return t.leftCol-e.leftCol}function At(t){var e,n,i,r=[];for(e=0;e<t.length;e++){for(n=t[e],i=0;i<r.length&&Ot(n,r[i]).length;i++);n.level=i,(r[i]||(r[i]=[])).push(n)}return r}function Gt(t){var e,n,i,r,s;for(e=0;e<t.length;e++)for(n=t[e],i=0;i<n.length;i++)for(r=n[i],r.forwardSegs=[],s=e+1;s<t.length;s++)Ot(r,t[s],r.forwardSegs)}function Vt(t){var e,n,i=t.forwardSegs,r=0;if(void 0===t.forwardPressure){for(e=0;e<i.length;e++)n=i[e],Vt(n),r=Math.max(r,1+n.forwardPressure);t.forwardPressure=r}}function Ot(t,e,n){n=n||[];for(var i=0;i<e.length;i++)Pt(t,e[i])&&n.push(e[i]);return n}function Pt(t,e){return t.bottom>e.top&&t.top<e.bottom}function _t(t){this.items=t||[]}function Wt(e,n){function i(t){n=t}function r(){var i=n.layout;p=e.opt("theme")?"ui":"fc",i?(g?g.empty():g=this.el=t("<div class='fc-toolbar "+n.extraClasses+"'/>"),g.append(o("left")).append(o("right")).append(o("center")).append('<div class="fc-clear"/>')):s()}function s(){g&&(g.remove(),g=f.el=null)}function o(i){var r=t('<div class="fc-'+i+'"/>'),s=n.layout[i],o=e.opt("customButtons")||{},a=e.opt("buttonText")||{};return s&&t.each(s.split(" "),function(n){var i,s=t(),l=!0;t.each(this.split(","),function(n,i){var r,u,h,c,d,f,g,m,y,w;"title"==i?(s=s.add(t("<h2>&nbsp;</h2>")),l=!1):((r=o[i])?(h=function(t){r.click&&r.click.call(w[0],t)},c="",d=r.text):(u=e.getViewSpec(i))?(h=function(){e.changeView(i)},v.push(i),c=u.buttonTextOverride,d=u.buttonTextDefault):e[i]&&(h=function(){e[i]()},c=(e.overrides.buttonText||{})[i],d=a[i]),h&&(f=r?r.themeIcon:e.opt("themeButtonIcons")[i],g=r?r.icon:e.opt("buttonIcons")[i],m=c?ht(c):f&&e.opt("theme")?"<span class='ui-icon ui-icon-"+f+"'></span>":g&&!e.opt("theme")?"<span class='fc-icon fc-icon-"+g+"'></span>":ht(d),y=["fc-"+i+"-button",p+"-button",p+"-state-default"],w=t('<button type="button" class="'+y.join(" ")+'">'+m+"</button>").click(function(t){w.hasClass(p+"-state-disabled")||(h(t),(w.hasClass(p+"-state-active")||w.hasClass(p+"-state-disabled"))&&w.removeClass(p+"-state-hover"))}).mousedown(function(){w.not("."+p+"-state-active").not("."+p+"-state-disabled").addClass(p+"-state-down")}).mouseup(function(){w.removeClass(p+"-state-down")}).hover(function(){w.not("."+p+"-state-active").not("."+p+"-state-disabled").addClass(p+"-state-hover")},function(){w.removeClass(p+"-state-hover").removeClass(p+"-state-down")}),s=s.add(w)))}),l&&s.first().addClass(p+"-corner-left").end().last().addClass(p+"-corner-right").end(),s.length>1?(i=t("<div/>"),l&&i.addClass("fc-button-group"),i.append(s),r.append(i)):r.append(s)}),r}function a(t){g&&g.find("h2").text(t)}function l(t){g&&g.find(".fc-"+t+"-button").addClass(p+"-state-active")}function u(t){g&&g.find(".fc-"+t+"-button").removeClass(p+"-state-active")}function h(t){g&&g.find(".fc-"+t+"-button").prop("disabled",!0).addClass(p+"-state-disabled")}function c(t){g&&g.find(".fc-"+t+"-button").prop("disabled",!1).removeClass(p+"-state-disabled")}function d(){return v}var f=this;f.setToolbarOptions=i,f.render=r,f.removeElement=s,f.updateTitle=a,f.activateButton=l,f.deactivateButton=u,f.disableButton=h,f.enableButton=c,f.getViewsWithButtons=d,f.el=null;var g,p,v=[]}function Yt(e){t.each(Me,function(t,n){null==e[t]&&(e[t]=n(e))})}function qt(t){return e.localeData(t)||e.localeData("en")}function Ut(){function n(t,e){return!q.opt("lazyFetching")||s(t,e)?o(t,e):he.resolve(Z)}function i(){Z=r(K),q.trigger("eventsReset",Z)}function r(t){var e,n,i=[];for(e=0;e<t.length;e++)n=t[e],n.start.clone().stripZone()<j&&q.getEventEnd(n).stripZone()>U&&i.push(n);return i}function s(t,e){return!U||t<U||e>j}function o(t,e){return U=t,j=e,a()}function a(){return u(Q,"reset")}function l(t){return u(b(t))}function u(t,e){var n,i;for("reset"===e?K=[]:"add"!==e&&(K=C(K,t)),n=0;n<t.length;n++)i=t[n],"pending"!==i._status&&X++,i._fetchId=(i._fetchId||0)+1,i._status="pending";for(n=0;n<t.length;n++)i=t[n],h(i,i._fetchId);return X?he.construct(function(t){q.one("eventsReceived",t)}):he.resolve(Z)}function h(e,n){f(e,function(i){var r,s,o,a=t.isArray(e.events);if(n===e._fetchId&&"rejected"!==e._status){if(e._status="resolved",i)for(r=0;r<i.length;r++)s=i[r],(o=a?s:z(s,e))&&K.push.apply(K,_(o));d()}})}function c(t){var e="pending"===t._status;t._status="rejected",e&&d()}function d(){--X||(i(K),q.trigger("eventsReceived",Z))}function f(e,n){var i,r,s=Zt.sourceFetchers;for(i=0;i<s.length;i++){if(!0===(r=s[i].call(q,e,U.clone(),j.clone(),q.opt("timezone"),n)))return;if("object"==typeof r)return void f(r,n)}var o=e.events;if(o)t.isFunction(o)?(q.pushLoading(),o.call(q,U.clone(),j.clone(),q.opt("timezone"),function(t){n(t),q.popLoading()})):t.isArray(o)?n(o):n();else{if(e.url){var a,l=e.success,u=e.error,h=e.complete;a=t.isFunction(e.data)?e.data():e.data;var c=t.extend({},a||{}),d=ut(e.startParam,q.opt("startParam")),g=ut(e.endParam,q.opt("endParam")),p=ut(e.timezoneParam,q.opt("timezoneParam"));d&&(c[d]=U.format()),g&&(c[g]=j.format()),q.opt("timezone")&&"local"!=q.opt("timezone")&&(c[p]=q.opt("timezone")),q.pushLoading(),t.ajax(t.extend({},Be,e,{data:c,success:function(e){e=e||[];var i=lt(l,this,arguments);t.isArray(i)&&(e=i),n(e)},error:function(){lt(u,this,arguments),n()},complete:function(){lt(h,this,arguments),q.popLoading()}}))}else n()}}function g(t){var e=p(t);e&&(Q.push(e),u([e],"add"))}function p(e){var n,i,r=Zt.sourceNormalizers;if(t.isFunction(e)||t.isArray(e)?n={events:e}:"string"==typeof e?n={url:e}:"object"==typeof e&&(n=t.extend({},e)),n){for(n.className?"string"==typeof n.className&&(n.className=n.className.split(/\s+/)):n.className=[],t.isArray(n.events)&&(n.origArray=n.events,n.events=t.map(n.events,function(t){return z(t,n)})),i=0;i<r.length;i++)r[i].call(q,n);return n}}function v(t){y(E(t))}function m(t){null==t?y(Q,!0):y(b(t))}function y(e,n){var r;for(r=0;r<e.length;r++)c(e[r]);n?(Q=[],K=[]):(Q=t.grep(Q,function(t){for(r=0;r<e.length;r++)if(t===e[r])return!1;return!0}),K=C(K,e)),i()}function w(){return Q.slice(1)}function S(e){return t.grep(Q,function(t){return t.id&&t.id===e})[0]}function b(e){e?t.isArray(e)||(e=[e]):e=[];var n,i=[];for(n=0;n<e.length;n++)i.push.apply(i,E(e[n]));return i}function E(e){var n,i;for(n=0;n<Q.length;n++)if((i=Q[n])===e)return[i];return i=S(e),i?[i]:t.grep(Q,function(t){return D(e,t)})}function D(t,e){return t&&e&&T(t)==T(e)}function T(t){return("object"==typeof t?t.origArray||t.googleCalendarId||t.url||t.events:null)||t}function C(e,n){return t.grep(e,function(t){for(var e=0;e<n.length;e++)if(t.source===n[e])return!1;return!0})}function H(t){R([t])}function R(t){var e,n;for(e=0;e<t.length;e++)n=t[e],n.start=q.moment(n.start),n.end?n.end=q.moment(n.end):n.end=null,W(n,x(n));i()}function x(e){var n={};return t.each(e,function(t,e){I(t)&&void 0!==e&&at(e)&&(n[t]=e)}),n}function I(t){return!/^_|^(id|allDay|start|end)$/.test(t)}function k(t,e){return M([t],e)}function M(t,e){var n,r,s,o,a,l=[];for(s=0;s<t.length;s++)if(r=z(t[s])){for(n=_(r),o=0;o<n.length;o++)a=n[o],a.source||(e&&($.events.push(a),a.source=$),K.push(a));l=l.concat(n)}return l.length&&i(),l}function B(e){var n,r;for(null==e?e=function(){return!0}:t.isFunction(e)||(n=e+"",e=function(t){return t._id==n}),K=t.grep(K,e,!0),r=0;r<Q.length;r++)t.isArray(Q[r].events)&&(Q[r].events=t.grep(Q[r].events,e,!0));i()}function L(e){return t.isFunction(e)?t.grep(K,e):null!=e?(e+="",t.grep(K,function(t){return t._id==e})):K}function N(t){t.start=q.moment(t.start),t.end&&(t.end=q.moment(t.end)),jt(t)}function z(n,i){var r,s,o,a=q.opt("eventDataTransform"),l={};if(a&&(n=a(n)),i&&i.eventDataTransform&&(n=i.eventDataTransform(n)),t.extend(l,n),i&&(l.source=i),l._id=n._id||(void 0===n.id?"_fc"+Le++:n.id+""),n.className?"string"==typeof n.className?l.className=n.className.split(/\s+/):l.className=n.className:l.className=[],r=n.start||n.date,s=n.end,nt(r)&&(r=e.duration(r)),nt(s)&&(s=e.duration(s)),n.dow||e.isDuration(r)||e.isDuration(s))l.start=r?e.duration(r):null,l.end=s?e.duration(s):null,l._recurring=!0;else{if(r&&(r=q.moment(r),!r.isValid()))return!1;s&&(s=q.moment(s),s.isValid()||(s=null)),o=n.allDay,void 0===o&&(o=ut(i?i.allDayDefault:void 0,q.opt("allDayDefault"))),V(r,s,o,l)}return q.normalizeEvent(l),l}function V(t,e,n,i){i.start=t,i.end=e,i.allDay=n,O(i),jt(i)}function O(t){P(t),t.end&&!t.end.isAfter(t.start)&&(t.end=null),t.end||(q.opt("forceEventDuration")?t.end=q.getDefaultEventEnd(t.allDay,t.start):t.end=null)}function P(t){null==t.allDay&&(t.allDay=!(t.start.hasTime()||t.end&&t.end.hasTime())),t.allDay?(t.start.stripTime(),t.end&&t.end.stripTime()):(t.start.hasTime()||(t.start=q.applyTimezone(t.start.time(0))),t.end&&!t.end.hasTime()&&(t.end=q.applyTimezone(t.end.time(0))))}function _(e,n,i){var r,s,o,a,l,u,h,c,d,f=[];if(n=n||U,i=i||j,e)if(e._recurring){if(s=e.dow)for(r={},o=0;o<s.length;o++)r[s[o]]=!0;for(a=n.clone().stripTime();a.isBefore(i);)r&&!r[a.day()]||(l=e.start,u=e.end,h=a.clone(),c=null,l&&(h=h.time(l)),u&&(c=a.clone().time(u)),d=t.extend({},e),V(h,c,!l&&!u,d),f.push(d)),a.add(1,"days")}else f.push(e);return f}function W(e,n,i){function r(t,e){return i?G(t,e,i):n.allDay?A(t,e):F(t,e)}var s,o,a,l,u,h,c={};return n=n||{},n.start||(n.start=e.start.clone()),void 0===n.end&&(n.end=e.end?e.end.clone():null),null==n.allDay&&(n.allDay=e.allDay),O(n),s={start:e._start.clone(),end:e._end?e._end.clone():q.getDefaultEventEnd(e._allDay,e._start),allDay:n.allDay},O(s),o=null!==e._end&&null===n.end,a=r(n.start,s.start),n.end?(l=r(n.end,s.end),u=l.subtract(a)):u=null,t.each(n,function(t,e){I(t)&&void 0!==e&&(c[t]=e)}),h=Y(L(e._id),o,n.allDay,a,u,c),{dateDelta:a,durationDelta:u,undo:h}}function Y(e,n,i,r,s,o){var a=q.getIsAmbigTimezone(),l=[];return r&&!r.valueOf()&&(r=null),s&&!s.valueOf()&&(s=null),t.each(e,function(e,u){var h,c;h={start:u.start.clone(),end:u.end?u.end.clone():null,allDay:u.allDay},t.each(o,function(t){h[t]=u[t]}),c={start:u._start,end:u._end,allDay:i},O(c),n?c.end=null:s&&!c.end&&(c.end=q.getDefaultEventEnd(c.allDay,c.start)),r&&(c.start.add(r),c.end&&c.end.add(r)),s&&c.end.add(s),a&&!c.allDay&&(r||s)&&(c.start.stripZone(),c.end&&c.end.stripZone()),t.extend(u,o,c),jt(u),l.push(function(){t.extend(u,h),jt(u)})}),function(){for(var t=0;t<l.length;t++)l[t]()}}var q=this;q.requestEvents=n,q.reportEventChange=i,q.isFetchNeeded=s,q.fetchEvents=o,q.fetchEventSources=u,q.refetchEvents=a,q.refetchEventSources=l,q.getEventSources=w,q.getEventSourceById=S,q.addEventSource=g,q.removeEventSource=v,q.removeEventSources=m,q.updateEvent=H,q.updateEvents=R,q.renderEvent=k,q.renderEvents=M,q.removeEvents=B,q.clientEvents=L,q.mutateEvent=W,q.normalizeEventDates=O,q.normalizeEventTimes=P;var U,j,Z,$={events:[]},Q=[$],X=0,K=[];t.each((q.opt("events")?[q.opt("events")]:[]).concat(q.opt("eventSources")||[]),function(t,e){var n=p(e);n&&Q.push(n)}),q.getEventCache=function(){return K},q.rezoneArrayEventSources=function(){var e,n,i;for(e=0;e<Q.length;e++)if(n=Q[e].events,t.isArray(n))for(i=0;i<n.length;i++)N(n[i])},q.buildEventFromInput=z,q.expandEvent=_}function jt(t){t._allDay=t.allDay,t._start=t.start.clone(),t._end=t.end?t.end.clone():null}var Zt=t.fullCalendar={version:"3.4.0",internalApiVersion:9},$t=Zt.views={};t.fn.fullCalendar=function(e){var n=Array.prototype.slice.call(arguments,1),i=this;return this.each(function(r,s){var o,a=t(s),l=a.data("fullCalendar");"string"==typeof e?l&&t.isFunction(l[e])&&(o=l[e].apply(l,n),r||(i=o),"destroy"===e&&a.removeData("fullCalendar")):l||(l=new Re(a,e),a.data("fullCalendar",l),l.render())}),i};var Qt=["header","footer","buttonText","buttonIcons","themeButtonIcons"];Zt.intersectRanges=z,Zt.applyAll=lt,Zt.debounce=yt,Zt.isInt=vt,Zt.htmlEscape=ht,Zt.cssToStr=dt,Zt.proxy=mt,Zt.capitaliseFirstLetter=gt,Zt.getOuterRect=d,Zt.getClientRect=f,Zt.getContentRect=g,Zt.getScrollbarWidths=p;var Xt=null;Zt.preventDefault=H,Zt.intersectRects=R,Zt.parseFieldSpecs=M,Zt.compareByFieldSpecs=B,Zt.compareByFieldSpec=L,Zt.flexibleCompare=N,Zt.computeGreatestUnit=V,Zt.divideRangeByDuration=_,Zt.divideDurationByDuration=W,Zt.multiplyDuration=Y,Zt.durationHasTime=tt;var Kt=["sun","mon","tue","wed","thu","fri","sat"],Jt=["year","month","week","day","hour","minute","second","millisecond"];Zt.log=function(){var t=window.console;if(t&&t.log)return t.log.apply(t,arguments)},Zt.warn=function(){var t=window.console;return t&&t.warn?t.warn.apply(t,arguments):Zt.log.apply(Zt,arguments)};var te={}.hasOwnProperty;Zt.createObject=rt;var ee=/^\s*\d{4}-\d\d$/,ne=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T|)(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,ie=e.fn,re=t.extend({},ie),se=e.momentProperties;se.push("_fullCalendar"),se.push("_ambigTime"),se.push("_ambigZone"),Zt.moment=function(){return wt(arguments)},Zt.moment.utc=function(){var t=wt(arguments,!0);return t.hasTime()&&t.utc(),t},Zt.moment.parseZone=function(){return wt(arguments,!0,!0)},ie.week=ie.weeks=function(t){var e=this._locale._fullCalendar_weekCalc;return null==t&&"function"==typeof e?e(this):"ISO"===e?re.isoWeek.apply(this,arguments):re.week.apply(this,arguments)},ie.time=function(t){if(!this._fullCalendar)return re.time.apply(this,arguments);if(null==t)return e.duration({hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()});this._ambigTime=!1,e.isDuration(t)||e.isMoment(t)||(t=e.duration(t));var n=0;return e.isDuration(t)&&(n=24*Math.floor(t.asDays())),this.hours(n+t.hours()).minutes(t.minutes()).seconds(t.seconds()).milliseconds(t.milliseconds())},ie.stripTime=function(){return this._ambigTime||(this.utc(!0),this.set({hours:0,minutes:0,seconds:0,ms:0}),this._ambigTime=!0,this._ambigZone=!0),this},ie.hasTime=function(){return!this._ambigTime},ie.stripZone=function(){var t;return this._ambigZone||(t=this._ambigTime,this.utc(!0),this._ambigTime=t||!1,this._ambigZone=!0),this},ie.hasZone=function(){return!this._ambigZone},ie.local=function(t){return re.local.call(this,this._ambigZone||t),this._ambigTime=!1,this._ambigZone=!1,this},ie.utc=function(t){return re.utc.call(this,t),this._ambigTime=!1,this._ambigZone=!1,this},ie.utcOffset=function(t){return null!=t&&(this._ambigTime=!1,this._ambigZone=!1),re.utcOffset.apply(this,arguments)},ie.format=function(){return this._fullCalendar&&arguments[0]?oe(this,arguments[0]):this._ambigTime?le(St(this),"YYYY-MM-DD"):this._ambigZone?le(St(this),"YYYY-MM-DD[T]HH:mm:ss"):this._fullCalendar?le(St(this)):re.format.apply(this,arguments)},ie.toISOString=function(){return this._ambigTime?le(St(this),"YYYY-MM-DD"):this._ambigZone?le(St(this),"YYYY-MM-DD[T]HH:mm:ss"):this._fullCalendar?re.toISOString.apply(St(this),arguments):re.toISOString.apply(this,arguments)},function(){function t(t,e){return h(r(e).fakeFormatString,t)}function e(t,e){return re.format.call(t,e)}function n(t,e,n,s,o){var a;return t=Zt.moment.parseZone(t),e=Zt.moment.parseZone(e),a=t.localeData(),n=a.longDateFormat(n)||n,i(r(n),t,e,s||" - ",o)}function i(t,e,n,i,r){var s,o,a,l=t.sameUnits,u=e.clone().stripZone(),h=n.clone().stripZone(),f=c(t.fakeFormatString,e),g=c(t.fakeFormatString,n),p="",v="",m="",y="",w="";for(s=0;s<l.length&&(!l[s]||u.isSame(h,l[s]));s++)p+=f[s];for(o=l.length-1;o>s&&(!l[o]||u.isSame(h,l[o]))&&(o-1!==s||"."!==f[o]);o--)v=f[o]+v;for(a=s;a<=o;a++)m+=f[a],y+=g[a];return(m||y)&&(w=r?y+i+m:m+i+y),d(p+w+v)}function r(t){return S[t]||(S[t]=s(t))}function s(t){var e=o(t);return{fakeFormatString:l(e),sameUnits:u(e)}}function o(t){for(var e,n=[],i=/\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;e=i.exec(t);)e[1]?n.push.apply(n,a(e[1])):e[2]?n.push({maybe:o(e[2])}):e[3]?n.push({token:e[3]}):e[5]&&n.push.apply(n,a(e[5]));return n}function a(t){return". "===t?["."," "]:[t]}function l(t){var e,n,i=[];for(e=0;e<t.length;e++)n=t[e],"string"==typeof n?i.push("["+n+"]"):n.token?n.token in y?i.push(p+"["+n.token+"]"):i.push(n.token):n.maybe&&i.push(v+l(n.maybe)+v);return i.join(g)}function u(t){var e,n,i,r=[];for(e=0;e<t.length;e++)n=t[e],n.token?(i=w[n.token.charAt(0)],r.push(i?i.unit:"second")):n.maybe?r.push.apply(r,u(n.maybe)):r.push(null);return r}function h(t,e){return d(c(t,e).join(""))}function c(t,n){var i,r,s=[],o=e(n,t),a=o.split(g);for(i=0;i<a.length;i++)r=a[i],r.charAt(0)===p?s.push(y[r.substring(1)](n)):s.push(r);return s}function d(t){return t.replace(m,function(t,e){return e.match(/[1-9]/)?e:""})}function f(t){var e,n,i,r,s=o(t);for(e=0;e<s.length;e++)n=s[e],n.token&&(i=w[n.token.charAt(0)])&&(!r||i.value>r.value)&&(r=i);return r?r.unit:null}Zt.formatDate=t,Zt.formatRange=n,Zt.oldMomentFormat=e,Zt.queryMostGranularFormatUnit=f;var g="\v",p="",v="",m=new RegExp(v+"([^"+v+"]*)"+v,"g"),y={t:function(t){return e(t,"a").charAt(0)},T:function(t){return e(t,"A").charAt(0)}},w={Y:{value:1,unit:"year"},M:{value:2,unit:"month"},W:{value:3,unit:"week"},w:{value:3,unit:"week"},D:{value:4,unit:"day"},d:{value:4,unit:"day"}},S={}}();var oe=Zt.formatDate,ae=Zt.formatRange,le=Zt.oldMomentFormat;Zt.Class=bt,bt.extend=function(){var t,e,n=arguments.length;for(t=0;t<n;t++)e=arguments[t],t<n-1&&Dt(this,e);return Et(this,e||{})},bt.mixin=function(t){Dt(this,t)};var ue=bt.extend(fe,ge,{_props:null,_watchers:null,_globalWatchArgs:null,constructor:function(){this._watchers={},this._props={},this.applyGlobalWatchers()},applyGlobalWatchers:function(){var t,e=this._globalWatchArgs||[];for(t=0;t<e.length;t++)this.watch.apply(this,e[t])},has:function(t){return t in this._props},get:function(t){return void 0===t?this._props:this._props[t]},set:function(t,e){var n;"string"==typeof t?(n={},n[t]=void 0===e?null:e):n=t,this.setProps(n)},reset:function(t){var e,n=this._props,i={};for(e in n)i[e]=void 0;for(e in t)i[e]=t[e];this.setProps(i)},unset:function(t){var e,n,i={};for(e="string"==typeof t?[t]:t,n=0;n<e.length;n++)i[e[n]]=void 0;this.setProps(i)},setProps:function(t){var e,n,i={},r=0;for(e in t)"object"!=typeof(n=t[e])&&n===this._props[e]||(i[e]=n,r++);if(r){this.trigger("before:batchChange",i);for(e in i)n=i[e],this.trigger("before:change",e,n),this.trigger("before:change:"+e,n);for(e in i)n=i[e],void 0===n?delete this._props[e]:this._props[e]=n,this.trigger("change:"+e,n),this.trigger("change",e,n);this.trigger("batchChange",i)}},watch:function(t,e,n,i){var r=this;this.unwatch(t),this._watchers[t]=this._watchDeps(e,function(e){var i=n.call(r,e);i&&i.then?(r.unset(t),i.then(function(e){r.set(t,e)})):r.set(t,i)},function(){r.unset(t),i&&i.call(r)})},unwatch:function(t){var e=this._watchers[t];e&&(delete this._watchers[t],e.teardown())},_watchDeps:function(t,e,n){function i(t,e,i){1===++a&&u===l&&(d=!0,n(),d=!1)}function r(t,n,i){void 0===n?(i||void 0===h[t]||u--,delete h[t]):(i||void 0!==h[t]||u++,h[t]=n),--a||u===l&&(d||e(h))}function s(t,e){o.on(t,e),c.push([t,e])}var o=this,a=0,l=t.length,u=0,h={},c=[],d=!1;return t.forEach(function(t){var e=!1;"?"===t.charAt(0)&&(t=t.substring(1),e=!0),s("before:change:"+t,function(n){i(t,n,e)}),s("change:"+t,function(n){r(t,n,e)})}),t.forEach(function(t){var e=!1;"?"===t.charAt(0)&&(t=t.substring(1),e=!0),o.has(t)?(h[t]=o.get(t),u++):e&&u++}),u===l&&e(h),{teardown:function(){for(var t=0;t<c.length;t++)o.off(c[t][0],c[t][1]);c=null,u===l&&n()},flash:function(){u===l&&(n(),e(h))}}},flash:function(t){var e=this._watchers[t];e&&e.flash()}});ue.watch=function(){var t=this.prototype;t._globalWatchArgs||(t._globalWatchArgs=[]),t._globalWatchArgs.push(arguments)},Zt.Model=ue;var he={construct:function(e){var n=t.Deferred(),i=n.promise();return"function"==typeof e&&e(function(t){n.resolve(t),Tt(i,t)},function(){n.reject(),Ct(i)}),i},resolve:function(e){var n=t.Deferred().resolve(e),i=n.promise();return Tt(i,e),i},reject:function(){var e=t.Deferred().reject(),n=e.promise();return Ct(n),n}};Zt.Promise=he;var ce=bt.extend(fe,{q:null,isPaused:!1,isRunning:!1,constructor:function(){this.q=[]},queue:function(){this.q.push.apply(this.q,arguments),this.tryStart()},pause:function(){this.isPaused=!0},resume:function(){this.isPaused=!1,this.tryStart()},tryStart:function(){!this.isRunning&&this.canRunNext()&&(this.isRunning=!0,this.trigger("start"),this.runNext())},canRunNext:function(){return!this.isPaused&&this.q.length},runNext:function(){this.runTask(this.q.shift())},runTask:function(t){this.runTaskFunc(t)},runTaskFunc:function(t){function e(){n.canRunNext()?n.runNext():(n.isRunning=!1,n.trigger("stop"))}var n=this,i=t();i&&i.then?i.then(e):e()}});Zt.TaskQueue=ce;var de=ce.extend({waitsByNamespace:null,waitNamespace:null,waitId:null,constructor:function(t){ce.call(this),this.waitsByNamespace=t||{}},queue:function(t,e,n){var i,r={func:t,namespace:e,type:n};e&&(i=this.waitsByNamespace[e]),this.waitNamespace&&(e===this.waitNamespace&&null!=i?this.delayWait(i):(this.clearWait(),this.tryStart())),this.compoundTask(r)&&(this.waitNamespace||null==i?this.tryStart():this.startWait(e,i))},startWait:function(t,e){this.waitNamespace=t,this.spawnWait(e)},delayWait:function(t){clearTimeout(this.waitId),this.spawnWait(t)},spawnWait:function(t){var e=this;this.waitId=setTimeout(function(){e.waitNamespace=null,e.tryStart()},t)},clearWait:function(){this.waitNamespace&&(clearTimeout(this.waitId),this.waitId=null,this.waitNamespace=null)},canRunNext:function(){if(!ce.prototype.canRunNext.apply(this,arguments))return!1;if(this.waitNamespace){for(var t=this.q,e=0;e<t.length;e++)if(t[e].namespace!==this.waitNamespace)return!0;return!1}return!0},runTask:function(t){this.runTaskFunc(t.func)},compoundTask:function(t){var e,n,i=this.q,r=!0;if(t.namespace&&("destroy"===t.type||"init"===t.type)){for(e=i.length-1;e>=0;e--)n=i[e],n.namespace!==t.namespace||"add"!==n.type&&"remove"!==n.type||i.splice(e,1);"destroy"===t.type?i.length&&(n=i[i.length-1],n.namespace===t.namespace&&("init"===n.type?(r=!1,i.pop()):"destroy"===n.type&&(r=!1))):"init"===t.type&&i.length&&(n=i[i.length-1],n.namespace===t.namespace&&"init"===n.type&&i.pop())}return r&&i.push(t),r}});Zt.RenderQueue=de;var fe=Zt.EmitterMixin={on:function(e,n){return t(this).on(e,this._prepareIntercept(n)),this},one:function(e,n){return t(this).one(e,this._prepareIntercept(n)),this},_prepareIntercept:function(e){var n=function(t,n){return e.apply(n.context||this,n.args||[])};return e.guid||(e.guid=t.guid++),n.guid=e.guid,n},
off:function(e,n){return t(this).off(e,n),this},trigger:function(e){var n=Array.prototype.slice.call(arguments,1);return t(this).triggerHandler(e,{args:n}),this},triggerWith:function(e,n,i){return t(this).triggerHandler(e,{context:n,args:i}),this}},ge=Zt.ListenerMixin=function(){var e=0;return{listenerId:null,listenTo:function(e,n,i){if("object"==typeof n)for(var r in n)n.hasOwnProperty(r)&&this.listenTo(e,r,n[r]);else"string"==typeof n&&e.on(n+"."+this.getListenerNamespace(),t.proxy(i,this))},stopListeningTo:function(t,e){t.off((e||"")+"."+this.getListenerNamespace())},getListenerNamespace:function(){return null==this.listenerId&&(this.listenerId=e++),"_listener"+this.listenerId}}}(),pe=bt.extend(ge,{isHidden:!0,options:null,el:null,margin:10,constructor:function(t){this.options=t||{}},show:function(){this.isHidden&&(this.el||this.render(),this.el.show(),this.position(),this.isHidden=!1,this.trigger("show"))},hide:function(){this.isHidden||(this.el.hide(),this.isHidden=!0,this.trigger("hide"))},render:function(){var e=this,n=this.options;this.el=t('<div class="fc-popover"/>').addClass(n.className||"").css({top:0,left:0}).append(n.content).appendTo(n.parentEl),this.el.on("click",".fc-close",function(){e.hide()}),n.autoHide&&this.listenTo(t(document),"mousedown",this.documentMousedown)},documentMousedown:function(e){this.el&&!t(e.target).closest(this.el).length&&this.hide()},removeElement:function(){this.hide(),this.el&&(this.el.remove(),this.el=null),this.stopListeningTo(t(document),"mousedown")},position:function(){var e,n,i,r,s,o=this.options,a=this.el.offsetParent().offset(),l=this.el.outerWidth(),u=this.el.outerHeight(),h=t(window),d=c(this.el);r=o.top||0,s=void 0!==o.left?o.left:void 0!==o.right?o.right-l:0,d.is(window)||d.is(document)?(d=h,e=0,n=0):(i=d.offset(),e=i.top,n=i.left),e+=h.scrollTop(),n+=h.scrollLeft(),!1!==o.viewportConstrain&&(r=Math.min(r,e+d.outerHeight()-u-this.margin),r=Math.max(r,e+this.margin),s=Math.min(s,n+d.outerWidth()-l-this.margin),s=Math.max(s,n+this.margin)),this.el.css({top:r-a.top,left:s-a.left})},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1))}}),ve=Zt.CoordCache=bt.extend({els:null,forcedOffsetParentEl:null,origin:null,boundingRect:null,isHorizontal:!1,isVertical:!1,lefts:null,rights:null,tops:null,bottoms:null,constructor:function(e){this.els=t(e.els),this.isHorizontal=e.isHorizontal,this.isVertical=e.isVertical,this.forcedOffsetParentEl=e.offsetParent?t(e.offsetParent):null},build:function(){var t=this.forcedOffsetParentEl;!t&&this.els.length>0&&(t=this.els.eq(0).offsetParent()),this.origin=t?t.offset():null,this.boundingRect=this.queryBoundingRect(),this.isHorizontal&&this.buildElHorizontals(),this.isVertical&&this.buildElVerticals()},clear:function(){this.origin=null,this.boundingRect=null,this.lefts=null,this.rights=null,this.tops=null,this.bottoms=null},ensureBuilt:function(){this.origin||this.build()},buildElHorizontals:function(){var e=[],n=[];this.els.each(function(i,r){var s=t(r),o=s.offset().left,a=s.outerWidth();e.push(o),n.push(o+a)}),this.lefts=e,this.rights=n},buildElVerticals:function(){var e=[],n=[];this.els.each(function(i,r){var s=t(r),o=s.offset().top,a=s.outerHeight();e.push(o),n.push(o+a)}),this.tops=e,this.bottoms=n},getHorizontalIndex:function(t){this.ensureBuilt();var e,n=this.lefts,i=this.rights,r=n.length;for(e=0;e<r;e++)if(t>=n[e]&&t<i[e])return e},getVerticalIndex:function(t){this.ensureBuilt();var e,n=this.tops,i=this.bottoms,r=n.length;for(e=0;e<r;e++)if(t>=n[e]&&t<i[e])return e},getLeftOffset:function(t){return this.ensureBuilt(),this.lefts[t]},getLeftPosition:function(t){return this.ensureBuilt(),this.lefts[t]-this.origin.left},getRightOffset:function(t){return this.ensureBuilt(),this.rights[t]},getRightPosition:function(t){return this.ensureBuilt(),this.rights[t]-this.origin.left},getWidth:function(t){return this.ensureBuilt(),this.rights[t]-this.lefts[t]},getTopOffset:function(t){return this.ensureBuilt(),this.tops[t]},getTopPosition:function(t){return this.ensureBuilt(),this.tops[t]-this.origin.top},getBottomOffset:function(t){return this.ensureBuilt(),this.bottoms[t]},getBottomPosition:function(t){return this.ensureBuilt(),this.bottoms[t]-this.origin.top},getHeight:function(t){return this.ensureBuilt(),this.bottoms[t]-this.tops[t]},queryBoundingRect:function(){var t;return this.els.length>0&&(t=c(this.els.eq(0)),!t.is(document))?f(t):null},isPointInBounds:function(t,e){return this.isLeftInBounds(t)&&this.isTopInBounds(e)},isLeftInBounds:function(t){return!this.boundingRect||t>=this.boundingRect.left&&t<this.boundingRect.right},isTopInBounds:function(t){return!this.boundingRect||t>=this.boundingRect.top&&t<this.boundingRect.bottom}}),me=Zt.DragListener=bt.extend(ge,{options:null,subjectEl:null,originX:null,originY:null,scrollEl:null,isInteracting:!1,isDistanceSurpassed:!1,isDelayEnded:!1,isDragging:!1,isTouch:!1,isGeneric:!1,delay:null,delayTimeoutId:null,minDistance:null,shouldCancelTouchScroll:!0,scrollAlwaysKills:!1,constructor:function(t){this.options=t||{}},startInteraction:function(e,n){if("mousedown"===e.type){if(we.get().shouldIgnoreMouse())return;if(!S(e))return;e.preventDefault()}this.isInteracting||(n=n||{},this.delay=ut(n.delay,this.options.delay,0),this.minDistance=ut(n.distance,this.options.distance,0),this.subjectEl=this.options.subjectEl,T(t("body")),this.isInteracting=!0,this.isTouch=D(e),this.isGeneric="dragstart"===e.type,this.isDelayEnded=!1,this.isDistanceSurpassed=!1,this.originX=b(e),this.originY=E(e),this.scrollEl=c(t(e.target)),this.bindHandlers(),this.initAutoScroll(),this.handleInteractionStart(e),this.startDelay(e),this.minDistance||this.handleDistanceSurpassed(e))},handleInteractionStart:function(t){this.trigger("interactionStart",t)},endInteraction:function(e,n){this.isInteracting&&(this.endDrag(e),this.delayTimeoutId&&(clearTimeout(this.delayTimeoutId),this.delayTimeoutId=null),this.destroyAutoScroll(),this.unbindHandlers(),this.isInteracting=!1,this.handleInteractionEnd(e,n),C(t("body")))},handleInteractionEnd:function(t,e){this.trigger("interactionEnd",t,e||!1)},bindHandlers:function(){var e=we.get();this.isGeneric?this.listenTo(t(document),{drag:this.handleMove,dragstop:this.endInteraction}):this.isTouch?this.listenTo(e,{touchmove:this.handleTouchMove,touchend:this.endInteraction,scroll:this.handleTouchScroll}):this.listenTo(e,{mousemove:this.handleMouseMove,mouseup:this.endInteraction}),this.listenTo(e,{selectstart:H,contextmenu:H})},unbindHandlers:function(){this.stopListeningTo(we.get()),this.stopListeningTo(t(document))},startDrag:function(t,e){this.startInteraction(t,e),this.isDragging||(this.isDragging=!0,this.handleDragStart(t))},handleDragStart:function(t){this.trigger("dragStart",t)},handleMove:function(t){var e=b(t)-this.originX,n=E(t)-this.originY,i=this.minDistance;this.isDistanceSurpassed||e*e+n*n>=i*i&&this.handleDistanceSurpassed(t),this.isDragging&&this.handleDrag(e,n,t)},handleDrag:function(t,e,n){this.trigger("drag",t,e,n),this.updateAutoScroll(n)},endDrag:function(t){this.isDragging&&(this.isDragging=!1,this.handleDragEnd(t))},handleDragEnd:function(t){this.trigger("dragEnd",t)},startDelay:function(t){var e=this;this.delay?this.delayTimeoutId=setTimeout(function(){e.handleDelayEnd(t)},this.delay):this.handleDelayEnd(t)},handleDelayEnd:function(t){this.isDelayEnded=!0,this.isDistanceSurpassed&&this.startDrag(t)},handleDistanceSurpassed:function(t){this.isDistanceSurpassed=!0,this.isDelayEnded&&this.startDrag(t)},handleTouchMove:function(t){this.isDragging&&this.shouldCancelTouchScroll&&t.preventDefault(),this.handleMove(t)},handleMouseMove:function(t){this.handleMove(t)},handleTouchScroll:function(t){this.isDragging&&!this.scrollAlwaysKills||this.endInteraction(t,!0)},trigger:function(t){this.options[t]&&this.options[t].apply(this,Array.prototype.slice.call(arguments,1)),this["_"+t]&&this["_"+t].apply(this,Array.prototype.slice.call(arguments,1))}});me.mixin({isAutoScroll:!1,scrollBounds:null,scrollTopVel:null,scrollLeftVel:null,scrollIntervalId:null,scrollSensitivity:30,scrollSpeed:200,scrollIntervalMs:50,initAutoScroll:function(){var t=this.scrollEl;this.isAutoScroll=this.options.scroll&&t&&!t.is(window)&&!t.is(document),this.isAutoScroll&&this.listenTo(t,"scroll",yt(this.handleDebouncedScroll,100))},destroyAutoScroll:function(){this.endAutoScroll(),this.isAutoScroll&&this.stopListeningTo(this.scrollEl,"scroll")},computeScrollBounds:function(){this.isAutoScroll&&(this.scrollBounds=d(this.scrollEl))},updateAutoScroll:function(t){var e,n,i,r,s=this.scrollSensitivity,o=this.scrollBounds,a=0,l=0;o&&(e=(s-(E(t)-o.top))/s,n=(s-(o.bottom-E(t)))/s,i=(s-(b(t)-o.left))/s,r=(s-(o.right-b(t)))/s,e>=0&&e<=1?a=e*this.scrollSpeed*-1:n>=0&&n<=1&&(a=n*this.scrollSpeed),i>=0&&i<=1?l=i*this.scrollSpeed*-1:r>=0&&r<=1&&(l=r*this.scrollSpeed)),this.setScrollVel(a,l)},setScrollVel:function(t,e){this.scrollTopVel=t,this.scrollLeftVel=e,this.constrainScrollVel(),!this.scrollTopVel&&!this.scrollLeftVel||this.scrollIntervalId||(this.scrollIntervalId=setInterval(mt(this,"scrollIntervalFunc"),this.scrollIntervalMs))},constrainScrollVel:function(){var t=this.scrollEl;this.scrollTopVel<0?t.scrollTop()<=0&&(this.scrollTopVel=0):this.scrollTopVel>0&&t.scrollTop()+t[0].clientHeight>=t[0].scrollHeight&&(this.scrollTopVel=0),this.scrollLeftVel<0?t.scrollLeft()<=0&&(this.scrollLeftVel=0):this.scrollLeftVel>0&&t.scrollLeft()+t[0].clientWidth>=t[0].scrollWidth&&(this.scrollLeftVel=0)},scrollIntervalFunc:function(){var t=this.scrollEl,e=this.scrollIntervalMs/1e3;this.scrollTopVel&&t.scrollTop(t.scrollTop()+this.scrollTopVel*e),this.scrollLeftVel&&t.scrollLeft(t.scrollLeft()+this.scrollLeftVel*e),this.constrainScrollVel(),this.scrollTopVel||this.scrollLeftVel||this.endAutoScroll()},endAutoScroll:function(){this.scrollIntervalId&&(clearInterval(this.scrollIntervalId),this.scrollIntervalId=null,this.handleScrollEnd())},handleDebouncedScroll:function(){this.scrollIntervalId||this.handleScrollEnd()},handleScrollEnd:function(){}});var ye=me.extend({component:null,origHit:null,hit:null,coordAdjust:null,constructor:function(t,e){me.call(this,e),this.component=t},handleInteractionStart:function(t){var e,n,i,r=this.subjectEl;this.component.hitsNeeded(),this.computeScrollBounds(),t?(n={left:b(t),top:E(t)},i=n,r&&(e=d(r),i=x(i,e)),this.origHit=this.queryHit(i.left,i.top),r&&this.options.subjectCenter&&(this.origHit&&(e=R(this.origHit,e)||e),i=I(e)),this.coordAdjust=k(i,n)):(this.origHit=null,this.coordAdjust=null),me.prototype.handleInteractionStart.apply(this,arguments)},handleDragStart:function(t){var e;me.prototype.handleDragStart.apply(this,arguments),(e=this.queryHit(b(t),E(t)))&&this.handleHitOver(e)},handleDrag:function(t,e,n){var i;me.prototype.handleDrag.apply(this,arguments),i=this.queryHit(b(n),E(n)),Ht(i,this.hit)||(this.hit&&this.handleHitOut(),i&&this.handleHitOver(i))},handleDragEnd:function(){this.handleHitDone(),me.prototype.handleDragEnd.apply(this,arguments)},handleHitOver:function(t){var e=Ht(t,this.origHit);this.hit=t,this.trigger("hitOver",this.hit,e,this.origHit)},handleHitOut:function(){this.hit&&(this.trigger("hitOut",this.hit),this.handleHitDone(),this.hit=null)},handleHitDone:function(){this.hit&&this.trigger("hitDone",this.hit)},handleInteractionEnd:function(){me.prototype.handleInteractionEnd.apply(this,arguments),this.origHit=null,this.hit=null,this.component.hitsNotNeeded()},handleScrollEnd:function(){me.prototype.handleScrollEnd.apply(this,arguments),this.isDragging&&(this.component.releaseHits(),this.component.prepareHits())},queryHit:function(t,e){return this.coordAdjust&&(t+=this.coordAdjust.left,e+=this.coordAdjust.top),this.component.queryHit(t,e)}});Zt.touchMouseIgnoreWait=500;var we=bt.extend(ge,fe,{isTouching:!1,mouseIgnoreDepth:0,handleScrollProxy:null,bind:function(){var e=this;this.listenTo(t(document),{touchstart:this.handleTouchStart,touchcancel:this.handleTouchCancel,touchend:this.handleTouchEnd,mousedown:this.handleMouseDown,mousemove:this.handleMouseMove,mouseup:this.handleMouseUp,click:this.handleClick,selectstart:this.handleSelectStart,contextmenu:this.handleContextMenu}),window.addEventListener("touchmove",this.handleTouchMoveProxy=function(n){e.handleTouchMove(t.Event(n))},{passive:!1}),window.addEventListener("scroll",this.handleScrollProxy=function(n){e.handleScroll(t.Event(n))},!0)},unbind:function(){this.stopListeningTo(t(document)),window.removeEventListener("touchmove",this.handleTouchMoveProxy),window.removeEventListener("scroll",this.handleScrollProxy,!0)},handleTouchStart:function(t){this.stopTouch(t,!0),this.isTouching=!0,this.trigger("touchstart",t)},handleTouchMove:function(t){this.isTouching&&this.trigger("touchmove",t)},handleTouchCancel:function(t){this.isTouching&&(this.trigger("touchcancel",t),this.stopTouch(t))},handleTouchEnd:function(t){this.stopTouch(t)},handleMouseDown:function(t){this.shouldIgnoreMouse()||this.trigger("mousedown",t)},handleMouseMove:function(t){this.shouldIgnoreMouse()||this.trigger("mousemove",t)},handleMouseUp:function(t){this.shouldIgnoreMouse()||this.trigger("mouseup",t)},handleClick:function(t){this.shouldIgnoreMouse()||this.trigger("click",t)},handleSelectStart:function(t){this.trigger("selectstart",t)},handleContextMenu:function(t){this.trigger("contextmenu",t)},handleScroll:function(t){this.trigger("scroll",t)},stopTouch:function(t,e){this.isTouching&&(this.isTouching=!1,this.trigger("touchend",t),e||this.startTouchMouseIgnore())},startTouchMouseIgnore:function(){var t=this,e=Zt.touchMouseIgnoreWait;e&&(this.mouseIgnoreDepth++,setTimeout(function(){t.mouseIgnoreDepth--},e))},shouldIgnoreMouse:function(){return this.isTouching||Boolean(this.mouseIgnoreDepth)}});!function(){var t=null,e=0;we.get=function(){return t||(t=new we,t.bind()),t},we.needed=function(){we.get(),e++},we.unneeded=function(){--e||(t.unbind(),t=null)}}();var Se=bt.extend(ge,{options:null,sourceEl:null,el:null,parentEl:null,top0:null,left0:null,y0:null,x0:null,topDelta:null,leftDelta:null,isFollowing:!1,isHidden:!1,isAnimating:!1,constructor:function(e,n){this.options=n=n||{},this.sourceEl=e,this.parentEl=n.parentEl?t(n.parentEl):e.parent()},start:function(e){this.isFollowing||(this.isFollowing=!0,this.y0=E(e),this.x0=b(e),this.topDelta=0,this.leftDelta=0,this.isHidden||this.updatePosition(),D(e)?this.listenTo(t(document),"touchmove",this.handleMove):this.listenTo(t(document),"mousemove",this.handleMove))},stop:function(e,n){function i(){r.isAnimating=!1,r.removeElement(),r.top0=r.left0=null,n&&n()}var r=this,s=this.options.revertDuration;this.isFollowing&&!this.isAnimating&&(this.isFollowing=!1,this.stopListeningTo(t(document)),e&&s&&!this.isHidden?(this.isAnimating=!0,this.el.animate({top:this.top0,left:this.left0},{duration:s,complete:i})):i())},getEl:function(){var t=this.el;return t||(t=this.el=this.sourceEl.clone().addClass(this.options.additionalClass||"").css({position:"absolute",visibility:"",display:this.isHidden?"none":"",margin:0,right:"auto",bottom:"auto",width:this.sourceEl.width(),height:this.sourceEl.height(),opacity:this.options.opacity||"",zIndex:this.options.zIndex}),t.addClass("fc-unselectable"),t.appendTo(this.parentEl)),t},removeElement:function(){this.el&&(this.el.remove(),this.el=null)},updatePosition:function(){var t,e;this.getEl(),null===this.top0&&(t=this.sourceEl.offset(),e=this.el.offsetParent().offset(),this.top0=t.top-e.top,this.left0=t.left-e.left),this.el.css({top:this.top0+this.topDelta,left:this.left0+this.leftDelta})},handleMove:function(t){this.topDelta=E(t)-this.y0,this.leftDelta=b(t)-this.x0,this.isHidden||this.updatePosition()},hide:function(){this.isHidden||(this.isHidden=!0,this.el&&this.el.hide())},show:function(){this.isHidden&&(this.isHidden=!1,this.updatePosition(),this.getEl().show())}}),be=Zt.Grid=bt.extend(ge,{hasDayInteractions:!0,view:null,isRTL:null,start:null,end:null,el:null,elsByFill:null,eventTimeFormat:null,displayEventTime:null,displayEventEnd:null,minResizeDuration:null,largeUnit:null,dayClickListener:null,daySelectListener:null,segDragListener:null,segResizeListener:null,externalDragListener:null,constructor:function(t){this.view=t,this.isRTL=t.opt("isRTL"),this.elsByFill={},this.dayClickListener=this.buildDayClickListener(),this.daySelectListener=this.buildDaySelectListener()},computeEventTimeFormat:function(){return this.view.opt("smallTimeFormat")},computeDisplayEventTime:function(){return!0},computeDisplayEventEnd:function(){return!0},setRange:function(t){this.start=t.start.clone(),this.end=t.end.clone(),this.rangeUpdated(),this.processRangeOptions()},rangeUpdated:function(){},processRangeOptions:function(){var t,e,n=this.view;this.eventTimeFormat=n.opt("eventTimeFormat")||n.opt("timeFormat")||this.computeEventTimeFormat(),t=n.opt("displayEventTime"),null==t&&(t=this.computeDisplayEventTime()),e=n.opt("displayEventEnd"),null==e&&(e=this.computeDisplayEventEnd()),this.displayEventTime=t,this.displayEventEnd=e},spanToSegs:function(t){},diffDates:function(t,e){return this.largeUnit?G(t,e,this.largeUnit):F(t,e)},hitsNeededDepth:0,hitsNeeded:function(){this.hitsNeededDepth++||this.prepareHits()},hitsNotNeeded:function(){this.hitsNeededDepth&&!--this.hitsNeededDepth&&this.releaseHits()},prepareHits:function(){},releaseHits:function(){},queryHit:function(t,e){},getSafeHitSpan:function(t){var e=this.getHitSpan(t);return Q(e,this.view.activeRange)?e:null},getHitSpan:function(t){},getHitEl:function(t){},setElement:function(t){this.el=t,this.hasDayInteractions&&(T(t),this.bindDayHandler("touchstart",this.dayTouchStart),this.bindDayHandler("mousedown",this.dayMousedown)),this.bindSegHandlers(),this.bindGlobalHandlers()},bindDayHandler:function(e,n){var i=this;this.el.on(e,function(e){if(!t(e.target).is(i.segSelector+","+i.segSelector+" *,.fc-more,a[data-goto]"))return n.call(i,e)})},removeElement:function(){this.unbindGlobalHandlers(),this.clearDragListeners(),this.el.remove()},renderSkeleton:function(){},renderDates:function(){},unrenderDates:function(){},bindGlobalHandlers:function(){this.listenTo(t(document),{dragstart:this.externalDragStart,sortstart:this.externalDragStart})},unbindGlobalHandlers:function(){this.stopListeningTo(t(document))},dayMousedown:function(t){var e=this.view;we.get().shouldIgnoreMouse()||(this.dayClickListener.startInteraction(t),e.opt("selectable")&&this.daySelectListener.startInteraction(t,{distance:e.opt("selectMinDistance")}))},dayTouchStart:function(t){var e,n=this.view;n.isSelected||n.selectedEvent||(e=n.opt("selectLongPressDelay"),null==e&&(e=n.opt("longPressDelay")),this.dayClickListener.startInteraction(t),n.opt("selectable")&&this.daySelectListener.startInteraction(t,{delay:e}))},buildDayClickListener:function(){var t,e=this,n=this.view,i=new ye(this,{scroll:n.opt("dragScroll"),interactionStart:function(){t=i.origHit},hitOver:function(e,n,i){n||(t=null)},hitOut:function(){t=null},interactionEnd:function(i,r){var s;!r&&t&&(s=e.getSafeHitSpan(t))&&n.triggerDayClick(s,e.getHitEl(t),i)}});return i.shouldCancelTouchScroll=!1,i.scrollAlwaysKills=!0,i},buildDaySelectListener:function(){var t,e=this,n=this.view;return new ye(this,{scroll:n.opt("dragScroll"),interactionStart:function(){t=null},dragStart:function(){n.unselect()},hitOver:function(n,i,r){var o,a;r&&(o=e.getSafeHitSpan(r),a=e.getSafeHitSpan(n),t=o&&a?e.computeSelection(o,a):null,t?e.renderSelection(t):!1===t&&s())},hitOut:function(){t=null,e.unrenderSelection()},hitDone:function(){o()},interactionEnd:function(e,i){!i&&t&&n.reportSelection(t,e)}})},clearDragListeners:function(){this.dayClickListener.endInteraction(),this.daySelectListener.endInteraction(),this.segDragListener&&this.segDragListener.endInteraction(),this.segResizeListener&&this.segResizeListener.endInteraction(),this.externalDragListener&&this.externalDragListener.endInteraction()},renderEventLocationHelper:function(t,e){var n=this.fabricateHelperEvent(t,e);return this.renderHelper(n,e)},fabricateHelperEvent:function(t,e){var n=e?rt(e.event):{};return n.start=t.start.clone(),n.end=t.end?t.end.clone():null,n.allDay=null,this.view.calendar.normalizeEventDates(n),n.className=(n.className||[]).concat("fc-helper"),e||(n.editable=!1),n},renderHelper:function(t,e){},unrenderHelper:function(){},renderSelection:function(t){this.renderHighlight(t)},unrenderSelection:function(){this.unrenderHighlight()},computeSelection:function(t,e){var n=this.computeSelectionSpan(t,e);return!(n&&!this.view.calendar.isSelectionSpanAllowed(n))&&n},computeSelectionSpan:function(t,e){var n=[t.start,t.end,e.start,e.end];return n.sort(pt),{start:n[0].clone(),end:n[3].clone()}},renderHighlight:function(t){this.renderFill("highlight",this.spanToSegs(t))},unrenderHighlight:function(){this.unrenderFill("highlight")},highlightSegClasses:function(){return["fc-highlight"]},renderBusinessHours:function(){},unrenderBusinessHours:function(){},getNowIndicatorUnit:function(){},renderNowIndicator:function(t){},unrenderNowIndicator:function(){},renderFill:function(t,e){},unrenderFill:function(t){var e=this.elsByFill[t];e&&(e.remove(),delete this.elsByFill[t])},renderFillSegEls:function(e,n){var i,r=this,s=this[e+"SegEl"],o="",a=[];if(n.length){for(i=0;i<n.length;i++)o+=this.fillSegHtml(e,n[i]);t(o).each(function(e,i){var o=n[e],l=t(i);s&&(l=s.call(r,o,l)),l&&(l=t(l),l.is(r.fillSegTag)&&(o.el=l,a.push(o)))})}return a},fillSegTag:"div",fillSegHtml:function(t,e){var n=this[t+"SegClasses"],i=this[t+"SegCss"],r=n?n.call(this,e):[],s=dt(i?i.call(this,e):{});return"<"+this.fillSegTag+(r.length?' class="'+r.join(" ")+'"':"")+(s?' style="'+s+'"':"")+" />"},getDayClasses:function(t,e){var n,i=this.view,r=[];return Z(t,i.activeRange)?(r.push("fc-"+Kt[t.day()]),1==i.currentRangeAs("months")&&t.month()!=i.currentRange.start.month()&&r.push("fc-other-month"),n=i.calendar.getNow(),t.isSame(n,"day")?(r.push("fc-today"),!0!==e&&r.push(i.highlightStateClass)):t<n?r.push("fc-past"):r.push("fc-future")):r.push("fc-disabled-day"),r}});be.mixin({segSelector:".fc-event-container > *",mousedOverSeg:null,isDraggingSeg:!1,isResizingSeg:!1,isDraggingExternal:!1,segs:null,renderEvents:function(t){var e,n=[],i=[];for(e=0;e<t.length;e++)(It(t[e])?n:i).push(t[e]);this.segs=[].concat(this.renderBgEvents(n),this.renderFgEvents(i))},renderBgEvents:function(t){var e=this.eventsToSegs(t);return this.renderBgSegs(e)||e},renderFgEvents:function(t){var e=this.eventsToSegs(t);return this.renderFgSegs(e)||e},unrenderEvents:function(){this.handleSegMouseout(),this.clearDragListeners(),this.unrenderFgSegs(),this.unrenderBgSegs(),this.segs=null},getEventSegs:function(){return this.segs||[]},renderFgSegs:function(t){},unrenderFgSegs:function(){},renderFgSegEls:function(e,n){var i,r=this.view,s="",o=[];if(e.length){for(i=0;i<e.length;i++)s+=this.fgSegHtml(e[i],n);t(s).each(function(n,i){var s=e[n],a=r.resolveEventEl(s.event,t(i));a&&(a.data("fc-seg",s),s.el=a,o.push(s))})}return o},fgSegHtml:function(t,e){},renderBgSegs:function(t){return this.renderFill("bgEvent",t)},unrenderBgSegs:function(){this.unrenderFill("bgEvent")},bgEventSegEl:function(t,e){return this.view.resolveEventEl(t.event,e)},bgEventSegClasses:function(t){var e=t.event,n=e.source||{};return["fc-bgevent"].concat(e.className,n.className||[])},bgEventSegCss:function(t){return{"background-color":this.getSegSkinCss(t)["background-color"]}},businessHoursSegClasses:function(t){return["fc-nonbusiness","fc-bgevent"]},buildBusinessHourSegs:function(t,e){return this.eventsToSegs(this.buildBusinessHourEvents(t,e))},buildBusinessHourEvents:function(e,n){var i,r=this.view.calendar;return null==n&&(n=r.opt("businessHours")),i=r.computeBusinessHourEvents(e,n),!i.length&&n&&(i=[t.extend({},Ne,{start:this.view.activeRange.end,end:this.view.activeRange.end,dow:null})]),i},bindSegHandlers:function(){this.bindSegHandlersToEl(this.el)},bindSegHandlersToEl:function(t){this.bindSegHandlerToEl(t,"touchstart",this.handleSegTouchStart),this.bindSegHandlerToEl(t,"mouseenter",this.handleSegMouseover),this.bindSegHandlerToEl(t,"mouseleave",this.handleSegMouseout),this.bindSegHandlerToEl(t,"mousedown",this.handleSegMousedown),this.bindSegHandlerToEl(t,"click",this.handleSegClick)},bindSegHandlerToEl:function(e,n,i){var r=this;e.on(n,this.segSelector,function(e){var n=t(this).data("fc-seg");if(n&&!r.isDraggingSeg&&!r.isResizingSeg)return i.call(r,n,e)})},handleSegClick:function(t,e){!1===this.view.publiclyTrigger("eventClick",t.el[0],t.event,e)&&e.preventDefault()},handleSegMouseover:function(t,e){we.get().shouldIgnoreMouse()||this.mousedOverSeg||(this.mousedOverSeg=t,this.view.isEventResizable(t.event)&&t.el.addClass("fc-allow-mouse-resize"),this.view.publiclyTrigger("eventMouseover",t.el[0],t.event,e))},handleSegMouseout:function(t,e){e=e||{},this.mousedOverSeg&&(t=t||this.mousedOverSeg,this.mousedOverSeg=null,this.view.isEventResizable(t.event)&&t.el.removeClass("fc-allow-mouse-resize"),this.view.publiclyTrigger("eventMouseout",t.el[0],t.event,e))},handleSegMousedown:function(t,e){!this.startSegResize(t,e,{distance:5})&&this.view.isEventDraggable(t.event)&&this.buildSegDragListener(t).startInteraction(e,{distance:5})},handleSegTouchStart:function(t,e){var n,i,r=this.view,s=t.event,o=r.isEventSelected(s),a=r.isEventDraggable(s),l=r.isEventResizable(s),u=!1;o&&l&&(u=this.startSegResize(t,e)),u||!a&&!l||(i=r.opt("eventLongPressDelay"),null==i&&(i=r.opt("longPressDelay")),n=a?this.buildSegDragListener(t):this.buildSegSelectListener(t),n.startInteraction(e,{delay:o?0:i}))},startSegResize:function(e,n,i){return!!t(n.target).is(".fc-resizer")&&(this.buildSegResizeListener(e,t(n.target).is(".fc-start-resizer")).startInteraction(n,i),!0)},buildSegDragListener:function(t){var e,n,i,r=this,a=this.view,l=t.el,u=t.event;if(this.segDragListener)return this.segDragListener;var h=this.segDragListener=new ye(a,{scroll:a.opt("dragScroll"),subjectEl:l,subjectCenter:!0,interactionStart:function(i){t.component=r,e=!1,n=new Se(t.el,{additionalClass:"fc-dragging",parentEl:a.el,opacity:h.isTouch?null:a.opt("dragOpacity"),revertDuration:a.opt("dragRevertDuration"),zIndex:2}),n.hide(),n.start(i)},dragStart:function(n){h.isTouch&&!a.isEventSelected(u)&&a.selectEvent(u),e=!0,r.handleSegMouseout(t,n),r.segDragStart(t,n),a.hideEvent(u)},hitOver:function(e,o,l){var c,d,f,g=!0;t.hit&&(l=t.hit),c=l.component.getSafeHitSpan(l),d=e.component.getSafeHitSpan(e),c&&d?(i=r.computeEventDrop(c,d,u),g=i&&r.isEventLocationAllowed(i,u)):g=!1,g||(i=null,s()),i&&(f=a.renderDrag(i,t))?(f.addClass("fc-dragging"),h.isTouch||r.applyDragOpacity(f),n.hide()):n.show(),o&&(i=null)},hitOut:function(){a.unrenderDrag(),n.show(),i=null},hitDone:function(){o()},interactionEnd:function(s){delete t.component,n.stop(!i,function(){e&&(a.unrenderDrag(),r.segDragStop(t,s)),i?a.reportSegDrop(t,i,r.largeUnit,l,s):a.showEvent(u)}),r.segDragListener=null}});return h},buildSegSelectListener:function(t){var e=this,n=this.view,i=t.event;if(this.segDragListener)return this.segDragListener;var r=this.segDragListener=new me({dragStart:function(t){r.isTouch&&!n.isEventSelected(i)&&n.selectEvent(i)},interactionEnd:function(t){e.segDragListener=null}});return r},segDragStart:function(t,e){this.isDraggingSeg=!0,this.view.publiclyTrigger("eventDragStart",t.el[0],t.event,e,{})},segDragStop:function(t,e){this.isDraggingSeg=!1,this.view.publiclyTrigger("eventDragStop",t.el[0],t.event,e,{})},computeEventDrop:function(t,e,n){var i,r,s=this.view.calendar,o=t.start,a=e.start;return o.hasTime()===a.hasTime()?(i=this.diffDates(a,o),n.allDay&&tt(i)?(r={start:n.start.clone(),end:s.getEventEnd(n),allDay:!1},s.normalizeEventTimes(r)):r=xt(n),r.start.add(i),r.end&&r.end.add(i)):r={start:a.clone(),end:null,allDay:!a.hasTime()},r},applyDragOpacity:function(t){var e=this.view.opt("dragOpacity");null!=e&&t.css("opacity",e)},externalDragStart:function(e,n){var i,r,s=this.view;s.opt("droppable")&&(i=t((n?n.item:null)||e.target),r=s.opt("dropAccept"),(t.isFunction(r)?r.call(i[0],i):i.is(r))&&(this.isDraggingExternal||this.listenToExternalDrag(i,e,n)))},listenToExternalDrag:function(t,e,n){var i,r=this,a=this.view,l=Nt(t);(r.externalDragListener=new ye(this,{interactionStart:function(){r.isDraggingExternal=!0},hitOver:function(t){var e=!0,n=t.component.getSafeHitSpan(t);n?(i=r.computeExternalDrop(n,l),e=i&&r.isExternalLocationAllowed(i,l.eventProps)):e=!1,e||(i=null,s()),i&&r.renderDrag(i)},hitOut:function(){i=null},hitDone:function(){o(),r.unrenderDrag()},interactionEnd:function(e){i&&a.reportExternalDrop(l,i,t,e,n),r.isDraggingExternal=!1,r.externalDragListener=null}})).startDrag(e)},computeExternalDrop:function(t,e){var n=this.view.calendar,i={start:n.applyTimezone(t.start),end:null};return e.startTime&&!i.start.hasTime()&&i.start.time(e.startTime),e.duration&&(i.end=i.start.clone().add(e.duration)),i},renderDrag:function(t,e){},unrenderDrag:function(){},buildSegResizeListener:function(t,e){var n,i,r=this,a=this.view,l=a.calendar,u=t.el,h=t.event,c=l.getEventEnd(h);return this.segResizeListener=new ye(this,{scroll:a.opt("dragScroll"),subjectEl:u,interactionStart:function(){n=!1},dragStart:function(e){n=!0,r.handleSegMouseout(t,e),r.segResizeStart(t,e)},hitOver:function(n,o,l){var u=!0,d=r.getSafeHitSpan(l),f=r.getSafeHitSpan(n);d&&f?(i=e?r.computeEventStartResize(d,f,h):r.computeEventEndResize(d,f,h),u=i&&r.isEventLocationAllowed(i,h)):u=!1,u?i.start.isSame(h.start.clone().stripZone())&&i.end.isSame(c.clone().stripZone())&&(i=null):(i=null,s()),i&&(a.hideEvent(h),r.renderEventResize(i,t))},hitOut:function(){i=null,a.showEvent(h)},hitDone:function(){r.unrenderEventResize(),o()},interactionEnd:function(e){n&&r.segResizeStop(t,e),i?a.reportSegResize(t,i,r.largeUnit,u,e):a.showEvent(h),r.segResizeListener=null}})},segResizeStart:function(t,e){this.isResizingSeg=!0,this.view.publiclyTrigger("eventResizeStart",t.el[0],t.event,e,{})},segResizeStop:function(t,e){this.isResizingSeg=!1,this.view.publiclyTrigger("eventResizeStop",t.el[0],t.event,e,{})},computeEventStartResize:function(t,e,n){return this.computeEventResize("start",t,e,n)},computeEventEndResize:function(t,e,n){return this.computeEventResize("end",t,e,n)},computeEventResize:function(t,e,n,i){var r,s,o=this.view.calendar,a=this.diffDates(n[t],e[t]);return r={start:i.start.clone(),end:o.getEventEnd(i),allDay:i.allDay},r.allDay&&tt(a)&&(r.allDay=!1,o.normalizeEventTimes(r)),r[t].add(a),r.start.isBefore(r.end)||(s=this.minResizeDuration||(i.allDay?o.defaultAllDayEventDuration:o.defaultTimedEventDuration),"start"==t?r.start=r.end.clone().subtract(s):r.end=r.start.clone().add(s)),r},renderEventResize:function(t,e){},unrenderEventResize:function(){},getEventTimeText:function(t,e,n){return null==e&&(e=this.eventTimeFormat),null==n&&(n=this.displayEventEnd),this.displayEventTime&&t.start.hasTime()?n&&t.end?this.view.formatRange(t,e):t.start.format(e):""},getSegClasses:function(t,e,n){var i=this.view,r=["fc-event",t.isStart?"fc-start":"fc-not-start",t.isEnd?"fc-end":"fc-not-end"].concat(this.getSegCustomClasses(t));return e&&r.push("fc-draggable"),n&&r.push("fc-resizable"),i.isEventSelected(t.event)&&r.push("fc-selected"),r},getSegCustomClasses:function(t){var e=t.event;return[].concat(e.className,e.source?e.source.className:[])},getSegSkinCss:function(t){return{"background-color":this.getSegBackgroundColor(t),"border-color":this.getSegBorderColor(t),color:this.getSegTextColor(t)}},getSegBackgroundColor:function(t){return t.event.backgroundColor||t.event.color||this.getSegDefaultBackgroundColor(t)},getSegDefaultBackgroundColor:function(t){var e=t.event.source||{};return e.backgroundColor||e.color||this.view.opt("eventBackgroundColor")||this.view.opt("eventColor")},getSegBorderColor:function(t){return t.event.borderColor||t.event.color||this.getSegDefaultBorderColor(t)},getSegDefaultBorderColor:function(t){var e=t.event.source||{};return e.borderColor||e.color||this.view.opt("eventBorderColor")||this.view.opt("eventColor")},getSegTextColor:function(t){
return t.event.textColor||this.getSegDefaultTextColor(t)},getSegDefaultTextColor:function(t){return(t.event.source||{}).textColor||this.view.opt("eventTextColor")},isEventLocationAllowed:function(t,e){if(this.isEventLocationInRange(t)){var n,i=this.view.calendar,r=this.eventToSpans(t);if(r.length){for(n=0;n<r.length;n++)if(!i.isEventSpanAllowed(r[n],e))return!1;return!0}}return!1},isExternalLocationAllowed:function(t,e){if(this.isEventLocationInRange(t)){var n,i=this.view.calendar,r=this.eventToSpans(t);if(r.length){for(n=0;n<r.length;n++)if(!i.isExternalSpanAllowed(r[n],t,e))return!1;return!0}}return!1},isEventLocationInRange:function(t){return Q(this.eventToRawRange(t),this.view.validRange)},eventToSegs:function(t){return this.eventsToSegs([t])},eventToSpans:function(t){var e=this.eventToRange(t);return e?this.eventRangeToSpans(e,t):[]},eventsToSegs:function(e,n){var i=this,r=Bt(e),s=[];return t.each(r,function(t,e){var r,o,a=[],l=[];for(o=0;o<e.length;o++)(r=i.eventToRange(e[o]))&&(l.push(r),a.push(e[o]));if(kt(e[0]))for(l=i.invertRanges(l),o=0;o<l.length;o++)s.push.apply(s,i.eventRangeToSegs(l[o],e[0],n));else for(o=0;o<l.length;o++)s.push.apply(s,i.eventRangeToSegs(l[o],a[o],n))}),s},eventToRange:function(t){return this.refineRawEventRange(this.eventToRawRange(t))},refineRawEventRange:function(t){var e=this.view,n=e.calendar,i=z(t,e.activeRange);if(i)return n.localizeMoment(i.start),n.localizeMoment(i.end),i},eventToRawRange:function(t){var e=this.view.calendar;return{start:t.start.clone().stripZone(),end:(t.end?t.end.clone():e.getDefaultEventEnd(null!=t.allDay?t.allDay:!t.start.hasTime(),t.start)).stripZone()}},eventRangeToSegs:function(t,e,n){var i,r=this.eventRangeToSpans(t,e),s=[];for(i=0;i<r.length;i++)s.push.apply(s,this.eventSpanToSegs(r[i],e,n));return s},eventRangeToSpans:function(e,n){return[t.extend({},e)]},eventSpanToSegs:function(t,e,n){var i,r,s=n?n(t):this.spanToSegs(t);for(i=0;i<s.length;i++)r=s[i],t.isStart||(r.isStart=!1),t.isEnd||(r.isEnd=!1),r.event=e,r.eventStartMS=+t.start,r.eventDurationMS=t.end-t.start;return s},invertRanges:function(t){var e,n,i=this.view,r=i.activeRange.start.clone(),s=i.activeRange.end.clone(),o=[],a=r;for(t.sort(Lt),e=0;e<t.length;e++)n=t[e],n.start>a&&o.push({start:a,end:n.start}),n.end>a&&(a=n.end);return a<s&&o.push({start:a,end:s}),o},sortEventSegs:function(t){t.sort(mt(this,"compareEventSegs"))},compareEventSegs:function(t,e){return t.eventStartMS-e.eventStartMS||e.eventDurationMS-t.eventDurationMS||e.event.allDay-t.event.allDay||B(t.event,e.event,this.view.eventOrderSpecs)}}),Zt.pluckEventDateProps=xt,Zt.isBgEvent=It,Zt.dataAttrPrefix="";var Ee=Zt.DayTableMixin={breakOnWeeks:!1,dayDates:null,dayIndices:null,daysPerRow:null,rowCnt:null,colCnt:null,colHeadFormat:null,updateDayTable:function(){for(var t,e,n,i=this.view,r=this.start.clone(),s=-1,o=[],a=[];r.isBefore(this.end);)i.isHiddenDay(r)?o.push(s+.5):(s++,o.push(s),a.push(r.clone())),r.add(1,"days");if(this.breakOnWeeks){for(e=a[0].day(),t=1;t<a.length&&a[t].day()!=e;t++);n=Math.ceil(a.length/t)}else n=1,t=a.length;this.dayDates=a,this.dayIndices=o,this.daysPerRow=t,this.rowCnt=n,this.updateDayTableCols()},updateDayTableCols:function(){this.colCnt=this.computeColCnt(),this.colHeadFormat=this.view.opt("columnFormat")||this.computeColHeadFormat()},computeColCnt:function(){return this.daysPerRow},getCellDate:function(t,e){return this.dayDates[this.getCellDayIndex(t,e)].clone()},getCellRange:function(t,e){var n=this.getCellDate(t,e);return{start:n,end:n.clone().add(1,"days")}},getCellDayIndex:function(t,e){return t*this.daysPerRow+this.getColDayIndex(e)},getColDayIndex:function(t){return this.isRTL?this.colCnt-1-t:t},getDateDayIndex:function(t){var e=this.dayIndices,n=t.diff(this.start,"days");return n<0?e[0]-1:n>=e.length?e[e.length-1]+1:e[n]},computeColHeadFormat:function(){return this.rowCnt>1||this.colCnt>10?"ddd":this.colCnt>1?this.view.opt("dayOfMonthFormat"):"dddd"},sliceRangeByRow:function(t){var e,n,i,r,s,o=this.daysPerRow,a=this.view.computeDayRange(t),l=this.getDateDayIndex(a.start),u=this.getDateDayIndex(a.end.clone().subtract(1,"days")),h=[];for(e=0;e<this.rowCnt;e++)n=e*o,i=n+o-1,r=Math.max(l,n),s=Math.min(u,i),r=Math.ceil(r),s=Math.floor(s),r<=s&&h.push({row:e,firstRowDayIndex:r-n,lastRowDayIndex:s-n,isStart:r===l,isEnd:s===u});return h},sliceRangeByDay:function(t){var e,n,i,r,s,o,a=this.daysPerRow,l=this.view.computeDayRange(t),u=this.getDateDayIndex(l.start),h=this.getDateDayIndex(l.end.clone().subtract(1,"days")),c=[];for(e=0;e<this.rowCnt;e++)for(n=e*a,i=n+a-1,r=n;r<=i;r++)s=Math.max(u,r),o=Math.min(h,r),s=Math.ceil(s),o=Math.floor(o),s<=o&&c.push({row:e,firstRowDayIndex:s-n,lastRowDayIndex:o-n,isStart:s===u,isEnd:o===h});return c},renderHeadHtml:function(){return'<div class="fc-row '+this.view.widgetHeaderClass+'"><table><thead>'+this.renderHeadTrHtml()+"</thead></table></div>"},renderHeadIntroHtml:function(){return this.renderIntroHtml()},renderHeadTrHtml:function(){return"<tr>"+(this.isRTL?"":this.renderHeadIntroHtml())+this.renderHeadDateCellsHtml()+(this.isRTL?this.renderHeadIntroHtml():"")+"</tr>"},renderHeadDateCellsHtml:function(){var t,e,n=[];for(t=0;t<this.colCnt;t++)e=this.getCellDate(0,t),n.push(this.renderHeadDateCellHtml(e));return n.join("")},renderHeadDateCellHtml:function(t,e,n){var i=this.view,r=Z(t,i.activeRange),s=["fc-day-header",i.widgetHeaderClass],o=ht(t.format(this.colHeadFormat));return 1===this.rowCnt?s=s.concat(this.getDayClasses(t,!0)):s.push("fc-"+Kt[t.day()]),'<th class="'+s.join(" ")+'"'+(1===(r&&this.rowCnt)?' data-date="'+t.format("YYYY-MM-DD")+'"':"")+(e>1?' colspan="'+e+'"':"")+(n?" "+n:"")+">"+(r?i.buildGotoAnchorHtml({date:t,forceOff:this.rowCnt>1||1===this.colCnt},o):o)+"</th>"},renderBgTrHtml:function(t){return"<tr>"+(this.isRTL?"":this.renderBgIntroHtml(t))+this.renderBgCellsHtml(t)+(this.isRTL?this.renderBgIntroHtml(t):"")+"</tr>"},renderBgIntroHtml:function(t){return this.renderIntroHtml()},renderBgCellsHtml:function(t){var e,n,i=[];for(e=0;e<this.colCnt;e++)n=this.getCellDate(t,e),i.push(this.renderBgCellHtml(n));return i.join("")},renderBgCellHtml:function(t,e){var n=this.view,i=Z(t,n.activeRange),r=this.getDayClasses(t);return r.unshift("fc-day",n.widgetContentClass),'<td class="'+r.join(" ")+'"'+(i?' data-date="'+t.format("YYYY-MM-DD")+'"':"")+(e?" "+e:"")+"></td>"},renderIntroHtml:function(){},bookendCells:function(t){var e=this.renderIntroHtml();e&&(this.isRTL?t.append(e):t.prepend(e))}},De=Zt.DayGrid=be.extend(Ee,{numbersVisible:!1,bottomCoordPadding:0,rowEls:null,cellEls:null,helperEls:null,rowCoordCache:null,colCoordCache:null,renderDates:function(t){var e,n,i=this.view,r=this.rowCnt,s=this.colCnt,o="";for(e=0;e<r;e++)o+=this.renderDayRowHtml(e,t);for(this.el.html(o),this.rowEls=this.el.find(".fc-row"),this.cellEls=this.el.find(".fc-day, .fc-disabled-day"),this.rowCoordCache=new ve({els:this.rowEls,isVertical:!0}),this.colCoordCache=new ve({els:this.cellEls.slice(0,this.colCnt),isHorizontal:!0}),e=0;e<r;e++)for(n=0;n<s;n++)i.publiclyTrigger("dayRender",null,this.getCellDate(e,n),this.getCellEl(e,n))},unrenderDates:function(){this.removeSegPopover()},renderBusinessHours:function(){var t=this.buildBusinessHourSegs(!0);this.renderFill("businessHours",t,"bgevent")},unrenderBusinessHours:function(){this.unrenderFill("businessHours")},renderDayRowHtml:function(t,e){var n=this.view,i=["fc-row","fc-week",n.widgetContentClass];return e&&i.push("fc-rigid"),'<div class="'+i.join(" ")+'"><div class="fc-bg"><table>'+this.renderBgTrHtml(t)+'</table></div><div class="fc-content-skeleton"><table>'+(this.numbersVisible?"<thead>"+this.renderNumberTrHtml(t)+"</thead>":"")+"</table></div></div>"},renderNumberTrHtml:function(t){return"<tr>"+(this.isRTL?"":this.renderNumberIntroHtml(t))+this.renderNumberCellsHtml(t)+(this.isRTL?this.renderNumberIntroHtml(t):"")+"</tr>"},renderNumberIntroHtml:function(t){return this.renderIntroHtml()},renderNumberCellsHtml:function(t){var e,n,i=[];for(e=0;e<this.colCnt;e++)n=this.getCellDate(t,e),i.push(this.renderNumberCellHtml(n));return i.join("")},renderNumberCellHtml:function(t){var e,n,i=this.view,r="",s=Z(t,i.activeRange),o=i.dayNumbersVisible&&s;return o||i.cellWeekNumbersVisible?(e=this.getDayClasses(t),e.unshift("fc-day-top"),i.cellWeekNumbersVisible&&(n="ISO"===t._locale._fullCalendar_weekCalc?1:t._locale.firstDayOfWeek()),r+='<td class="'+e.join(" ")+'"'+(s?' data-date="'+t.format()+'"':"")+">",i.cellWeekNumbersVisible&&t.day()==n&&(r+=i.buildGotoAnchorHtml({date:t,type:"week"},{class:"fc-week-number"},t.format("w"))),o&&(r+=i.buildGotoAnchorHtml(t,{class:"fc-day-number"},t.date())),r+="</td>"):"<td/>"},computeEventTimeFormat:function(){return this.view.opt("extraSmallTimeFormat")},computeDisplayEventEnd:function(){return 1==this.colCnt},rangeUpdated:function(){this.updateDayTable()},spanToSegs:function(t){var e,n,i=this.sliceRangeByRow(t);for(e=0;e<i.length;e++)n=i[e],this.isRTL?(n.leftCol=this.daysPerRow-1-n.lastRowDayIndex,n.rightCol=this.daysPerRow-1-n.firstRowDayIndex):(n.leftCol=n.firstRowDayIndex,n.rightCol=n.lastRowDayIndex);return i},prepareHits:function(){this.colCoordCache.build(),this.rowCoordCache.build(),this.rowCoordCache.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},releaseHits:function(){this.colCoordCache.clear(),this.rowCoordCache.clear()},queryHit:function(t,e){if(this.colCoordCache.isLeftInBounds(t)&&this.rowCoordCache.isTopInBounds(e)){var n=this.colCoordCache.getHorizontalIndex(t),i=this.rowCoordCache.getVerticalIndex(e);if(null!=i&&null!=n)return this.getCellHit(i,n)}},getHitSpan:function(t){return this.getCellRange(t.row,t.col)},getHitEl:function(t){return this.getCellEl(t.row,t.col)},getCellHit:function(t,e){return{row:t,col:e,component:this,left:this.colCoordCache.getLeftOffset(e),right:this.colCoordCache.getRightOffset(e),top:this.rowCoordCache.getTopOffset(t),bottom:this.rowCoordCache.getBottomOffset(t)}},getCellEl:function(t,e){return this.cellEls.eq(t*this.colCnt+e)},renderDrag:function(t,e){var n,i=this.eventToSpans(t);for(n=0;n<i.length;n++)this.renderHighlight(i[n]);if(e&&e.component!==this)return this.renderEventLocationHelper(t,e)},unrenderDrag:function(){this.unrenderHighlight(),this.unrenderHelper()},renderEventResize:function(t,e){var n,i=this.eventToSpans(t);for(n=0;n<i.length;n++)this.renderHighlight(i[n]);return this.renderEventLocationHelper(t,e)},unrenderEventResize:function(){this.unrenderHighlight(),this.unrenderHelper()},renderHelper:function(e,n){var i,r=[],s=this.eventToSegs(e);return s=this.renderFgSegEls(s),i=this.renderSegRows(s),this.rowEls.each(function(e,s){var o,a=t(s),l=t('<div class="fc-helper-skeleton"><table/></div>');o=n&&n.row===e?n.el.position().top:a.find(".fc-content-skeleton tbody").position().top,l.css("top",o).find("table").append(i[e].tbodyEl),a.append(l),r.push(l[0])}),this.helperEls=t(r)},unrenderHelper:function(){this.helperEls&&(this.helperEls.remove(),this.helperEls=null)},fillSegTag:"td",renderFill:function(e,n,i){var r,s,o,a=[];for(n=this.renderFillSegEls(e,n),r=0;r<n.length;r++)s=n[r],o=this.renderFillRow(e,s,i),this.rowEls.eq(s.row).append(o),a.push(o[0]);return this.elsByFill[e]=t(a),n},renderFillRow:function(e,n,i){var r,s,o=this.colCnt,a=n.leftCol,l=n.rightCol+1;return i=i||e.toLowerCase(),r=t('<div class="fc-'+i+'-skeleton"><table><tr/></table></div>'),s=r.find("tr"),a>0&&s.append('<td colspan="'+a+'"/>'),s.append(n.el.attr("colspan",l-a)),l<o&&s.append('<td colspan="'+(o-l)+'"/>'),this.bookendCells(s),r}});De.mixin({rowStructs:null,unrenderEvents:function(){this.removeSegPopover(),be.prototype.unrenderEvents.apply(this,arguments)},getEventSegs:function(){return be.prototype.getEventSegs.call(this).concat(this.popoverSegs||[])},renderBgSegs:function(e){var n=t.grep(e,function(t){return t.event.allDay});return be.prototype.renderBgSegs.call(this,n)},renderFgSegs:function(e){var n;return e=this.renderFgSegEls(e),n=this.rowStructs=this.renderSegRows(e),this.rowEls.each(function(e,i){t(i).find(".fc-content-skeleton > table").append(n[e].tbodyEl)}),e},unrenderFgSegs:function(){for(var t,e=this.rowStructs||[];t=e.pop();)t.tbodyEl.remove();this.rowStructs=null},renderSegRows:function(t){var e,n,i=[];for(e=this.groupSegRows(t),n=0;n<e.length;n++)i.push(this.renderSegRow(n,e[n]));return i},fgSegHtml:function(t,e){var n,i,r=this.view,s=t.event,o=r.isEventDraggable(s),a=!e&&s.allDay&&t.isStart&&r.isEventResizableFromStart(s),l=!e&&s.allDay&&t.isEnd&&r.isEventResizableFromEnd(s),u=this.getSegClasses(t,o,a||l),h=dt(this.getSegSkinCss(t)),c="";return u.unshift("fc-day-grid-event","fc-h-event"),t.isStart&&(n=this.getEventTimeText(s))&&(c='<span class="fc-time">'+ht(n)+"</span>"),i='<span class="fc-title">'+(ht(s.title||"")||"&nbsp;")+"</span>",'<a class="'+u.join(" ")+'"'+(s.url?' href="'+ht(s.url)+'"':"")+(h?' style="'+h+'"':"")+'><div class="fc-content">'+(this.isRTL?i+" "+c:c+" "+i)+"</div>"+(a?'<div class="fc-resizer fc-start-resizer" />':"")+(l?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},renderSegRow:function(e,n){function i(e){for(;o<e;)h=(m[r-1]||[])[o],h?h.attr("rowspan",parseInt(h.attr("rowspan")||1,10)+1):(h=t("<td/>"),a.append(h)),v[r][o]=h,m[r][o]=h,o++}var r,s,o,a,l,u,h,c=this.colCnt,d=this.buildSegLevels(n),f=Math.max(1,d.length),g=t("<tbody/>"),p=[],v=[],m=[];for(r=0;r<f;r++){if(s=d[r],o=0,a=t("<tr/>"),p.push([]),v.push([]),m.push([]),s)for(l=0;l<s.length;l++){for(u=s[l],i(u.leftCol),h=t('<td class="fc-event-container"/>').append(u.el),u.leftCol!=u.rightCol?h.attr("colspan",u.rightCol-u.leftCol+1):m[r][o]=h;o<=u.rightCol;)v[r][o]=h,p[r][o]=u,o++;a.append(h)}i(c),this.bookendCells(a),g.append(a)}return{row:e,tbodyEl:g,cellMatrix:v,segMatrix:p,segLevels:d,segs:n}},buildSegLevels:function(t){var e,n,i,r=[];for(this.sortEventSegs(t),e=0;e<t.length;e++){for(n=t[e],i=0;i<r.length&&zt(n,r[i]);i++);n.level=i,(r[i]||(r[i]=[])).push(n)}for(i=0;i<r.length;i++)r[i].sort(Ft);return r},groupSegRows:function(t){var e,n=[];for(e=0;e<this.rowCnt;e++)n.push([]);for(e=0;e<t.length;e++)n[t[e].row].push(t[e]);return n}}),De.mixin({segPopover:null,popoverSegs:null,removeSegPopover:function(){this.segPopover&&this.segPopover.hide()},limitRows:function(t){var e,n,i=this.rowStructs||[];for(e=0;e<i.length;e++)this.unlimitRow(e),!1!==(n=!!t&&("number"==typeof t?t:this.computeRowLevelLimit(e)))&&this.limitRow(e,n)},computeRowLevelLimit:function(e){function n(e,n){s=Math.max(s,t(n).outerHeight())}var i,r,s,o=this.rowEls.eq(e),a=o.height(),l=this.rowStructs[e].tbodyEl.children();for(i=0;i<l.length;i++)if(r=l.eq(i).removeClass("fc-limited"),s=0,r.find("> td > :first-child").each(n),r.position().top+s>a)return i;return!1},limitRow:function(e,n){function i(i){for(;E<i;)u=w.getCellSegs(e,E,n),u.length&&(d=s[n-1][E],y=w.renderMoreLink(e,E,u),m=t("<div/>").append(y),d.append(m),b.push(m[0])),E++}var r,s,o,a,l,u,h,c,d,f,g,p,v,m,y,w=this,S=this.rowStructs[e],b=[],E=0;if(n&&n<S.segLevels.length){for(r=S.segLevels[n-1],s=S.cellMatrix,o=S.tbodyEl.children().slice(n).addClass("fc-limited").get(),a=0;a<r.length;a++){for(l=r[a],i(l.leftCol),c=[],h=0;E<=l.rightCol;)u=this.getCellSegs(e,E,n),c.push(u),h+=u.length,E++;if(h){for(d=s[n-1][l.leftCol],f=d.attr("rowspan")||1,g=[],p=0;p<c.length;p++)v=t('<td class="fc-more-cell"/>').attr("rowspan",f),u=c[p],y=this.renderMoreLink(e,l.leftCol+p,[l].concat(u)),m=t("<div/>").append(y),v.append(m),g.push(v[0]),b.push(v[0]);d.addClass("fc-limited").after(t(g)),o.push(d[0])}}i(this.colCnt),S.moreEls=t(b),S.limitedEls=t(o)}},unlimitRow:function(t){var e=this.rowStructs[t];e.moreEls&&(e.moreEls.remove(),e.moreEls=null),e.limitedEls&&(e.limitedEls.removeClass("fc-limited"),e.limitedEls=null)},renderMoreLink:function(e,n,i){var r=this,s=this.view;return t('<a class="fc-more"/>').text(this.getMoreLinkText(i.length)).on("click",function(o){var a=s.opt("eventLimitClick"),l=r.getCellDate(e,n),u=t(this),h=r.getCellEl(e,n),c=r.getCellSegs(e,n),d=r.resliceDaySegs(c,l),f=r.resliceDaySegs(i,l);"function"==typeof a&&(a=s.publiclyTrigger("eventLimitClick",null,{date:l,dayEl:h,moreEl:u,segs:d,hiddenSegs:f},o)),"popover"===a?r.showSegPopover(e,n,u,d):"string"==typeof a&&s.calendar.zoomTo(l,a)})},showSegPopover:function(t,e,n,i){var r,s,o=this,a=this.view,l=n.parent();r=1==this.rowCnt?a.el:this.rowEls.eq(t),s={className:"fc-more-popover",content:this.renderSegPopoverContent(t,e,i),parentEl:this.view.el,top:r.offset().top,autoHide:!0,viewportConstrain:a.opt("popoverViewportConstrain"),hide:function(){if(o.popoverSegs)for(var t,e=0;e<o.popoverSegs.length;++e)t=o.popoverSegs[e],a.publiclyTrigger("eventDestroy",t.event,t.event,t.el);o.segPopover.removeElement(),o.segPopover=null,o.popoverSegs=null}},this.isRTL?s.right=l.offset().left+l.outerWidth()+1:s.left=l.offset().left-1,this.segPopover=new pe(s),this.segPopover.show(),this.bindSegHandlersToEl(this.segPopover.el)},renderSegPopoverContent:function(e,n,i){var r,s=this.view,o=s.opt("theme"),a=this.getCellDate(e,n).format(s.opt("dayPopoverFormat")),l=t('<div class="fc-header '+s.widgetHeaderClass+'"><span class="fc-close '+(o?"ui-icon ui-icon-closethick":"fc-icon fc-icon-x")+'"></span><span class="fc-title">'+ht(a)+'</span><div class="fc-clear"/></div><div class="fc-body '+s.widgetContentClass+'"><div class="fc-event-container"></div></div>'),u=l.find(".fc-event-container");for(i=this.renderFgSegEls(i,!0),this.popoverSegs=i,r=0;r<i.length;r++)this.hitsNeeded(),i[r].hit=this.getCellHit(e,n),this.hitsNotNeeded(),u.append(i[r].el);return l},resliceDaySegs:function(e,n){var i=t.map(e,function(t){return t.event}),r=n.clone(),s=r.clone().add(1,"days"),o={start:r,end:s};return e=this.eventsToSegs(i,function(t){var e=z(t,o);return e?[e]:[]}),this.sortEventSegs(e),e},getMoreLinkText:function(t){var e=this.view.opt("eventLimitText");return"function"==typeof e?e(t):"+"+t+" "+e},getCellSegs:function(t,e,n){for(var i,r=this.rowStructs[t].segMatrix,s=n||0,o=[];s<r.length;)i=r[s][e],i&&o.push(i),s++;return o}});var Te=Zt.TimeGrid=be.extend(Ee,{slotDuration:null,snapDuration:null,snapsPerSlot:null,labelFormat:null,labelInterval:null,colEls:null,slatContainerEl:null,slatEls:null,nowIndicatorEls:null,colCoordCache:null,slatCoordCache:null,constructor:function(){be.apply(this,arguments),this.processOptions()},renderDates:function(){this.el.html(this.renderHtml()),this.colEls=this.el.find(".fc-day, .fc-disabled-day"),this.slatContainerEl=this.el.find(".fc-slats"),this.slatEls=this.slatContainerEl.find("tr"),this.colCoordCache=new ve({els:this.colEls,isHorizontal:!0}),this.slatCoordCache=new ve({els:this.slatEls,isVertical:!0}),this.renderContentSkeleton()},renderHtml:function(){return'<div class="fc-bg"><table>'+this.renderBgTrHtml(0)+'</table></div><div class="fc-slats"><table>'+this.renderSlatRowHtml()+"</table></div>"},renderSlatRowHtml:function(){for(var t,n,i,r=this.view,s=this.isRTL,o="",a=e.duration(+this.view.minTime);a<this.view.maxTime;)t=this.start.clone().time(a),n=vt(W(a,this.labelInterval)),i='<td class="fc-axis fc-time '+r.widgetContentClass+'" '+r.axisStyleAttr()+">"+(n?"<span>"+ht(t.format(this.labelFormat))+"</span>":"")+"</td>",o+='<tr data-time="'+t.format("HH:mm:ss")+'"'+(n?"":' class="fc-minor"')+">"+(s?"":i)+'<td class="'+r.widgetContentClass+'"/>'+(s?i:"")+"</tr>",a.add(this.slotDuration);return o},processOptions:function(){var n,i=this.view,r=i.opt("slotDuration"),s=i.opt("snapDuration");r=e.duration(r),s=s?e.duration(s):r,this.slotDuration=r,this.snapDuration=s,this.snapsPerSlot=r/s,this.minResizeDuration=s,n=i.opt("slotLabelFormat"),t.isArray(n)&&(n=n[n.length-1]),this.labelFormat=n||i.opt("smallTimeFormat"),n=i.opt("slotLabelInterval"),this.labelInterval=n?e.duration(n):this.computeLabelInterval(r)},computeLabelInterval:function(t){var n,i,r;for(n=_e.length-1;n>=0;n--)if(i=e.duration(_e[n]),r=W(i,t),vt(r)&&r>1)return i;return e.duration(t)},computeEventTimeFormat:function(){return this.view.opt("noMeridiemTimeFormat")},computeDisplayEventEnd:function(){return!0},prepareHits:function(){this.colCoordCache.build(),this.slatCoordCache.build()},releaseHits:function(){this.colCoordCache.clear()},queryHit:function(t,e){var n=this.snapsPerSlot,i=this.colCoordCache,r=this.slatCoordCache;if(i.isLeftInBounds(t)&&r.isTopInBounds(e)){var s=i.getHorizontalIndex(t),o=r.getVerticalIndex(e);if(null!=s&&null!=o){var a=r.getTopOffset(o),l=r.getHeight(o),u=(e-a)/l,h=Math.floor(u*n),c=o*n+h,d=a+h/n*l,f=a+(h+1)/n*l;return{col:s,snap:c,component:this,left:i.getLeftOffset(s),right:i.getRightOffset(s),top:d,bottom:f}}}},getHitSpan:function(t){var e,n=this.getCellDate(0,t.col),i=this.computeSnapTime(t.snap);return n.time(i),e=n.clone().add(this.snapDuration),{start:n,end:e}},getHitEl:function(t){return this.colEls.eq(t.col)},rangeUpdated:function(){this.updateDayTable()},computeSnapTime:function(t){return e.duration(this.view.minTime+this.snapDuration*t)},spanToSegs:function(t){var e,n=this.sliceRangeByTimes(t);for(e=0;e<n.length;e++)this.isRTL?n[e].col=this.daysPerRow-1-n[e].dayIndex:n[e].col=n[e].dayIndex;return n},sliceRangeByTimes:function(t){var e,n,i,r,s=[];for(n=0;n<this.daysPerRow;n++)i=this.dayDates[n].clone().time(0),r={start:i.clone().add(this.view.minTime),end:i.clone().add(this.view.maxTime)},(e=z(t,r))&&(e.dayIndex=n,s.push(e));return s},updateSize:function(t){this.slatCoordCache.build(),t&&this.updateSegVerticals([].concat(this.fgSegs||[],this.bgSegs||[],this.businessSegs||[]))},getTotalSlatHeight:function(){return this.slatContainerEl.outerHeight()},computeDateTop:function(t,n){return this.computeTimeTop(e.duration(t-n.clone().stripTime()))},computeTimeTop:function(t){var e,n,i=this.slatEls.length,r=(t-this.view.minTime)/this.slotDuration;return r=Math.max(0,r),r=Math.min(i,r),e=Math.floor(r),e=Math.min(e,i-1),n=r-e,this.slatCoordCache.getTopPosition(e)+this.slatCoordCache.getHeight(e)*n},renderDrag:function(t,e){var n,i;if(e)return this.renderEventLocationHelper(t,e);for(n=this.eventToSpans(t),i=0;i<n.length;i++)this.renderHighlight(n[i])},unrenderDrag:function(){this.unrenderHelper(),this.unrenderHighlight()},renderEventResize:function(t,e){return this.renderEventLocationHelper(t,e)},unrenderEventResize:function(){this.unrenderHelper()},renderHelper:function(t,e){return this.renderHelperSegs(this.eventToSegs(t),e)},unrenderHelper:function(){this.unrenderHelperSegs()},renderBusinessHours:function(){this.renderBusinessSegs(this.buildBusinessHourSegs())},unrenderBusinessHours:function(){this.unrenderBusinessSegs()},getNowIndicatorUnit:function(){return"minute"},renderNowIndicator:function(e){var n,i=this.spanToSegs({start:e,end:e}),r=this.computeDateTop(e,e),s=[];for(n=0;n<i.length;n++)s.push(t('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top",r).appendTo(this.colContainerEls.eq(i[n].col))[0]);i.length>0&&s.push(t('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top",r).appendTo(this.el.find(".fc-content-skeleton"))[0]),this.nowIndicatorEls=t(s)},unrenderNowIndicator:function(){this.nowIndicatorEls&&(this.nowIndicatorEls.remove(),this.nowIndicatorEls=null)},renderSelection:function(t){this.view.opt("selectHelper")?this.renderEventLocationHelper(t):this.renderHighlight(t)},unrenderSelection:function(){this.unrenderHelper(),this.unrenderHighlight()},renderHighlight:function(t){this.renderHighlightSegs(this.spanToSegs(t))},unrenderHighlight:function(){this.unrenderHighlightSegs()}});Te.mixin({colContainerEls:null,fgContainerEls:null,bgContainerEls:null,helperContainerEls:null,highlightContainerEls:null,businessContainerEls:null,fgSegs:null,bgSegs:null,helperSegs:null,highlightSegs:null,businessSegs:null,renderContentSkeleton:function(){var e,n,i="";for(e=0;e<this.colCnt;e++)i+='<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';n=t('<div class="fc-content-skeleton"><table><tr>'+i+"</tr></table></div>"),this.colContainerEls=n.find(".fc-content-col"),this.helperContainerEls=n.find(".fc-helper-container"),this.fgContainerEls=n.find(".fc-event-container:not(.fc-helper-container)"),this.bgContainerEls=n.find(".fc-bgevent-container"),this.highlightContainerEls=n.find(".fc-highlight-container"),this.businessContainerEls=n.find(".fc-business-container"),this.bookendCells(n.find("tr")),this.el.append(n)},renderFgSegs:function(t){return t=this.renderFgSegsIntoContainers(t,this.fgContainerEls),this.fgSegs=t,t},unrenderFgSegs:function(){this.unrenderNamedSegs("fgSegs")},renderHelperSegs:function(e,n){var i,r,s,o=[];for(e=this.renderFgSegsIntoContainers(e,this.helperContainerEls),i=0;i<e.length;i++)r=e[i],n&&n.col===r.col&&(s=n.el,r.el.css({left:s.css("left"),right:s.css("right"),"margin-left":s.css("margin-left"),"margin-right":s.css("margin-right")})),o.push(r.el[0]);return this.helperSegs=e,t(o)},unrenderHelperSegs:function(){this.unrenderNamedSegs("helperSegs")},renderBgSegs:function(t){return t=this.renderFillSegEls("bgEvent",t),this.updateSegVerticals(t),this.attachSegsByCol(this.groupSegsByCol(t),this.bgContainerEls),this.bgSegs=t,t},unrenderBgSegs:function(){this.unrenderNamedSegs("bgSegs")},renderHighlightSegs:function(t){t=this.renderFillSegEls("highlight",t),this.updateSegVerticals(t),this.attachSegsByCol(this.groupSegsByCol(t),this.highlightContainerEls),this.highlightSegs=t},unrenderHighlightSegs:function(){this.unrenderNamedSegs("highlightSegs")},renderBusinessSegs:function(t){t=this.renderFillSegEls("businessHours",t),this.updateSegVerticals(t),this.attachSegsByCol(this.groupSegsByCol(t),this.businessContainerEls),this.businessSegs=t},unrenderBusinessSegs:function(){this.unrenderNamedSegs("businessSegs")},groupSegsByCol:function(t){var e,n=[];for(e=0;e<this.colCnt;e++)n.push([]);for(e=0;e<t.length;e++)n[t[e].col].push(t[e]);return n},attachSegsByCol:function(t,e){var n,i,r;for(n=0;n<this.colCnt;n++)for(i=t[n],r=0;r<i.length;r++)e.eq(n).append(i[r].el)},unrenderNamedSegs:function(t){var e,n=this[t];if(n){for(e=0;e<n.length;e++)n[e].el.remove();this[t]=null}},renderFgSegsIntoContainers:function(t,e){var n,i;for(t=this.renderFgSegEls(t),n=this.groupSegsByCol(t),i=0;i<this.colCnt;i++)this.updateFgSegCoords(n[i]);return this.attachSegsByCol(n,e),t},fgSegHtml:function(t,e){var n,i,r,s=this.view,o=t.event,a=s.isEventDraggable(o),l=!e&&t.isStart&&s.isEventResizableFromStart(o),u=!e&&t.isEnd&&s.isEventResizableFromEnd(o),h=this.getSegClasses(t,a,l||u),c=dt(this.getSegSkinCss(t));return h.unshift("fc-time-grid-event","fc-v-event"),s.isMultiDayEvent(o)?(t.isStart||t.isEnd)&&(n=this.getEventTimeText(t),i=this.getEventTimeText(t,"LT"),r=this.getEventTimeText(t,null,!1)):(n=this.getEventTimeText(o),i=this.getEventTimeText(o,"LT"),r=this.getEventTimeText(o,null,!1)),'<a class="'+h.join(" ")+'"'+(o.url?' href="'+ht(o.url)+'"':"")+(c?' style="'+c+'"':"")+'><div class="fc-content">'+(n?'<div class="fc-time" data-start="'+ht(r)+'" data-full="'+ht(i)+'"><span>'+ht(n)+"</span></div>":"")+(o.title?'<div class="fc-title">'+ht(o.title)+"</div>":"")+'</div><div class="fc-bg"/>'+(u?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},updateSegVerticals:function(t){this.computeSegVerticals(t),this.assignSegVerticals(t)},computeSegVerticals:function(t){var e,n,i;for(e=0;e<t.length;e++)n=t[e],i=this.dayDates[n.dayIndex],n.top=this.computeDateTop(n.start,i),n.bottom=this.computeDateTop(n.end,i)},assignSegVerticals:function(t){var e,n;for(e=0;e<t.length;e++)n=t[e],n.el.css(this.generateSegVerticalCss(n))},generateSegVerticalCss:function(t){return{top:t.top,bottom:-t.bottom}},updateFgSegCoords:function(t){this.computeSegVerticals(t),this.computeFgSegHorizontals(t),this.assignSegVerticals(t),this.assignFgSegHorizontals(t)},computeFgSegHorizontals:function(t){var e,n,i;if(this.sortEventSegs(t),e=At(t),Gt(e),n=e[0]){for(i=0;i<n.length;i++)Vt(n[i]);for(i=0;i<n.length;i++)this.computeFgSegForwardBack(n[i],0,0)}},computeFgSegForwardBack:function(t,e,n){var i,r=t.forwardSegs;if(void 0===t.forwardCoord)for(r.length?(this.sortForwardSegs(r),this.computeFgSegForwardBack(r[0],e+1,n),t.forwardCoord=r[0].backwardCoord):t.forwardCoord=1,t.backwardCoord=t.forwardCoord-(t.forwardCoord-n)/(e+1),i=0;i<r.length;i++)this.computeFgSegForwardBack(r[i],0,t.forwardCoord)},sortForwardSegs:function(t){t.sort(mt(this,"compareForwardSegs"))},compareForwardSegs:function(t,e){return e.forwardPressure-t.forwardPressure||(t.backwardCoord||0)-(e.backwardCoord||0)||this.compareEventSegs(t,e)},assignFgSegHorizontals:function(t){var e,n;for(e=0;e<t.length;e++)n=t[e],n.el.css(this.generateFgSegHorizontalCss(n)),n.bottom-n.top<30&&n.el.addClass("fc-short")},generateFgSegHorizontalCss:function(t){var e,n,i=this.view.opt("slotEventOverlap"),r=t.backwardCoord,s=t.forwardCoord,o=this.generateSegVerticalCss(t);return i&&(s=Math.min(1,r+2*(s-r))),this.isRTL?(e=1-s,n=r):(e=r,n=1-s),o.zIndex=t.level+1,o.left=100*e+"%",o.right=100*n+"%",i&&t.forwardPressure&&(o[this.isRTL?"marginLeft":"marginRight"]=20),o}});var Ce=Zt.View=ue.extend({type:null,name:null,title:null,calendar:null,viewSpec:null,options:null,el:null,renderQueue:null,batchRenderDepth:0,isDatesRendered:!1,isEventsRendered:!1,isBaseRendered:!1,queuedScroll:null,isRTL:!1,isSelected:!1,selectedEvent:null,eventOrderSpecs:null,widgetHeaderClass:null,widgetContentClass:null,highlightStateClass:null,nextDayThreshold:null,isHiddenDayHash:null,isNowIndicatorRendered:null,initialNowDate:null,initialNowQueriedMs:null,nowIndicatorTimeoutID:null,nowIndicatorIntervalID:null,constructor:function(t,n){ue.prototype.constructor.call(this),this.calendar=t,this.viewSpec=n,this.type=n.type,this.options=n.options,this.name=this.type,this.nextDayThreshold=e.duration(this.opt("nextDayThreshold")),this.initThemingProps(),this.initHiddenDays(),this.isRTL=this.opt("isRTL"),this.eventOrderSpecs=M(this.opt("eventOrder")),this.renderQueue=this.buildRenderQueue(),this.initAutoBatchRender(),this.initialize()},buildRenderQueue:function(){var t=this,e=new de({event:this.opt("eventRenderWait")});return e.on("start",function(){t.freezeHeight(),t.addScroll(t.queryScroll())}),e.on("stop",function(){t.thawHeight(),t.popScroll()}),e},initAutoBatchRender:function(){var t=this;this.on("before:change",function(){t.startBatchRender()}),this.on("change",function(){t.stopBatchRender()})},startBatchRender:function(){this.batchRenderDepth++||this.renderQueue.pause()},stopBatchRender:function(){--this.batchRenderDepth||this.renderQueue.resume()},initialize:function(){},opt:function(t){return this.options[t]},publiclyTrigger:function(t,e){var n=this.calendar;return n.publiclyTrigger.apply(n,[t,e||this].concat(Array.prototype.slice.call(arguments,2),[this]))},updateTitle:function(){this.title=this.computeTitle(),this.calendar.setToolbarsTitle(this.title)},computeTitle:function(){var t;return t=/^(year|month)$/.test(this.currentRangeUnit)?this.currentRange:this.activeRange,this.formatRange({start:this.calendar.applyTimezone(t.start),end:this.calendar.applyTimezone(t.end)},this.opt("titleFormat")||this.computeTitleFormat(),this.opt("titleRangeSeparator"))},computeTitleFormat:function(){return"year"==this.currentRangeUnit?"YYYY":"month"==this.currentRangeUnit?this.opt("monthYearFormat"):this.currentRangeAs("days")>1?"ll":"LL"},formatRange:function(t,e,n){var i=t.end;return i.hasTime()||(i=i.clone().subtract(1)),ae(t.start,i,e,n,this.opt("isRTL"))},getAllDayHtml:function(){return this.opt("allDayHtml")||ht(this.opt("allDayText"))},buildGotoAnchorHtml:function(e,n,i){var r,s,o,a;return t.isPlainObject(e)?(r=e.date,s=e.type,o=e.forceOff):r=e,r=Zt.moment(r),a={date:r.format("YYYY-MM-DD"),type:s||"day"},"string"==typeof n&&(i=n,n=null),n=n?" "+ft(n):"",i=i||"",!o&&this.opt("navLinks")?"<a"+n+' data-goto="'+ht(JSON.stringify(a))+'">'+i+"</a>":"<span"+n+">"+i+"</span>"},setElement:function(t){this.el=t,this.bindGlobalHandlers(),this.bindBaseRenderHandlers(),this.renderSkeleton()},
removeElement:function(){this.unsetDate(),this.unrenderSkeleton(),this.unbindGlobalHandlers(),this.unbindBaseRenderHandlers(),this.el.remove()},renderSkeleton:function(){},unrenderSkeleton:function(){},setDate:function(t){var e=this.get("dateProfile"),n=this.buildDateProfile(t,null,!0);return e&&X(e.activeRange,n.activeRange)||this.set("dateProfile",n),n.date},unsetDate:function(){this.unset("dateProfile")},requestDateRender:function(t){var e=this;this.renderQueue.queue(function(){e.executeDateRender(t)},"date","init")},requestDateUnrender:function(){var t=this;this.renderQueue.queue(function(){t.executeDateUnrender()},"date","destroy")},fetchInitialEvents:function(t){return this.calendar.requestEvents(t.activeRange.start,t.activeRange.end)},bindEventChanges:function(){this.listenTo(this.calendar,"eventsReset",this.resetEvents)},unbindEventChanges:function(){this.stopListeningTo(this.calendar,"eventsReset")},setEvents:function(t){this.set("currentEvents",t),this.set("hasEvents",!0)},unsetEvents:function(){this.unset("currentEvents"),this.unset("hasEvents")},resetEvents:function(t){this.startBatchRender(),this.unsetEvents(),this.setEvents(t),this.stopBatchRender()},requestEventsRender:function(t){var e=this;this.renderQueue.queue(function(){e.executeEventsRender(t)},"event","init")},requestEventsUnrender:function(){var t=this;this.renderQueue.queue(function(){t.executeEventsUnrender()},"event","destroy")},executeDateRender:function(t,e){this.setDateProfileForRendering(t),this.updateTitle(),this.calendar.updateToolbarButtons(),this.render&&this.render(),this.renderDates(),this.updateSize(),this.renderBusinessHours(),this.startNowIndicator(),e||this.addScroll(this.computeInitialDateScroll()),this.isDatesRendered=!0,this.trigger("datesRendered")},executeDateUnrender:function(){this.unselect(),this.stopNowIndicator(),this.trigger("before:datesUnrendered"),this.unrenderBusinessHours(),this.unrenderDates(),this.destroy&&this.destroy(),this.isDatesRendered=!1},renderDates:function(){},unrenderDates:function(){},bindBaseRenderHandlers:function(){var t=this;this.on("datesRendered.baseHandler",function(){t.onBaseRender()}),this.on("before:datesUnrendered.baseHandler",function(){t.onBeforeBaseUnrender()})},unbindBaseRenderHandlers:function(){this.off(".baseHandler")},onBaseRender:function(){this.applyScreenState(),this.publiclyTrigger("viewRender",this,this,this.el)},onBeforeBaseUnrender:function(){this.applyScreenState(),this.publiclyTrigger("viewDestroy",this,this,this.el)},bindGlobalHandlers:function(){this.listenTo(we.get(),{touchstart:this.processUnselect,mousedown:this.handleDocumentMousedown})},unbindGlobalHandlers:function(){this.stopListeningTo(we.get())},initThemingProps:function(){var t=this.opt("theme")?"ui":"fc";this.widgetHeaderClass=t+"-widget-header",this.widgetContentClass=t+"-widget-content",this.highlightStateClass=t+"-state-highlight"},renderBusinessHours:function(){},unrenderBusinessHours:function(){},startNowIndicator:function(){var t,n,i,r=this;this.opt("nowIndicator")&&(t=this.getNowIndicatorUnit())&&(n=mt(this,"updateNowIndicator"),this.initialNowDate=this.calendar.getNow(),this.initialNowQueriedMs=+new Date,this.renderNowIndicator(this.initialNowDate),this.isNowIndicatorRendered=!0,i=this.initialNowDate.clone().startOf(t).add(1,t)-this.initialNowDate,this.nowIndicatorTimeoutID=setTimeout(function(){r.nowIndicatorTimeoutID=null,n(),i=+e.duration(1,t),i=Math.max(100,i),r.nowIndicatorIntervalID=setInterval(n,i)},i))},updateNowIndicator:function(){this.isNowIndicatorRendered&&(this.unrenderNowIndicator(),this.renderNowIndicator(this.initialNowDate.clone().add(new Date-this.initialNowQueriedMs)))},stopNowIndicator:function(){this.isNowIndicatorRendered&&(this.nowIndicatorTimeoutID&&(clearTimeout(this.nowIndicatorTimeoutID),this.nowIndicatorTimeoutID=null),this.nowIndicatorIntervalID&&(clearTimeout(this.nowIndicatorIntervalID),this.nowIndicatorIntervalID=null),this.unrenderNowIndicator(),this.isNowIndicatorRendered=!1)},getNowIndicatorUnit:function(){},renderNowIndicator:function(t){},unrenderNowIndicator:function(){},updateSize:function(t){var e;t&&(e=this.queryScroll()),this.updateHeight(t),this.updateWidth(t),this.updateNowIndicator(),t&&this.applyScroll(e)},updateWidth:function(t){},updateHeight:function(t){var e=this.calendar;this.setHeight(e.getSuggestedViewHeight(),e.isHeightAuto())},setHeight:function(t,e){},addForcedScroll:function(e){this.addScroll(t.extend(e,{isForced:!0}))},addScroll:function(e){var n=this.queuedScroll||(this.queuedScroll={});n.isForced||t.extend(n,e)},popScroll:function(){this.applyQueuedScroll(),this.queuedScroll=null},applyQueuedScroll:function(){this.queuedScroll&&this.applyScroll(this.queuedScroll)},queryScroll:function(){var e={};return this.isDatesRendered&&t.extend(e,this.queryDateScroll()),e},applyScroll:function(t){this.isDatesRendered&&this.applyDateScroll(t)},computeInitialDateScroll:function(){return{}},queryDateScroll:function(){return{}},applyDateScroll:function(t){},freezeHeight:function(){this.calendar.freezeContentHeight()},thawHeight:function(){this.calendar.thawContentHeight()},executeEventsRender:function(t){this.renderEvents(t),this.isEventsRendered=!0,this.onEventsRender()},executeEventsUnrender:function(){this.onBeforeEventsUnrender(),this.destroyEvents&&this.destroyEvents(),this.unrenderEvents(),this.isEventsRendered=!1},onEventsRender:function(){this.applyScreenState(),this.renderedEventSegEach(function(t){this.publiclyTrigger("eventAfterRender",t.event,t.event,t.el)}),this.publiclyTrigger("eventAfterAllRender")},onBeforeEventsUnrender:function(){this.applyScreenState(),this.renderedEventSegEach(function(t){this.publiclyTrigger("eventDestroy",t.event,t.event,t.el)})},applyScreenState:function(){this.thawHeight(),this.freezeHeight(),this.applyQueuedScroll()},renderEvents:function(t){},unrenderEvents:function(){},resolveEventEl:function(e,n){var i=this.publiclyTrigger("eventRender",e,e,n);return!1===i?n=null:i&&!0!==i&&(n=t(i)),n},showEvent:function(t){this.renderedEventSegEach(function(t){t.el.css("visibility","")},t)},hideEvent:function(t){this.renderedEventSegEach(function(t){t.el.css("visibility","hidden")},t)},renderedEventSegEach:function(t,e){var n,i=this.getEventSegs();for(n=0;n<i.length;n++)e&&i[n].event._id!==e._id||i[n].el&&t.call(this,i[n])},getEventSegs:function(){return[]},isEventDraggable:function(t){return this.isEventStartEditable(t)},isEventStartEditable:function(t){return ut(t.startEditable,(t.source||{}).startEditable,this.opt("eventStartEditable"),this.isEventGenerallyEditable(t))},isEventGenerallyEditable:function(t){return ut(t.editable,(t.source||{}).editable,this.opt("editable"))},reportSegDrop:function(t,e,n,i,r){var s=this.calendar,o=s.mutateSeg(t,e,n),a=function(){o.undo(),s.reportEventChange()};this.triggerEventDrop(t.event,o.dateDelta,a,i,r),s.reportEventChange()},triggerEventDrop:function(t,e,n,i,r){this.publiclyTrigger("eventDrop",i[0],t,e,n,r,{})},reportExternalDrop:function(e,n,i,r,s){var o,a,l=e.eventProps;l&&(o=t.extend({},l,n),a=this.calendar.renderEvent(o,e.stick)[0]),this.triggerExternalDrop(a,n,i,r,s)},triggerExternalDrop:function(t,e,n,i,r){this.publiclyTrigger("drop",n[0],e.start,i,r),t&&this.publiclyTrigger("eventReceive",null,t)},renderDrag:function(t,e){},unrenderDrag:function(){},isEventResizableFromStart:function(t){return this.opt("eventResizableFromStart")&&this.isEventResizable(t)},isEventResizableFromEnd:function(t){return this.isEventResizable(t)},isEventResizable:function(t){var e=t.source||{};return ut(t.durationEditable,e.durationEditable,this.opt("eventDurationEditable"),t.editable,e.editable,this.opt("editable"))},reportSegResize:function(t,e,n,i,r){var s=this.calendar,o=s.mutateSeg(t,e,n),a=function(){o.undo(),s.reportEventChange()};this.triggerEventResize(t.event,o.durationDelta,a,i,r),s.reportEventChange()},triggerEventResize:function(t,e,n,i,r){this.publiclyTrigger("eventResize",i[0],t,e,n,r,{})},select:function(t,e){this.unselect(e),this.renderSelection(t),this.reportSelection(t,e)},renderSelection:function(t){},reportSelection:function(t,e){this.isSelected=!0,this.triggerSelect(t,e)},triggerSelect:function(t,e){this.publiclyTrigger("select",null,this.calendar.applyTimezone(t.start),this.calendar.applyTimezone(t.end),e)},unselect:function(t){this.isSelected&&(this.isSelected=!1,this.destroySelection&&this.destroySelection(),this.unrenderSelection(),this.publiclyTrigger("unselect",null,t))},unrenderSelection:function(){},selectEvent:function(t){this.selectedEvent&&this.selectedEvent===t||(this.unselectEvent(),this.renderedEventSegEach(function(t){t.el.addClass("fc-selected")},t),this.selectedEvent=t)},unselectEvent:function(){this.selectedEvent&&(this.renderedEventSegEach(function(t){t.el.removeClass("fc-selected")},this.selectedEvent),this.selectedEvent=null)},isEventSelected:function(t){return this.selectedEvent&&this.selectedEvent._id===t._id},handleDocumentMousedown:function(t){S(t)&&this.processUnselect(t)},processUnselect:function(t){this.processRangeUnselect(t),this.processEventUnselect(t)},processRangeUnselect:function(e){var n;this.isSelected&&this.opt("unselectAuto")&&((n=this.opt("unselectCancel"))&&t(e.target).closest(n).length||this.unselect(e))},processEventUnselect:function(e){this.selectedEvent&&(t(e.target).closest(".fc-selected").length||this.unselectEvent())},triggerDayClick:function(t,e,n){this.publiclyTrigger("dayClick",e,this.calendar.applyTimezone(t.start),n)},computeDayRange:function(t){var e,n=t.start.clone().stripTime(),i=t.end,r=null;return i&&(r=i.clone().stripTime(),(e=+i.time())&&e>=this.nextDayThreshold&&r.add(1,"days")),(!i||r<=n)&&(r=n.clone().add(1,"days")),{start:n,end:r}},isMultiDayEvent:function(t){var e=this.computeDayRange(t);return e.end.diff(e.start,"days")>1}});Ce.watch("displayingDates",["dateProfile"],function(t){this.requestDateRender(t.dateProfile)},function(){this.requestDateUnrender()}),Ce.watch("initialEvents",["dateProfile"],function(t){return this.fetchInitialEvents(t.dateProfile)}),Ce.watch("bindingEvents",["initialEvents"],function(t){this.setEvents(t.initialEvents),this.bindEventChanges()},function(){this.unbindEventChanges(),this.unsetEvents()}),Ce.watch("displayingEvents",["displayingDates","hasEvents"],function(){this.requestEventsRender(this.get("currentEvents"))},function(){this.requestEventsUnrender()}),Ce.mixin({currentRange:null,currentRangeUnit:null,renderRange:null,activeRange:null,validRange:null,dateIncrement:null,minTime:null,maxTime:null,usesMinMaxTime:!1,start:null,end:null,intervalStart:null,intervalEnd:null,setDateProfileForRendering:function(t){this.currentRange=t.currentRange,this.currentRangeUnit=t.currentRangeUnit,this.renderRange=t.renderRange,this.activeRange=t.activeRange,this.validRange=t.validRange,this.dateIncrement=t.dateIncrement,this.minTime=t.minTime,this.maxTime=t.maxTime,this.start=t.activeRange.start,this.end=t.activeRange.end,this.intervalStart=t.currentRange.start,this.intervalEnd=t.currentRange.end},buildPrevDateProfile:function(t){var e=t.clone().startOf(this.currentRangeUnit).subtract(this.dateIncrement);return this.buildDateProfile(e,-1)},buildNextDateProfile:function(t){var e=t.clone().startOf(this.currentRangeUnit).add(this.dateIncrement);return this.buildDateProfile(e,1)},buildDateProfile:function(t,n,i){var r,s,o,a,l=this.buildValidRange(),u=null,h=null;return i&&(t=j(t,l)),r=this.buildCurrentRangeInfo(t,n),s=this.buildRenderRange(r.range,r.unit),o=q(s),this.opt("showNonCurrentDates")||(o=U(o,r.range)),u=e.duration(this.opt("minTime")),h=e.duration(this.opt("maxTime")),this.adjustActiveRange(o,u,h),o=U(o,l),t=j(t,o),a=$(r.range,l),{validRange:l,currentRange:r.range,currentRangeUnit:r.unit,activeRange:o,renderRange:s,minTime:u,maxTime:h,isValid:a,date:t,dateIncrement:this.buildDateIncrement(r.duration)}},buildValidRange:function(){return this.getRangeOption("validRange",this.calendar.getNow())||{}},buildCurrentRangeInfo:function(t,e){var n,i=null,r=null,s=null;return this.viewSpec.duration?(i=this.viewSpec.duration,r=this.viewSpec.durationUnit,s=this.buildRangeFromDuration(t,e,i,r)):(n=this.opt("dayCount"))?(r="day",s=this.buildRangeFromDayCount(t,e,n)):(s=this.buildCustomVisibleRange(t))?r=V(s.start,s.end):(i=this.getFallbackDuration(),r=V(i),s=this.buildRangeFromDuration(t,e,i,r)),this.normalizeCurrentRange(s,r),{duration:i,unit:r,range:s}},getFallbackDuration:function(){return e.duration({days:1})},normalizeCurrentRange:function(t,e){/^(year|month|week|day)$/.test(e)?(t.start.stripTime(),t.end.stripTime()):(t.start.hasTime()||t.start.time(0),t.end.hasTime()||t.end.time(0))},adjustActiveRange:function(t,e,n){var i=!1;this.usesMinMaxTime&&(e<0&&(t.start.time(0).add(e),i=!0),n>864e5&&(t.end.time(n-864e5),i=!0),i&&(t.start.hasTime()||t.start.time(0),t.end.hasTime()||t.end.time(0)))},buildRangeFromDuration:function(t,n,i,r){var s,o,a,l=this.opt("dateAlignment"),u=t.clone();return i.as("days")<=1&&this.isHiddenDay(u)&&(u=this.skipHiddenDays(u,n),u.startOf("day")),l||(o=this.opt("dateIncrement"),o?(a=e.duration(o),l=a<i?O(a,o):r):l=r),u.startOf(l),s=u.clone().add(i),{start:u,end:s}},buildRangeFromDayCount:function(t,e,n){var i,r=this.opt("dateAlignment"),s=0,o=t.clone();r&&o.startOf(r),o.startOf("day"),o=this.skipHiddenDays(o,e),i=o.clone();do{i.add(1,"day"),this.isHiddenDay(i)||s++}while(s<n);return{start:o,end:i}},buildCustomVisibleRange:function(t){var e=this.getRangeOption("visibleRange",this.calendar.moment(t));return!e||e.start&&e.end?e:null},buildRenderRange:function(t,e){return this.trimHiddenDays(t)},buildDateIncrement:function(t){var n,i=this.opt("dateIncrement");return i?e.duration(i):(n=this.opt("dateAlignment"))?e.duration(1,n):t||e.duration({days:1})},trimHiddenDays:function(t){return{start:this.skipHiddenDays(t.start),end:this.skipHiddenDays(t.end,-1,!0)}},currentRangeAs:function(t){var e=this.currentRange;return e.end.diff(e.start,t,!0)},getRangeOption:function(t){var e=this.opt(t);if("function"==typeof e&&(e=e.apply(null,Array.prototype.slice.call(arguments,1))),e)return this.calendar.parseRange(e)},initHiddenDays:function(){var e,n=this.opt("hiddenDays")||[],i=[],r=0;for(!1===this.opt("weekends")&&n.push(0,6),e=0;e<7;e++)(i[e]=-1!==t.inArray(e,n))||r++;if(!r)throw"invalid hiddenDays";this.isHiddenDayHash=i},isHiddenDay:function(t){return e.isMoment(t)&&(t=t.day()),this.isHiddenDayHash[t]},skipHiddenDays:function(t,e,n){var i=t.clone();for(e=e||1;this.isHiddenDayHash[(i.day()+(n?e:0)+7)%7];)i.add(e,"days");return i}});var He=Zt.Scroller=bt.extend({el:null,scrollEl:null,overflowX:null,overflowY:null,constructor:function(t){t=t||{},this.overflowX=t.overflowX||t.overflow||"auto",this.overflowY=t.overflowY||t.overflow||"auto"},render:function(){this.el=this.renderEl(),this.applyOverflow()},renderEl:function(){return this.scrollEl=t('<div class="fc-scroller"></div>')},clear:function(){this.setHeight("auto"),this.applyOverflow()},destroy:function(){this.el.remove()},applyOverflow:function(){this.scrollEl.css({"overflow-x":this.overflowX,"overflow-y":this.overflowY})},lockOverflow:function(t){var e=this.overflowX,n=this.overflowY;t=t||this.getScrollbarWidths(),"auto"===e&&(e=t.top||t.bottom||this.scrollEl[0].scrollWidth-1>this.scrollEl[0].clientWidth?"scroll":"hidden"),"auto"===n&&(n=t.left||t.right||this.scrollEl[0].scrollHeight-1>this.scrollEl[0].clientHeight?"scroll":"hidden"),this.scrollEl.css({"overflow-x":e,"overflow-y":n})},setHeight:function(t){this.scrollEl.height(t)},getScrollTop:function(){return this.scrollEl.scrollTop()},setScrollTop:function(t){this.scrollEl.scrollTop(t)},getClientWidth:function(){return this.scrollEl[0].clientWidth},getClientHeight:function(){return this.scrollEl[0].clientHeight},getScrollbarWidths:function(){return p(this.scrollEl)}});_t.prototype.proxyCall=function(t){var e=Array.prototype.slice.call(arguments,1),n=[];return this.items.forEach(function(i){n.push(i[t].apply(i,e))}),n};var Re=Zt.Calendar=bt.extend(fe,{view:null,viewsByType:null,currentDate:null,loadingLevel:0,constructor:function(t,e){we.needed(),this.el=t,this.viewsByType={},this.viewSpecCache={},this.initOptionsInternals(e),this.initMomentInternals(),this.initCurrentDate(),Ut.call(this),this.initialize()},initialize:function(){},getCalendar:function(){return this},getView:function(){return this.view},publiclyTrigger:function(t,e){var n=Array.prototype.slice.call(arguments,2),i=this.opt(t);if(e=e||this.el[0],this.triggerWith(t,e,n),i)return i.apply(e,n)},instantiateView:function(t){var e=this.getViewSpec(t);return new e.class(this,e)},isValidViewType:function(t){return Boolean(this.getViewSpec(t))},changeView:function(t,e){e&&(e.start&&e.end?this.recordOptionOverrides({visibleRange:e}):this.currentDate=this.moment(e).stripZone()),this.renderView(t)},zoomTo:function(t,e){var n;e=e||"day",n=this.getViewSpec(e)||this.getUnitViewSpec(e),this.currentDate=t.clone(),this.renderView(n?n.type:null)},initCurrentDate:function(){var t=this.opt("defaultDate");this.currentDate=null!=t?this.moment(t).stripZone():this.getNow()},prev:function(){var t=this.view.buildPrevDateProfile(this.currentDate);t.isValid&&(this.currentDate=t.date,this.renderView())},next:function(){var t=this.view.buildNextDateProfile(this.currentDate);t.isValid&&(this.currentDate=t.date,this.renderView())},prevYear:function(){this.currentDate.add(-1,"years"),this.renderView()},nextYear:function(){this.currentDate.add(1,"years"),this.renderView()},today:function(){this.currentDate=this.getNow(),this.renderView()},gotoDate:function(t){this.currentDate=this.moment(t).stripZone(),this.renderView()},incrementDate:function(t){this.currentDate.add(e.duration(t)),this.renderView()},getDate:function(){return this.applyTimezone(this.currentDate)},pushLoading:function(){this.loadingLevel++||this.publiclyTrigger("loading",null,!0,this.view)},popLoading:function(){--this.loadingLevel||this.publiclyTrigger("loading",null,!1,this.view)},select:function(t,e){this.view.select(this.buildSelectSpan.apply(this,arguments))},unselect:function(){this.view&&this.view.unselect()},buildSelectSpan:function(t,e){var n,i=this.moment(t).stripZone();return n=e?this.moment(e).stripZone():i.hasTime()?i.clone().add(this.defaultTimedEventDuration):i.clone().add(this.defaultAllDayEventDuration),{start:i,end:n}},parseRange:function(t){var e=null,n=null;return t.start&&(e=this.moment(t.start).stripZone()),t.end&&(n=this.moment(t.end).stripZone()),e||n?e&&n&&n.isBefore(e)?null:{start:e,end:n}:null},rerenderEvents:function(){this.elementVisible()&&this.reportEventChange()}});Re.mixin({dirDefaults:null,localeDefaults:null,overrides:null,dynamicOverrides:null,optionsModel:null,initOptionsInternals:function(e){this.overrides=t.extend({},e),this.dynamicOverrides={},this.optionsModel=new ue,this.populateOptionsHash()},option:function(t,e){var n;if("string"==typeof t){if(void 0===e)return this.optionsModel.get(t);n={},n[t]=e,this.setOptions(n)}else"object"==typeof t&&this.setOptions(t)},opt:function(t){return this.optionsModel.get(t)},setOptions:function(t){var e,n=0;this.recordOptionOverrides(t);for(e in t)n++;if(1===n){if("height"===e||"contentHeight"===e||"aspectRatio"===e)return void this.updateSize(!0);if("defaultDate"===e)return;if("businessHours"===e)return void(this.view&&(this.view.unrenderBusinessHours(),this.view.renderBusinessHours()));if("timezone"===e)return this.rezoneArrayEventSources(),void this.refetchEvents()}this.renderHeader(),this.renderFooter(),this.viewsByType={},this.reinitView()},populateOptionsHash:function(){var t,e,i,r,s;t=ut(this.dynamicOverrides.locale,this.overrides.locale),e=xe[t],e||(t=Re.defaults.locale,e=xe[t]||{}),i=ut(this.dynamicOverrides.isRTL,this.overrides.isRTL,e.isRTL,Re.defaults.isRTL),r=i?Re.rtlDefaults:{},this.dirDefaults=r,this.localeDefaults=e,s=n([Re.defaults,r,e,this.overrides,this.dynamicOverrides]),Yt(s),this.optionsModel.reset(s)},recordOptionOverrides:function(t){var e;for(e in t)this.dynamicOverrides[e]=t[e];this.viewSpecCache={},this.populateOptionsHash()}}),Re.mixin({defaultAllDayEventDuration:null,defaultTimedEventDuration:null,localeData:null,initMomentInternals:function(){var t=this;this.defaultAllDayEventDuration=e.duration(this.opt("defaultAllDayEventDuration")),this.defaultTimedEventDuration=e.duration(this.opt("defaultTimedEventDuration")),this.optionsModel.watch("buildingMomentLocale",["?locale","?monthNames","?monthNamesShort","?dayNames","?dayNamesShort","?firstDay","?weekNumberCalculation"],function(e){var n,i=e.weekNumberCalculation,r=e.firstDay;"iso"===i&&(i="ISO");var s=rt(qt(e.locale));e.monthNames&&(s._months=e.monthNames),e.monthNamesShort&&(s._monthsShort=e.monthNamesShort),e.dayNames&&(s._weekdays=e.dayNames),e.dayNamesShort&&(s._weekdaysShort=e.dayNamesShort),null==r&&"ISO"===i&&(r=1),null!=r&&(n=rt(s._week),n.dow=r,s._week=n),"ISO"!==i&&"local"!==i&&"function"!=typeof i||(s._fullCalendar_weekCalc=i),t.localeData=s,t.currentDate&&t.localizeMoment(t.currentDate)})},moment:function(){var t;return"local"===this.opt("timezone")?(t=Zt.moment.apply(null,arguments),t.hasTime()&&t.local()):t="UTC"===this.opt("timezone")?Zt.moment.utc.apply(null,arguments):Zt.moment.parseZone.apply(null,arguments),this.localizeMoment(t),t},localizeMoment:function(t){t._locale=this.localeData},getIsAmbigTimezone:function(){return"local"!==this.opt("timezone")&&"UTC"!==this.opt("timezone")},applyTimezone:function(t){if(!t.hasTime())return t.clone();var e,n=this.moment(t.toArray()),i=t.time()-n.time();return i&&(e=n.clone().add(i),t.time()-e.time()==0&&(n=e)),n},getNow:function(){var t=this.opt("now");return"function"==typeof t&&(t=t()),this.moment(t).stripZone()},humanizeDuration:function(t){return t.locale(this.opt("locale")).humanize()},getEventEnd:function(t){return t.end?t.end.clone():this.getDefaultEventEnd(t.allDay,t.start)},getDefaultEventEnd:function(t,e){var n=e.clone();return t?n.stripTime().add(this.defaultAllDayEventDuration):n.add(this.defaultTimedEventDuration),this.getIsAmbigTimezone()&&n.stripZone(),n}}),Re.mixin({viewSpecCache:null,getViewSpec:function(t){var e=this.viewSpecCache;return e[t]||(e[t]=this.buildViewSpec(t))},getUnitViewSpec:function(e){var n,i,r;if(-1!=t.inArray(e,Jt))for(n=this.header.getViewsWithButtons(),t.each(Zt.views,function(t){n.push(t)}),i=0;i<n.length;i++)if((r=this.getViewSpec(n[i]))&&r.singleUnit==e)return r},buildViewSpec:function(t){for(var i,r,s,o,a,l=this.overrides.views||{},u=[],h=[],c=[],d=t;d;)i=$t[d],r=l[d],d=null,"function"==typeof i&&(i={class:i}),i&&(u.unshift(i),h.unshift(i.defaults||{}),s=s||i.duration,d=d||i.type),r&&(c.unshift(r),s=s||r.duration,d=d||r.type);return i=it(u),i.type=t,!!i.class&&(s=s||this.dynamicOverrides.duration||this.overrides.duration,s&&(o=e.duration(s),o.valueOf()&&(a=O(o,s),i.duration=o,i.durationUnit=a,1===o.as(a)&&(i.singleUnit=a,c.unshift(l[a]||{})))),i.defaults=n(h),i.overrides=n(c),this.buildViewSpecOptions(i),this.buildViewSpecButtonText(i,t),i)},buildViewSpecOptions:function(t){t.options=n([Re.defaults,t.defaults,this.dirDefaults,this.localeDefaults,this.overrides,t.overrides,this.dynamicOverrides]),Yt(t.options)},buildViewSpecButtonText:function(t,e){function n(n){var i=n.buttonText||{};return i[e]||(t.buttonTextKey?i[t.buttonTextKey]:null)||(t.singleUnit?i[t.singleUnit]:null)}t.buttonTextOverride=n(this.dynamicOverrides)||n(this.overrides)||t.overrides.buttonText,t.buttonTextDefault=n(this.localeDefaults)||n(this.dirDefaults)||t.defaults.buttonText||n(Re.defaults)||(t.duration?this.humanizeDuration(t.duration):null)||e}}),Re.mixin({el:null,contentEl:null,suggestedViewHeight:null,windowResizeProxy:null,ignoreWindowResize:0,render:function(){this.contentEl?this.elementVisible()&&(this.calcSize(),this.renderView()):this.initialRender()},initialRender:function(){var e=this,n=this.el;n.addClass("fc"),n.on("click.fc","a[data-goto]",function(n){var i=t(this),r=i.data("goto"),s=e.moment(r.date),o=r.type,a=e.view.opt("navLink"+gt(o)+"Click");"function"==typeof a?a(s,n):("string"==typeof a&&(o=a),e.zoomTo(s,o))}),this.optionsModel.watch("applyingThemeClasses",["?theme"],function(t){n.toggleClass("ui-widget",t.theme),n.toggleClass("fc-unthemed",!t.theme)}),this.optionsModel.watch("applyingDirClasses",["?isRTL","?locale"],function(t){n.toggleClass("fc-ltr",!t.isRTL),n.toggleClass("fc-rtl",t.isRTL)}),this.contentEl=t("<div class='fc-view-container'/>").prependTo(n),this.initToolbars(),this.renderHeader(),this.renderFooter(),this.renderView(this.opt("defaultView")),this.opt("handleWindowResize")&&t(window).resize(this.windowResizeProxy=yt(this.windowResize.bind(this),this.opt("windowResizeDelay")))},destroy:function(){this.view&&this.view.removeElement(),this.toolbarsManager.proxyCall("removeElement"),this.contentEl.remove(),this.el.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"),this.el.off(".fc"),this.windowResizeProxy&&(t(window).unbind("resize",this.windowResizeProxy),this.windowResizeProxy=null),we.unneeded()},elementVisible:function(){return this.el.is(":visible")},renderView:function(e,n){this.ignoreWindowResize++;var i=this.view&&e&&this.view.type!==e;i&&(this.freezeContentHeight(),this.clearView()),!this.view&&e&&(this.view=this.viewsByType[e]||(this.viewsByType[e]=this.instantiateView(e)),this.view.setElement(t("<div class='fc-view fc-"+e+"-view' />").appendTo(this.contentEl)),this.toolbarsManager.proxyCall("activateButton",e)),this.view&&(n&&this.view.addForcedScroll(n),this.elementVisible()&&(this.currentDate=this.view.setDate(this.currentDate))),i&&this.thawContentHeight(),this.ignoreWindowResize--},clearView:function(){this.toolbarsManager.proxyCall("deactivateButton",this.view.type),this.view.removeElement(),this.view=null},reinitView:function(){this.ignoreWindowResize++,this.freezeContentHeight();var t=this.view.type,e=this.view.queryScroll();this.clearView(),this.calcSize(),this.renderView(t,e),this.thawContentHeight(),this.ignoreWindowResize--},getSuggestedViewHeight:function(){return null===this.suggestedViewHeight&&this.calcSize(),this.suggestedViewHeight},isHeightAuto:function(){return"auto"===this.opt("contentHeight")||"auto"===this.opt("height")},updateSize:function(t){if(this.elementVisible())return t&&this._calcSize(),this.ignoreWindowResize++,this.view.updateSize(!0),this.ignoreWindowResize--,!0},calcSize:function(){this.elementVisible()&&this._calcSize()},_calcSize:function(){var t=this.opt("contentHeight"),e=this.opt("height");this.suggestedViewHeight="number"==typeof t?t:"function"==typeof t?t():"number"==typeof e?e-this.queryToolbarsHeight():"function"==typeof e?e()-this.queryToolbarsHeight():"parent"===e?this.el.parent().height()-this.queryToolbarsHeight():Math.round(this.contentEl.width()/Math.max(this.opt("aspectRatio"),.5))},windowResize:function(t){!this.ignoreWindowResize&&t.target===window&&this.view.renderRange&&this.updateSize(!0)&&this.view.publiclyTrigger("windowResize",this.el[0])},freezeContentHeight:function(){this.contentEl.css({width:"100%",height:this.contentEl.height(),overflow:"hidden"})},thawContentHeight:function(){this.contentEl.css({width:"",height:"",overflow:""})}}),Re.mixin({header:null,footer:null,toolbarsManager:null,initToolbars:function(){this.header=new Wt(this,this.computeHeaderOptions()),this.footer=new Wt(this,this.computeFooterOptions()),this.toolbarsManager=new _t([this.header,this.footer])},computeHeaderOptions:function(){return{extraClasses:"fc-header-toolbar",layout:this.opt("header")}},computeFooterOptions:function(){return{extraClasses:"fc-footer-toolbar",layout:this.opt("footer")}},renderHeader:function(){var t=this.header;t.setToolbarOptions(this.computeHeaderOptions()),t.render(),t.el&&this.el.prepend(t.el)},renderFooter:function(){var t=this.footer;t.setToolbarOptions(this.computeFooterOptions()),t.render(),t.el&&this.el.append(t.el)},setToolbarsTitle:function(t){this.toolbarsManager.proxyCall("updateTitle",t)},updateToolbarButtons:function(){var t=this.getNow(),e=this.view,n=e.buildDateProfile(t),i=e.buildPrevDateProfile(this.currentDate),r=e.buildNextDateProfile(this.currentDate);this.toolbarsManager.proxyCall(n.isValid&&!Z(t,e.currentRange)?"enableButton":"disableButton","today"),this.toolbarsManager.proxyCall(i.isValid?"enableButton":"disableButton","prev"),this.toolbarsManager.proxyCall(r.isValid?"enableButton":"disableButton","next")},queryToolbarsHeight:function(){return this.toolbarsManager.items.reduce(function(t,e){return t+(e.el?e.el.outerHeight(!0):0)},0)}}),Re.defaults={titleRangeSeparator:" – ",monthYearFormat:"MMMM YYYY",defaultTimedEventDuration:"02:00:00",defaultAllDayEventDuration:{days:1},forceEventDuration:!1,nextDayThreshold:"09:00:00",defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberTitle:"W",weekNumberCalculation:"local",scrollTime:"06:00:00",minTime:"00:00:00",maxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timezoneParam:"timezone",timezone:!1,isRTL:!1,buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day"},buttonIcons:{prev:"left-single-arrow",next:"right-single-arrow",prevYear:"left-double-arrow",nextYear:"right-double-arrow"},allDayText:"all-day",theme:!1,themeButtonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e",prevYear:"seek-prev",nextYear:"seek-next"},dragOpacity:.75,dragRevertDuration:500,dragScroll:!0,unselectAuto:!0,dropAccept:"*",eventOrder:"title",eventLimit:!1,eventLimitText:"more",eventLimitClick:"popover",dayPopoverFormat:"LL",handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3},Re.englishDefaults={dayPopoverFormat:"dddd, MMMM D"},Re.rtlDefaults={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}};var xe=Zt.locales={};Zt.datepickerLocale=function(e,n,i){var r=xe[e]||(xe[e]={});r.isRTL=i.isRTL,r.weekNumberTitle=i.weekHeader,t.each(Ie,function(t,e){r[t]=e(i)}),t.datepicker&&(t.datepicker.regional[n]=t.datepicker.regional[e]=i,t.datepicker.regional.en=t.datepicker.regional[""],t.datepicker.setDefaults(i))},Zt.locale=function(e,i){var r,s;r=xe[e]||(xe[e]={}),i&&(r=xe[e]=n([r,i])),s=qt(e),t.each(ke,function(t,e){null==r[t]&&(r[t]=e(s,r))}),Re.defaults.locale=e};var Ie={buttonText:function(t){return{prev:ct(t.prevText),next:ct(t.nextText),today:ct(t.currentText)}},monthYearFormat:function(t){return t.showMonthAfterYear?"YYYY["+t.yearSuffix+"] MMMM":"MMMM YYYY["+t.yearSuffix+"]"}},ke={dayOfMonthFormat:function(t,e){var n=t.longDateFormat("l");return n=n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g,""),e.isRTL?n+=" ddd":n="ddd "+n,n},mediumTimeFormat:function(t){return t.longDateFormat("LT").replace(/\s*a$/i,"a")},smallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"a")},extraSmallTimeFormat:function(t){return t.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"t")},hourFormat:function(t){return t.longDateFormat("LT").replace(":mm","").replace(/(\Wmm)$/,"").replace(/\s*a$/i,"a")},noMeridiemTimeFormat:function(t){return t.longDateFormat("LT").replace(/\s*a$/i,"")}},Me={smallDayDateFormat:function(t){return t.isRTL?"D dd":"dd D"},weekFormat:function(t){return t.isRTL?"w[ "+t.weekNumberTitle+"]":"["+t.weekNumberTitle+" ]w"},smallWeekFormat:function(t){return t.isRTL?"w["+t.weekNumberTitle+"]":"["+t.weekNumberTitle+"]w"}};Zt.locale("en",Re.englishDefaults),Zt.sourceNormalizers=[],Zt.sourceFetchers=[];var Be={dataType:"json",cache:!1},Le=1;Re.prototype.mutateSeg=function(t,e){return this.mutateEvent(t.event,e)},Re.prototype.normalizeEvent=function(t){},Re.prototype.spanContainsSpan=function(t,e){var n=t.start.clone().stripZone(),i=this.getEventEnd(t).stripZone()
;return e.start>=n&&e.end<=i},Re.prototype.getPeerEvents=function(t,e){var n,i,r=this.getEventCache(),s=[];for(n=0;n<r.length;n++)i=r[n],e&&e._id===i._id||s.push(i);return s},Re.prototype.isEventSpanAllowed=function(t,e){var n=e.source||{},i=this.opt("eventAllow"),r=ut(e.constraint,n.constraint,this.opt("eventConstraint")),s=ut(e.overlap,n.overlap,this.opt("eventOverlap"));return this.isSpanAllowed(t,r,s,e)&&(!i||!1!==i(t,e))},Re.prototype.isExternalSpanAllowed=function(e,n,i){var r,s;return i&&(r=t.extend({},i,n),s=this.expandEvent(this.buildEventFromInput(r))[0]),s?this.isEventSpanAllowed(e,s):this.isSelectionSpanAllowed(e)},Re.prototype.isSelectionSpanAllowed=function(t){var e=this.opt("selectAllow");return this.isSpanAllowed(t,this.opt("selectConstraint"),this.opt("selectOverlap"))&&(!e||!1!==e(t))},Re.prototype.isSpanAllowed=function(t,e,n,i){var r,s,o,a,l,u;if(null!=e&&(r=this.constraintToEvents(e))){for(s=!1,a=0;a<r.length;a++)if(this.spanContainsSpan(r[a],t)){s=!0;break}if(!s)return!1}for(o=this.getPeerEvents(t,i),a=0;a<o.length;a++)if(l=o[a],this.eventIntersectsRange(l,t)){if(!1===n)return!1;if("function"==typeof n&&!n(l,i))return!1;if(i){if(!1===(u=ut(l.overlap,(l.source||{}).overlap)))return!1;if("function"==typeof u&&!u(i,l))return!1}}return!0},Re.prototype.constraintToEvents=function(t){return"businessHours"===t?this.getCurrentBusinessHourEvents():"object"==typeof t?null!=t.start?this.expandEvent(this.buildEventFromInput(t)):null:this.clientEvents(t)},Re.prototype.eventIntersectsRange=function(t,e){var n=t.start.clone().stripZone(),i=this.getEventEnd(t).stripZone();return e.start<i&&e.end>n};var Ne={id:"_fcBusinessHours",start:"09:00",end:"17:00",dow:[1,2,3,4,5],rendering:"inverse-background"};Re.prototype.getCurrentBusinessHourEvents=function(t){return this.computeBusinessHourEvents(t,this.opt("businessHours"))},Re.prototype.computeBusinessHourEvents=function(e,n){return!0===n?this.expandBusinessHourEvents(e,[{}]):t.isPlainObject(n)?this.expandBusinessHourEvents(e,[n]):t.isArray(n)?this.expandBusinessHourEvents(e,n,!0):[]},Re.prototype.expandBusinessHourEvents=function(e,n,i){var r,s,o=this.getView(),a=[];for(r=0;r<n.length;r++)s=n[r],i&&!s.dow||(s=t.extend({},Ne,s),e&&(s.start=null,s.end=null),a.push.apply(a,this.expandEvent(this.buildEventFromInput(s),o.activeRange.start,o.activeRange.end)));return a};var ze=Zt.BasicView=Ce.extend({scroller:null,dayGridClass:De,dayGrid:null,dayNumbersVisible:!1,colWeekNumbersVisible:!1,cellWeekNumbersVisible:!1,weekNumberWidth:null,headContainerEl:null,headRowEl:null,initialize:function(){this.dayGrid=this.instantiateDayGrid(),this.scroller=new He({overflowX:"hidden",overflowY:"auto"})},instantiateDayGrid:function(){return new(this.dayGridClass.extend(Fe))(this)},buildRenderRange:function(t,e){var n=Ce.prototype.buildRenderRange.apply(this,arguments);return/^(year|month)$/.test(e)&&(n.start.startOf("week"),n.end.weekday()&&n.end.add(1,"week").startOf("week")),this.trimHiddenDays(n)},renderDates:function(){this.dayGrid.breakOnWeeks=/year|month|week/.test(this.currentRangeUnit),this.dayGrid.setRange(this.renderRange),this.dayNumbersVisible=this.dayGrid.rowCnt>1,this.opt("weekNumbers")&&(this.opt("weekNumbersWithinDays")?(this.cellWeekNumbersVisible=!0,this.colWeekNumbersVisible=!1):(this.cellWeekNumbersVisible=!1,this.colWeekNumbersVisible=!0)),this.dayGrid.numbersVisible=this.dayNumbersVisible||this.cellWeekNumbersVisible||this.colWeekNumbersVisible,this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()),this.renderHead(),this.scroller.render();var e=this.scroller.el.addClass("fc-day-grid-container"),n=t('<div class="fc-day-grid" />').appendTo(e);this.el.find(".fc-body > tr > td").append(e),this.dayGrid.setElement(n),this.dayGrid.renderDates(this.hasRigidRows())},renderHead:function(){this.headContainerEl=this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml()),this.headRowEl=this.headContainerEl.find(".fc-row")},unrenderDates:function(){this.dayGrid.unrenderDates(),this.dayGrid.removeElement(),this.scroller.destroy()},renderBusinessHours:function(){this.dayGrid.renderBusinessHours()},unrenderBusinessHours:function(){this.dayGrid.unrenderBusinessHours()},renderSkeletonHtml:function(){return'<table><thead class="fc-head"><tr><td class="fc-head-container '+this.widgetHeaderClass+'"></td></tr></thead><tbody class="fc-body"><tr><td class="'+this.widgetContentClass+'"></td></tr></tbody></table>'},weekNumberStyleAttr:function(){return null!==this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},hasRigidRows:function(){var t=this.opt("eventLimit");return t&&"number"!=typeof t},updateWidth:function(){this.colWeekNumbersVisible&&(this.weekNumberWidth=u(this.el.find(".fc-week-number")))},setHeight:function(t,e){var n,s,o=this.opt("eventLimit");this.scroller.clear(),r(this.headRowEl),this.dayGrid.removeSegPopover(),o&&"number"==typeof o&&this.dayGrid.limitRows(o),n=this.computeScrollerHeight(t),this.setGridHeight(n,e),o&&"number"!=typeof o&&this.dayGrid.limitRows(o),e||(this.scroller.setHeight(n),s=this.scroller.getScrollbarWidths(),(s.left||s.right)&&(i(this.headRowEl,s),n=this.computeScrollerHeight(t),this.scroller.setHeight(n)),this.scroller.lockOverflow(s))},computeScrollerHeight:function(t){return t-h(this.el,this.scroller.el)},setGridHeight:function(t,e){e?l(this.dayGrid.rowEls):a(this.dayGrid.rowEls,t,!0)},computeInitialDateScroll:function(){return{top:0}},queryDateScroll:function(){return{top:this.scroller.getScrollTop()}},applyDateScroll:function(t){void 0!==t.top&&this.scroller.setScrollTop(t.top)},hitsNeeded:function(){this.dayGrid.hitsNeeded()},hitsNotNeeded:function(){this.dayGrid.hitsNotNeeded()},prepareHits:function(){this.dayGrid.prepareHits()},releaseHits:function(){this.dayGrid.releaseHits()},queryHit:function(t,e){return this.dayGrid.queryHit(t,e)},getHitSpan:function(t){return this.dayGrid.getHitSpan(t)},getHitEl:function(t){return this.dayGrid.getHitEl(t)},renderEvents:function(t){this.dayGrid.renderEvents(t),this.updateHeight()},getEventSegs:function(){return this.dayGrid.getEventSegs()},unrenderEvents:function(){this.dayGrid.unrenderEvents()},renderDrag:function(t,e){return this.dayGrid.renderDrag(t,e)},unrenderDrag:function(){this.dayGrid.unrenderDrag()},renderSelection:function(t){this.dayGrid.renderSelection(t)},unrenderSelection:function(){this.dayGrid.unrenderSelection()}}),Fe={renderHeadIntroHtml:function(){var t=this.view;return t.colWeekNumbersVisible?'<th class="fc-week-number '+t.widgetHeaderClass+'" '+t.weekNumberStyleAttr()+"><span>"+ht(t.opt("weekNumberTitle"))+"</span></th>":""},renderNumberIntroHtml:function(t){var e=this.view,n=this.getCellDate(t,0);return e.colWeekNumbersVisible?'<td class="fc-week-number" '+e.weekNumberStyleAttr()+">"+e.buildGotoAnchorHtml({date:n,type:"week",forceOff:1===this.colCnt},n.format("w"))+"</td>":""},renderBgIntroHtml:function(){var t=this.view;return t.colWeekNumbersVisible?'<td class="fc-week-number '+t.widgetContentClass+'" '+t.weekNumberStyleAttr()+"></td>":""},renderIntroHtml:function(){var t=this.view;return t.colWeekNumbersVisible?'<td class="fc-week-number" '+t.weekNumberStyleAttr()+"></td>":""}},Ae=Zt.MonthView=ze.extend({buildRenderRange:function(){var t,e=ze.prototype.buildRenderRange.apply(this,arguments);return this.isFixedWeeks()&&(t=Math.ceil(e.end.diff(e.start,"weeks",!0)),e.end.add(6-t,"weeks")),e},setGridHeight:function(t,e){e&&(t*=this.rowCnt/6),a(this.dayGrid.rowEls,t,!e)},isFixedWeeks:function(){return this.opt("fixedWeekCount")}});$t.basic={class:ze},$t.basicDay={type:"basic",duration:{days:1}},$t.basicWeek={type:"basic",duration:{weeks:1}},$t.month={class:Ae,duration:{months:1},defaults:{fixedWeekCount:!0}};var Ge=Zt.AgendaView=Ce.extend({scroller:null,timeGridClass:Te,timeGrid:null,dayGridClass:De,dayGrid:null,axisWidth:null,headContainerEl:null,noScrollRowEls:null,bottomRuleEl:null,usesMinMaxTime:!0,initialize:function(){this.timeGrid=this.instantiateTimeGrid(),this.opt("allDaySlot")&&(this.dayGrid=this.instantiateDayGrid()),this.scroller=new He({overflowX:"hidden",overflowY:"auto"})},instantiateTimeGrid:function(){return new(this.timeGridClass.extend(Ve))(this)},instantiateDayGrid:function(){return new(this.dayGridClass.extend(Oe))(this)},renderDates:function(){this.timeGrid.setRange(this.renderRange),this.dayGrid&&this.dayGrid.setRange(this.renderRange),this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()),this.renderHead(),this.scroller.render();var e=this.scroller.el.addClass("fc-time-grid-container"),n=t('<div class="fc-time-grid" />').appendTo(e);this.el.find(".fc-body > tr > td").append(e),this.timeGrid.setElement(n),this.timeGrid.renderDates(),this.bottomRuleEl=t('<hr class="fc-divider '+this.widgetHeaderClass+'"/>').appendTo(this.timeGrid.el),this.dayGrid&&(this.dayGrid.setElement(this.el.find(".fc-day-grid")),this.dayGrid.renderDates(),this.dayGrid.bottomCoordPadding=this.dayGrid.el.next("hr").outerHeight()),this.noScrollRowEls=this.el.find(".fc-row:not(.fc-scroller *)")},renderHead:function(){this.headContainerEl=this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())},unrenderDates:function(){this.timeGrid.unrenderDates(),this.timeGrid.removeElement(),this.dayGrid&&(this.dayGrid.unrenderDates(),this.dayGrid.removeElement()),this.scroller.destroy()},renderSkeletonHtml:function(){return'<table><thead class="fc-head"><tr><td class="fc-head-container '+this.widgetHeaderClass+'"></td></tr></thead><tbody class="fc-body"><tr><td class="'+this.widgetContentClass+'">'+(this.dayGrid?'<div class="fc-day-grid"/><hr class="fc-divider '+this.widgetHeaderClass+'"/>':"")+"</td></tr></tbody></table>"},axisStyleAttr:function(){return null!==this.axisWidth?'style="width:'+this.axisWidth+'px"':""},renderBusinessHours:function(){this.timeGrid.renderBusinessHours(),this.dayGrid&&this.dayGrid.renderBusinessHours()},unrenderBusinessHours:function(){this.timeGrid.unrenderBusinessHours(),this.dayGrid&&this.dayGrid.unrenderBusinessHours()},getNowIndicatorUnit:function(){return this.timeGrid.getNowIndicatorUnit()},renderNowIndicator:function(t){this.timeGrid.renderNowIndicator(t)},unrenderNowIndicator:function(){this.timeGrid.unrenderNowIndicator()},updateSize:function(t){this.timeGrid.updateSize(t),Ce.prototype.updateSize.call(this,t)},updateWidth:function(){this.axisWidth=u(this.el.find(".fc-axis"))},setHeight:function(t,e){var n,s,o;this.bottomRuleEl.hide(),this.scroller.clear(),r(this.noScrollRowEls),this.dayGrid&&(this.dayGrid.removeSegPopover(),n=this.opt("eventLimit"),n&&"number"!=typeof n&&(n=Pe),n&&this.dayGrid.limitRows(n)),e||(s=this.computeScrollerHeight(t),this.scroller.setHeight(s),o=this.scroller.getScrollbarWidths(),(o.left||o.right)&&(i(this.noScrollRowEls,o),s=this.computeScrollerHeight(t),this.scroller.setHeight(s)),this.scroller.lockOverflow(o),this.timeGrid.getTotalSlatHeight()<s&&this.bottomRuleEl.show())},computeScrollerHeight:function(t){return t-h(this.el,this.scroller.el)},computeInitialDateScroll:function(){var t=e.duration(this.opt("scrollTime")),n=this.timeGrid.computeTimeTop(t);return n=Math.ceil(n),n&&n++,{top:n}},queryDateScroll:function(){return{top:this.scroller.getScrollTop()}},applyDateScroll:function(t){void 0!==t.top&&this.scroller.setScrollTop(t.top)},hitsNeeded:function(){this.timeGrid.hitsNeeded(),this.dayGrid&&this.dayGrid.hitsNeeded()},hitsNotNeeded:function(){this.timeGrid.hitsNotNeeded(),this.dayGrid&&this.dayGrid.hitsNotNeeded()},prepareHits:function(){this.timeGrid.prepareHits(),this.dayGrid&&this.dayGrid.prepareHits()},releaseHits:function(){this.timeGrid.releaseHits(),this.dayGrid&&this.dayGrid.releaseHits()},queryHit:function(t,e){var n=this.timeGrid.queryHit(t,e);return!n&&this.dayGrid&&(n=this.dayGrid.queryHit(t,e)),n},getHitSpan:function(t){return t.component.getHitSpan(t)},getHitEl:function(t){return t.component.getHitEl(t)},renderEvents:function(t){var e,n=[],i=[];for(e=0;e<t.length;e++)t[e].allDay?n.push(t[e]):i.push(t[e]);this.timeGrid.renderEvents(i),this.dayGrid&&this.dayGrid.renderEvents(n),this.updateHeight()},getEventSegs:function(){return this.timeGrid.getEventSegs().concat(this.dayGrid?this.dayGrid.getEventSegs():[])},unrenderEvents:function(){this.timeGrid.unrenderEvents(),this.dayGrid&&this.dayGrid.unrenderEvents()},renderDrag:function(t,e){return t.start.hasTime()?this.timeGrid.renderDrag(t,e):this.dayGrid?this.dayGrid.renderDrag(t,e):void 0},unrenderDrag:function(){this.timeGrid.unrenderDrag(),this.dayGrid&&this.dayGrid.unrenderDrag()},renderSelection:function(t){t.start.hasTime()||t.end.hasTime()?this.timeGrid.renderSelection(t):this.dayGrid&&this.dayGrid.renderSelection(t)},unrenderSelection:function(){this.timeGrid.unrenderSelection(),this.dayGrid&&this.dayGrid.unrenderSelection()}}),Ve={renderHeadIntroHtml:function(){var t,e=this.view;return e.opt("weekNumbers")?(t=this.start.format(e.opt("smallWeekFormat")),'<th class="fc-axis fc-week-number '+e.widgetHeaderClass+'" '+e.axisStyleAttr()+">"+e.buildGotoAnchorHtml({date:this.start,type:"week",forceOff:this.colCnt>1},ht(t))+"</th>"):'<th class="fc-axis '+e.widgetHeaderClass+'" '+e.axisStyleAttr()+"></th>"},renderBgIntroHtml:function(){var t=this.view;return'<td class="fc-axis '+t.widgetContentClass+'" '+t.axisStyleAttr()+"></td>"},renderIntroHtml:function(){return'<td class="fc-axis" '+this.view.axisStyleAttr()+"></td>"}},Oe={renderBgIntroHtml:function(){var t=this.view;return'<td class="fc-axis '+t.widgetContentClass+'" '+t.axisStyleAttr()+"><span>"+t.getAllDayHtml()+"</span></td>"},renderIntroHtml:function(){return'<td class="fc-axis" '+this.view.axisStyleAttr()+"></td>"}},Pe=5,_e=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}];$t.agenda={class:Ge,defaults:{allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0}},$t.agendaDay={type:"agenda",duration:{days:1}},$t.agendaWeek={type:"agenda",duration:{weeks:1}};var We=Ce.extend({grid:null,scroller:null,initialize:function(){this.grid=new Ye(this),this.scroller=new He({overflowX:"hidden",overflowY:"auto"})},renderSkeleton:function(){this.el.addClass("fc-list-view "+this.widgetContentClass),this.scroller.render(),this.scroller.el.appendTo(this.el),this.grid.setElement(this.scroller.scrollEl)},unrenderSkeleton:function(){this.scroller.destroy()},setHeight:function(t,e){this.scroller.setHeight(this.computeScrollerHeight(t))},computeScrollerHeight:function(t){return t-h(this.el,this.scroller.el)},renderDates:function(){this.grid.setRange(this.renderRange)},renderEvents:function(t){this.grid.renderEvents(t)},unrenderEvents:function(){this.grid.unrenderEvents()},isEventResizable:function(t){return!1},isEventDraggable:function(t){return!1}}),Ye=be.extend({segSelector:".fc-list-item",hasDayInteractions:!1,spanToSegs:function(t){for(var e,n=this.view,i=n.renderRange.start.clone().time(0),r=0,s=[];i<n.renderRange.end;)if(e=z(t,{start:i,end:i.clone().add(1,"day")}),e&&(e.dayIndex=r,s.push(e)),i.add(1,"day"),r++,e&&!e.isEnd&&t.end.hasTime()&&t.end<i.clone().add(this.view.nextDayThreshold)){e.end=t.end.clone(),e.isEnd=!0;break}return s},computeEventTimeFormat:function(){return this.view.opt("mediumTimeFormat")},handleSegClick:function(e,n){var i;be.prototype.handleSegClick.apply(this,arguments),t(n.target).closest("a[href]").length||(i=e.event.url)&&!n.isDefaultPrevented()&&(window.location.href=i)},renderFgSegs:function(t){return t=this.renderFgSegEls(t),t.length?this.renderSegList(t):this.renderEmptyMessage(),t},renderEmptyMessage:function(){this.el.html('<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">'+ht(this.view.opt("noEventsMessage"))+"</div></div></div>")},renderSegList:function(e){var n,i,r,s=this.groupSegsByDay(e),o=t('<table class="fc-list-table"><tbody/></table>'),a=o.find("tbody");for(n=0;n<s.length;n++)if(i=s[n])for(a.append(this.dayHeaderHtml(this.view.renderRange.start.clone().add(n,"days"))),this.sortEventSegs(i),r=0;r<i.length;r++)a.append(i[r].el);this.el.empty().append(o)},groupSegsByDay:function(t){var e,n,i=[];for(e=0;e<t.length;e++)n=t[e],(i[n.dayIndex]||(i[n.dayIndex]=[])).push(n);return i},dayHeaderHtml:function(t){var e=this.view,n=e.opt("listDayFormat"),i=e.opt("listDayAltFormat");return'<tr class="fc-list-heading" data-date="'+t.format("YYYY-MM-DD")+'"><td class="'+e.widgetHeaderClass+'" colspan="3">'+(n?e.buildGotoAnchorHtml(t,{class:"fc-list-heading-main"},ht(t.format(n))):"")+(i?e.buildGotoAnchorHtml(t,{class:"fc-list-heading-alt"},ht(t.format(i))):"")+"</td></tr>"},fgSegHtml:function(t){var e,n=this.view,i=["fc-list-item"].concat(this.getSegCustomClasses(t)),r=this.getSegBackgroundColor(t),s=t.event,o=s.url;return e=s.allDay?n.getAllDayHtml():n.isMultiDayEvent(s)?t.isStart||t.isEnd?ht(this.getEventTimeText(t)):n.getAllDayHtml():ht(this.getEventTimeText(s)),o&&i.push("fc-has-url"),'<tr class="'+i.join(" ")+'">'+(this.displayEventTime?'<td class="fc-list-item-time '+n.widgetContentClass+'">'+(e||"")+"</td>":"")+'<td class="fc-list-item-marker '+n.widgetContentClass+'"><span class="fc-event-dot"'+(r?' style="background-color:'+r+'"':"")+'></span></td><td class="fc-list-item-title '+n.widgetContentClass+'"><a'+(o?' href="'+ht(o)+'"':"")+">"+ht(t.event.title||"")+"</a></td></tr>"}});return $t.list={class:We,buttonTextKey:"list",defaults:{buttonText:"list",listDayFormat:"LL",noEventsMessage:"No events to display"}},$t.listDay={type:"list",duration:{days:1},defaults:{listDayFormat:"dddd"}},$t.listWeek={type:"list",duration:{weeks:1},defaults:{listDayFormat:"dddd",listDayAltFormat:"LL"}},$t.listMonth={type:"list",duration:{month:1},defaults:{listDayAltFormat:"dddd"}},$t.listYear={type:"list",duration:{year:1},defaults:{listDayAltFormat:"dddd"}},Zt});
var DateFormatter;!function(){"use strict";var e,t,a,r,n,o;n=864e5,o=3600,e=function(e,t){return"string"==typeof e&&"string"==typeof t&&e.toLowerCase()===t.toLowerCase()},t=function(e,a,r){var n=r||"0",o=e.toString();return o.length<a?t(n+o,a):o},a=function(e){var t,r;for(e=e||{},t=1;t<arguments.length;t++)if(r=arguments[t])for(var n in r)r.hasOwnProperty(n)&&("object"==typeof r[n]?a(e[n],r[n]):e[n]=r[n]);return e},r={dateSettings:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],meridiem:["AM","PM"],ordinal:function(e){var t=e%10,a={1:"st",2:"nd",3:"rd"};return 1!==Math.floor(e%100/10)&&a[t]?a[t]:"th"}},separators:/[ \-+\/\.T:@]/g,validParts:/[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,intParts:/[djwNzmnyYhHgGis]/g,tzParts:/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,tzClip:/[^-+\dA-Z]/g},DateFormatter=function(e){var t=this,n=a(r,e);t.dateSettings=n.dateSettings,t.separators=n.separators,t.validParts=n.validParts,t.intParts=n.intParts,t.tzParts=n.tzParts,t.tzClip=n.tzClip},DateFormatter.prototype={constructor:DateFormatter,parseDate:function(t,a){var r,n,o,i,s,d,u,l,f,c,m=this,h=!1,g=!1,p=m.dateSettings,y={date:null,year:null,month:null,day:null,hour:0,min:0,sec:0};if(!t)return void 0;if(t instanceof Date)return t;if("number"==typeof t)return new Date(t);if("U"===a)return o=parseInt(t),o?new Date(1e3*o):t;if("string"!=typeof t)return"";if(r=a.match(m.validParts),!r||0===r.length)throw new Error("Invalid date format definition.");for(n=t.replace(m.separators,"\x00").split("\x00"),o=0;o<n.length;o++)switch(i=n[o],s=parseInt(i),r[o]){case"y":case"Y":f=i.length,2===f?y.year=parseInt((70>s?"20":"19")+i):4===f&&(y.year=s),h=!0;break;case"m":case"n":case"M":case"F":isNaN(i)?(d=p.monthsShort.indexOf(i),d>-1&&(y.month=d+1),d=p.months.indexOf(i),d>-1&&(y.month=d+1)):s>=1&&12>=s&&(y.month=s),h=!0;break;case"d":case"j":s>=1&&31>=s&&(y.day=s),h=!0;break;case"g":case"h":u=r.indexOf("a")>-1?r.indexOf("a"):r.indexOf("A")>-1?r.indexOf("A"):-1,c=n[u],u>-1?(l=e(c,p.meridiem[0])?0:e(c,p.meridiem[1])?12:-1,s>=1&&12>=s&&l>-1?y.hour=s+l:s>=0&&23>=s&&(y.hour=s)):s>=0&&23>=s&&(y.hour=s),g=!0;break;case"G":case"H":s>=0&&23>=s&&(y.hour=s),g=!0;break;case"i":s>=0&&59>=s&&(y.min=s),g=!0;break;case"s":s>=0&&59>=s&&(y.sec=s),g=!0}if(h===!0&&y.year&&y.month&&y.day)y.date=new Date(y.year,y.month-1,y.day,y.hour,y.min,y.sec,0);else{if(g!==!0)return!1;y.date=new Date(0,0,0,y.hour,y.min,y.sec,0)}return y.date},guessDate:function(e,t){if("string"!=typeof e)return e;var a,r,n,o,i=this,s=e.replace(i.separators,"\x00").split("\x00"),d=/^[djmn]/g,u=t.match(i.validParts),l=new Date,f=0;if(!d.test(u[0]))return e;for(r=0;r<s.length;r++){switch(f=2,n=s[r],o=parseInt(n.substr(0,2)),r){case 0:"m"===u[0]||"n"===u[0]?l.setMonth(o-1):l.setDate(o);break;case 1:"m"===u[0]||"n"===u[0]?l.setDate(o):l.setMonth(o-1);break;case 2:a=l.getFullYear(),n.length<4?(l.setFullYear(parseInt(a.toString().substr(0,4-n.length)+n)),f=n.length):(l.setFullYear=parseInt(n.substr(0,4)),f=4);break;case 3:l.setHours(o);break;case 4:l.setMinutes(o);break;case 5:l.setSeconds(o)}n.substr(f).length>0&&s.splice(r+1,0,n.substr(f))}return l},parseFormat:function(e,a){var r,i=this,s=i.dateSettings,d=/\\?(.?)/gi,u=function(e,t){return r[e]?r[e]():t};return r={d:function(){return t(r.j(),2)},D:function(){return s.daysShort[r.w()]},j:function(){return a.getDate()},l:function(){return s.days[r.w()]},N:function(){return r.w()||7},w:function(){return a.getDay()},z:function(){var e=new Date(r.Y(),r.n()-1,r.j()),t=new Date(r.Y(),0,1);return Math.round((e-t)/n)},W:function(){var e=new Date(r.Y(),r.n()-1,r.j()-r.N()+3),a=new Date(e.getFullYear(),0,4);return t(1+Math.round((e-a)/n/7),2)},F:function(){return s.months[a.getMonth()]},m:function(){return t(r.n(),2)},M:function(){return s.monthsShort[a.getMonth()]},n:function(){return a.getMonth()+1},t:function(){return new Date(r.Y(),r.n(),0).getDate()},L:function(){var e=r.Y();return e%4===0&&e%100!==0||e%400===0?1:0},o:function(){var e=r.n(),t=r.W(),a=r.Y();return a+(12===e&&9>t?1:1===e&&t>9?-1:0)},Y:function(){return a.getFullYear()},y:function(){return r.Y().toString().slice(-2)},a:function(){return r.A().toLowerCase()},A:function(){var e=r.G()<12?0:1;return s.meridiem[e]},B:function(){var e=a.getUTCHours()*o,r=60*a.getUTCMinutes(),n=a.getUTCSeconds();return t(Math.floor((e+r+n+o)/86.4)%1e3,3)},g:function(){return r.G()%12||12},G:function(){return a.getHours()},h:function(){return t(r.g(),2)},H:function(){return t(r.G(),2)},i:function(){return t(a.getMinutes(),2)},s:function(){return t(a.getSeconds(),2)},u:function(){return t(1e3*a.getMilliseconds(),6)},e:function(){var e=/\((.*)\)/.exec(String(a))[1];return e||"Coordinated Universal Time"},T:function(){var e=(String(a).match(i.tzParts)||[""]).pop().replace(i.tzClip,"");return e||"UTC"},I:function(){var e=new Date(r.Y(),0),t=Date.UTC(r.Y(),0),a=new Date(r.Y(),6),n=Date.UTC(r.Y(),6);return e-t!==a-n?1:0},O:function(){var e=a.getTimezoneOffset(),r=Math.abs(e);return(e>0?"-":"+")+t(100*Math.floor(r/60)+r%60,4)},P:function(){var e=r.O();return e.substr(0,3)+":"+e.substr(3,2)},Z:function(){return 60*-a.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(d,u)},r:function(){return"D, d M Y H:i:s O".replace(d,u)},U:function(){return a.getTime()/1e3||0}},u(e,e)},formatDate:function(e,t){var a,r,n,o,i,s=this,d="";if("string"==typeof e&&(e=s.parseDate(e,t),e===!1))return!1;if(e instanceof Date){for(n=t.length,a=0;n>a;a++)i=t.charAt(a),"S"!==i&&(o=s.parseFormat(i,e),a!==n-1&&s.intParts.test(i)&&"S"===t.charAt(a+1)&&(r=parseInt(o),o+=s.dateSettings.ordinal(r)),d+=o);return d}return""}}}(),function(e){"function"==typeof define&&define.amd?define(["jquery","jquery-mousewheel"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){"use strict";function t(e,t,a){this.date=e,this.desc=t,this.style=a}var a={i18n:{ar:{months:["كانون الثاني","شباط","آذار","نيسان","مايو","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],dayOfWeekShort:["ن","ث","ع","خ","ج","س","ح"],dayOfWeek:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت","الأحد"]},ro:{months:["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],dayOfWeekShort:["Du","Lu","Ma","Mi","Jo","Vi","Sâ"],dayOfWeek:["Duminică","Luni","Marţi","Miercuri","Joi","Vineri","Sâmbătă"]},id:{months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],dayOfWeekShort:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],dayOfWeek:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},is:{months:["Janúar","Febrúar","Mars","Apríl","Maí","Júní","Júlí","Ágúst","September","Október","Nóvember","Desember"],dayOfWeekShort:["Sun","Mán","Þrið","Mið","Fim","Fös","Lau"],dayOfWeek:["Sunnudagur","Mánudagur","Þriðjudagur","Miðvikudagur","Fimmtudagur","Föstudagur","Laugardagur"]},bg:{months:["Януари","Февруари","Март","Април","Май","Юни","Юли","Август","Септември","Октомври","Ноември","Декември"],dayOfWeekShort:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],dayOfWeek:["Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота"]},fa:{months:["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],dayOfWeekShort:["یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],dayOfWeek:["یک‌شنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه","شنبه","یک‌شنبه"]},ru:{months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],dayOfWeekShort:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],dayOfWeek:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]},uk:{months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],dayOfWeekShort:["Ндл","Пнд","Втр","Срд","Чтв","Птн","Сбт"],dayOfWeek:["Неділя","Понеділок","Вівторок","Середа","Четвер","П'ятниця","Субота"]},en:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeekShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},el:{months:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"],dayOfWeekShort:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],dayOfWeek:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"]},de:{months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],dayOfWeekShort:["So","Mo","Di","Mi","Do","Fr","Sa"],dayOfWeek:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},nl:{months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],dayOfWeekShort:["zo","ma","di","wo","do","vr","za"],dayOfWeek:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},tr:{months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],dayOfWeekShort:["Paz","Pts","Sal","Çar","Per","Cum","Cts"],dayOfWeek:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]},fr:{months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],dayOfWeekShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],dayOfWeek:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},es:{months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],dayOfWeekShort:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],dayOfWeek:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]},th:{months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"],dayOfWeekShort:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],dayOfWeek:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์","อาทิตย์"]},pl:{months:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"],dayOfWeekShort:["nd","pn","wt","śr","cz","pt","sb"],dayOfWeek:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]},pt:{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeekShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],dayOfWeek:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]},ch:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeekShort:["日","一","二","三","四","五","六"]},se:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeekShort:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"]},kr:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeekShort:["일","월","화","수","목","금","토"],dayOfWeek:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},it:{months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],dayOfWeekShort:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],dayOfWeek:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"]},da:{months:["January","Februar","Marts","April","Maj","Juni","July","August","September","Oktober","November","December"],dayOfWeekShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],dayOfWeek:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},no:{months:["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],dayOfWeekShort:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],dayOfWeek:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"]},ja:{months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],dayOfWeekShort:["日","月","火","水","木","金","土"],dayOfWeek:["日曜","月曜","火曜","水曜","木曜","金曜","土曜"]},vi:{months:["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],dayOfWeekShort:["CN","T2","T3","T4","T5","T6","T7"],dayOfWeek:["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"]},sl:{months:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],dayOfWeekShort:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],dayOfWeek:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"]},cs:{months:["Leden","Únor","Březen","Duben","Květen","Červen","Červenec","Srpen","Září","Říjen","Listopad","Prosinec"],dayOfWeekShort:["Ne","Po","Út","St","Čt","Pá","So"]},hu:{months:["Január","Február","Március","Április","Május","Június","Július","Augusztus","Szeptember","Október","November","December"],dayOfWeekShort:["Va","Hé","Ke","Sze","Cs","Pé","Szo"],dayOfWeek:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"]},az:{months:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"],dayOfWeekShort:["B","Be","Ça","Ç","Ca","C","Ş"],dayOfWeek:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},bs:{months:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],dayOfWeekShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayOfWeek:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"]},ca:{months:["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],dayOfWeekShort:["Dg","Dl","Dt","Dc","Dj","Dv","Ds"],dayOfWeek:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"]},"en-GB":{months:["January","February","March","April","May","June","July","August","September","October","November","December"],dayOfWeekShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},et:{months:["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"],dayOfWeekShort:["P","E","T","K","N","R","L"],dayOfWeek:["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"]},eu:{months:["Urtarrila","Otsaila","Martxoa","Apirila","Maiatza","Ekaina","Uztaila","Abuztua","Iraila","Urria","Azaroa","Abendua"],dayOfWeekShort:["Ig.","Al.","Ar.","Az.","Og.","Or.","La."],dayOfWeek:["Igandea","Astelehena","Asteartea","Asteazkena","Osteguna","Ostirala","Larunbata"]},fi:{months:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"],dayOfWeekShort:["Su","Ma","Ti","Ke","To","Pe","La"],dayOfWeek:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},gl:{months:["Xan","Feb","Maz","Abr","Mai","Xun","Xul","Ago","Set","Out","Nov","Dec"],dayOfWeekShort:["Dom","Lun","Mar","Mer","Xov","Ven","Sab"],dayOfWeek:["Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado"]},hr:{months:["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"],dayOfWeekShort:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],dayOfWeek:["Nedjelja","Ponedjeljak","Utorak","Srijeda","Četvrtak","Petak","Subota"]},ko:{months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],dayOfWeekShort:["일","월","화","수","목","금","토"],dayOfWeek:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},lt:{months:["Sausio","Vasario","Kovo","Balandžio","Gegužės","Birželio","Liepos","Rugpjūčio","Rugsėjo","Spalio","Lapkričio","Gruodžio"],dayOfWeekShort:["Sek","Pir","Ant","Tre","Ket","Pen","Šeš"],dayOfWeek:["Sekmadienis","Pirmadienis","Antradienis","Trečiadienis","Ketvirtadienis","Penktadienis","Šeštadienis"]},lv:{months:["Janvāris","Februāris","Marts","Aprīlis ","Maijs","Jūnijs","Jūlijs","Augusts","Septembris","Oktobris","Novembris","Decembris"],dayOfWeekShort:["Sv","Pr","Ot","Tr","Ct","Pk","St"],dayOfWeek:["Svētdiena","Pirmdiena","Otrdiena","Trešdiena","Ceturtdiena","Piektdiena","Sestdiena"]},mk:{months:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"],dayOfWeekShort:["нед","пон","вто","сре","чет","пет","саб"],dayOfWeek:["Недела","Понеделник","Вторник","Среда","Четврток","Петок","Сабота"]},mn:{months:["1-р сар","2-р сар","3-р сар","4-р сар","5-р сар","6-р сар","7-р сар","8-р сар","9-р сар","10-р сар","11-р сар","12-р сар"],dayOfWeekShort:["Дав","Мяг","Лха","Пүр","Бсн","Бям","Ням"],dayOfWeek:["Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба","Ням"]},"pt-BR":{months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayOfWeekShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayOfWeek:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]},sk:{months:["Január","Február","Marec","Apríl","Máj","Jún","Júl","August","September","Október","November","December"],dayOfWeekShort:["Ne","Po","Ut","St","Št","Pi","So"],dayOfWeek:["Nedeľa","Pondelok","Utorok","Streda","Štvrtok","Piatok","Sobota"]},sq:{months:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],dayOfWeekShort:["Die","Hën","Mar","Mër","Enj","Pre","Shtu"],dayOfWeek:["E Diel","E Hënë","E Martē","E Mërkurë","E Enjte","E Premte","E Shtunë"]},"sr-YU":{months:["Januar","Februar","Mart","April","Maj","Jun","Jul","Avgust","Septembar","Oktobar","Novembar","Decembar"],dayOfWeekShort:["Ned","Pon","Uto","Sre","čet","Pet","Sub"],dayOfWeek:["Nedelja","Ponedeljak","Utorak","Sreda","Četvrtak","Petak","Subota"]},sr:{months:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"],dayOfWeekShort:["нед","пон","уто","сре","чет","пет","суб"],dayOfWeek:["Недеља","Понедељак","Уторак","Среда","Четвртак","Петак","Субота"]},sv:{months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],dayOfWeekShort:["Sön","Mån","Tis","Ons","Tor","Fre","Lör"],dayOfWeek:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"]},"zh-TW":{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeekShort:["日","一","二","三","四","五","六"],dayOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},zh:{months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayOfWeekShort:["日","一","二","三","四","五","六"],dayOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},he:{months:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"],dayOfWeekShort:["א'","ב'","ג'","ד'","ה'","ו'","שבת"],dayOfWeek:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת","ראשון"]},hy:{months:["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"],dayOfWeekShort:["Կի","Երկ","Երք","Չոր","Հնգ","Ուրբ","Շբթ"],dayOfWeek:["Կիրակի","Երկուշաբթի","Երեքշաբթի","Չորեքշաբթի","Հինգշաբթի","Ուրբաթ","Շաբաթ"]},kg:{months:["Үчтүн айы","Бирдин айы","Жалган Куран","Чын Куран","Бугу","Кулжа","Теке","Баш Оона","Аяк Оона","Тогуздун айы","Жетинин айы","Бештин айы"],dayOfWeekShort:["Жек","Дүй","Шей","Шар","Бей","Жум","Ише"],dayOfWeek:["Жекшемб","Дүйшөмб","Шейшемб","Шаршемб","Бейшемби","Жума","Ишенб"]},rm:{months:["Schaner","Favrer","Mars","Avrigl","Matg","Zercladur","Fanadur","Avust","Settember","October","November","December"],dayOfWeekShort:["Du","Gli","Ma","Me","Gie","Ve","So"],dayOfWeek:["Dumengia","Glindesdi","Mardi","Mesemna","Gievgia","Venderdi","Sonda"]},ka:{months:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"],dayOfWeekShort:["კვ","ორშ","სამშ","ოთხ","ხუთ","პარ","შაბ"],dayOfWeek:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]}},value:"",rtl:!1,format:"Y/m/d H:i",formatTime:"H:i",formatDate:"Y/m/d",startDate:!1,step:60,monthChangeSpinner:!0,closeOnDateSelect:!1,closeOnTimeSelect:!0,closeOnWithoutClick:!0,closeOnInputClick:!0,timepicker:!0,datepicker:!0,weeks:!1,defaultTime:!1,defaultDate:!1,minDate:!1,maxDate:!1,minTime:!1,maxTime:!1,disabledMinTime:!1,disabledMaxTime:!1,allowTimes:[],opened:!1,initTime:!0,inline:!1,theme:"",onSelectDate:function(){},onSelectTime:function(){},onChangeMonth:function(){},onGetWeekOfYear:function(){},onChangeYear:function(){},onChangeDateTime:function(){},onShow:function(){},onClose:function(){},onGenerate:function(){},withoutCopyright:!0,inverseButton:!1,hours12:!1,next:"xdsoft_next",prev:"xdsoft_prev",dayOfWeekStart:0,parentID:"body",timeHeightInTimePicker:25,timepickerScrollbar:!0,todayButton:!0,prevButton:!0,nextButton:!0,defaultSelect:!0,scrollMonth:!0,scrollTime:!0,scrollInput:!0,lazyInit:!1,mask:!1,validateOnBlur:!0,allowBlank:!0,yearStart:1950,yearEnd:2050,monthStart:0,monthEnd:11,style:"",id:"",fixed:!1,roundTime:"round",className:"",weekends:[],highlightedDates:[],highlightedPeriods:[],allowDates:[],allowDateRe:null,disabledDates:[],disabledWeekDays:[],yearOffset:0,beforeShowDay:null,enterLikeTab:!0,showApplyButton:!1},r=null,n="en",o="en",i={meridiem:["AM","PM"]},s=function(){var t=a.i18n[o],n={days:t.dayOfWeek,daysShort:t.dayOfWeekShort,months:t.months,monthsShort:e.map(t.months,function(e){return e.substring(0,3)})};r=new DateFormatter({dateSettings:e.extend({},i,n)})};e.datetimepicker={setLocale:function(e){var t=a.i18n[e]?e:n;o!=t&&(o=t,s())},setDateFormatter:function(e){r=e},RFC_2822:"D, d M Y H:i:s O",ATOM:"Y-m-dTH:i:sP",ISO_8601:"Y-m-dTH:i:sO",RFC_822:"D, d M y H:i:s O",RFC_850:"l, d-M-y H:i:s T",RFC_1036:"D, d M y H:i:s O",RFC_1123:"D, d M Y H:i:s O",RSS:"D, d M Y H:i:s O",W3C:"Y-m-dTH:i:sP"},s(),window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var a=/(\-([a-z]){1})/g;return"float"===t&&(t="styleFloat"),a.test(t)&&(t=t.replace(a,function(e,t,a){return a.toUpperCase()})),e.currentStyle[t]||null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var a,r;for(a=t||0,r=this.length;r>a;a+=1)if(this[a]===e)return a;return-1}),Date.prototype.countDaysInMonth=function(){return new Date(this.getFullYear(),this.getMonth()+1,0).getDate()},e.fn.xdsoftScroller=function(t){return this.each(function(){var a,r,n,o,i,s=e(this),d=function(e){var t,a={x:0,y:0};return"touchstart"===e.type||"touchmove"===e.type||"touchend"===e.type||"touchcancel"===e.type?(t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a.x=t.clientX,a.y=t.clientY):("mousedown"===e.type||"mouseup"===e.type||"mousemove"===e.type||"mouseover"===e.type||"mouseout"===e.type||"mouseenter"===e.type||"mouseleave"===e.type)&&(a.x=e.clientX,a.y=e.clientY),a},u=100,l=!1,f=0,c=0,m=0,h=!1,g=0,p=function(){};return"hide"===t?void s.find(".xdsoft_scrollbar").hide():(e(this).hasClass("xdsoft_scroller_box")||(a=s.children().eq(0),r=s[0].clientHeight,n=a[0].offsetHeight,o=e('<div class="xdsoft_scrollbar"></div>'),i=e('<div class="xdsoft_scroller"></div>'),o.append(i),s.addClass("xdsoft_scroller_box").append(o),p=function(e){var t=d(e).y-f+g;0>t&&(t=0),t+i[0].offsetHeight>m&&(t=m-i[0].offsetHeight),s.trigger("scroll_element.xdsoft_scroller",[u?t/u:0])},i.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller",function(a){r||s.trigger("resize_scroll.xdsoft_scroller",[t]),f=d(a).y,g=parseInt(i.css("margin-top"),10),m=o[0].offsetHeight,"mousedown"===a.type||"touchstart"===a.type?(document&&e(document.body).addClass("xdsoft_noselect"),e([document.body,window]).on("touchend mouseup.xdsoft_scroller",function n(){e([document.body,window]).off("touchend mouseup.xdsoft_scroller",n).off("mousemove.xdsoft_scroller",p).removeClass("xdsoft_noselect")}),e(document.body).on("mousemove.xdsoft_scroller",p)):(h=!0,a.stopPropagation(),a.preventDefault())}).on("touchmove",function(e){h&&(e.preventDefault(),p(e))}).on("touchend touchcancel",function(){h=!1,g=0}),s.on("scroll_element.xdsoft_scroller",function(e,t){r||s.trigger("resize_scroll.xdsoft_scroller",[t,!0]),t=t>1?1:0>t||isNaN(t)?0:t,i.css("margin-top",u*t),setTimeout(function(){a.css("marginTop",-parseInt((a[0].offsetHeight-r)*t,10))},10)}).on("resize_scroll.xdsoft_scroller",function(e,t,d){var l,f;r=s[0].clientHeight,n=a[0].offsetHeight,l=r/n,f=l*o[0].offsetHeight,l>1?i.hide():(i.show(),i.css("height",parseInt(f>10?f:10,10)),u=o[0].offsetHeight-i[0].offsetHeight,d!==!0&&s.trigger("scroll_element.xdsoft_scroller",[t||Math.abs(parseInt(a.css("marginTop"),10))/(n-r)]))}),s.on("mousewheel",function(e){var t=Math.abs(parseInt(a.css("marginTop"),10));return t-=20*e.deltaY,0>t&&(t=0),s.trigger("scroll_element.xdsoft_scroller",[t/(n-r)]),e.stopPropagation(),!1}),s.on("touchstart",function(e){l=d(e),c=Math.abs(parseInt(a.css("marginTop"),10))}),s.on("touchmove",function(e){if(l){e.preventDefault();var t=d(e);s.trigger("scroll_element.xdsoft_scroller",[(c-(t.y-l.y))/(n-r)])}}),s.on("touchend touchcancel",function(){l=!1,c=0})),void s.trigger("resize_scroll.xdsoft_scroller",[t]))})},e.fn.datetimepicker=function(n,i){var s,d,u=this,l=48,f=57,c=96,m=105,h=17,g=46,p=13,y=27,v=8,b=37,D=38,k=39,x=40,T=9,S=116,w=65,O=67,M=86,_=90,W=89,F=!1,C=e.isPlainObject(n)||!n?e.extend(!0,{},a,n):e.extend(!0,{},a),P=0,A=function(e){e.on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",function t(){e.is(":disabled")||e.data("xdsoft_datetimepicker")||(clearTimeout(P),P=setTimeout(function(){e.data("xdsoft_datetimepicker")||s(e),e.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",t).trigger("open.xdsoft")},100))})};return s=function(a){function i(){var e,t=!1;return C.startDate?t=j.strToDate(C.startDate):(t=C.value||(a&&a.val&&a.val()?a.val():""),t?t=j.strToDateTime(t):C.defaultDate&&(t=j.strToDateTime(C.defaultDate),C.defaultTime&&(e=j.strtotime(C.defaultTime),t.setHours(e.getHours()),t.setMinutes(e.getMinutes())))),t&&j.isValidDate(t)?J.data("changed",!0):t="",t||0}function s(t){var r=function(e,t){var a=e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,"\\$1").replace(/_/g,"{digit+}").replace(/([0-9]{1})/g,"{digit$1}").replace(/\{digit([0-9]{1})\}/g,"[0-$1_]{1}").replace(/\{digit[\+]\}/g,"[0-9_]{1}");return new RegExp(a).test(t)},n=function(e){try{if(document.selection&&document.selection.createRange){var t=document.selection.createRange();return t.getBookmark().charCodeAt(2)-2}if(e.setSelectionRange)return e.selectionStart}catch(a){return 0}},o=function(e,t){if(e="string"==typeof e||e instanceof String?document.getElementById(e):e,!e)return!1;if(e.createTextRange){var a=e.createTextRange();return a.collapse(!0),a.moveEnd("character",t),a.moveStart("character",t),a.select(),!0}return e.setSelectionRange?(e.setSelectionRange(t,t),!0):!1};t.mask&&a.off("keydown.xdsoft"),t.mask===!0&&(t.mask="undefined"!=typeof moment?t.format.replace(/Y{4}/g,"9999").replace(/Y{2}/g,"99").replace(/M{2}/g,"19").replace(/D{2}/g,"39").replace(/H{2}/g,"29").replace(/m{2}/g,"59").replace(/s{2}/g,"59"):t.format.replace(/Y/g,"9999").replace(/F/g,"9999").replace(/m/g,"19").replace(/d/g,"39").replace(/H/g,"29").replace(/i/g,"59").replace(/s/g,"59")),"string"===e.type(t.mask)&&(r(t.mask,a.val())||(a.val(t.mask.replace(/[0-9]/g,"_")),o(a[0],0)),a.on("keydown.xdsoft",function(i){var s,d,u=this.value,C=i.which;if(C>=l&&f>=C||C>=c&&m>=C||C===v||C===g){for(s=n(this),d=C!==v&&C!==g?String.fromCharCode(C>=c&&m>=C?C-l:C):"_",C!==v&&C!==g||!s||(s-=1,d="_");/[^0-9_]/.test(t.mask.substr(s,1))&&s<t.mask.length&&s>0;)s+=C===v||C===g?-1:1;if(u=u.substr(0,s)+d+u.substr(s+1),""===e.trim(u))u=t.mask.replace(/[0-9]/g,"_");else if(s===t.mask.length)return i.preventDefault(),!1;for(s+=C===v||C===g?0:1;/[^0-9_]/.test(t.mask.substr(s,1))&&s<t.mask.length&&s>0;)s+=C===v||C===g?-1:1;r(t.mask,u)?(this.value=u,o(this,s)):""===e.trim(u)?this.value=t.mask.replace(/[0-9]/g,"_"):a.trigger("error_input.xdsoft")}else if(-1!==[w,O,M,_,W].indexOf(C)&&F||-1!==[y,D,x,b,k,S,h,T,p].indexOf(C))return!0;return i.preventDefault(),!1}))}var d,u,P,A,Y,j,H,J=e('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),z=e('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),I=e('<div class="xdsoft_datepicker active"></div>'),N=e('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),L=e('<div class="xdsoft_calendar"></div>'),E=e('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),R=E.find(".xdsoft_time_box").eq(0),B=e('<div class="xdsoft_time_variant"></div>'),V=e('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),G=e('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),U=e('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),q=!1,X=0;C.id&&J.attr("id",C.id),C.style&&J.attr("style",C.style),C.weeks&&J.addClass("xdsoft_showweeks"),C.rtl&&J.addClass("xdsoft_rtl"),J.addClass("xdsoft_"+C.theme),J.addClass(C.className),N.find(".xdsoft_month span").after(G),N.find(".xdsoft_year span").after(U),N.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft",function(t){var a,r,n=e(this).find(".xdsoft_select").eq(0),o=0,i=0,s=n.is(":visible");for(N.find(".xdsoft_select").hide(),j.currentTime&&(o=j.currentTime[e(this).hasClass("xdsoft_month")?"getMonth":"getFullYear"]()),n[s?"hide":"show"](),a=n.find("div.xdsoft_option"),r=0;r<a.length&&a.eq(r).data("value")!==o;r+=1)i+=a[0].offsetHeight;return n.xdsoftScroller(i/(n.children()[0].offsetHeight-n[0].clientHeight)),t.stopPropagation(),!1}),N.find(".xdsoft_select").xdsoftScroller().on("touchstart mousedown.xdsoft",function(e){e.stopPropagation(),e.preventDefault()}).on("touchstart mousedown.xdsoft",".xdsoft_option",function(){(void 0===j.currentTime||null===j.currentTime)&&(j.currentTime=j.now());var t=j.currentTime.getFullYear();j&&j.currentTime&&j.currentTime[e(this).parent().parent().hasClass("xdsoft_monthselect")?"setMonth":"setFullYear"](e(this).data("value")),e(this).parent().parent().hide(),J.trigger("xchange.xdsoft"),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data("input")),t!==j.currentTime.getFullYear()&&e.isFunction(C.onChangeYear)&&C.onChangeYear.call(J,j.currentTime,J.data("input"))}),J.getValue=function(){return j.getCurrentTime()},J.setOptions=function(n){var o={};C=e.extend(!0,{},C,n),n.allowTimes&&e.isArray(n.allowTimes)&&n.allowTimes.length&&(C.allowTimes=e.extend(!0,[],n.allowTimes)),n.weekends&&e.isArray(n.weekends)&&n.weekends.length&&(C.weekends=e.extend(!0,[],n.weekends)),n.allowDates&&e.isArray(n.allowDates)&&n.allowDates.length&&(C.allowDates=e.extend(!0,[],n.allowDates)),n.allowDateRe&&"[object String]"===Object.prototype.toString.call(n.allowDateRe)&&(C.allowDateRe=new RegExp(n.allowDateRe)),n.highlightedDates&&e.isArray(n.highlightedDates)&&n.highlightedDates.length&&(e.each(n.highlightedDates,function(a,n){var i,s=e.map(n.split(","),e.trim),d=new t(r.parseDate(s[0],C.formatDate),s[1],s[2]),u=r.formatDate(d.date,C.formatDate);void 0!==o[u]?(i=o[u].desc,i&&i.length&&d.desc&&d.desc.length&&(o[u].desc=i+"\n"+d.desc)):o[u]=d}),C.highlightedDates=e.extend(!0,[],o)),n.highlightedPeriods&&e.isArray(n.highlightedPeriods)&&n.highlightedPeriods.length&&(o=e.extend(!0,[],C.highlightedDates),
e.each(n.highlightedPeriods,function(a,n){var i,s,d,u,l,f,c;if(e.isArray(n))i=n[0],s=n[1],d=n[2],c=n[3];else{var m=e.map(n.split(","),e.trim);i=r.parseDate(m[0],C.formatDate),s=r.parseDate(m[1],C.formatDate),d=m[2],c=m[3]}for(;s>=i;)u=new t(i,d,c),l=r.formatDate(i,C.formatDate),i.setDate(i.getDate()+1),void 0!==o[l]?(f=o[l].desc,f&&f.length&&u.desc&&u.desc.length&&(o[l].desc=f+"\n"+u.desc)):o[l]=u}),C.highlightedDates=e.extend(!0,[],o)),n.disabledDates&&e.isArray(n.disabledDates)&&n.disabledDates.length&&(C.disabledDates=e.extend(!0,[],n.disabledDates)),n.disabledWeekDays&&e.isArray(n.disabledWeekDays)&&n.disabledWeekDays.length&&(C.disabledWeekDays=e.extend(!0,[],n.disabledWeekDays)),!C.open&&!C.opened||C.inline||a.trigger("open.xdsoft"),C.inline&&(q=!0,J.addClass("xdsoft_inline"),a.after(J).hide()),C.inverseButton&&(C.next="xdsoft_prev",C.prev="xdsoft_next"),C.datepicker?I.addClass("active"):I.removeClass("active"),C.timepicker?E.addClass("active"):E.removeClass("active"),C.value&&(j.setCurrentTime(C.value),a&&a.val&&a.val(j.str)),C.dayOfWeekStart=isNaN(C.dayOfWeekStart)?0:parseInt(C.dayOfWeekStart,10)%7,C.timepickerScrollbar||R.xdsoftScroller("hide"),C.minDate&&/^[\+\-](.*)$/.test(C.minDate)&&(C.minDate=r.formatDate(j.strToDateTime(C.minDate),C.formatDate)),C.maxDate&&/^[\+\-](.*)$/.test(C.maxDate)&&(C.maxDate=r.formatDate(j.strToDateTime(C.maxDate),C.formatDate)),V.toggle(C.showApplyButton),N.find(".xdsoft_today_button").css("visibility",C.todayButton?"visible":"hidden"),N.find("."+C.prev).css("visibility",C.prevButton?"visible":"hidden"),N.find("."+C.next).css("visibility",C.nextButton?"visible":"hidden"),s(C),C.validateOnBlur&&a.off("blur.xdsoft").on("blur.xdsoft",function(){if(C.allowBlank&&(!e.trim(e(this).val()).length||"string"==typeof C.mask&&e.trim(e(this).val())===C.mask.replace(/[0-9]/g,"_")))e(this).val(null),J.data("xdsoft_datetime").empty();else{var t=r.parseDate(e(this).val(),C.format);if(t)e(this).val(r.formatDate(t,C.format));else{var a=+[e(this).val()[0],e(this).val()[1]].join(""),n=+[e(this).val()[2],e(this).val()[3]].join("");e(this).val(!C.datepicker&&C.timepicker&&a>=0&&24>a&&n>=0&&60>n?[a,n].map(function(e){return e>9?e:"0"+e}).join(":"):r.formatDate(j.now(),C.format))}J.data("xdsoft_datetime").setCurrentTime(e(this).val())}J.trigger("changedatetime.xdsoft"),J.trigger("close.xdsoft")}),C.dayOfWeekStartPrev=0===C.dayOfWeekStart?6:C.dayOfWeekStart-1,J.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")},J.data("options",C).on("touchstart mousedown.xdsoft",function(e){return e.stopPropagation(),e.preventDefault(),U.hide(),G.hide(),!1}),R.append(B),R.xdsoftScroller(),J.on("afterOpen.xdsoft",function(){R.xdsoftScroller()}),J.append(I).append(E),C.withoutCopyright!==!0&&J.append(z),I.append(N).append(L).append(V),e(C.parentID).append(J),d=function(){var t=this;t.now=function(e){var a,r,n=new Date;return!e&&C.defaultDate&&(a=t.strToDateTime(C.defaultDate),n.setFullYear(a.getFullYear()),n.setMonth(a.getMonth()),n.setDate(a.getDate())),C.yearOffset&&n.setFullYear(n.getFullYear()+C.yearOffset),!e&&C.defaultTime&&(r=t.strtotime(C.defaultTime),n.setHours(r.getHours()),n.setMinutes(r.getMinutes())),n},t.isValidDate=function(e){return"[object Date]"!==Object.prototype.toString.call(e)?!1:!isNaN(e.getTime())},t.setCurrentTime=function(e,a){t.currentTime="string"==typeof e?t.strToDateTime(e):t.isValidDate(e)?e:e||a||!C.allowBlank?t.now():null,J.trigger("xchange.xdsoft")},t.empty=function(){t.currentTime=null},t.getCurrentTime=function(){return t.currentTime},t.nextMonth=function(){(void 0===t.currentTime||null===t.currentTime)&&(t.currentTime=t.now());var a,r=t.currentTime.getMonth()+1;return 12===r&&(t.currentTime.setFullYear(t.currentTime.getFullYear()+1),r=0),a=t.currentTime.getFullYear(),t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(),r+1,0).getDate(),t.currentTime.getDate())),t.currentTime.setMonth(r),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data("input")),a!==t.currentTime.getFullYear()&&e.isFunction(C.onChangeYear)&&C.onChangeYear.call(J,j.currentTime,J.data("input")),J.trigger("xchange.xdsoft"),r},t.prevMonth=function(){(void 0===t.currentTime||null===t.currentTime)&&(t.currentTime=t.now());var a=t.currentTime.getMonth()-1;return-1===a&&(t.currentTime.setFullYear(t.currentTime.getFullYear()-1),a=11),t.currentTime.setDate(Math.min(new Date(t.currentTime.getFullYear(),a+1,0).getDate(),t.currentTime.getDate())),t.currentTime.setMonth(a),C.onChangeMonth&&e.isFunction(C.onChangeMonth)&&C.onChangeMonth.call(J,j.currentTime,J.data("input")),J.trigger("xchange.xdsoft"),a},t.getWeekOfYear=function(t){if(C.onGetWeekOfYear&&e.isFunction(C.onGetWeekOfYear)){var a=C.onGetWeekOfYear.call(J,t);if("undefined"!=typeof a)return a}var r=new Date(t.getFullYear(),0,1);return 4!=r.getDay()&&r.setMonth(0,1+(4-r.getDay()+7)%7),Math.ceil(((t-r)/864e5+r.getDay()+1)/7)},t.strToDateTime=function(e){var a,n,o=[];return e&&e instanceof Date&&t.isValidDate(e)?e:(o=/^(\+|\-)(.*)$/.exec(e),o&&(o[2]=r.parseDate(o[2],C.formatDate)),o&&o[2]?(a=o[2].getTime()-6e4*o[2].getTimezoneOffset(),n=new Date(t.now(!0).getTime()+parseInt(o[1]+"1",10)*a)):n=e?r.parseDate(e,C.format):t.now(),t.isValidDate(n)||(n=t.now()),n)},t.strToDate=function(e){if(e&&e instanceof Date&&t.isValidDate(e))return e;var a=e?r.parseDate(e,C.formatDate):t.now(!0);return t.isValidDate(a)||(a=t.now(!0)),a},t.strtotime=function(e){if(e&&e instanceof Date&&t.isValidDate(e))return e;var a=e?r.parseDate(e,C.formatTime):t.now(!0);return t.isValidDate(a)||(a=t.now(!0)),a},t.str=function(){return r.formatDate(t.currentTime,C.format)},t.currentTime=this.now()},j=new d,V.on("touchend click",function(e){e.preventDefault(),J.data("changed",!0),j.setCurrentTime(i()),a.val(j.str()),J.trigger("close.xdsoft")}),N.find(".xdsoft_today_button").on("touchend mousedown.xdsoft",function(){J.data("changed",!0),j.setCurrentTime(0,!0),J.trigger("afterOpen.xdsoft")}).on("dblclick.xdsoft",function(){var e,t,r=j.getCurrentTime();r=new Date(r.getFullYear(),r.getMonth(),r.getDate()),e=j.strToDate(C.minDate),e=new Date(e.getFullYear(),e.getMonth(),e.getDate()),e>r||(t=j.strToDate(C.maxDate),t=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r>t||(a.val(j.str()),a.trigger("change"),J.trigger("close.xdsoft")))}),N.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft",function(){var t=e(this),a=0,r=!1;!function n(e){t.hasClass(C.next)?j.nextMonth():t.hasClass(C.prev)&&j.prevMonth(),C.monthChangeSpinner&&(r||(a=setTimeout(n,e||100)))}(500),e([document.body,window]).on("touchend mouseup.xdsoft",function o(){clearTimeout(a),r=!0,e([document.body,window]).off("touchend mouseup.xdsoft",o)})}),E.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft",function(){var t=e(this),a=0,r=!1,n=110;!function o(e){var i=R[0].clientHeight,s=B[0].offsetHeight,d=Math.abs(parseInt(B.css("marginTop"),10));t.hasClass(C.next)&&s-i-C.timeHeightInTimePicker>=d?B.css("marginTop","-"+(d+C.timeHeightInTimePicker)+"px"):t.hasClass(C.prev)&&d-C.timeHeightInTimePicker>=0&&B.css("marginTop","-"+(d-C.timeHeightInTimePicker)+"px"),R.trigger("scroll_element.xdsoft_scroller",[Math.abs(parseInt(B[0].style.marginTop,10)/(s-i))]),n=n>10?10:n-10,r||(a=setTimeout(o,e||n))}(500),e([document.body,window]).on("touchend mouseup.xdsoft",function i(){clearTimeout(a),r=!0,e([document.body,window]).off("touchend mouseup.xdsoft",i)})}),u=0,J.on("xchange.xdsoft",function(t){clearTimeout(u),u=setTimeout(function(){if(void 0===j.currentTime||null===j.currentTime){if(C.allowBlank)return;j.currentTime=j.now()}for(var t,i,s,d,u,l,f,c,m,h,g="",p=new Date(j.currentTime.getFullYear(),j.currentTime.getMonth(),1,12,0,0),y=0,v=j.now(),b=!1,D=!1,k=[],x=!0,T="",S="";p.getDay()!==C.dayOfWeekStart;)p.setDate(p.getDate()-1);for(g+="<table><thead><tr>",C.weeks&&(g+="<th></th>"),t=0;7>t;t+=1)g+="<th>"+C.i18n[o].dayOfWeekShort[(t+C.dayOfWeekStart)%7]+"</th>";for(g+="</tr></thead>",g+="<tbody>",C.maxDate!==!1&&(b=j.strToDate(C.maxDate),b=new Date(b.getFullYear(),b.getMonth(),b.getDate(),23,59,59,999)),C.minDate!==!1&&(D=j.strToDate(C.minDate),D=new Date(D.getFullYear(),D.getMonth(),D.getDate()));y<j.currentTime.countDaysInMonth()||p.getDay()!==C.dayOfWeekStart||j.currentTime.getMonth()===p.getMonth();)k=[],y+=1,s=p.getDay(),d=p.getDate(),u=p.getFullYear(),l=p.getMonth(),f=j.getWeekOfYear(p),h="",k.push("xdsoft_date"),c=C.beforeShowDay&&e.isFunction(C.beforeShowDay.call)?C.beforeShowDay.call(J,p):null,C.allowDateRe&&"[object RegExp]"===Object.prototype.toString.call(C.allowDateRe)?C.allowDateRe.test(r.formatDate(p,C.formatDate))||k.push("xdsoft_disabled"):C.allowDates&&C.allowDates.length>0?-1===C.allowDates.indexOf(r.formatDate(p,C.formatDate))&&k.push("xdsoft_disabled"):b!==!1&&p>b||D!==!1&&D>p||c&&c[0]===!1?k.push("xdsoft_disabled"):-1!==C.disabledDates.indexOf(r.formatDate(p,C.formatDate))?k.push("xdsoft_disabled"):-1!==C.disabledWeekDays.indexOf(s)?k.push("xdsoft_disabled"):a.is("[readonly]")&&k.push("xdsoft_disabled"),c&&""!==c[1]&&k.push(c[1]),j.currentTime.getMonth()!==l&&k.push("xdsoft_other_month"),(C.defaultSelect||J.data("changed"))&&r.formatDate(j.currentTime,C.formatDate)===r.formatDate(p,C.formatDate)&&k.push("xdsoft_current"),r.formatDate(v,C.formatDate)===r.formatDate(p,C.formatDate)&&k.push("xdsoft_today"),(0===p.getDay()||6===p.getDay()||-1!==C.weekends.indexOf(r.formatDate(p,C.formatDate)))&&k.push("xdsoft_weekend"),void 0!==C.highlightedDates[r.formatDate(p,C.formatDate)]&&(i=C.highlightedDates[r.formatDate(p,C.formatDate)],k.push(void 0===i.style?"xdsoft_highlighted_default":i.style),h=void 0===i.desc?"":i.desc),C.beforeShowDay&&e.isFunction(C.beforeShowDay)&&k.push(C.beforeShowDay(p)),x&&(g+="<tr>",x=!1,C.weeks&&(g+="<th>"+f+"</th>")),g+='<td data-date="'+d+'" data-month="'+l+'" data-year="'+u+'" class="xdsoft_date xdsoft_day_of_week'+p.getDay()+" "+k.join(" ")+'" title="'+h+'"><div>'+d+"</div></td>",p.getDay()===C.dayOfWeekStartPrev&&(g+="</tr>",x=!0),p.setDate(d+1);if(g+="</tbody></table>",L.html(g),N.find(".xdsoft_label span").eq(0).text(C.i18n[o].months[j.currentTime.getMonth()]),N.find(".xdsoft_label span").eq(1).text(j.currentTime.getFullYear()),T="",S="",l="",m=function(t,n){var o,i,s=j.now(),d=C.allowTimes&&e.isArray(C.allowTimes)&&C.allowTimes.length;s.setHours(t),t=parseInt(s.getHours(),10),s.setMinutes(n),n=parseInt(s.getMinutes(),10),o=new Date(j.currentTime),o.setHours(t),o.setMinutes(n),k=[],C.minDateTime!==!1&&C.minDateTime>o||C.maxTime!==!1&&j.strtotime(C.maxTime).getTime()<s.getTime()||C.minTime!==!1&&j.strtotime(C.minTime).getTime()>s.getTime()?k.push("xdsoft_disabled"):C.minDateTime!==!1&&C.minDateTime>o||C.disabledMinTime!==!1&&s.getTime()>j.strtotime(C.disabledMinTime).getTime()&&C.disabledMaxTime!==!1&&s.getTime()<j.strtotime(C.disabledMaxTime).getTime()?k.push("xdsoft_disabled"):a.is("[readonly]")&&k.push("xdsoft_disabled"),i=new Date(j.currentTime),i.setHours(parseInt(j.currentTime.getHours(),10)),d||i.setMinutes(Math[C.roundTime](j.currentTime.getMinutes()/C.step)*C.step),(C.initTime||C.defaultSelect||J.data("changed"))&&i.getHours()===parseInt(t,10)&&(!d&&C.step>59||i.getMinutes()===parseInt(n,10))&&(C.defaultSelect||J.data("changed")?k.push("xdsoft_current"):C.initTime&&k.push("xdsoft_init_time")),parseInt(v.getHours(),10)===parseInt(t,10)&&parseInt(v.getMinutes(),10)===parseInt(n,10)&&k.push("xdsoft_today"),T+='<div class="xdsoft_time '+k.join(" ")+'" data-hour="'+t+'" data-minute="'+n+'">'+r.formatDate(s,C.formatTime)+"</div>"},C.allowTimes&&e.isArray(C.allowTimes)&&C.allowTimes.length)for(y=0;y<C.allowTimes.length;y+=1)S=j.strtotime(C.allowTimes[y]).getHours(),l=j.strtotime(C.allowTimes[y]).getMinutes(),m(S,l);else for(y=0,t=0;y<(C.hours12?12:24);y+=1)for(t=0;60>t;t+=C.step)S=(10>y?"0":"")+y,l=(10>t?"0":"")+t,m(S,l);for(B.html(T),n="",y=0,y=parseInt(C.yearStart,10)+C.yearOffset;y<=parseInt(C.yearEnd,10)+C.yearOffset;y+=1)n+='<div class="xdsoft_option '+(j.currentTime.getFullYear()===y?"xdsoft_current":"")+'" data-value="'+y+'">'+y+"</div>";for(U.children().eq(0).html(n),y=parseInt(C.monthStart,10),n="";y<=parseInt(C.monthEnd,10);y+=1)n+='<div class="xdsoft_option '+(j.currentTime.getMonth()===y?"xdsoft_current":"")+'" data-value="'+y+'">'+C.i18n[o].months[y]+"</div>";G.children().eq(0).html(n),e(J).trigger("generate.xdsoft")},10),t.stopPropagation()}).on("afterOpen.xdsoft",function(){if(C.timepicker){var e,t,a,r;B.find(".xdsoft_current").length?e=".xdsoft_current":B.find(".xdsoft_init_time").length&&(e=".xdsoft_init_time"),e?(t=R[0].clientHeight,a=B[0].offsetHeight,r=B.find(e).index()*C.timeHeightInTimePicker+1,r>a-t&&(r=a-t),R.trigger("scroll_element.xdsoft_scroller",[parseInt(r,10)/(a-t)])):R.trigger("scroll_element.xdsoft_scroller",[0])}}),P=0,L.on("touchend click.xdsoft","td",function(t){t.stopPropagation(),P+=1;var r=e(this),n=j.currentTime;return(void 0===n||null===n)&&(j.currentTime=j.now(),n=j.currentTime),r.hasClass("xdsoft_disabled")?!1:(n.setDate(1),n.setFullYear(r.data("year")),n.setMonth(r.data("month")),n.setDate(r.data("date")),J.trigger("select.xdsoft",[n]),a.val(j.str()),C.onSelectDate&&e.isFunction(C.onSelectDate)&&C.onSelectDate.call(J,j.currentTime,J.data("input"),t),J.data("changed",!0),J.trigger("xchange.xdsoft"),J.trigger("changedatetime.xdsoft"),(P>1||C.closeOnDateSelect===!0||C.closeOnDateSelect===!1&&!C.timepicker)&&!C.inline&&J.trigger("close.xdsoft"),void setTimeout(function(){P=0},200))}),B.on("touchend click.xdsoft","div",function(t){t.stopPropagation();var a=e(this),r=j.currentTime;return(void 0===r||null===r)&&(j.currentTime=j.now(),r=j.currentTime),a.hasClass("xdsoft_disabled")?!1:(r.setHours(a.data("hour")),r.setMinutes(a.data("minute")),J.trigger("select.xdsoft",[r]),J.data("input").val(j.str()),C.onSelectTime&&e.isFunction(C.onSelectTime)&&C.onSelectTime.call(J,j.currentTime,J.data("input"),t),J.data("changed",!0),J.trigger("xchange.xdsoft"),J.trigger("changedatetime.xdsoft"),void(C.inline!==!0&&C.closeOnTimeSelect===!0&&J.trigger("close.xdsoft")))}),I.on("mousewheel.xdsoft",function(e){return C.scrollMonth?(e.deltaY<0?j.nextMonth():j.prevMonth(),!1):!0}),a.on("mousewheel.xdsoft",function(e){return C.scrollInput?!C.datepicker&&C.timepicker?(A=B.find(".xdsoft_current").length?B.find(".xdsoft_current").eq(0).index():0,A+e.deltaY>=0&&A+e.deltaY<B.children().length&&(A+=e.deltaY),B.children().eq(A).length&&B.children().eq(A).trigger("mousedown"),!1):C.datepicker&&!C.timepicker?(I.trigger(e,[e.deltaY,e.deltaX,e.deltaY]),a.val&&a.val(j.str()),J.trigger("changedatetime.xdsoft"),!1):void 0:!0}),J.on("changedatetime.xdsoft",function(t){if(C.onChangeDateTime&&e.isFunction(C.onChangeDateTime)){var a=J.data("input");C.onChangeDateTime.call(J,j.currentTime,a,t),delete C.value,a.trigger("change")}}).on("generate.xdsoft",function(){C.onGenerate&&e.isFunction(C.onGenerate)&&C.onGenerate.call(J,j.currentTime,J.data("input")),q&&(J.trigger("afterOpen.xdsoft"),q=!1)}).on("click.xdsoft",function(e){e.stopPropagation()}),A=0,H=function(e,t){do if(e=e.parentNode,t(e)===!1)break;while("HTML"!==e.nodeName)},Y=function(){var t,a,r,n,o,i,s,d,u,l,f,c,m;if(d=J.data("input"),t=d.offset(),a=d[0],l="top",r=t.top+a.offsetHeight-1,n=t.left,o="absolute",u=e(window).width(),c=e(window).height(),m=e(window).scrollTop(),document.documentElement.clientWidth-t.left<I.parent().outerWidth(!0)){var h=I.parent().outerWidth(!0)-a.offsetWidth;n-=h}"rtl"===d.parent().css("direction")&&(n-=J.outerWidth()-d.outerWidth()),C.fixed?(r-=m,n-=e(window).scrollLeft(),o="fixed"):(s=!1,H(a,function(e){return"fixed"===window.getComputedStyle(e).getPropertyValue("position")?(s=!0,!1):void 0}),s?(o="fixed",r+J.outerHeight()>c+m?(l="bottom",r=c+m-t.top):r-=m):r+a.offsetHeight>c+m&&(r=t.top-a.offsetHeight+1),0>r&&(r=0),n+a.offsetWidth>u&&(n=u-a.offsetWidth)),i=J[0],H(i,function(e){var t;return t=window.getComputedStyle(e).getPropertyValue("position"),"relative"===t&&u>=e.offsetWidth?(n-=(u-e.offsetWidth)/2,!1):void 0}),f={position:o,left:n,top:"",bottom:""},f[l]=r,J.css(f)},J.on("open.xdsoft",function(t){var a=!0;C.onShow&&e.isFunction(C.onShow)&&(a=C.onShow.call(J,j.currentTime,J.data("input"),t)),a!==!1&&(J.show(),Y(),e(window).off("resize.xdsoft",Y).on("resize.xdsoft",Y),C.closeOnWithoutClick&&e([document.body,window]).on("touchstart mousedown.xdsoft",function r(){J.trigger("close.xdsoft"),e([document.body,window]).off("touchstart mousedown.xdsoft",r)}))}).on("close.xdsoft",function(t){var a=!0;N.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(),C.onClose&&e.isFunction(C.onClose)&&(a=C.onClose.call(J,j.currentTime,J.data("input"),t)),a===!1||C.opened||C.inline||J.hide(),t.stopPropagation()}).on("toggle.xdsoft",function(){J.trigger(J.is(":visible")?"close.xdsoft":"open.xdsoft")}).data("input",a),X=0,J.data("xdsoft_datetime",j),J.setOptions(C),j.setCurrentTime(i()),a.data("xdsoft_datetimepicker",J).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart",function(){a.is(":disabled")||a.data("xdsoft_datetimepicker").is(":visible")&&C.closeOnInputClick||(clearTimeout(X),X=setTimeout(function(){a.is(":disabled")||(q=!0,j.setCurrentTime(i(),!0),C.mask&&s(C),J.trigger("open.xdsoft"))},100))}).on("keydown.xdsoft",function(t){var a,r=t.which;return-1!==[p].indexOf(r)&&C.enterLikeTab?(a=e("input:visible,textarea:visible,button:visible,a:visible"),J.trigger("close.xdsoft"),a.eq(a.index(this)+1).focus(),!1):-1!==[T].indexOf(r)?(J.trigger("close.xdsoft"),!0):void 0}).on("blur.xdsoft",function(){J.trigger("close.xdsoft")})},d=function(t){var a=t.data("xdsoft_datetimepicker");a&&(a.data("xdsoft_datetime",null),a.remove(),t.data("xdsoft_datetimepicker",null).off(".xdsoft"),e(window).off("resize.xdsoft"),e([window,document.body]).off("mousedown.xdsoft touchstart"),t.unmousewheel&&t.unmousewheel())},e(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl",function(e){e.keyCode===h&&(F=!0)}).on("keyup.xdsoftctrl",function(e){e.keyCode===h&&(F=!1)}),this.each(function(){var t,a=e(this).data("xdsoft_datetimepicker");if(a){if("string"===e.type(n))switch(n){case"show":e(this).select().focus(),a.trigger("open.xdsoft");break;case"hide":a.trigger("close.xdsoft");break;case"toggle":a.trigger("toggle.xdsoft");break;case"destroy":d(e(this));break;case"reset":this.value=this.defaultValue,this.value&&a.data("xdsoft_datetime").isValidDate(r.parseDate(this.value,C.format))||a.data("changed",!1),a.data("xdsoft_datetime").setCurrentTime(this.value);break;case"validate":t=a.data("input"),t.trigger("blur.xdsoft");break;default:a[n]&&e.isFunction(a[n])&&(u=a[n](i))}else a.setOptions(n);return 0}"string"!==e.type(n)&&(!C.lazyInit||C.open||C.inline?s(e(this)):A(e(this)))}),u},e.fn.datetimepicker.defaults=a}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e:e(jQuery)}(function(e){function t(t){var i=t||window.event,s=d.call(arguments,1),u=0,f=0,c=0,m=0,h=0,g=0;if(t=e.event.fix(i),t.type="mousewheel","detail"in i&&(c=-1*i.detail),"wheelDelta"in i&&(c=i.wheelDelta),"wheelDeltaY"in i&&(c=i.wheelDeltaY),"wheelDeltaX"in i&&(f=-1*i.wheelDeltaX),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(f=-1*c,c=0),u=0===c?f:c,"deltaY"in i&&(c=-1*i.deltaY,u=c),"deltaX"in i&&(f=i.deltaX,0===c&&(u=-1*f)),0!==c||0!==f){if(1===i.deltaMode){var p=e.data(this,"mousewheel-line-height");u*=p,c*=p,f*=p}else if(2===i.deltaMode){var y=e.data(this,"mousewheel-page-height");u*=y,c*=y,f*=y}if(m=Math.max(Math.abs(c),Math.abs(f)),(!o||o>m)&&(o=m,r(i,m)&&(o/=40)),r(i,m)&&(u/=40,f/=40,c/=40),u=Math[u>=1?"floor":"ceil"](u/o),f=Math[f>=1?"floor":"ceil"](f/o),c=Math[c>=1?"floor":"ceil"](c/o),l.settings.normalizeOffset&&this.getBoundingClientRect){var v=this.getBoundingClientRect();h=t.clientX-v.left,g=t.clientY-v.top}return t.deltaX=f,t.deltaY=c,t.deltaFactor=o,t.offsetX=h,t.offsetY=g,t.deltaMode=0,s.unshift(t,u,f,c),n&&clearTimeout(n),n=setTimeout(a,200),(e.event.dispatch||e.event.handle).apply(this,s)}}function a(){o=null}function r(e,t){return l.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}var n,o,i=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],s="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],d=Array.prototype.slice;if(e.event.fixHooks)for(var u=i.length;u;)e.event.fixHooks[i[--u]]=e.event.mouseHooks;var l=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var a=s.length;a;)this.addEventListener(s[--a],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",l.getLineHeight(this)),e.data(this,"mousewheel-page-height",l.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var a=s.length;a;)this.removeEventListener(s[--a],t,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var a=e(t),r=a["offsetParent"in e.fn?"offsetParent":"parent"]();return r.length||(r=e("body")),parseInt(r.css("fontSize"),10)||parseInt(a.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})});
var jobFilterAjax;
function jobsearch_job_content_load(counter, view_type, animate_to){
counter=counter||'';
animate_to=animate_to||'';
var view_type=view_type||'';
var job_arg=jQuery("#job_arg" + counter).html();
var this_frm=jQuery("#jobsearch_job_frm_" + counter);
var split_map=jQuery(".wp-dp-split-map-wrap").size();
if(split_map > 0){
view_type='split_map';
}
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
var current_page_id=jQuery("#current_page_id").val();
var loader_con=jQuery("#jobsearch-loader-" + counter);
if(jQuery("#jobsearch_job_frm_" + counter).length > 0){
var data_vals=jQuery(jQuery("#jobsearch_job_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
if(jQuery('form[name="jobsearch-top-map-form"]').length > 0){
data_vals +="&" + jQuery('form[name="jobsearch-top-map-form"]').serialize();
}
data_vals=data_vals.replace(/[^&]+=\.?(?:&|$)/g, '');
data_vals=data_vals.replace('undefined', '');
data_vals=data_vals + '&ajax_filter=true';
data_vals=stripUrlParams(data_vals);
jQuery('#Job-content-' + counter + ' .job').addClass('slide-loader');
jQuery('#jobsearch-data-job-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (jobFilterAjax)!='undefined'){
jobFilterAjax.abort();
}
loader_con.html('<div class="jobsearch-listing-loader"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>');
var jobFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_jobs_content&view_type=' + view_type + '&job_arg=' + job_arg,
success: function (response){
jQuery('body').removeClass('wp-dp-changing-view');
jQuery('#Job-content-' + counter).html(response);
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
current_url=current_url.replace('&=undefined', '');
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".job-medium .img-holder img, .job-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
jQuery(this).load();
});
if(jQuery(".job-medium.modern").length > 0){
var imageUrlFind=jQuery(".job-medium.modern .img-holder").css("background-image").match(/url\(["']?([^()]*)["']?\)/).pop();
if(imageUrlFind){
jQuery(".job-medium.modern .img-holder").addClass("image-loaded");
}}
jQuery('.wp-dp-job-content').find('.selectize-select').selectize({
});
jQuery('.wp-dp-job-content').find('.sort-records-per-page').selectize({
allowEmptyOption: true,
});
loader_con.html('');
}});
}}
function jobsearch_job_content_load_without_filters(counter, page_var, page_num, ajax_filter, view_type){
"use strict";
counter=counter||'';
var job_arg=jQuery("#job_arg" + counter).html();
var data_vals=page_var + '=' + page_num;
jQuery('#jobsearch-data-job-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (jobFilterAjax)!='undefined'){
jobFilterAjax.abort();
}
jobFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_jobs_content&view_type=' + view_type + '&job_arg=' + job_arg,
success: function (response){
jQuery('#Job-content-' + counter).html(response);
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery('#jobsearch-data-job-content-' + counter + ' .all-results').removeClass('slide-loader');
}});
}
function stripUrlParams(args){
"use strict";
var parts=args.split("&");
var comps={};
for (var i=parts.length - 1; i >=0; i--){
var spl=parts[i].split("=");
if(typeof comps[ spl[0] ]=="undefined"||(typeof comps[ spl[0] ]!="undefined"&&comps[ spl[0] ]=='')){
comps[ spl[0] ]=spl[1];
}}
parts=[];
for (var a in comps){
parts.push(a + "=" + comps[a]);
}
return parts.join('&');
}
function jobsearch_job_filters_content(counter, page_var, page_num, tab){
"use strict";
counter=counter||'';
var job_arg=jQuery("#job_arg" + counter).html();
var this_frm=jQuery("#jobsearch_job_frm_" + counter);
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
var data_vals='tab=' + tab + '&' + page_var + '=' + page_num + '&ajax_filter=true';
jQuery('#jobsearch-data-job-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (jobFilterAjax)!='undefined'){
jobFilterAjax.abort();
}
jobFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_jobs_filters_content&job_arg=' + job_arg,
success: function (response){
console.log(response);
jQuery('#job-tab-content-' + counter).html(response);
jQuery("#job-tab-content-" + counter + ' .row').mixItUp({
selectors: {
target: ".portfolio",
}});
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".chosen-select").chosen();
jQuery('#jobsearch-data-job-content-' + counter + ' .all-results').removeClass('slide-loader');
jQuery(".job-medium .img-holder img, .job-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
$(this).load();
});
}});
}
function jobsearch_job_by_categories_filters_content(counter, page_var, page_num, tab){
"use strict";
counter=counter||'';
var job_arg=jQuery("#job_arg" + counter).html();
var this_frm=jQuery("#jobsearch_job_frm_" + counter);
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
var data_vals='tab=' + tab + '&' + page_var + '=' + page_num + '&ajax_filter=true';
jQuery('#jobsearch-data-job-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (jobFilterAjax)!='undefined'){
jobFilterAjax.abort();
}
jobFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_job_by_categories_filters_content&job_arg=' + job_arg,
success: function (response){
jQuery('#job-tab-content-' + counter).html(response);
jQuery("#job-tab-content-" + counter + ' .row').mixItUp({
selectors: {
target: ".portfolio",
}});
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".chosen-select").chosen();
jQuery('#jobsearch-data-job-content-' + counter + ' .all-results').removeClass('slide-loader');
jQuery(".job-medium .img-holder img, .job-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
$(this).load();
});
}});
}
function convertHTML(html){
"use strict";
var newHtml=$.trim(html),
$html=$(newHtml),
$empty=$();
$html.each(function (index, value){
if(value.nodeType===1){
$empty=$empty.add(this);
}});
return $empty;
}
function jobsearch_job_type_search_fields(thisObj, counter, price_switch, view_type){
var view_type=view_type||'';
"use strict";
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_job_type_search_fields&job_short_counter=' + counter + '&job_type_slug=' + thisObj.value + '&price_switch=' + price_switch + '&view_type=' + view_type,
success: function (response){
jQuery('#job_type_fields_' + counter).html('');
jQuery('#job_type_fields_' + counter).html(response.html);
}});
var checkID=thisObj.getAttribute('id');
var cat_name=$('#' + checkID).next('label').html();
$('.map-search-keyword-type-holder .dropdown-types-btn').html(cat_name);
var dropdownHolder=$('.map-search-keyword-type-holder');
var dropdownCon=dropdownHolder.find('ul.dropdown-types');
dropdownCon.slideUp();
}
function jobsearch_job_type_cate_fields(thisObj, counter, cats_switch, view, color){
"use strict";
if(typeof view==='undefined'){
view='default';
}
if(typeof color==='undefined'){
color='none';
}
var cate_loader='<b class="spinner-label">' + jobsearch_job_functions_string.job_type + '</b><span class="cate-spinning"><i class="fancy-spinner"></i></span>';
jQuery('#job_type_cate_fields_' + counter).html(cate_loader);
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_job_type_cate_fields&job_short_counter=' + counter + '&job_type_slug=' + thisObj.value + '&view=' + view + '&color=' + color + '&cats_switch=' + cats_switch,
success: function (response){
jQuery('#job_type_cate_fields_' + counter).html('');
jQuery('#job_type_cate_fields_' + counter).html(response.html);
}});
}
function jobsearch_job_type_split_map_search_fields(thisObj, counter){
var view_type=view_type||'';
"use strict";
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_job_type_split_map_search_fields&job_short_counter=' + counter + '&job_type_slug=' + thisObj.value,
success: function (response){
jQuery('#job_type_fields_' + counter).html('');
jQuery('#job_type_fields_' + counter).html(response.html);
}}).done(function (){
jobsearch_job_type_split_map_cate_fields(thisObj.value, counter);
});
var checkID=thisObj.getAttribute('id');
var cat_name=$('#' + checkID).next('label').html();
$('.map-search-keyword-type-holder .dropdown-types-btn').html(cat_name);
var dropdownHolder=$('.map-search-keyword-type-holder');
var dropdownCon=dropdownHolder.find('ul.dropdown-types');
dropdownCon.slideUp();
}
function jobsearch_job_type_split_map_cate_fields(thisObj, counter, cats_switch, view, color){
"use strict";
if(typeof view==='undefined'){
view='default';
}
if(typeof color==='undefined'){
color='none';
}
var cate_loader='<b class="spinner-label">' + jobsearch_job_functions_string.job_type + '</b><span class="cate-spinning"><i class="fancy-spinner"></i></span>';
jQuery('#job_type_cate_fields_' + counter).html(cate_loader);
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_job_type_split_map_cate_fields&job_short_counter=' + counter + '&job_type_slug=' + thisObj.value + '&view=' + view + '&color=' + color,
success: function (response){
jQuery('#job_type_cate_fields_' + counter).html('');
jQuery('#job_type_cate_fields_' + counter).html(response.html);
}}).done(function (){
jobsearch_split_map_change_cords(counter);
});
}
function jobsearch_split_map_change_cords(counter, hide_overlay){
"use strict";
var hide_overlay=hide_overlay||'';
if(hide_overlay==='true'){
}
var top_map=jQuery('.wp-dp-ontop-gmap');
var loader_div=jQuery('.wp-dp-splitmap-advance-filter_' + counter);
var loader_html='<div class="split-map-loader"><span><i class="fancy-spinner"></i></span></div>';
if(loader_div.length!==0){
loader_div.html(loader_html);
}
if(top_map.length!==0){
var ajax_url=jobsearch_plugin_vars.ajax_url;
var data_vals='ajax_filter=true&map=top_map&action=jobsearch_top_map_search&' + jQuery(jQuery("#jobsearch_job_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
if(jQuery('form[name="wp-dp-top-map-form"]').length > 0){
data_vals +="&" + jQuery('form[name="wp-dp-top-map-form"]').serialize() + '&atts=' + jQuery('#atts').html();
}
data_vals=stripUrlParams(data_vals);
var loading_top_map=$.ajax({
url: ajax_url,
method: "POST",
data: data_vals,
dataType: "json"
}).done(function (response){
if(typeof response.html!=='undefined'){
jQuery('.top-map-action-scr').html(response.html);
}
jobsearch_job_split_map_content(counter, '', '', hide_overlay);
}).fail(function (){
});
}}
function removeURLParameter(url, parameter){
var urlparts=url.split('?');
if(urlparts.length >=2){
var prefix=encodeURIComponent(parameter) + '=';
var pars=urlparts[1].split(/[&;]/g);
for (var i=pars.length; i-- > 0;){
if(pars[i].lastIndexOf(prefix, 0)!==-1){
pars.splice(i, 1);
}}
url=urlparts[0] + '?' + pars.join('&');
return url;
}else{
return url;
}}
function jobsearch_job_split_map_content(counter, view_type, animate_to, hide_overlay){
counter=counter||'';
var hide_overlay=hide_overlay||'';
animate_to=animate_to||'';
var view_type=view_type||'';
var loader_div=jQuery('.wp-dp-splitmap-advance-filter_' + counter);
var loader_html='<div class="split-map-loader"><span><i class="fancy-spinner"></i></span></div>';
if(animate_to!='false'){
jQuery('html, body').animate({
scrollTop: jQuery("#wp-dp-job-content-" + counter).offset().top - 120
}, 700);
}
var job_arg=jQuery("#job_arg" + counter).html();
var this_frm=jQuery("#jobsearch_job_frm_" + counter);
var split_map=jQuery(".wp-dp-split-map-wrap").size();
if(split_map > 0){
view_type='split_map';
}
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
if(jQuery("#jobsearch_job_frm_" + counter).length > 0){
var data_vals=jQuery(jQuery("#jobsearch_job_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
var data_vals='ajax_filter=true&map=top_map&action=jobsearch_top_map_search&' + jQuery(jQuery("#jobsearch_job_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
if(jQuery('form[name="wp-dp-top-map-form"]').length > 0){
data_vals +="&" + jQuery('form[name="wp-dp-top-map-form"]').serialize();
}
data_vals=data_vals.replace(/[^&]+=\.?(?:&|$)/g, '');
data_vals=data_vals.replace('undefined', '');
data_vals=data_vals + '&ajax_filter=true';
data_vals=stripUrlParams(data_vals);
if(!jQuery('body').hasClass('wp-dp-changing-view')){
}
if(hide_overlay==='true'){
data_vals=removeURLParameter(data_vals, 'adv_filter_toggle');
data_vals=data_vals.replace('adv_filter_toggle=true', 'adv_filter_toggle=false');
}
jQuery('#Job-content-' + counter + ' .job').addClass('slide-loader');
jQuery('#jobsearch-data-job-content-' + counter + ' .all-results').addClass('slide-loader');
console.log(data_vals);
var jobFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_jobs_content&view_type=' + view_type + '&job_arg=' + job_arg,
success: function (response){
jQuery('body').removeClass('wp-dp-changing-view');
jQuery('#Job-content-' + counter).html(response);
if(hide_overlay==='false'&&hide_overlay!==''){
jQuery('#wp-jobsearch-job-' + counter).hide();
jQuery('.no-job-match-error').hide();
jQuery('.page-nation').hide();
}
if(hide_overlay==='true'&&hide_overlay!==''){
jQuery("div.split-map-overlay").remove();
}
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
current_url=current_url.replace('&=undefined', '');
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".chosen-select").chosen();
jQuery('#jobsearch-data-job-content-' + counter + ' .all-results').removeClass('slide-loader');
jobsearch_hide_loader();
jQuery(".job-medium .img-holder img, .job-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
jQuery(this).load();
});
if(jQuery(".job-medium.modern").length > 0){
var imageUrlFind=jQuery(".job-medium.modern .img-holder").css("background-image").match(/url\(["']?([^()]*)["']?\)/).pop();
if(imageUrlFind){
jQuery(".job-medium.modern .img-holder").addClass("image-loaded");
}}
if(loader_div.length!==0){
loader_div.html('');
}}
});
}}
function jobsearch_empty_loc_polygon(counter){
if(jQuery("#jobsearch_job_frm_" + counter + " input[name=loc_polygon_path]").length){
jQuery("#jobsearch_job_frm_" + counter + " input[name=loc_polygon_path]").val('');
}}
function jobsearch_job_view_switch(view, counter, job_short_counter, view_type){
"use strict";
var view_type=view_type||'';
jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_job_view_switch&view=' + view + '&job_short_counter=' + job_short_counter,
success: function (){
jQuery('[data-toggle="popover"]').popover();
jQuery('body').addClass('wp-dp-changing-view');
jobsearch_job_content(counter, view_type);
}});
}
function jobsearch_job_pagenation_ajax(page_var, page_num, counter, ajax_filter, view_type){
"use strict";
var view_type=view_type||'';
jQuery('html, body').animate({
scrollTop: jQuery("#wp-dp-job-content-" + counter).offset().top - 120
}, 1000);
jQuery('#' + page_var + '-' + counter).val(page_num);
jobsearch_job_content_load(counter, view_type);
}
function jobsearch_job_filters_pagenation_ajax(page_var, page_num, counter, tab){
"use strict";
jQuery('#' + page_var + '-' + counter).val(page_num);
jobsearch_job_filters_content(counter, page_var, page_num, tab);
}
function jobsearch_job_by_category_filters_pagenation_ajax(page_var, page_num, counter, tab){
"use strict";
jQuery('#' + page_var + '-' + counter).val(page_num);
jobsearch_job_by_categories_filters_content(counter, page_var, page_num, tab);
}
function jobsearch_advanced_search_field(counter, tab, element){
"use strict";
if(tab=='simple'){
jQuery('#job_type_fields_' + counter).slideUp();
jQuery('#nav-tabs-' + counter + ' li').removeClass('active');
jQuery(element).parent().addClass('active');
}else if(tab=='advance'){
jQuery('#job_type_fields_' + counter).slideDown();
jQuery('#nav-tabs-' + counter + ' li').removeClass('active');
jQuery(element).parent().addClass('active');
}else{
jQuery('#job_type_fields_' + counter).slideToggle();
if(jQuery(".main-search.split-map .field-holder.more-filters-btn").length > 0){
jQuery('.main-search.split-map .field-holder.more-filters-btn').toggleClass('open');
if(jQuery('.main-search.split-map .field-holder.more-filters-btn').hasClass('open')){
var NewContent='<div class="split-map-overlay"></div>';
jQuery(".wp-dp-top-map-holder").after(NewContent);
jQuery('#wp-jobsearch-job-' + counter).hide();
jQuery('.page-nation').hide();
jQuery('.no-job-match-error').hide();
}else{
jQuery("div.split-map-overlay").remove();
jQuery('#wp-jobsearch-job-' + counter).show();
jQuery('.page-nation').show();
jQuery('.no-job-match-error').show();
}}
}}
if(jQuery(".main-search.split-map .field-holder.more-filters-btn").length > 0){
function jobsearch_split_map_close_search(counter){
jQuery(".main-search.split-map .field-holder.more-filters-btn").toggleClass('open');
jQuery("div.split-map-overlay").remove();
jQuery('#job_type_fields_' + counter).toggle('slow');
jQuery('#wp-jobsearch-job-' + counter).show();
jQuery('.page-nation').show();
jQuery('.no-job-match-error').show();
}}
function jobsearch_search_features(element, counter){
"use strict";
jQuery('#job_type_fields_' + counter + ' .features-field-expand').slideToggle();
var expand_class=jQuery('#job_type_fields_' + counter + ' .features-list .advance-trigger').find('i').attr('class');
if(expand_class=='icon-plus'){
console.log(expand_class);
jQuery('#job_type_fields_' + counter + ' .features-list .advance-trigger').find('i').removeClass(expand_class).addClass('icon-minus')
}else{
jQuery('#job_type_fields_' + counter + ' .features-list .advance-trigger').find('i').removeClass(expand_class).addClass('icon-plus')
}}
jQuery(document).on('click', '.dev-job-list-enquiry-own-job', function (e){
e.stopImmediatePropagation();
var msg_obj={msg: jobsearch_plugin_vars.own_job_error, type: 'error'};
jobsearch_show_response(msg_obj);
});
jQuery(document).ready(function (){
if(jQuery('#enquires-sidebar-panel').length > 0){
enquiry_sidebar_arrow();
}});
if(jQuery('.jobsearch-advance-search-holdr').length > 0){
var top_srch_holder=jQuery('.jobsearch-advance-search-holdr');
var srch_form_id=top_srch_holder.parent('form').attr('id');
jQuery(document).on('submit', 'form#' + srch_form_id, function (){
top_srch_holder.find('.adv-search-options').find('input, select').each(function (){
var this_form_itm=$(this);
if(typeof this_form_itm.attr('name')!=='undefined'&&typeof this_form_itm.attr('type')!=='undefined'&&(this_form_itm.attr('type')=='checkbox'||this_form_itm.attr('type')=='radio')){
if(this_form_itm.is(':checked')){
jQuery('form#' + srch_form_id).append('<input type="hidden" name="' + this_form_itm.attr('name') + '" value="' + this_form_itm.val() + '">');
}}else if(typeof this_form_itm.attr('name')!=='undefined'&&typeof this_form_itm.attr('type')==='undefined'){
jQuery('form#' + srch_form_id).append('<input type="hidden" name="' + this_form_itm.attr('name') + '" value="' + this_form_itm.val() + '">');
}});
});
}
jQuery(document).on('click', '.adv-srch-toggle-btn', function (){
$(this).parents('.jobsearch-advance-search-holdr').find('.adv-search-options').slideToggle();
});
function enquiry_sidebar_arrow(){
jQuery('.fixed-sidebar-panel.left .sidebar-panel-btn').click(function (e){
e.preventDefault();
if(jQuery('#enquires-sidebar-panel').hasClass('sidebar-panel-open')){
jQuery('#enquires-sidebar-panel').removeClass('sidebar-panel-open');
}else{
jQuery('#enquires-sidebar-panel').addClass('sidebar-panel-open');
}});
jQuery('#enquires-sidebar-panel .sidebar-panel-title .sidebar-panel-btn-close').click(function (e){
jQuery('#enquires-sidebar-panel').removeClass('sidebar-panel-open');
});
}
jQuery(document).on('click', '.send-message-submit-btn', function (){
var thisObj=jQuery(this);
var rand_id=thisObj.data('randid');
var action=thisObj.data('action');
var form_id=jQuery("#jobsearch_send_message_form" + rand_id);
var meessage_box=jQuery(".message-box-" + rand_id);
var serializeForm=form_id.serialize();
var get_terr_val=jobsearch_accept_terms_cond_pop(form_id);
if(get_terr_val!='yes'){
return false;
}
thisObj.attr("disabled", true);
meessage_box.html('<div class="split-map-loader"><span><i class="fa fa-spinn fa fa-spinner"></i></span></div>');
jQuery.ajax({
type: 'POST',
dataType: 'JSON',
url: jobsearch_plugin_vars.ajax_url,
data: 'action=' + action + '&' + serializeForm,
success: function (response){
meessage_box.html(response.html);
form_id[0].reset();
}});
thisObj.removeAttr("disabled");
return false;
});
var employerFilterAjax;
function jobsearch_employer_content_load(counter, view_type, animate_to){
counter=counter||'';
animate_to=animate_to||'';
var view_type=view_type||'';
var employer_arg=jQuery("#employer_arg" + counter).html();
var this_frm=jQuery("#jobsearch_employer_frm_" + counter);
var split_map=jQuery(".wp-dp-split-map-wrap").size();
if(split_map > 0){
view_type='split_map';
}
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
var current_page_id=jQuery("#current_page_id").val();
var loader_con=jQuery("#jobsearch-loader-" + counter);
if(jQuery("#jobsearch_employer_frm_" + counter).length > 0){
var data_vals=jQuery(jQuery("#jobsearch_employer_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
if(jQuery('form[name="jobsearch-top-map-form"]').length > 0){
data_vals +="&" + jQuery('form[name="jobsearch-top-map-form"]').serialize();
}
data_vals=data_vals.replace(/[^&]+=\.?(?:&|$)/g, '');
data_vals=data_vals.replace('undefined', '');
data_vals=data_vals + '&ajax_filter=true';
data_vals=stripUrlParams(data_vals);
jQuery('#Employer-content-' + counter + ' .employer').addClass('slide-loader');
jQuery('#jobsearch-data-employer-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (employerFilterAjax)!='undefined'){
employerFilterAjax.abort();
}
loader_con.html('<div class="jobsearch-listing-loader"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>');
var employerFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_employers_content&view_type=' + view_type + '&employer_arg=' + employer_arg + '&page_id=' + current_page_id,
success: function (response){
jQuery('body').removeClass('wp-dp-changing-view');
jQuery('#Employer-content-' + counter).html(response);
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
current_url=current_url.replace('&=undefined', '');
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".employer-medium .img-holder img, .employer-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
jQuery(this).load();
});
if(jQuery(".employer-medium.modern").length > 0){
var imageUrlFind=jQuery(".employer-medium.modern .img-holder").css("background-image").match(/url\(["']?([^()]*)["']?\)/).pop();
if(imageUrlFind){
jQuery(".employer-medium.modern .img-holder").addClass("image-loaded");
}}
jQuery('.wp-dp-employer-content').find('.selectize-select').selectize({
});
jQuery('.wp-dp-employer-content').find('.sort-records-per-page').selectize({
allowEmptyOption: true,
});
loader_con.html('');
}});
}}
function jobsearch_employer_content_load_without_filters(counter, page_var, page_num, ajax_filter, view_type){
"use strict";
counter=counter||'';
var employer_arg=jQuery("#employer_arg" + counter).html();
var data_vals=page_var + '=' + page_num;
jQuery('#jobsearch-data-employer-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (employerFilterAjax)!='undefined'){
employerFilterAjax.abort();
}
employerFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_employers_content&view_type=' + view_type + '&employer_arg=' + employer_arg,
success: function (response){
jQuery('#Employer-content-' + counter).html(response);
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery('#jobsearch-data-employer-content-' + counter + ' .all-results').removeClass('slide-loader');
}});
}
function stripUrlParams(args){
"use strict";
var parts=args.split("&");
var comps={};
for (var i=parts.length - 1; i >=0; i--){
var spl=parts[i].split("=");
if(typeof comps[ spl[0] ]=="undefined"||(typeof comps[ spl[0] ]!="undefined"&&comps[ spl[0] ]=='')){
comps[ spl[0] ]=spl[1];
}}
parts=[];
for (var a in comps){
parts.push(a + "=" + comps[a]);
}
return parts.join('&');
}
function jobsearch_employer_filters_content(counter, page_var, page_num, tab){
"use strict";
counter=counter||'';
var employer_arg=jQuery("#employer_arg" + counter).html();
var this_frm=jQuery("#jobsearch_employer_frm_" + counter);
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
var data_vals='tab=' + tab + '&' + page_var + '=' + page_num + '&ajax_filter=true';
jQuery('#jobsearch-data-employer-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (employerFilterAjax)!='undefined'){
employerFilterAjax.abort();
}
employerFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_employers_filters_content&employer_arg=' + employer_arg,
success: function (response){
console.log(response);
jQuery('#employer-tab-content-' + counter).html(response);
jQuery("#employer-tab-content-" + counter + ' .row').mixItUp({
selectors: {
target: ".portfolio",
}});
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".chosen-select").chosen();
jQuery('#jobsearch-data-employer-content-' + counter + ' .all-results').removeClass('slide-loader');
jQuery(".employer-medium .img-holder img, .employer-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
$(this).load();
});
}});
}
function jobsearch_employer_by_categories_filters_content(counter, page_var, page_num, tab){
"use strict";
counter=counter||'';
var employer_arg=jQuery("#employer_arg" + counter).html();
var this_frm=jQuery("#jobsearch_employer_frm_" + counter);
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
var data_vals='tab=' + tab + '&' + page_var + '=' + page_num + '&ajax_filter=true';
jQuery('#jobsearch-data-employer-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (employerFilterAjax)!='undefined'){
employerFilterAjax.abort();
}
employerFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_employer_by_categories_filters_content&employer_arg=' + employer_arg,
success: function (response){
jQuery('#employer-tab-content-' + counter).html(response);
jQuery("#employer-tab-content-" + counter + ' .row').mixItUp({
selectors: {
target: ".portfolio",
}});
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".chosen-select").chosen();
jQuery('#jobsearch-data-employer-content-' + counter + ' .all-results').removeClass('slide-loader');
jQuery(".employer-medium .img-holder img, .employer-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
$(this).load();
});
}});
}
function convertHTML(html){
"use strict";
var newHtml=$.trim(html),
$html=$(newHtml),
$empty=$();
$html.each(function (index, value){
if(value.nodeType===1){
$empty=$empty.add(this);
}});
return $empty;
}
function jobsearch_employer_type_search_fields(thisObj, counter, price_switch, view_type){
var view_type=view_type||'';
"use strict";
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_employer_type_search_fields&employer_short_counter=' + counter + '&employer_type_slug=' + thisObj.value + '&price_switch=' + price_switch + '&view_type=' + view_type,
success: function (response){
jQuery('#employer_type_fields_' + counter).html('');
jQuery('#employer_type_fields_' + counter).html(response.html);
}});
var checkID=thisObj.getAttribute('id');
var cat_name=$('#' + checkID).next('label').html();
$('.map-search-keyword-type-holder .dropdown-types-btn').html(cat_name);
var dropdownHolder=$('.map-search-keyword-type-holder');
var dropdownCon=dropdownHolder.find('ul.dropdown-types');
dropdownCon.slideUp();
}
function jobsearch_employer_type_cate_fields(thisObj, counter, cats_switch, view, color){
"use strict";
if(typeof view==='undefined'){
view='default';
}
if(typeof color==='undefined'){
color='none';
}
var cate_loader='<b class="spinner-label">' + jobsearch_employer_functions_string.employer_type + '</b><span class="cate-spinning"><i class="fancy-spinner"></i></span>';
jQuery('#employer_type_cate_fields_' + counter).html(cate_loader);
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_employer_type_cate_fields&employer_short_counter=' + counter + '&employer_type_slug=' + thisObj.value + '&view=' + view + '&color=' + color + '&cats_switch=' + cats_switch,
success: function (response){
jQuery('#employer_type_cate_fields_' + counter).html('');
jQuery('#employer_type_cate_fields_' + counter).html(response.html);
}});
}
function jobsearch_employer_type_split_map_search_fields(thisObj, counter){
var view_type=view_type||'';
"use strict";
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_employer_type_split_map_search_fields&employer_short_counter=' + counter + '&employer_type_slug=' + thisObj.value,
success: function (response){
jQuery('#employer_type_fields_' + counter).html('');
jQuery('#employer_type_fields_' + counter).html(response.html);
}}).done(function (){
jobsearch_employer_type_split_map_cate_fields(thisObj.value, counter);
});
var checkID=thisObj.getAttribute('id');
var cat_name=$('#' + checkID).next('label').html();
$('.map-search-keyword-type-holder .dropdown-types-btn').html(cat_name);
var dropdownHolder=$('.map-search-keyword-type-holder');
var dropdownCon=dropdownHolder.find('ul.dropdown-types');
dropdownCon.slideUp();
}
function jobsearch_employer_type_split_map_cate_fields(thisObj, counter, cats_switch, view, color){
"use strict";
if(typeof view==='undefined'){
view='default';
}
if(typeof color==='undefined'){
color='none';
}
var cate_loader='<b class="spinner-label">' + jobsearch_employer_functions_string.employer_type + '</b><span class="cate-spinning"><i class="fancy-spinner"></i></span>';
jQuery('#employer_type_cate_fields_' + counter).html(cate_loader);
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_employer_type_split_map_cate_fields&employer_short_counter=' + counter + '&employer_type_slug=' + thisObj.value + '&view=' + view + '&color=' + color,
success: function (response){
jQuery('#employer_type_cate_fields_' + counter).html('');
jQuery('#employer_type_cate_fields_' + counter).html(response.html);
}}).done(function (){
jobsearch_split_map_change_cords(counter);
});
}
function jobsearch_split_map_change_cords(counter, hide_overlay){
"use strict";
var hide_overlay=hide_overlay||'';
if(hide_overlay==='true'){
}
var top_map=jQuery('.wp-dp-ontop-gmap');
var loader_div=jQuery('.wp-dp-splitmap-advance-filter_' + counter);
var loader_html='<div class="split-map-loader"><span><i class="fancy-spinner"></i></span></div>';
if(loader_div.length!==0){
loader_div.html(loader_html);
}
if(top_map.length!==0){
var ajax_url=jobsearch_plugin_vars.ajax_url;
var data_vals='ajax_filter=true&map=top_map&action=jobsearch_top_map_search&' + jQuery(jQuery("#jobsearch_employer_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
if(jQuery('form[name="wp-dp-top-map-form"]').length > 0){
data_vals +="&" + jQuery('form[name="wp-dp-top-map-form"]').serialize() + '&atts=' + jQuery('#atts').html();
}
data_vals=stripUrlParams(data_vals);
var loading_top_map=$.ajax({
url: ajax_url,
method: "POST",
data: data_vals,
dataType: "json"
}).done(function (response){
if(typeof response.html!=='undefined'){
jQuery('.top-map-action-scr').html(response.html);
}
jobsearch_employer_split_map_content(counter, '', '', hide_overlay);
}).fail(function (){
});
}}
function removeURLParameter(url, parameter){
var urlparts=url.split('?');
if(urlparts.length >=2){
var prefix=encodeURIComponent(parameter) + '=';
var pars=urlparts[1].split(/[&;]/g);
for (var i=pars.length; i-- > 0;){
if(pars[i].lastIndexOf(prefix, 0)!==-1){
pars.splice(i, 1);
}}
url=urlparts[0] + '?' + pars.join('&');
return url;
}else{
return url;
}}
function jobsearch_employer_split_map_content(counter, view_type, animate_to, hide_overlay){
counter=counter||'';
var hide_overlay=hide_overlay||'';
animate_to=animate_to||'';
var view_type=view_type||'';
var loader_div=jQuery('.wp-dp-splitmap-advance-filter_' + counter);
var loader_html='<div class="split-map-loader"><span><i class="fancy-spinner"></i></span></div>';
if(animate_to!='false'){
jQuery('html, body').animate({
scrollTop: jQuery("#wp-dp-employer-content-" + counter).offset().top - 120
}, 700);
}
var employer_arg=jQuery("#employer_arg" + counter).html();
var this_frm=jQuery("#jobsearch_employer_frm_" + counter);
var split_map=jQuery(".wp-dp-split-map-wrap").size();
if(split_map > 0){
view_type='split_map';
}
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
if(jQuery("#jobsearch_employer_frm_" + counter).length > 0){
var data_vals=jQuery(jQuery("#jobsearch_employer_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
var data_vals='ajax_filter=true&map=top_map&action=jobsearch_top_map_search&' + jQuery(jQuery("#jobsearch_employer_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
if(jQuery('form[name="wp-dp-top-map-form"]').length > 0){
data_vals +="&" + jQuery('form[name="wp-dp-top-map-form"]').serialize();
}
data_vals=data_vals.replace(/[^&]+=\.?(?:&|$)/g, '');
data_vals=data_vals.replace('undefined', '');
data_vals=data_vals + '&ajax_filter=true';
data_vals=stripUrlParams(data_vals);
if(!jQuery('body').hasClass('wp-dp-changing-view')){
}
if(hide_overlay==='true'){
data_vals=removeURLParameter(data_vals, 'adv_filter_toggle');
data_vals=data_vals.replace('adv_filter_toggle=true', 'adv_filter_toggle=false');
}
jQuery('#Employer-content-' + counter + ' .employer').addClass('slide-loader');
jQuery('#jobsearch-data-employer-content-' + counter + ' .all-results').addClass('slide-loader');
console.log(data_vals);
var employerFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_employers_content&view_type=' + view_type + '&employer_arg=' + employer_arg,
success: function (response){
jQuery('body').removeClass('wp-dp-changing-view');
jQuery('#Employer-content-' + counter).html(response);
if(hide_overlay==='false'&&hide_overlay!==''){
jQuery('#wp-jobsearch-employer-' + counter).hide();
jQuery('.no-employer-match-error').hide();
jQuery('.page-nation').hide();
}
if(hide_overlay==='true'&&hide_overlay!==''){
jQuery("div.split-map-overlay").remove();
}
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
current_url=current_url.replace('&=undefined', '');
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".chosen-select").chosen();
jQuery('#jobsearch-data-employer-content-' + counter + ' .all-results').removeClass('slide-loader');
jobsearch_hide_loader();
jQuery(".employer-medium .img-holder img, .employer-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
jQuery(this).load();
});
if(jQuery(".employer-medium.modern").length > 0){
var imageUrlFind=jQuery(".employer-medium.modern .img-holder").css("background-image").match(/url\(["']?([^()]*)["']?\)/).pop();
if(imageUrlFind){
jQuery(".employer-medium.modern .img-holder").addClass("image-loaded");
}}
if(loader_div.length!==0){
loader_div.html('');
}}
});
}}
function jobsearch_empty_loc_polygon(counter){
if(jQuery("#jobsearch_employer_frm_" + counter + " input[name=loc_polygon_path]").length){
jQuery("#jobsearch_employer_frm_" + counter + " input[name=loc_polygon_path]").val('');
}}
function jobsearch_employer_view_switch(view, counter, employer_short_counter, view_type){
"use strict";
var view_type=view_type||'';
jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_employer_view_switch&view=' + view + '&employer_short_counter=' + employer_short_counter,
success: function (){
jQuery('[data-toggle="popover"]').popover();
jQuery('body').addClass('wp-dp-changing-view');
jobsearch_employer_content(counter, view_type);
}});
}
function jobsearch_employer_pagenation_ajax(page_var, page_num, counter, ajax_filter, view_type){
"use strict";
var view_type=view_type||'';
jQuery('html, body').animate({
scrollTop: jQuery("#wp-dp-employer-content-" + counter).offset().top - 120
}, 1000);
jQuery('#' + page_var + '-' + counter).val(page_num);
jobsearch_employer_content_load(counter, view_type);
}
function jobsearch_employer_filters_pagenation_ajax(page_var, page_num, counter, tab){
"use strict";
jQuery('#' + page_var + '-' + counter).val(page_num);
jobsearch_employer_filters_content(counter, page_var, page_num, tab);
}
function jobsearch_employer_by_category_filters_pagenation_ajax(page_var, page_num, counter, tab){
"use strict";
jQuery('#' + page_var + '-' + counter).val(page_num);
jobsearch_employer_by_categories_filters_content(counter, page_var, page_num, tab);
}
function jobsearch_advanced_search_field(counter, tab, element){
"use strict";
if(tab=='simple'){
jQuery('#employer_type_fields_' + counter).slideUp();
jQuery('#nav-tabs-' + counter + ' li').removeClass('active');
jQuery(element).parent().addClass('active');
}else if(tab=='advance'){
jQuery('#employer_type_fields_' + counter).slideDown();
jQuery('#nav-tabs-' + counter + ' li').removeClass('active');
jQuery(element).parent().addClass('active');
}else{
jQuery('#employer_type_fields_' + counter).slideToggle();
if(jQuery(".main-search.split-map .field-holder.more-filters-btn").length > 0){
jQuery('.main-search.split-map .field-holder.more-filters-btn').toggleClass('open');
if(jQuery('.main-search.split-map .field-holder.more-filters-btn').hasClass('open')){
var NewContent='<div class="split-map-overlay"></div>';
jQuery(".wp-dp-top-map-holder").after(NewContent);
jQuery('#wp-jobsearch-employer-' + counter).hide();
jQuery('.page-nation').hide();
jQuery('.no-employer-match-error').hide();
}else{
jQuery("div.split-map-overlay").remove();
jQuery('#wp-jobsearch-employer-' + counter).show();
jQuery('.page-nation').show();
jQuery('.no-employer-match-error').show();
}}
}}
if(jQuery(".main-search.split-map .field-holder.more-filters-btn").length > 0){
function jobsearch_split_map_close_search(counter){
jQuery(".main-search.split-map .field-holder.more-filters-btn").toggleClass('open');
jQuery("div.split-map-overlay").remove();
jQuery('#employer_type_fields_' + counter).toggle('slow');
jQuery('#wp-jobsearch-employer-' + counter).show();
jQuery('.page-nation').show();
jQuery('.no-employer-match-error').show();
}}
function jobsearch_search_features(element, counter){
"use strict";
jQuery('#employer_type_fields_' + counter + ' .features-field-expand').slideToggle();
var expand_class=jQuery('#employer_type_fields_' + counter + ' .features-list .advance-trigger').find('i').attr('class');
if(expand_class=='icon-plus'){
console.log(expand_class);
jQuery('#employer_type_fields_' + counter + ' .features-list .advance-trigger').find('i').removeClass(expand_class).addClass('icon-minus')
}else{
jQuery('#employer_type_fields_' + counter + ' .features-list .advance-trigger').find('i').removeClass(expand_class).addClass('icon-plus')
}}
jQuery(document).on('click', '.dev-employer-list-enquiry-own-employer', function (e){
e.stopImmediatePropagation();
var msg_obj={msg: jobsearch_plugin_vars.own_employer_error, type: 'error'};
jobsearch_show_response(msg_obj);
});
jQuery(document).ready(function (){
if(jQuery('#enquires-sidebar-panel').length > 0){
enquiry_sidebar_arrow();
}});
function enquiry_sidebar_arrow(){
jQuery('.fixed-sidebar-panel.left .sidebar-panel-btn').click(function (e){
e.preventDefault();
if(jQuery('#enquires-sidebar-panel').hasClass('sidebar-panel-open')){
jQuery('#enquires-sidebar-panel').removeClass('sidebar-panel-open');
}else{
jQuery('#enquires-sidebar-panel').addClass('sidebar-panel-open');
}});
jQuery('#enquires-sidebar-panel .sidebar-panel-title .sidebar-panel-btn-close').click(function (e){
jQuery('#enquires-sidebar-panel').removeClass('sidebar-panel-open');
});
}
jQuery(document).on('click', '.employer-list-enquiry-check', function (){
var data_id=jQuery(this).data('id');
var thisObj=jQuery(this);
if(thisObj.hasClass('active')){
jQuery('.chosen-enquires-list .sidebar-employers-list ul li[data-id="' + data_id + '"] .employer-item-dpove').click();
return;
}
thisObj.append('<span class="enquiry-loader"><i class="fancy-spinner"></i></span>');
jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: 'action=jobsearch_enquiry_list_frontend&employer_id=' + data_id + '&add_enquiry=yes',
success: function (response){
thisObj.find('.enquiry-loader').remove();
jQuery('.chosen-enquires-list .sidebar-employers-list ul').append(response);
if(response!=''){
thisObj.addClass('active');
if(!jQuery('.chosen-enquires-list').hasClass('sidebar-panel-open')){
jQuery('#enquires-sidebar-panel').addClass('sidebar-panel-open');
jQuery('#enquires-sidebar-panel .sidebar-panel-btn').fadeIn('slow');
}
var _appending_inp=jQuery("#jobsearch_employer_id");
if(_appending_inp.val()==''){
_appending_inp.val(data_id);
}else{
console.log(data_id);
var new_val=_appending_inp.val() + ',' + data_id;
_appending_inp.val(new_val);
}}
}});
});
jQuery(document).on('click', '.chosen-enquires-list .sidebar-employers-list ul li .employer-item-dpove', function (){
var thisObj=jQuery(this);
var data_id=thisObj.closest('li').data('id');
thisObj.html('<i class="fancy-spinner"></i>');
jQuery('.employer-list-enquiry-check[data-id="' + data_id + '"]').append('<span class="enquiry-loader"><i class="fancy-spinner"></i></span>');
jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: 'action=jobsearch_enquiry_list_remove_frontend&employer_id=' + data_id,
success: function (response){
jQuery('.employer-list-enquiry-check[data-id="' + data_id + '"]').find('.enquiry-loader').remove();
jQuery('.employer-list-enquiry-check[data-id="' + data_id + '"]').removeClass('active');
var strVal=jQuery("#jobsearch_employer_id").val();
var dataArray=strVal.split(",");
dataArray.splice(dataArray.indexOf(data_id), 1);
strVal=dataArray.join(',');
jQuery("#jobsearch_employer_id").val(strVal);
if(strVal==''){
jQuery('#enquires-sidebar-panel').removeClass('sidebar-panel-open');
jQuery('#enquires-sidebar-panel .sidebar-panel-btn').fadeOut('slow');
}
thisObj.closest('li').slideUp(400, function (){
thisObj.closest('li').remove();
});
}});
});
function SidbarPanelHeight(){
var WindowHeightForSidbarPanel=$(window).height();
$(".sidebar-employers-list ul").css({"max-height": WindowHeightForSidbarPanel - 200, "overflow-y": "auto"});
}
SidbarPanelHeight();
$(window).resize(function (){
SidbarPanelHeight();
});
jQuery(document).on('click', '.chosen-enquires-list .enquiry-reset-btn', function (){
var thisObj=jQuery(this);
jobsearch_show_loader(".chosen-enquires-list .enquiry-reset-btn", "", "button_loader", thisObj);
jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: 'action=jobsearch_enquiry_list_clear_frontend',
success: function (response){
jQuery('.chosen-enquires-list .sidebar-employers-list ul li').remove();
jobsearch_hide_button_loader('.chosen-enquires-list .enquiry-reset-btn');
jQuery('.employer-list-enquiry-check').removeClass('active');
jQuery("#jobsearch_employer_id").val('');
jQuery('#enquires-sidebar-panel').removeClass('sidebar-panel-open');
jQuery('#enquires-sidebar-panel .sidebar-panel-btn').fadeOut('slow');
}});
});
var candidateFilterAjax;
function jobsearch_candidate_content_load(counter, view_type, animate_to){
counter=counter||'';
animate_to=animate_to||'';
var view_type=view_type||'';
var candidate_arg=jQuery("#candidate_arg" + counter).html();
var this_frm=jQuery("#jobsearch_candidate_frm_" + counter);
var split_map=jQuery(".wp-dp-split-map-wrap").size();
if(split_map > 0){
view_type='split_map';
}
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
var current_page_id=jQuery("#current_page_id").val();
var loader_con=jQuery("#jobsearch-loader-" + counter);
if(jQuery("#jobsearch_candidate_frm_" + counter).length > 0){
var data_vals=jQuery(jQuery("#jobsearch_candidate_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
if(jQuery('form[name="jobsearch-top-map-form"]').length > 0){
data_vals +="&" + jQuery('form[name="jobsearch-top-map-form"]').serialize();
}
data_vals=data_vals.replace(/[^&]+=\.?(?:&|$)/g, '');
data_vals=data_vals.replace('undefined', '');
data_vals=data_vals + '&ajax_filter=true';
data_vals=stripUrlParams(data_vals);
jQuery('#Candidate-content-' + counter + ' .candidate').addClass('slide-loader');
jQuery('#jobsearch-data-candidate-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (candidateFilterAjax)!='undefined'){
candidateFilterAjax.abort();
}
loader_con.html('<div class="jobsearch-listing-loader"><div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>');
var candidateFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_candidates_content&view_type=' + view_type + '&candidate_arg=' + candidate_arg + '&page_id=' + current_page_id,
success: function (response){
jQuery('body').removeClass('wp-dp-changing-view');
jQuery('#Candidate-content-' + counter).html(response);
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
current_url=current_url.replace('&=undefined', '');
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".candidate-medium .img-holder img, .candidate-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
jQuery(this).load();
});
if(jQuery(".candidate-medium.modern").length > 0){
var imageUrlFind=jQuery(".candidate-medium.modern .img-holder").css("background-image").match(/url\(["']?([^()]*)["']?\)/).pop();
if(imageUrlFind){
jQuery(".candidate-medium.modern .img-holder").addClass("image-loaded");
}}
jQuery('.wp-dp-candidate-content').find('.selectize-select').selectize({
});
jQuery('.wp-dp-candidate-content').find('.sort-records-per-page').selectize({
allowEmptyOption: true,
});
loader_con.html('');
}});
}}
function jobsearch_candidate_content_load_without_filters(counter, page_var, page_num, ajax_filter, view_type){
"use strict";
counter=counter||'';
var candidate_arg=jQuery("#candidate_arg" + counter).html();
var data_vals=page_var + '=' + page_num;
jQuery('#jobsearch-data-candidate-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (candidateFilterAjax)!='undefined'){
candidateFilterAjax.abort();
}
candidateFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_candidates_content&view_type=' + view_type + '&candidate_arg=' + candidate_arg,
success: function (response){
jQuery('#Candidate-content-' + counter).html(response);
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery('#jobsearch-data-candidate-content-' + counter + ' .all-results').removeClass('slide-loader');
}});
}
function stripUrlParams(args){
"use strict";
var parts=args.split("&");
var comps={};
for (var i=parts.length - 1; i >=0; i--){
var spl=parts[i].split("=");
if(typeof comps[ spl[0] ]=="undefined"||(typeof comps[ spl[0] ]!="undefined"&&comps[ spl[0] ]=='')){
comps[ spl[0] ]=spl[1];
}}
parts=[];
for (var a in comps){
parts.push(a + "=" + comps[a]);
}
return parts.join('&');
}
function jobsearch_candidate_filters_content(counter, page_var, page_num, tab){
"use strict";
counter=counter||'';
var candidate_arg=jQuery("#candidate_arg" + counter).html();
var this_frm=jQuery("#jobsearch_candidate_frm_" + counter);
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
var data_vals='tab=' + tab + '&' + page_var + '=' + page_num + '&ajax_filter=true';
jQuery('#jobsearch-data-candidate-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (candidateFilterAjax)!='undefined'){
candidateFilterAjax.abort();
}
candidateFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_candidates_filters_content&candidate_arg=' + candidate_arg,
success: function (response){
console.log(response);
jQuery('#candidate-tab-content-' + counter).html(response);
jQuery("#candidate-tab-content-" + counter + ' .row').mixItUp({
selectors: {
target: ".portfolio",
}});
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".chosen-select").chosen();
jQuery('#jobsearch-data-candidate-content-' + counter + ' .all-results').removeClass('slide-loader');
jQuery(".candidate-medium .img-holder img, .candidate-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
$(this).load();
});
}});
}
function jobsearch_candidate_by_categories_filters_content(counter, page_var, page_num, tab){
"use strict";
counter=counter||'';
var candidate_arg=jQuery("#candidate_arg" + counter).html();
var this_frm=jQuery("#jobsearch_candidate_frm_" + counter);
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
var data_vals='tab=' + tab + '&' + page_var + '=' + page_num + '&ajax_filter=true';
jQuery('#jobsearch-data-candidate-content-' + counter + ' .all-results').addClass('slide-loader');
if(typeof (candidateFilterAjax)!='undefined'){
candidateFilterAjax.abort();
}
candidateFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_candidate_by_categories_filters_content&candidate_arg=' + candidate_arg,
success: function (response){
jQuery('#candidate-tab-content-' + counter).html(response);
jQuery("#candidate-tab-content-" + counter + ' .row').mixItUp({
selectors: {
target: ".portfolio",
}});
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".chosen-select").chosen();
jQuery('#jobsearch-data-candidate-content-' + counter + ' .all-results').removeClass('slide-loader');
jQuery(".candidate-medium .img-holder img, .candidate-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
$(this).load();
});
}});
}
function convertHTML(html){
"use strict";
var newHtml=$.trim(html),
$html=$(newHtml),
$empty=$();
$html.each(function (index, value){
if(value.nodeType===1){
$empty=$empty.add(this);
}});
return $empty;
}
function jobsearch_candidate_type_search_fields(thisObj, counter, price_switch, view_type){
var view_type=view_type||'';
"use strict";
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_candidate_type_search_fields&candidate_short_counter=' + counter + '&candidate_type_slug=' + thisObj.value + '&price_switch=' + price_switch + '&view_type=' + view_type,
success: function (response){
jQuery('#candidate_type_fields_' + counter).html('');
jQuery('#candidate_type_fields_' + counter).html(response.html);
}});
var checkID=thisObj.getAttribute('id');
var cat_name=$('#' + checkID).next('label').html();
$('.map-search-keyword-type-holder .dropdown-types-btn').html(cat_name);
var dropdownHolder=$('.map-search-keyword-type-holder');
var dropdownCon=dropdownHolder.find('ul.dropdown-types');
dropdownCon.slideUp();
}
function jobsearch_candidate_type_cate_fields(thisObj, counter, cats_switch, view, color){
"use strict";
if(typeof view==='undefined'){
view='default';
}
if(typeof color==='undefined'){
color='none';
}
var cate_loader='<b class="spinner-label">' + jobsearch_candidate_functions_string.candidate_type + '</b><span class="cate-spinning"><i class="fancy-spinner"></i></span>';
jQuery('#candidate_type_cate_fields_' + counter).html(cate_loader);
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_candidate_type_cate_fields&candidate_short_counter=' + counter + '&candidate_type_slug=' + thisObj.value + '&view=' + view + '&color=' + color + '&cats_switch=' + cats_switch,
success: function (response){
jQuery('#candidate_type_cate_fields_' + counter).html('');
jQuery('#candidate_type_cate_fields_' + counter).html(response.html);
}});
}
function jobsearch_candidate_type_split_map_search_fields(thisObj, counter){
var view_type=view_type||'';
"use strict";
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_candidate_type_split_map_search_fields&candidate_short_counter=' + counter + '&candidate_type_slug=' + thisObj.value,
success: function (response){
jQuery('#candidate_type_fields_' + counter).html('');
jQuery('#candidate_type_fields_' + counter).html(response.html);
}}).done(function (){
jobsearch_candidate_type_split_map_cate_fields(thisObj.value, counter);
});
var checkID=thisObj.getAttribute('id');
var cat_name=$('#' + checkID).next('label').html();
$('.map-search-keyword-type-holder .dropdown-types-btn').html(cat_name);
var dropdownHolder=$('.map-search-keyword-type-holder');
var dropdownCon=dropdownHolder.find('ul.dropdown-types');
dropdownCon.slideUp();
}
function jobsearch_candidate_type_split_map_cate_fields(thisObj, counter, cats_switch, view, color){
"use strict";
if(typeof view==='undefined'){
view='default';
}
if(typeof color==='undefined'){
color='none';
}
var cate_loader='<b class="spinner-label">' + jobsearch_candidate_functions_string.candidate_type + '</b><span class="cate-spinning"><i class="fancy-spinner"></i></span>';
jQuery('#candidate_type_cate_fields_' + counter).html(cate_loader);
jQuery.ajax({
type: 'POST',
dataType: 'json',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_candidate_type_split_map_cate_fields&candidate_short_counter=' + counter + '&candidate_type_slug=' + thisObj.value + '&view=' + view + '&color=' + color,
success: function (response){
jQuery('#candidate_type_cate_fields_' + counter).html('');
jQuery('#candidate_type_cate_fields_' + counter).html(response.html);
}}).done(function (){
jobsearch_split_map_change_cords(counter);
});
}
function jobsearch_split_map_change_cords(counter, hide_overlay){
"use strict";
var hide_overlay=hide_overlay||'';
if(hide_overlay==='true'){
}
var top_map=jQuery('.wp-dp-ontop-gmap');
var loader_div=jQuery('.wp-dp-splitmap-advance-filter_' + counter);
var loader_html='<div class="split-map-loader"><span><i class="fancy-spinner"></i></span></div>';
if(loader_div.length!==0){
loader_div.html(loader_html);
}
if(top_map.length!==0){
var ajax_url=jobsearch_plugin_vars.ajax_url;
var data_vals='ajax_filter=true&map=top_map&action=jobsearch_top_map_search&' + jQuery(jQuery("#jobsearch_candidate_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
if(jQuery('form[name="wp-dp-top-map-form"]').length > 0){
data_vals +="&" + jQuery('form[name="wp-dp-top-map-form"]').serialize() + '&atts=' + jQuery('#atts').html();
}
data_vals=stripUrlParams(data_vals);
var loading_top_map=$.ajax({
url: ajax_url,
method: "POST",
data: data_vals,
dataType: "json"
}).done(function (response){
if(typeof response.html!=='undefined'){
jQuery('.top-map-action-scr').html(response.html);
}
jobsearch_candidate_split_map_content(counter, '', '', hide_overlay);
}).fail(function (){
});
}}
function removeURLParameter(url, parameter){
var urlparts=url.split('?');
if(urlparts.length >=2){
var prefix=encodeURIComponent(parameter) + '=';
var pars=urlparts[1].split(/[&;]/g);
for (var i=pars.length; i-- > 0;){
if(pars[i].lastIndexOf(prefix, 0)!==-1){
pars.splice(i, 1);
}}
url=urlparts[0] + '?' + pars.join('&');
return url;
}else{
return url;
}}
function jobsearch_candidate_split_map_content(counter, view_type, animate_to, hide_overlay){
counter=counter||'';
var hide_overlay=hide_overlay||'';
animate_to=animate_to||'';
var view_type=view_type||'';
var loader_div=jQuery('.wp-dp-splitmap-advance-filter_' + counter);
var loader_html='<div class="split-map-loader"><span><i class="fancy-spinner"></i></span></div>';
if(animate_to!='false'){
jQuery('html, body').animate({
scrollTop: jQuery("#wp-dp-candidate-content-" + counter).offset().top - 120
}, 700);
}
var candidate_arg=jQuery("#candidate_arg" + counter).html();
var this_frm=jQuery("#jobsearch_candidate_frm_" + counter);
var split_map=jQuery(".wp-dp-split-map-wrap").size();
if(split_map > 0){
view_type='split_map';
}
var ads_list_count=jQuery("#ads_list_count_" + counter).val();
var ads_list_flag=jQuery("#ads_list_flag_" + counter).val();
var list_flag_count=jQuery("#ads_list_flag_count_" + counter).val();
if(jQuery("#jobsearch_candidate_frm_" + counter).length > 0){
var data_vals=jQuery(jQuery("#jobsearch_candidate_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
var data_vals='ajax_filter=true&map=top_map&action=jobsearch_top_map_search&' + jQuery(jQuery("#jobsearch_candidate_frm_" + counter)[0].elements).not(":input[name='alerts-email'], :input[name='alert-frequency']").serialize();
if(jQuery('form[name="wp-dp-top-map-form"]').length > 0){
data_vals +="&" + jQuery('form[name="wp-dp-top-map-form"]').serialize();
}
data_vals=data_vals.replace(/[^&]+=\.?(?:&|$)/g, '');
data_vals=data_vals.replace('undefined', '');
data_vals=data_vals + '&ajax_filter=true';
data_vals=stripUrlParams(data_vals);
if(!jQuery('body').hasClass('wp-dp-changing-view')){
}
if(hide_overlay==='true'){
data_vals=removeURLParameter(data_vals, 'adv_filter_toggle');
data_vals=data_vals.replace('adv_filter_toggle=true', 'adv_filter_toggle=false');
}
jQuery('#Candidate-content-' + counter + ' .candidate').addClass('slide-loader');
jQuery('#jobsearch-data-candidate-content-' + counter + ' .all-results').addClass('slide-loader');
console.log(data_vals);
var candidateFilterAjax=jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: data_vals + '&action=jobsearch_candidates_content&view_type=' + view_type + '&candidate_arg=' + candidate_arg,
success: function (response){
jQuery('body').removeClass('wp-dp-changing-view');
jQuery('#Candidate-content-' + counter).html(response);
if(hide_overlay==='false'&&hide_overlay!==''){
jQuery('#wp-jobsearch-candidate-' + counter).hide();
jQuery('.no-candidate-match-error').hide();
jQuery('.page-nation').hide();
}
if(hide_overlay==='true'&&hide_overlay!==''){
jQuery("div.split-map-overlay").remove();
}
data_vals=data_vals.replace("&&", "&");
var current_url=location.protocol + "//" + location.host + location.pathname + "?" + data_vals; //window.location.href;
current_url=current_url.replace('&=undefined', '');
window.history.pushState(null, null, decodeURIComponent(current_url));
jQuery(".chosen-select").chosen();
jQuery('#jobsearch-data-candidate-content-' + counter + ' .all-results').removeClass('slide-loader');
jobsearch_hide_loader();
jQuery(".candidate-medium .img-holder img, .candidate-grid .img-holder img").one("load", function (){
jQuery(this).parents(".img-holder").addClass("image-loaded");
}).each(function (){
if(this.complete)
jQuery(this).load();
});
if(jQuery(".candidate-medium.modern").length > 0){
var imageUrlFind=jQuery(".candidate-medium.modern .img-holder").css("background-image").match(/url\(["']?([^()]*)["']?\)/).pop();
if(imageUrlFind){
jQuery(".candidate-medium.modern .img-holder").addClass("image-loaded");
}}
if(loader_div.length!==0){
loader_div.html('');
}}
});
}}
function jobsearch_empty_loc_polygon(counter){
if(jQuery("#jobsearch_candidate_frm_" + counter + " input[name=loc_polygon_path]").length){
jQuery("#jobsearch_candidate_frm_" + counter + " input[name=loc_polygon_path]").val('');
}}
function jobsearch_candidate_view_switch(view, counter, candidate_short_counter, view_type){
"use strict";
var view_type=view_type||'';
jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: '&action=jobsearch_candidate_view_switch&view=' + view + '&candidate_short_counter=' + candidate_short_counter,
success: function (){
jQuery('[data-toggle="popover"]').popover();
jQuery('body').addClass('wp-dp-changing-view');
jobsearch_candidate_content(counter, view_type);
}});
}
function jobsearch_candidate_pagenation_ajax(page_var, page_num, counter, ajax_filter, view_type){
"use strict";
var view_type=view_type||'';
jQuery('html, body').animate({
scrollTop: jQuery("#wp-dp-candidate-content-" + counter).offset().top - 120
}, 1000);
jQuery('#' + page_var + '-' + counter).val(page_num);
jobsearch_candidate_content_load(counter, view_type);
}
function jobsearch_candidate_filters_pagenation_ajax(page_var, page_num, counter, tab){
"use strict";
jQuery('#' + page_var + '-' + counter).val(page_num);
jobsearch_candidate_filters_content(counter, page_var, page_num, tab);
}
function jobsearch_candidate_by_category_filters_pagenation_ajax(page_var, page_num, counter, tab){
"use strict";
jQuery('#' + page_var + '-' + counter).val(page_num);
jobsearch_candidate_by_categories_filters_content(counter, page_var, page_num, tab);
}
function jobsearch_advanced_search_field(counter, tab, element){
"use strict";
if(tab=='simple'){
jQuery('#candidate_type_fields_' + counter).slideUp();
jQuery('#nav-tabs-' + counter + ' li').removeClass('active');
jQuery(element).parent().addClass('active');
}else if(tab=='advance'){
jQuery('#candidate_type_fields_' + counter).slideDown();
jQuery('#nav-tabs-' + counter + ' li').removeClass('active');
jQuery(element).parent().addClass('active');
}else{
jQuery('#candidate_type_fields_' + counter).slideToggle();
if(jQuery(".main-search.split-map .field-holder.more-filters-btn").length > 0){
jQuery('.main-search.split-map .field-holder.more-filters-btn').toggleClass('open');
if(jQuery('.main-search.split-map .field-holder.more-filters-btn').hasClass('open')){
var NewContent='<div class="split-map-overlay"></div>';
jQuery(".wp-dp-top-map-holder").after(NewContent);
jQuery('#wp-jobsearch-candidate-' + counter).hide();
jQuery('.page-nation').hide();
jQuery('.no-candidate-match-error').hide();
}else{
jQuery("div.split-map-overlay").remove();
jQuery('#wp-jobsearch-candidate-' + counter).show();
jQuery('.page-nation').show();
jQuery('.no-candidate-match-error').show();
}}
}}
if(jQuery(".main-search.split-map .field-holder.more-filters-btn").length > 0){
function jobsearch_split_map_close_search(counter){
jQuery(".main-search.split-map .field-holder.more-filters-btn").toggleClass('open');
jQuery("div.split-map-overlay").remove();
jQuery('#candidate_type_fields_' + counter).toggle('slow');
jQuery('#wp-jobsearch-candidate-' + counter).show();
jQuery('.page-nation').show();
jQuery('.no-candidate-match-error').show();
}}
function jobsearch_search_features(element, counter){
"use strict";
jQuery('#candidate_type_fields_' + counter + ' .features-field-expand').slideToggle();
var expand_class=jQuery('#candidate_type_fields_' + counter + ' .features-list .advance-trigger').find('i').attr('class');
if(expand_class=='icon-plus'){
console.log(expand_class);
jQuery('#candidate_type_fields_' + counter + ' .features-list .advance-trigger').find('i').removeClass(expand_class).addClass('icon-minus')
}else{
jQuery('#candidate_type_fields_' + counter + ' .features-list .advance-trigger').find('i').removeClass(expand_class).addClass('icon-plus')
}}
jQuery(document).on('click', '.dev-candidate-list-enquiry-own-candidate', function (e){
e.stopImmediatePropagation();
var msg_obj={msg: jobsearch_plugin_vars.own_candidate_error, type: 'error'};
jobsearch_show_response(msg_obj);
});
jQuery(document).ready(function (){
if(jQuery('#enquires-sidebar-panel').length > 0){
enquiry_sidebar_arrow();
}});
function enquiry_sidebar_arrow(){
jQuery('.fixed-sidebar-panel.left .sidebar-panel-btn').click(function (e){
e.preventDefault();
if(jQuery('#enquires-sidebar-panel').hasClass('sidebar-panel-open')){
jQuery('#enquires-sidebar-panel').removeClass('sidebar-panel-open');
}else{
jQuery('#enquires-sidebar-panel').addClass('sidebar-panel-open');
}});
jQuery('#enquires-sidebar-panel .sidebar-panel-title .sidebar-panel-btn-close').click(function (e){
jQuery('#enquires-sidebar-panel').removeClass('sidebar-panel-open');
});
}
jQuery(document).on('click', '.candidate-list-enquiry-check', function (){
var data_id=jQuery(this).data('id');
var thisObj=jQuery(this);
if(thisObj.hasClass('active')){
jQuery('.chosen-enquires-list .sidebar-candidates-list ul li[data-id="' + data_id + '"] .candidate-item-dpove').click();
return;
}
thisObj.append('<span class="enquiry-loader"><i class="fancy-spinner"></i></span>');
jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: 'action=jobsearch_enquiry_list_frontend&candidate_id=' + data_id + '&add_enquiry=yes',
success: function (response){
thisObj.find('.enquiry-loader').remove();
jQuery('.chosen-enquires-list .sidebar-candidates-list ul').append(response);
if(response!=''){
thisObj.addClass('active');
if(!jQuery('.chosen-enquires-list').hasClass('sidebar-panel-open')){
jQuery('#enquires-sidebar-panel').addClass('sidebar-panel-open');
jQuery('#enquires-sidebar-panel .sidebar-panel-btn').fadeIn('slow');
}
var _appending_inp=jQuery("#jobsearch_candidate_id");
if(_appending_inp.val()==''){
_appending_inp.val(data_id);
}else{
console.log(data_id);
var new_val=_appending_inp.val() + ',' + data_id;
_appending_inp.val(new_val);
}}
}});
});
jQuery(document).on('click', '.chosen-enquires-list .sidebar-candidates-list ul li .candidate-item-dpove', function (){
var thisObj=jQuery(this);
var data_id=thisObj.closest('li').data('id');
thisObj.html('<i class="fancy-spinner"></i>');
jQuery('.candidate-list-enquiry-check[data-id="' + data_id + '"]').append('<span class="enquiry-loader"><i class="fancy-spinner"></i></span>');
jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: 'action=jobsearch_enquiry_list_remove_frontend&candidate_id=' + data_id,
success: function (response){
jQuery('.candidate-list-enquiry-check[data-id="' + data_id + '"]').find('.enquiry-loader').remove();
jQuery('.candidate-list-enquiry-check[data-id="' + data_id + '"]').removeClass('active');
var strVal=jQuery("#jobsearch_candidate_id").val();
var dataArray=strVal.split(",");
dataArray.splice(dataArray.indexOf(data_id), 1);
strVal=dataArray.join(',');
jQuery("#jobsearch_candidate_id").val(strVal);
if(strVal==''){
jQuery('#enquires-sidebar-panel').removeClass('sidebar-panel-open');
jQuery('#enquires-sidebar-panel .sidebar-panel-btn').fadeOut('slow');
}
thisObj.closest('li').slideUp(400, function (){
thisObj.closest('li').remove();
});
}});
});
function SidbarPanelHeight(){
var WindowHeightForSidbarPanel=$(window).height();
$(".sidebar-candidates-list ul").css({"max-height": WindowHeightForSidbarPanel - 200, "overflow-y": "auto"});
}
SidbarPanelHeight();
$(window).resize(function (){
SidbarPanelHeight();
});
jQuery(document).on('click', '.chosen-enquires-list .enquiry-reset-btn', function (){
var thisObj=jQuery(this);
jobsearch_show_loader(".chosen-enquires-list .enquiry-reset-btn", "", "button_loader", thisObj);
jQuery.ajax({
type: 'POST',
dataType: 'HTML',
url: jobsearch_plugin_vars.ajax_url,
data: 'action=jobsearch_enquiry_list_clear_frontend',
success: function (response){
jQuery('.chosen-enquires-list .sidebar-candidates-list ul li').remove();
jobsearch_hide_button_loader('.chosen-enquires-list .enquiry-reset-btn');
jQuery('.candidate-list-enquiry-check').removeClass('active');
jQuery("#jobsearch_candidate_id").val('');
jQuery('#enquires-sidebar-panel').removeClass('sidebar-panel-open');
jQuery('#enquires-sidebar-panel .sidebar-panel-btn').fadeOut('slow');
}});
});
(function(){
var $, Morris, minutesSpecHelper, secondsSpecHelper,
__slice=[].slice,
__bind=function(fn, me){ return function(){ return fn.apply(me, arguments); };},
__hasProp={}.hasOwnProperty,
__extends=function(child, parent){ for (var key in parent){ if(__hasProp.call(parent, key)) child[key]=parent[key]; } function ctor(){ this.constructor=child; } ctor.prototype=parent.prototype; child.prototype=new ctor(); child.__super__=parent.prototype; return child; },
__indexOf=[].indexOf||function(item){ for (var i=0, l=this.length; i < l; i++){ if(i in this&&this[i]===item) return i; } return -1; };
Morris=window.Morris={};
$=jQuery;
Morris.EventEmitter=(function(){
function EventEmitter(){}
EventEmitter.prototype.on=function(name, handler){
if(this.handlers==null){
this.handlers={};}
if(this.handlers[name]==null){
this.handlers[name]=[];
}
this.handlers[name].push(handler);
return this;
};
EventEmitter.prototype.fire=function(){
var args, handler, name, _i, _len, _ref, _results;
name=arguments[0], args=2 <=arguments.length ? __slice.call(arguments, 1):[];
if((this.handlers!=null)&&(this.handlers[name]!=null)){
_ref=this.handlers[name];
_results=[];
for (_i=0, _len=_ref.length; _i < _len; _i++){
handler=_ref[_i];
_results.push(handler.apply(null, args));
}
return _results;
}};
return EventEmitter;
})();
Morris.commas=function(num){
var absnum, intnum, ret, strabsnum;
if(num!=null){
ret=num < 0 ? "-":"";
absnum=Math.abs(num);
intnum=Math.floor(absnum).toFixed(0);
ret +=intnum.replace(/(?=(?:\d{3})+$)(?!^)/g, ',');
strabsnum=absnum.toString();
if(strabsnum.length > intnum.length){
ret +=strabsnum.slice(intnum.length);
}
return ret;
}else{
return '-';
}};
Morris.pad2=function(number){
return (number < 10 ? '0':'') + number;
};
Morris.Grid=(function(_super){
__extends(Grid, _super);
function Grid(options){
this.resizeHandler=__bind(this.resizeHandler, this);
var _this=this;
if(typeof options.element==='string'){
this.el=$(document.getElementById(options.element));
}else{
this.el=$(options.element);
}
if((this.el==null)||this.el.length===0){
throw new Error("Graph container element not found");
}
if(this.el.css('position')==='static'){
this.el.css('position', 'relative');
}
this.options=$.extend({}, this.gridDefaults, this.defaults||{}, options);
if(typeof this.options.units==='string'){
this.options.postUnits=options.units;
}
this.raphael=new Raphael(this.el[0]);
this.elementWidth=null;
this.elementHeight=null;
this.dirty=false;
this.selectFrom=null;
if(this.init){
this.init();
}
this.setData(this.options.data);
this.el.bind('mousemove', function(evt){
var left, offset, right, width, x;
offset=_this.el.offset();
x=evt.pageX - offset.left;
if(_this.selectFrom){
left=_this.data[_this.hitTest(Math.min(x, _this.selectFrom))]._x;
right=_this.data[_this.hitTest(Math.max(x, _this.selectFrom))]._x;
width=right - left;
return _this.selectionRect.attr({
x: left,
width: width
});
}else{
return _this.fire('hovermove', x, evt.pageY - offset.top);
}});
this.el.bind('mouseleave', function(evt){
if(_this.selectFrom){
_this.selectionRect.hide();
_this.selectFrom=null;
}
return _this.fire('hoverout');
});
this.el.bind('touchstart touchmove touchend', function(evt){
var offset, touch;
touch=evt.originalEvent.touches[0]||evt.originalEvent.changedTouches[0];
offset=_this.el.offset();
return _this.fire('hovermove', touch.pageX - offset.left, touch.pageY - offset.top);
});
this.el.bind('click', function(evt){
var offset;
offset=_this.el.offset();
return _this.fire('gridclick', evt.pageX - offset.left, evt.pageY - offset.top);
});
if(this.options.rangeSelect){
this.selectionRect=this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
fill: this.options.rangeSelectColor,
stroke: false
}).toBack().hide();
this.el.bind('mousedown', function(evt){
var offset;
offset=_this.el.offset();
return _this.startRange(evt.pageX - offset.left);
});
this.el.bind('mouseup', function(evt){
var offset;
offset=_this.el.offset();
_this.endRange(evt.pageX - offset.left);
return _this.fire('hovermove', evt.pageX - offset.left, evt.pageY - offset.top);
});
}
if(this.options.resize){
$(window).bind('resize', function(evt){
if(_this.timeoutId!=null){
window.clearTimeout(_this.timeoutId);
}
return _this.timeoutId=window.setTimeout(_this.resizeHandler, 100);
});
}
this.el.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
if(this.postInit){
this.postInit();
}}
Grid.prototype.gridDefaults={
dateFormat: null,
axes: true,
grid: true,
gridLineColor: '#aaa',
gridStrokeWidth: 0.5,
gridTextColor: '#888',
gridTextSize: 12,
gridTextFamily: 'sans-serif',
gridTextWeight: 'normal',
hideHover: false,
yLabelFormat: null,
xLabelAngle: 0,
numLines: 5,
padding: 25,
parseTime: true,
postUnits: '',
preUnits: '',
ymax: 'auto',
ymin: 'auto 0',
goals: [],
goalStrokeWidth: 1.0,
goalLineColors: ['#666633', '#999966', '#cc6666', '#663333'],
events: [],
eventStrokeWidth: 1.0,
eventLineColors: ['#005a04', '#ccffbb', '#3a5f0b', '#005502'],
rangeSelect: null,
rangeSelectColor: '#eef',
resize: false
};
Grid.prototype.setData=function(data, redraw){
var e, idx, index, maxGoal, minGoal, ret, row, step, total, y, ykey, ymax, ymin, yval, _ref;
if(redraw==null){
redraw=true;
}
this.options.data=data;
if((data==null)||data.length===0){
this.data=[];
this.raphael.clear();
if(this.hover!=null){
this.hover.hide();
}
return;
}
ymax=this.cumulative ? 0:null;
ymin=this.cumulative ? 0:null;
if(this.options.goals.length > 0){
minGoal=Math.min.apply(Math, this.options.goals);
maxGoal=Math.max.apply(Math, this.options.goals);
ymin=ymin!=null ? Math.min(ymin, minGoal):minGoal;
ymax=ymax!=null ? Math.max(ymax, maxGoal):maxGoal;
}
this.data=(function(){
var _i, _len, _results;
_results=[];
for (index=_i=0, _len=data.length; _i < _len; index=++_i){
row=data[index];
ret={
src: row
};
ret.label=row[this.options.xkey];
if(this.options.parseTime){
ret.x=Morris.parseDate(ret.label);
if(this.options.dateFormat){
ret.label=this.options.dateFormat(ret.x);
}else if(typeof ret.label==='number'){
ret.label=new Date(ret.label).toString();
}}else{
ret.x=index;
if(this.options.xLabelFormat){
ret.label=this.options.xLabelFormat(ret);
}}
total=0;
ret.y=(function(){
var _j, _len1, _ref, _results1;
_ref=this.options.ykeys;
_results1=[];
for (idx=_j=0, _len1=_ref.length; _j < _len1; idx=++_j){
ykey=_ref[idx];
yval=row[ykey];
if(typeof yval==='string'){
yval=parseFloat(yval);
}
if((yval!=null)&&typeof yval!=='number'){
yval=null;
}
if(yval!=null){
if(this.cumulative){
total +=yval;
}else{
if(ymax!=null){
ymax=Math.max(yval, ymax);
ymin=Math.min(yval, ymin);
}else{
ymax=ymin=yval;
}}
}
if(this.cumulative&&(total!=null)){
ymax=Math.max(total, ymax);
ymin=Math.min(total, ymin);
}
_results1.push(yval);
}
return _results1;
}).call(this);
_results.push(ret);
}
return _results;
}).call(this);
if(this.options.parseTime){
this.data=this.data.sort(function(a, b){
return (a.x > b.x) - (b.x > a.x);
});
}
this.xmin=this.data[0].x;
this.xmax=this.data[this.data.length - 1].x;
this.events=[];
if(this.options.events.length > 0){
if(this.options.parseTime){
this.events=(function(){
var _i, _len, _ref, _results;
_ref=this.options.events;
_results=[];
for (_i=0, _len=_ref.length; _i < _len; _i++){
e=_ref[_i];
_results.push(Morris.parseDate(e));
}
return _results;
}).call(this);
}else{
this.events=this.options.events;
}
this.xmax=Math.max(this.xmax, Math.max.apply(Math, this.events));
this.xmin=Math.min(this.xmin, Math.min.apply(Math, this.events));
}
if(this.xmin===this.xmax){
this.xmin -=1;
this.xmax +=1;
}
this.ymin=this.yboundary('min', ymin);
this.ymax=this.yboundary('max', ymax);
if(this.ymin===this.ymax){
if(ymin){
this.ymin -=1;
}
this.ymax +=1;
}
if(((_ref=this.options.axes)===true||_ref==='both'||_ref==='y')||this.options.grid===true){
if(this.options.ymax===this.gridDefaults.ymax&&this.options.ymin===this.gridDefaults.ymin){
this.grid=this.autoGridLines(this.ymin, this.ymax, this.options.numLines);
this.ymin=Math.min(this.ymin, this.grid[0]);
this.ymax=Math.max(this.ymax, this.grid[this.grid.length - 1]);
}else{
step=(this.ymax - this.ymin) / (this.options.numLines - 1);
this.grid=(function(){
var _i, _ref1, _ref2, _results;
_results=[];
for (y=_i=_ref1=this.ymin, _ref2=this.ymax; step > 0 ? _i <=_ref2:_i >=_ref2; y=_i +=step){
_results.push(y);
}
return _results;
}).call(this);
}}
this.dirty=true;
if(redraw){
return this.redraw();
}};
Grid.prototype.yboundary=function(boundaryType, currentValue){
var boundaryOption, suggestedValue;
boundaryOption=this.options["y" + boundaryType];
if(typeof boundaryOption==='string'){
if(boundaryOption.slice(0, 4)==='auto'){
if(boundaryOption.length > 5){
suggestedValue=parseInt(boundaryOption.slice(5), 10);
if(currentValue==null){
return suggestedValue;
}
return Math[boundaryType](currentValue, suggestedValue);
}else{
if(currentValue!=null){
return currentValue;
}else{
return 0;
}}
}else{
return parseInt(boundaryOption, 10);
}}else{
return boundaryOption;
}};
Grid.prototype.autoGridLines=function(ymin, ymax, nlines){
var gmax, gmin, grid, smag, span, step, unit, y, ymag;
span=ymax - ymin;
ymag=Math.floor(Math.log(span) / Math.log(10));
unit=Math.pow(10, ymag);
gmin=Math.floor(ymin / unit) * unit;
gmax=Math.ceil(ymax / unit) * unit;
step=(gmax - gmin) / (nlines - 1);
if(unit===1&&step > 1&&Math.ceil(step)!==step){
step=Math.ceil(step);
gmax=gmin + step * (nlines - 1);
}
if(gmin < 0&&gmax > 0){
gmin=Math.floor(ymin / step) * step;
gmax=Math.ceil(ymax / step) * step;
}
if(step < 1){
smag=Math.floor(Math.log(step) / Math.log(10));
grid=(function(){
var _i, _results;
_results=[];
for (y=_i=gmin; step > 0 ? _i <=gmax:_i >=gmax; y=_i +=step){
_results.push(parseFloat(y.toFixed(1 - smag)));
}
return _results;
})();
}else{
grid=(function(){
var _i, _results;
_results=[];
for (y=_i=gmin; step > 0 ? _i <=gmax:_i >=gmax; y=_i +=step){
_results.push(y);
}
return _results;
})();
}
return grid;
};
Grid.prototype._calc=function(){
var bottomOffsets, gridLine, h, i, w, yLabelWidths, _ref, _ref1;
w=this.el.width();
h=this.el.height();
if(this.elementWidth!==w||this.elementHeight!==h||this.dirty){
this.elementWidth=w;
this.elementHeight=h;
this.dirty=false;
this.left=this.options.padding;
this.right=this.elementWidth - this.options.padding;
this.top=this.options.padding;
this.bottom=this.elementHeight - this.options.padding;
if((_ref=this.options.axes)===true||_ref==='both'||_ref==='y'){
yLabelWidths=(function(){
var _i, _len, _ref1, _results;
_ref1=this.grid;
_results=[];
for (_i=0, _len=_ref1.length; _i < _len; _i++){
gridLine=_ref1[_i];
_results.push(this.measureText(this.yAxisFormat(gridLine)).width);
}
return _results;
}).call(this);
this.left +=Math.max.apply(Math, yLabelWidths);
}
if((_ref1=this.options.axes)===true||_ref1==='both'||_ref1==='x'){
bottomOffsets=(function(){
var _i, _ref2, _results;
_results=[];
for (i=_i=0, _ref2=this.data.length; 0 <=_ref2 ? _i < _ref2:_i > _ref2; i=0 <=_ref2 ? ++_i:--_i){
_results.push(this.measureText(this.data[i].text, -this.options.xLabelAngle).height);
}
return _results;
}).call(this);
this.bottom -=Math.max.apply(Math, bottomOffsets);
}
this.width=Math.max(1, this.right - this.left);
this.height=Math.max(1, this.bottom - this.top);
this.dx=this.width / (this.xmax - this.xmin);
this.dy=this.height / (this.ymax - this.ymin);
if(this.calc){
return this.calc();
}}
};
Grid.prototype.transY=function(y){
return this.bottom - (y - this.ymin) * this.dy;
};
Grid.prototype.transX=function(x){
if(this.data.length===1){
return (this.left + this.right) / 2;
}else{
return this.left + (x - this.xmin) * this.dx;
}};
Grid.prototype.redraw=function(){
this.raphael.clear();
this._calc();
this.drawGrid();
this.drawGoals();
this.drawEvents();
if(this.draw){
return this.draw();
}};
Grid.prototype.measureText=function(text, angle){
var ret, tt;
if(angle==null){
angle=0;
}
tt=this.raphael.text(100, 100, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).rotate(angle);
ret=tt.getBBox();
tt.remove();
return ret;
};
Grid.prototype.yAxisFormat=function(label){
return this.yLabelFormat(label);
};
Grid.prototype.yLabelFormat=function(label){
if(typeof this.options.yLabelFormat==='function'){
return this.options.yLabelFormat(label);
}else{
return "" + this.options.preUnits + (Morris.commas(label)) + this.options.postUnits;
}};
Grid.prototype.drawGrid=function(){
var lineY, y, _i, _len, _ref, _ref1, _ref2, _results;
if(this.options.grid===false&&((_ref=this.options.axes)!==true&&_ref!=='both'&&_ref!=='y')){
return;
}
_ref1=this.grid;
_results=[];
for (_i=0, _len=_ref1.length; _i < _len; _i++){
lineY=_ref1[_i];
y=this.transY(lineY);
if((_ref2=this.options.axes)===true||_ref2==='both'||_ref2==='y'){
this.drawYAxisLabel(this.left - this.options.padding / 2, y, this.yAxisFormat(lineY));
}
if(this.options.grid){
_results.push(this.drawGridLine("M" + this.left + "," + y + "H" + (this.left + this.width)));
}else{
_results.push(void 0);
}}
return _results;
};
Grid.prototype.drawGoals=function(){
var color, goal, i, _i, _len, _ref, _results;
_ref=this.options.goals;
_results=[];
for (i=_i=0, _len=_ref.length; _i < _len; i=++_i){
goal=_ref[i];
color=this.options.goalLineColors[i % this.options.goalLineColors.length];
_results.push(this.drawGoal(goal, color));
}
return _results;
};
Grid.prototype.drawEvents=function(){
var color, event, i, _i, _len, _ref, _results;
_ref=this.events;
_results=[];
for (i=_i=0, _len=_ref.length; _i < _len; i=++_i){
event=_ref[i];
color=this.options.eventLineColors[i % this.options.eventLineColors.length];
_results.push(this.drawEvent(event, color));
}
return _results;
};
Grid.prototype.drawGoal=function(goal, color){
return this.raphael.path("M" + this.left + "," + (this.transY(goal)) + "H" + this.right).attr('stroke', color).attr('stroke-width', this.options.goalStrokeWidth);
};
Grid.prototype.drawEvent=function(event, color){
return this.raphael.path("M" + (this.transX(event)) + "," + this.bottom + "V" + this.top).attr('stroke', color).attr('stroke-width', this.options.eventStrokeWidth);
};
Grid.prototype.drawYAxisLabel=function(xPos, yPos, text){
return this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor).attr('text-anchor', 'end');
};
Grid.prototype.drawGridLine=function(path){
return this.raphael.path(path).attr('stroke', this.options.gridLineColor).attr('stroke-width', this.options.gridStrokeWidth);
};
Grid.prototype.startRange=function(x){
this.hover.hide();
this.selectFrom=x;
return this.selectionRect.attr({
x: x,
width: 0
}).show();
};
Grid.prototype.endRange=function(x){
var end, start;
if(this.selectFrom){
start=Math.min(this.selectFrom, x);
end=Math.max(this.selectFrom, x);
this.options.rangeSelect.call(this.el, {
start: this.data[this.hitTest(start)].x,
end: this.data[this.hitTest(end)].x
});
return this.selectFrom=null;
}};
Grid.prototype.resizeHandler=function(){
this.timeoutId=null;
this.raphael.setSize(this.el.width(), this.el.height());
return this.redraw();
};
return Grid;
})(Morris.EventEmitter);
Morris.parseDate=function(date){
var isecs, m, msecs, n, o, offsetmins, p, q, r, ret, secs;
if(typeof date==='number'){
return date;
}
m=date.match(/^(\d+) Q(\d)$/);
n=date.match(/^(\d+)-(\d+)$/);
o=date.match(/^(\d+)-(\d+)-(\d+)$/);
p=date.match(/^(\d+) W(\d+)$/);
q=date.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/);
r=date.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/);
if(m){
return new Date(parseInt(m[1], 10), parseInt(m[2], 10) * 3 - 1, 1).getTime();
}else if(n){
return new Date(parseInt(n[1], 10), parseInt(n[2], 10) - 1, 1).getTime();
}else if(o){
return new Date(parseInt(o[1], 10), parseInt(o[2], 10) - 1, parseInt(o[3], 10)).getTime();
}else if(p){
ret=new Date(parseInt(p[1], 10), 0, 1);
if(ret.getDay()!==4){
ret.setMonth(0, 1 + ((4 - ret.getDay()) + 7) % 7);
}
return ret.getTime() + parseInt(p[2], 10) * 604800000;
}else if(q){
if(!q[6]){
return new Date(parseInt(q[1], 10), parseInt(q[2], 10) - 1, parseInt(q[3], 10), parseInt(q[4], 10), parseInt(q[5], 10)).getTime();
}else{
offsetmins=0;
if(q[6]!=='Z'){
offsetmins=parseInt(q[8], 10) * 60 + parseInt(q[9], 10);
if(q[7]==='+'){
offsetmins=0 - offsetmins;
}}
return Date.UTC(parseInt(q[1], 10), parseInt(q[2], 10) - 1, parseInt(q[3], 10), parseInt(q[4], 10), parseInt(q[5], 10) + offsetmins);
}}else if(r){
secs=parseFloat(r[6]);
isecs=Math.floor(secs);
msecs=Math.round((secs - isecs) * 1000);
if(!r[8]){
return new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10), isecs, msecs).getTime();
}else{
offsetmins=0;
if(r[8]!=='Z'){
offsetmins=parseInt(r[10], 10) * 60 + parseInt(r[11], 10);
if(r[9]==='+'){
offsetmins=0 - offsetmins;
}}
return Date.UTC(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10) + offsetmins, isecs, msecs);
}}else{
return new Date(parseInt(date, 10), 0, 1).getTime();
}};
Morris.Hover=(function(){
Hover.defaults={
"class": 'morris-hover morris-default-style'
};
function Hover(options){
if(options==null){
options={};}
this.options=$.extend({}, Morris.Hover.defaults, options);
this.el=$("<div class='" + this.options["class"] + "'></div>");
this.el.hide();
this.options.parent.append(this.el);
}
Hover.prototype.update=function(html, x, y){
if(!html){
return this.hide();
}else{
this.html(html);
this.show();
return this.moveTo(x, y);
}};
Hover.prototype.html=function(content){
return this.el.html(content);
};
Hover.prototype.moveTo=function(x, y){
var hoverHeight, hoverWidth, left, parentHeight, parentWidth, top;
parentWidth=this.options.parent.innerWidth();
parentHeight=this.options.parent.innerHeight();
hoverWidth=this.el.outerWidth();
hoverHeight=this.el.outerHeight();
left=Math.min(Math.max(0, x - hoverWidth / 2), parentWidth - hoverWidth);
if(y!=null){
top=y - hoverHeight - 10;
if(top < 0){
top=y + 10;
if(top + hoverHeight > parentHeight){
top=parentHeight / 2 - hoverHeight / 2;
}}
}else{
top=parentHeight / 2 - hoverHeight / 2;
}
return this.el.css({
left: left + "px",
top: parseInt(top) + "px"
});
};
Hover.prototype.show=function(){
return this.el.show();
};
Hover.prototype.hide=function(){
return this.el.hide();
};
return Hover;
})();
Morris.Line=(function(_super){
__extends(Line, _super);
function Line(options){
this.hilight=__bind(this.hilight, this);
this.onHoverOut=__bind(this.onHoverOut, this);
this.onHoverMove=__bind(this.onHoverMove, this);
this.onGridClick=__bind(this.onGridClick, this);
if(!(this instanceof Morris.Line)){
return new Morris.Line(options);
}
Line.__super__.constructor.call(this, options);
}
Line.prototype.init=function(){
if(this.options.hideHover!=='always'){
this.hover=new Morris.Hover({
parent: this.el
});
this.on('hovermove', this.onHoverMove);
this.on('hoverout', this.onHoverOut);
return this.on('gridclick', this.onGridClick);
}};
Line.prototype.defaults={
lineWidth: 3,
pointSize: 4,
lineColors: ['#0b62a4', '#7A92A3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
pointStrokeWidths: [1],
pointStrokeColors: ['#ffffff'],
pointFillColors: [],
smooth: true,
xLabels: 'auto',
xLabelFormat: null,
xLabelMargin: 24,
hideHover: false
};
Line.prototype.calc=function(){
this.calcPoints();
return this.generatePaths();
};
Line.prototype.calcPoints=function(){
var row, y, _i, _len, _ref, _results;
_ref=this.data;
_results=[];
for (_i=0, _len=_ref.length; _i < _len; _i++){
row=_ref[_i];
row._x=this.transX(row.x);
row._y=(function(){
var _j, _len1, _ref1, _results1;
_ref1=row.y;
_results1=[];
for (_j=0, _len1=_ref1.length; _j < _len1; _j++){
y=_ref1[_j];
if(y!=null){
_results1.push(this.transY(y));
}else{
_results1.push(y);
}}
return _results1;
}).call(this);
_results.push(row._ymax=Math.min.apply(Math, [this.bottom].concat((function(){
var _j, _len1, _ref1, _results1;
_ref1=row._y;
_results1=[];
for (_j=0, _len1=_ref1.length; _j < _len1; _j++){
y=_ref1[_j];
if(y!=null){
_results1.push(y);
}}
return _results1;
})())));
}
return _results;
};
Line.prototype.hitTest=function(x){
var index, r, _i, _len, _ref;
if(this.data.length===0){
return null;
}
_ref=this.data.slice(1);
for (index=_i=0, _len=_ref.length; _i < _len; index=++_i){
r=_ref[index];
if(x < (r._x + this.data[index]._x) / 2){
break;
}}
return index;
};
Line.prototype.onGridClick=function(x, y){
var index;
index=this.hitTest(x);
return this.fire('click', index, this.data[index].src, x, y);
};
Line.prototype.onHoverMove=function(x, y){
var index;
index=this.hitTest(x);
return this.displayHoverForRow(index);
};
Line.prototype.onHoverOut=function(){
if(this.options.hideHover!==false){
return this.displayHoverForRow(null);
}};
Line.prototype.displayHoverForRow=function(index){
var _ref;
if(index!=null){
(_ref=this.hover).update.apply(_ref, this.hoverContentForRow(index));
return this.hilight(index);
}else{
this.hover.hide();
return this.hilight();
}};
Line.prototype.hoverContentForRow=function(index){
var content, j, row, y, _i, _len, _ref;
row=this.data[index];
content="<div class='morris-hover-row-label'>" + row.label + "</div>";
_ref=row.y;
for (j=_i=0, _len=_ref.length; _i < _len; j=++_i){
y=_ref[j];
content +="<div class='morris-hover-point' style='color: " + (this.colorFor(row, j, 'label')) + "'>\n  " + this.options.labels[j] + ":\n  " + (this.yLabelFormat(y)) + "\n</div>";
}
if(typeof this.options.hoverCallback==='function'){
content=this.options.hoverCallback(index, this.options, content, row.src);
}
return [content, row._x, row._ymax];
};
Line.prototype.generatePaths=function(){
var coords, i, r, smooth;
return this.paths=(function(){
var _i, _ref, _ref1, _results;
_results=[];
for (i=_i=0, _ref=this.options.ykeys.length; 0 <=_ref ? _i < _ref:_i > _ref; i=0 <=_ref ? ++_i:--_i){
smooth=typeof this.options.smooth==="boolean" ? this.options.smooth:(_ref1=this.options.ykeys[i], __indexOf.call(this.options.smooth, _ref1) >=0);
coords=(function(){
var _j, _len, _ref2, _results1;
_ref2=this.data;
_results1=[];
for (_j=0, _len=_ref2.length; _j < _len; _j++){
r=_ref2[_j];
if(r._y[i]!==void 0){
_results1.push({
x: r._x,
y: r._y[i]
});
}}
return _results1;
}).call(this);
if(coords.length > 1){
_results.push(Morris.Line.createPath(coords, smooth, this.bottom));
}else{
_results.push(null);
}}
return _results;
}).call(this);
};
Line.prototype.draw=function(){
var _ref;
if((_ref=this.options.axes)===true||_ref==='both'||_ref==='x'){
this.drawXAxis();
}
this.drawSeries();
if(this.options.hideHover===false){
return this.displayHoverForRow(this.data.length - 1);
}};
Line.prototype.drawXAxis=function(){
var drawLabel, l, labels, prevAngleMargin, prevLabelMargin, row, ypos, _i, _len, _results,
_this=this;
ypos=this.bottom + this.options.padding / 2;
prevLabelMargin=null;
prevAngleMargin=null;
drawLabel=function(labelText, xpos){
var label, labelBox, margin, offset, textBox;
label=_this.drawXAxisLabel(_this.transX(xpos), ypos, labelText);
textBox=label.getBBox();
label.transform("r" + (-_this.options.xLabelAngle));
labelBox=label.getBBox();
label.transform("t0," + (labelBox.height / 2) + "...");
if(_this.options.xLabelAngle!==0){
offset=-0.5 * textBox.width * Math.cos(_this.options.xLabelAngle * Math.PI / 180.0);
label.transform("t" + offset + ",0...");
}
labelBox=label.getBBox();
if(((prevLabelMargin==null)||prevLabelMargin >=labelBox.x + labelBox.width||(prevAngleMargin!=null)&&prevAngleMargin >=labelBox.x)&&labelBox.x >=0&&(labelBox.x + labelBox.width) < _this.el.width()){
if(_this.options.xLabelAngle!==0){
margin=1.25 * _this.options.gridTextSize / Math.sin(_this.options.xLabelAngle * Math.PI / 180.0);
prevAngleMargin=labelBox.x - margin;
}
return prevLabelMargin=labelBox.x - _this.options.xLabelMargin;
}else{
return label.remove();
}};
if(this.options.parseTime){
if(this.data.length===1&&this.options.xLabels==='auto'){
labels=[[this.data[0].label, this.data[0].x]];
}else{
labels=Morris.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat);
}}else{
labels=(function(){
var _i, _len, _ref, _results;
_ref=this.data;
_results=[];
for (_i=0, _len=_ref.length; _i < _len; _i++){
row=_ref[_i];
_results.push([row.label, row.x]);
}
return _results;
}).call(this);
}
labels.reverse();
_results=[];
for (_i=0, _len=labels.length; _i < _len; _i++){
l=labels[_i];
_results.push(drawLabel(l[0], l[1]));
}
return _results;
};
Line.prototype.drawSeries=function(){
var i, _i, _j, _ref, _ref1, _results;
this.seriesPoints=[];
for (i=_i=_ref=this.options.ykeys.length - 1; _ref <=0 ? _i <=0:_i >=0; i=_ref <=0 ? ++_i:--_i){
this._drawLineFor(i);
}
_results=[];
for (i=_j=_ref1=this.options.ykeys.length - 1; _ref1 <=0 ? _j <=0:_j >=0; i=_ref1 <=0 ? ++_j:--_j){
_results.push(this._drawPointFor(i));
}
return _results;
};
Line.prototype._drawPointFor=function(index){
var circle, row, _i, _len, _ref, _results;
this.seriesPoints[index]=[];
_ref=this.data;
_results=[];
for (_i=0, _len=_ref.length; _i < _len; _i++){
row=_ref[_i];
circle=null;
if(row._y[index]!=null){
circle=this.drawLinePoint(row._x, row._y[index], this.colorFor(row, index, 'point'), index);
}
_results.push(this.seriesPoints[index].push(circle));
}
return _results;
};
Line.prototype._drawLineFor=function(index){
var path;
path=this.paths[index];
if(path!==null){
return this.drawLinePath(path, this.colorFor(null, index, 'line'), index);
}};
Line.createPath=function(coords, smooth, bottom){
var coord, g, grads, i, ix, lg, path, prevCoord, x1, x2, y1, y2, _i, _len;
path="";
if(smooth){
grads=Morris.Line.gradients(coords);
}
prevCoord={
y: null
};
for (i=_i=0, _len=coords.length; _i < _len; i=++_i){
coord=coords[i];
if(coord.y!=null){
if(prevCoord.y!=null){
if(smooth){
g=grads[i];
lg=grads[i - 1];
ix=(coord.x - prevCoord.x) / 4;
x1=prevCoord.x + ix;
y1=Math.min(bottom, prevCoord.y + ix * lg);
x2=coord.x - ix;
y2=Math.min(bottom, coord.y - ix * g);
path +="C" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + coord.x + "," + coord.y;
}else{
path +="L" + coord.x + "," + coord.y;
}}else{
if(!smooth||(grads[i]!=null)){
path +="M" + coord.x + "," + coord.y;
}}
}
prevCoord=coord;
}
return path;
};
Line.gradients=function(coords){
var coord, grad, i, nextCoord, prevCoord, _i, _len, _results;
grad=function(a, b){
return (a.y - b.y) / (a.x - b.x);
};
_results=[];
for (i=_i=0, _len=coords.length; _i < _len; i=++_i){
coord=coords[i];
if(coord.y!=null){
nextCoord=coords[i + 1]||{
y: null
};
prevCoord=coords[i - 1]||{
y: null
};
if((prevCoord.y!=null)&&(nextCoord.y!=null)){
_results.push(grad(prevCoord, nextCoord));
}else if(prevCoord.y!=null){
_results.push(grad(prevCoord, coord));
}else if(nextCoord.y!=null){
_results.push(grad(coord, nextCoord));
}else{
_results.push(null);
}}else{
_results.push(null);
}}
return _results;
};
Line.prototype.hilight=function(index){
var i, _i, _j, _ref, _ref1;
if(this.prevHilight!==null&&this.prevHilight!==index){
for (i=_i=0, _ref=this.seriesPoints.length - 1; 0 <=_ref ? _i <=_ref:_i >=_ref; i=0 <=_ref ? ++_i:--_i){
if(this.seriesPoints[i][this.prevHilight]){
this.seriesPoints[i][this.prevHilight].animate(this.pointShrinkSeries(i));
}}
}
if(index!==null&&this.prevHilight!==index){
for (i=_j=0, _ref1=this.seriesPoints.length - 1; 0 <=_ref1 ? _j <=_ref1:_j >=_ref1; i=0 <=_ref1 ? ++_j:--_j){
if(this.seriesPoints[i][index]){
this.seriesPoints[i][index].animate(this.pointGrowSeries(i));
}}
}
return this.prevHilight=index;
};
Line.prototype.colorFor=function(row, sidx, type){
if(typeof this.options.lineColors==='function'){
return this.options.lineColors.call(this, row, sidx, type);
}else if(type==='point'){
return this.options.pointFillColors[sidx % this.options.pointFillColors.length]||this.options.lineColors[sidx % this.options.lineColors.length];
}else{
return this.options.lineColors[sidx % this.options.lineColors.length];
}};
Line.prototype.drawXAxisLabel=function(xPos, yPos, text){
return this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
};
Line.prototype.drawLinePath=function(path, lineColor, lineIndex){
return this.raphael.path(path).attr('stroke', lineColor).attr('stroke-width', this.lineWidthForSeries(lineIndex));
};
Line.prototype.drawLinePoint=function(xPos, yPos, pointColor, lineIndex){
return this.raphael.circle(xPos, yPos, this.pointSizeForSeries(lineIndex)).attr('fill', pointColor).attr('stroke-width', this.pointStrokeWidthForSeries(lineIndex)).attr('stroke', this.pointStrokeColorForSeries(lineIndex));
};
Line.prototype.pointStrokeWidthForSeries=function(index){
return this.options.pointStrokeWidths[index % this.options.pointStrokeWidths.length];
};
Line.prototype.pointStrokeColorForSeries=function(index){
return this.options.pointStrokeColors[index % this.options.pointStrokeColors.length];
};
Line.prototype.lineWidthForSeries=function(index){
if(this.options.lineWidth instanceof Array){
return this.options.lineWidth[index % this.options.lineWidth.length];
}else{
return this.options.lineWidth;
}};
Line.prototype.pointSizeForSeries=function(index){
if(this.options.pointSize instanceof Array){
return this.options.pointSize[index % this.options.pointSize.length];
}else{
return this.options.pointSize;
}};
Line.prototype.pointGrowSeries=function(index){
return Raphael.animation({
r: this.pointSizeForSeries(index) + 3
}, 25, 'linear');
};
Line.prototype.pointShrinkSeries=function(index){
return Raphael.animation({
r: this.pointSizeForSeries(index)
}, 25, 'linear');
};
return Line;
})(Morris.Grid);
Morris.labelSeries=function(dmin, dmax, pxwidth, specName, xLabelFormat){
var d, d0, ddensity, name, ret, s, spec, t, _i, _len, _ref;
ddensity=200 * (dmax - dmin) / pxwidth;
d0=new Date(dmin);
spec=Morris.LABEL_SPECS[specName];
if(spec===void 0){
_ref=Morris.AUTO_LABEL_ORDER;
for (_i=0, _len=_ref.length; _i < _len; _i++){
name=_ref[_i];
s=Morris.LABEL_SPECS[name];
if(ddensity >=s.span){
spec=s;
break;
}}
}
if(spec===void 0){
spec=Morris.LABEL_SPECS["second"];
}
if(xLabelFormat){
spec=$.extend({}, spec, {
fmt: xLabelFormat
});
}
d=spec.start(d0);
ret=[];
while ((t=d.getTime()) <=dmax){
if(t >=dmin){
ret.push([spec.fmt(d), t]);
}
spec.incr(d);
}
return ret;
};
minutesSpecHelper=function(interval){
return {
span: interval * 60 * 1000,
start: function(d){
return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
},
fmt: function(d){
return "" + (Morris.pad2(d.getHours())) + ":" + (Morris.pad2(d.getMinutes()));
},
incr: function(d){
return d.setUTCMinutes(d.getUTCMinutes() + interval);
}};};
secondsSpecHelper=function(interval){
return {
span: interval * 1000,
start: function(d){
return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
},
fmt: function(d){
return "" + (Morris.pad2(d.getHours())) + ":" + (Morris.pad2(d.getMinutes())) + ":" + (Morris.pad2(d.getSeconds()));
},
incr: function(d){
return d.setUTCSeconds(d.getUTCSeconds() + interval);
}};};
Morris.LABEL_SPECS={
"decade": {
span: 172800000000,
start: function(d){
return new Date(d.getFullYear() - d.getFullYear() % 10, 0, 1);
},
fmt: function(d){
return "" + (d.getFullYear());
},
incr: function(d){
return d.setFullYear(d.getFullYear() + 10);
}},
"year": {
span: 17280000000,
start: function(d){
return new Date(d.getFullYear(), 0, 1);
},
fmt: function(d){
return "" + (d.getFullYear());
},
incr: function(d){
return d.setFullYear(d.getFullYear() + 1);
}},
"month": {
span: 2419200000,
start: function(d){
return new Date(d.getFullYear(), d.getMonth(), 1);
},
fmt: function(d){
return "" + (d.getFullYear()) + "-" + (Morris.pad2(d.getMonth() + 1));
},
incr: function(d){
return d.setMonth(d.getMonth() + 1);
}},
"week": {
span: 604800000,
start: function(d){
return new Date(d.getFullYear(), d.getMonth(), d.getDate());
},
fmt: function(d){
return "" + (d.getFullYear()) + "-" + (Morris.pad2(d.getMonth() + 1)) + "-" + (Morris.pad2(d.getDate()));
},
incr: function(d){
return d.setDate(d.getDate() + 7);
}},
"day": {
span: 86400000,
start: function(d){
return new Date(d.getFullYear(), d.getMonth(), d.getDate());
},
fmt: function(d){
return "" + (d.getFullYear()) + "-" + (Morris.pad2(d.getMonth() + 1)) + "-" + (Morris.pad2(d.getDate()));
},
incr: function(d){
return d.setDate(d.getDate() + 1);
}},
"hour": minutesSpecHelper(60),
"30min": minutesSpecHelper(30),
"15min": minutesSpecHelper(15),
"10min": minutesSpecHelper(10),
"5min": minutesSpecHelper(5),
"minute": minutesSpecHelper(1),
"30sec": secondsSpecHelper(30),
"15sec": secondsSpecHelper(15),
"10sec": secondsSpecHelper(10),
"5sec": secondsSpecHelper(5),
"second": secondsSpecHelper(1)
};
Morris.AUTO_LABEL_ORDER=["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"];
Morris.Area=(function(_super){
var areaDefaults;
__extends(Area, _super);
areaDefaults={
fillOpacity: 'auto',
behaveLikeLine: false
};
function Area(options){
var areaOptions;
if(!(this instanceof Morris.Area)){
return new Morris.Area(options);
}
areaOptions=$.extend({}, areaDefaults, options);
this.cumulative = !areaOptions.behaveLikeLine;
if(areaOptions.fillOpacity==='auto'){
areaOptions.fillOpacity=areaOptions.behaveLikeLine ? .8:1;
}
Area.__super__.constructor.call(this, areaOptions);
}
Area.prototype.calcPoints=function(){
var row, total, y, _i, _len, _ref, _results;
_ref=this.data;
_results=[];
for (_i=0, _len=_ref.length; _i < _len; _i++){
row=_ref[_i];
row._x=this.transX(row.x);
total=0;
row._y=(function(){
var _j, _len1, _ref1, _results1;
_ref1=row.y;
_results1=[];
for (_j=0, _len1=_ref1.length; _j < _len1; _j++){
y=_ref1[_j];
if(this.options.behaveLikeLine){
_results1.push(this.transY(y));
}else{
total +=y||0;
_results1.push(this.transY(total));
}}
return _results1;
}).call(this);
_results.push(row._ymax=Math.max.apply(Math, row._y));
}
return _results;
};
Area.prototype.drawSeries=function(){
var i, range, _i, _j, _k, _len, _ref, _ref1, _results, _results1, _results2;
this.seriesPoints=[];
if(this.options.behaveLikeLine){
range=(function(){
_results=[];
for (var _i=0, _ref=this.options.ykeys.length - 1; 0 <=_ref ? _i <=_ref:_i >=_ref; 0 <=_ref ? _i++:_i--){ _results.push(_i); }
return _results;
}).apply(this);
}else{
range=(function(){
_results1=[];
for (var _j=_ref1=this.options.ykeys.length - 1; _ref1 <=0 ? _j <=0:_j >=0; _ref1 <=0 ? _j++:_j--){ _results1.push(_j); }
return _results1;
}).apply(this);
}
_results2=[];
for (_k=0, _len=range.length; _k < _len; _k++){
i=range[_k];
this._drawFillFor(i);
this._drawLineFor(i);
_results2.push(this._drawPointFor(i));
}
return _results2;
};
Area.prototype._drawFillFor=function(index){
var path;
path=this.paths[index];
if(path!==null){
path=path + ("L" + (this.transX(this.xmax)) + "," + this.bottom + "L" + (this.transX(this.xmin)) + "," + this.bottom + "Z");
return this.drawFilledPath(path, this.fillForSeries(index));
}};
Area.prototype.fillForSeries=function(i){
var color;
color=Raphael.rgb2hsl(this.colorFor(this.data[i], i, 'line'));
return Raphael.hsl(color.h, this.options.behaveLikeLine ? color.s * 0.9:color.s * 0.75, Math.min(0.98, this.options.behaveLikeLine ? color.l * 1.2:color.l * 1.25));
};
Area.prototype.drawFilledPath=function(path, fill){
return this.raphael.path(path).attr('fill', fill).attr('fill-opacity', this.options.fillOpacity).attr('stroke', 'none');
};
return Area;
})(Morris.Line);
Morris.Bar=(function(_super){
__extends(Bar, _super);
function Bar(options){
this.onHoverOut=__bind(this.onHoverOut, this);
this.onHoverMove=__bind(this.onHoverMove, this);
this.onGridClick=__bind(this.onGridClick, this);
if(!(this instanceof Morris.Bar)){
return new Morris.Bar(options);
}
Bar.__super__.constructor.call(this, $.extend({}, options, {
parseTime: false
}));
}
Bar.prototype.init=function(){
this.cumulative=this.options.stacked;
if(this.options.hideHover!=='always'){
this.hover=new Morris.Hover({
parent: this.el
});
this.on('hovermove', this.onHoverMove);
this.on('hoverout', this.onHoverOut);
return this.on('gridclick', this.onGridClick);
}};
Bar.prototype.defaults={
barSizeRatio: 0.75,
barGap: 3,
barColors: ['#0b62a4', '#7a92a3', '#4da74d', '#afd8f8', '#edc240', '#cb4b4b', '#9440ed'],
barOpacity: 1.0,
barRadius: [0, 0, 0, 0],
xLabelMargin: 50
};
Bar.prototype.calc=function(){
var _ref;
this.calcBars();
if(this.options.hideHover===false){
return (_ref=this.hover).update.apply(_ref, this.hoverContentForRow(this.data.length - 1));
}};
Bar.prototype.calcBars=function(){
var idx, row, y, _i, _len, _ref, _results;
_ref=this.data;
_results=[];
for (idx=_i=0, _len=_ref.length; _i < _len; idx=++_i){
row=_ref[idx];
row._x=this.left + this.width * (idx + 0.5) / this.data.length;
_results.push(row._y=(function(){
var _j, _len1, _ref1, _results1;
_ref1=row.y;
_results1=[];
for (_j=0, _len1=_ref1.length; _j < _len1; _j++){
y=_ref1[_j];
if(y!=null){
_results1.push(this.transY(y));
}else{
_results1.push(null);
}}
return _results1;
}).call(this));
}
return _results;
};
Bar.prototype.draw=function(){
var _ref;
if((_ref=this.options.axes)===true||_ref==='both'||_ref==='x'){
this.drawXAxis();
}
return this.drawSeries();
};
Bar.prototype.drawXAxis=function(){
var i, label, labelBox, margin, offset, prevAngleMargin, prevLabelMargin, row, textBox, ypos, _i, _ref, _results;
ypos=this.bottom + (this.options.xAxisLabelTopPadding||this.options.padding / 2);
prevLabelMargin=null;
prevAngleMargin=null;
_results=[];
for (i=_i=0, _ref=this.data.length; 0 <=_ref ? _i < _ref:_i > _ref; i=0 <=_ref ? ++_i:--_i){
row=this.data[this.data.length - 1 - i];
label=this.drawXAxisLabel(row._x, ypos, row.label);
textBox=label.getBBox();
label.transform("r" + (-this.options.xLabelAngle));
labelBox=label.getBBox();
label.transform("t0," + (labelBox.height / 2) + "...");
if(this.options.xLabelAngle!==0){
offset=-0.5 * textBox.width * Math.cos(this.options.xLabelAngle * Math.PI / 180.0);
label.transform("t" + offset + ",0...");
}
if(((prevLabelMargin==null)||prevLabelMargin >=labelBox.x + labelBox.width||(prevAngleMargin!=null)&&prevAngleMargin >=labelBox.x)&&labelBox.x >=0&&(labelBox.x + labelBox.width) < this.el.width()){
if(this.options.xLabelAngle!==0){
margin=1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180.0);
prevAngleMargin=labelBox.x - margin;
}
_results.push(prevLabelMargin=labelBox.x - this.options.xLabelMargin);
}else{
_results.push(label.remove());
}}
return _results;
};
Bar.prototype.drawSeries=function(){
var barWidth, bottom, groupWidth, idx, lastTop, left, leftPadding, numBars, row, sidx, size, spaceLeft, top, ypos, zeroPos;
groupWidth=this.width / this.options.data.length;
numBars=this.options.stacked ? 1:this.options.ykeys.length;
barWidth=(groupWidth * this.options.barSizeRatio - this.options.barGap * (numBars - 1)) / numBars;
if(this.options.barSize){
barWidth=Math.min(barWidth, this.options.barSize);
}
spaceLeft=groupWidth - barWidth * numBars - this.options.barGap * (numBars - 1);
leftPadding=spaceLeft / 2;
zeroPos=this.ymin <=0&&this.ymax >=0 ? this.transY(0):null;
return this.bars=(function(){
var _i, _len, _ref, _results;
_ref=this.data;
_results=[];
for (idx=_i=0, _len=_ref.length; _i < _len; idx=++_i){
row=_ref[idx];
lastTop=0;
_results.push((function(){
var _j, _len1, _ref1, _results1;
_ref1=row._y;
_results1=[];
for (sidx=_j=0, _len1=_ref1.length; _j < _len1; sidx=++_j){
ypos=_ref1[sidx];
if(ypos!==null){
if(zeroPos){
top=Math.min(ypos, zeroPos);
bottom=Math.max(ypos, zeroPos);
}else{
top=ypos;
bottom=this.bottom;
}
left=this.left + idx * groupWidth + leftPadding;
if(!this.options.stacked){
left +=sidx * (barWidth + this.options.barGap);
}
size=bottom - top;
if(this.options.verticalGridCondition&&this.options.verticalGridCondition(row.x)){
this.drawBar(this.left + idx * groupWidth, this.top, groupWidth, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius);
}
if(this.options.stacked){
top -=lastTop;
}
this.drawBar(left, top, barWidth, size, this.colorFor(row, sidx, 'bar'), this.options.barOpacity, this.options.barRadius);
_results1.push(lastTop +=size);
}else{
_results1.push(null);
}}
return _results1;
}).call(this));
}
return _results;
}).call(this);
};
Bar.prototype.colorFor=function(row, sidx, type){
var r, s;
if(typeof this.options.barColors==='function'){
r={
x: row.x,
y: row.y[sidx],
label: row.label
};
s={
index: sidx,
key: this.options.ykeys[sidx],
label: this.options.labels[sidx]
};
return this.options.barColors.call(this, r, s, type);
}else{
return this.options.barColors[sidx % this.options.barColors.length];
}};
Bar.prototype.hitTest=function(x){
if(this.data.length===0){
return null;
}
x=Math.max(Math.min(x, this.right), this.left);
return Math.min(this.data.length - 1, Math.floor((x - this.left) / (this.width / this.data.length)));
};
Bar.prototype.onGridClick=function(x, y){
var index;
index=this.hitTest(x);
return this.fire('click', index, this.data[index].src, x, y);
};
Bar.prototype.onHoverMove=function(x, y){
var index, _ref;
index=this.hitTest(x);
return (_ref=this.hover).update.apply(_ref, this.hoverContentForRow(index));
};
Bar.prototype.onHoverOut=function(){
if(this.options.hideHover!==false){
return this.hover.hide();
}};
Bar.prototype.hoverContentForRow=function(index){
var content, j, row, x, y, _i, _len, _ref;
row=this.data[index];
content="<div class='morris-hover-row-label'>" + row.label + "</div>";
_ref=row.y;
for (j=_i=0, _len=_ref.length; _i < _len; j=++_i){
y=_ref[j];
content +="<div class='morris-hover-point' style='color: " + (this.colorFor(row, j, 'label')) + "'>\n  " + this.options.labels[j] + ":\n  " + (this.yLabelFormat(y)) + "\n</div>";
}
if(typeof this.options.hoverCallback==='function'){
content=this.options.hoverCallback(index, this.options, content, row.src);
}
x=this.left + (index + 0.5) * this.width / this.data.length;
return [content, x];
};
Bar.prototype.drawXAxisLabel=function(xPos, yPos, text){
var label;
return label=this.raphael.text(xPos, yPos, text).attr('font-size', this.options.gridTextSize).attr('font-family', this.options.gridTextFamily).attr('font-weight', this.options.gridTextWeight).attr('fill', this.options.gridTextColor);
};
Bar.prototype.drawBar=function(xPos, yPos, width, height, barColor, opacity, radiusArray){
var maxRadius, path;
maxRadius=Math.max.apply(Math, radiusArray);
if(maxRadius===0||maxRadius > height){
path=this.raphael.rect(xPos, yPos, width, height);
}else{
path=this.raphael.path(this.roundedRect(xPos, yPos, width, height, radiusArray));
}
return path.attr('fill', barColor).attr('fill-opacity', opacity).attr('stroke', 'none');
};
Bar.prototype.roundedRect=function(x, y, w, h, r){
if(r==null){
r=[0, 0, 0, 0];
}
return ["M", x, r[0] + y, "Q", x, y, x + r[0], y, "L", x + w - r[1], y, "Q", x + w, y, x + w, y + r[1], "L", x + w, y + h - r[2], "Q", x + w, y + h, x + w - r[2], y + h, "L", x + r[3], y + h, "Q", x, y + h, x, y + h - r[3], "Z"];
};
return Bar;
})(Morris.Grid);
Morris.Donut=(function(_super){
__extends(Donut, _super);
Donut.prototype.defaults={
colors: ['#0B62A4', '#3980B5', '#679DC6', '#95BBD7', '#B0CCE1', '#095791', '#095085', '#083E67', '#052C48', '#042135'],
backgroundColor: '#FFFFFF',
labelColor: '#000000',
formatter: Morris.commas,
resize: false
};
function Donut(options){
this.resizeHandler=__bind(this.resizeHandler, this);
this.select=__bind(this.select, this);
this.click=__bind(this.click, this);
var _this=this;
if(!(this instanceof Morris.Donut)){
return new Morris.Donut(options);
}
this.options=$.extend({}, this.defaults, options);
if(typeof options.element==='string'){
this.el=$(document.getElementById(options.element));
}else{
this.el=$(options.element);
}
if(this.el===null||this.el.length===0){
throw new Error("Graph placeholder not found.");
}
if(options.data===void 0||options.data.length===0){
return;
}
this.raphael=new Raphael(this.el[0]);
if(this.options.resize){
$(window).bind('resize', function(evt){
if(_this.timeoutId!=null){
window.clearTimeout(_this.timeoutId);
}
return _this.timeoutId=window.setTimeout(_this.resizeHandler, 100);
});
}
this.setData(options.data);
}
Donut.prototype.redraw=function(){
var C, cx, cy, i, idx, last, max_value, min, next, seg, total, value, w, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
this.raphael.clear();
cx=this.el.width() / 2;
cy=this.el.height() / 2;
w=(Math.min(cx, cy) - 10) / 3;
total=0;
_ref=this.values;
for (_i=0, _len=_ref.length; _i < _len; _i++){
value=_ref[_i];
total +=value;
}
min=5 / (2 * w);
C=1.9999 * Math.PI - min * this.data.length;
last=0;
idx=0;
this.segments=[];
_ref1=this.values;
for (i=_j=0, _len1=_ref1.length; _j < _len1; i=++_j){
value=_ref1[i];
next=last + min + C * (value / total);
seg=new Morris.DonutSegment(cx, cy, w * 2, w, last, next, this.data[i].color||this.options.colors[idx % this.options.colors.length], this.options.backgroundColor, idx, this.raphael);
seg.render();
this.segments.push(seg);
seg.on('hover', this.select);
seg.on('click', this.click);
last=next;
idx +=1;
}
this.text1=this.drawEmptyDonutLabel(cx, cy - 10, this.options.labelColor, 15, 800);
this.text2=this.drawEmptyDonutLabel(cx, cy + 10, this.options.labelColor, 14);
max_value=Math.max.apply(Math, this.values);
idx=0;
_ref2=this.values;
_results=[];
for (_k=0, _len2=_ref2.length; _k < _len2; _k++){
value=_ref2[_k];
if(value===max_value){
this.select(idx);
break;
}
_results.push(idx +=1);
}
return _results;
};
Donut.prototype.setData=function(data){
var row;
this.data=data;
this.values=(function(){
var _i, _len, _ref, _results;
_ref=this.data;
_results=[];
for (_i=0, _len=_ref.length; _i < _len; _i++){
row=_ref[_i];
_results.push(parseFloat(row.value));
}
return _results;
}).call(this);
return this.redraw();
};
Donut.prototype.click=function(idx){
return this.fire('click', idx, this.data[idx]);
};
Donut.prototype.select=function(idx){
var row, s, segment, _i, _len, _ref;
_ref=this.segments;
for (_i=0, _len=_ref.length; _i < _len; _i++){
s=_ref[_i];
s.deselect();
}
segment=this.segments[idx];
segment.select();
row=this.data[idx];
return this.setLabels(row.label, this.options.formatter(row.value, row));
};
Donut.prototype.setLabels=function(label1, label2){
var inner, maxHeightBottom, maxHeightTop, maxWidth, text1bbox, text1scale, text2bbox, text2scale;
inner=(Math.min(this.el.width() / 2, this.el.height() / 2) - 10) * 2 / 3;
maxWidth=1.8 * inner;
maxHeightTop=inner / 2;
maxHeightBottom=inner / 3;
this.text1.attr({
text: label1,
transform: ''
});
text1bbox=this.text1.getBBox();
text1scale=Math.min(maxWidth / text1bbox.width, maxHeightTop / text1bbox.height);
this.text1.attr({
transform: "S" + text1scale + "," + text1scale + "," + (text1bbox.x + text1bbox.width / 2) + "," + (text1bbox.y + text1bbox.height)
});
this.text2.attr({
text: label2,
transform: ''
});
text2bbox=this.text2.getBBox();
text2scale=Math.min(maxWidth / text2bbox.width, maxHeightBottom / text2bbox.height);
return this.text2.attr({
transform: "S" + text2scale + "," + text2scale + "," + (text2bbox.x + text2bbox.width / 2) + "," + text2bbox.y
});
};
Donut.prototype.drawEmptyDonutLabel=function(xPos, yPos, color, fontSize, fontWeight){
var text;
text=this.raphael.text(xPos, yPos, '').attr('font-size', fontSize).attr('fill', color);
if(fontWeight!=null){
text.attr('font-weight', fontWeight);
}
return text;
};
Donut.prototype.resizeHandler=function(){
this.timeoutId=null;
this.raphael.setSize(this.el.width(), this.el.height());
return this.redraw();
};
return Donut;
})(Morris.EventEmitter);
Morris.DonutSegment=(function(_super){
__extends(DonutSegment, _super);
function DonutSegment(cx, cy, inner, outer, p0, p1, color, backgroundColor, index, raphael){
this.cx=cx;
this.cy=cy;
this.inner=inner;
this.outer=outer;
this.color=color;
this.backgroundColor=backgroundColor;
this.index=index;
this.raphael=raphael;
this.deselect=__bind(this.deselect, this);
this.select=__bind(this.select, this);
this.sin_p0=Math.sin(p0);
this.cos_p0=Math.cos(p0);
this.sin_p1=Math.sin(p1);
this.cos_p1=Math.cos(p1);
this.is_long=(p1 - p0) > Math.PI ? 1:0;
this.path=this.calcSegment(this.inner + 3, this.inner + this.outer - 5);
this.selectedPath=this.calcSegment(this.inner + 3, this.inner + this.outer);
this.hilight=this.calcArc(this.inner);
}
DonutSegment.prototype.calcArcPoints=function(r){
return [this.cx + r * this.sin_p0, this.cy + r * this.cos_p0, this.cx + r * this.sin_p1, this.cy + r * this.cos_p1];
};
DonutSegment.prototype.calcSegment=function(r1, r2){
var ix0, ix1, iy0, iy1, ox0, ox1, oy0, oy1, _ref, _ref1;
_ref=this.calcArcPoints(r1), ix0=_ref[0], iy0=_ref[1], ix1=_ref[2], iy1=_ref[3];
_ref1=this.calcArcPoints(r2), ox0=_ref1[0], oy0=_ref1[1], ox1=_ref1[2], oy1=_ref1[3];
return ("M" + ix0 + "," + iy0) + ("A" + r1 + "," + r1 + ",0," + this.is_long + ",0," + ix1 + "," + iy1) + ("L" + ox1 + "," + oy1) + ("A" + r2 + "," + r2 + ",0," + this.is_long + ",1," + ox0 + "," + oy0) + "Z";
};
DonutSegment.prototype.calcArc=function(r){
var ix0, ix1, iy0, iy1, _ref;
_ref=this.calcArcPoints(r), ix0=_ref[0], iy0=_ref[1], ix1=_ref[2], iy1=_ref[3];
return ("M" + ix0 + "," + iy0) + ("A" + r + "," + r + ",0," + this.is_long + ",0," + ix1 + "," + iy1);
};
DonutSegment.prototype.render=function(){
var _this=this;
this.arc=this.drawDonutArc(this.hilight, this.color);
return this.seg=this.drawDonutSegment(this.path, this.color, this.backgroundColor, function(){
return _this.fire('hover', _this.index);
}, function(){
return _this.fire('click', _this.index);
});
};
DonutSegment.prototype.drawDonutArc=function(path, color){
return this.raphael.path(path).attr({
stroke: color,
'stroke-width': 2,
opacity: 0
});
};
DonutSegment.prototype.drawDonutSegment=function(path, fillColor, strokeColor, hoverFunction, clickFunction){
return this.raphael.path(path).attr({
fill: fillColor,
stroke: strokeColor,
'stroke-width': 3
}).hover(hoverFunction).click(clickFunction);
};
DonutSegment.prototype.select=function(){
if(!this.selected){
this.seg.animate({
path: this.selectedPath
}, 150, '<>');
this.arc.animate({
opacity: 1
}, 150, '<>');
return this.selected=true;
}};
DonutSegment.prototype.deselect=function(){
if(this.selected){
this.seg.animate({
path: this.path
}, 150, '<>');
this.arc.animate({
opacity: 0
}, 150, '<>');
return this.selected=false;
}};
return DonutSegment;
})(Morris.EventEmitter);
}).call(this);
!function(a){var b,c,d="0.4.2",e="hasOwnProperty",f=/[\.\/]/,g="*",h=function(){},i=function(a,b){return a-b},j={n:{}},k=function(a,d){a=String(a);var e,f=c,g=Array.prototype.slice.call(arguments,2),h=k.listeners(a),j=0,l=[],m={},n=[],o=b;b=a,c=0;for(var p=0,q=h.length;q>p;p++)"zIndex"in h[p]&&(l.push(h[p].zIndex),h[p].zIndex<0&&(m[h[p].zIndex]=h[p]));for(l.sort(i);l[j]<0;)if(e=m[l[j++]],n.push(e.apply(d,g)),c)return c=f,n;for(p=0;q>p;p++)if(e=h[p],"zIndex"in e)if(e.zIndex==l[j]){if(n.push(e.apply(d,g)),c)break;do if(j++,e=m[l[j]],e&&n.push(e.apply(d,g)),c)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),c)break;return c=f,b=o,n.length?n:null};k._events=j,k.listeners=function(a){var b,c,d,e,h,i,k,l,m=a.split(f),n=j,o=[n],p=[];for(e=0,h=m.length;h>e;e++){for(l=[],i=0,k=o.length;k>i;i++)for(n=o[i].n,c=[n[m[e]],n[g]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},k.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(f),d=j,e=0,g=c.length;g>e;e++)d=d.n,d=d.hasOwnProperty(c[e])&&d[c[e]]||(d[c[e]]={n:{}});for(d.f=d.f||[],e=0,g=d.f.length;g>e;e++)if(d.f[e]==b)return h;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},k.f=function(a){var b=[].slice.call(arguments,1);return function(){k.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},k.stop=function(){c=1},k.nt=function(a){return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(b):b},k.nts=function(){return b.split(f)},k.off=k.unbind=function(a,b){if(!a)return k._events=j={n:{}},void 0;var c,d,h,i,l,m,n,o=a.split(f),p=[j];for(i=0,l=o.length;l>i;i++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[i]!=g)c[o[i]]&&h.push(c[o[i]]);else for(d in c)c[e](d)&&h.push(c[d]);p.splice.apply(p,h)}for(i=0,l=p.length;l>i;i++)for(c=p[i];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(d in c.n)if(c.n[e](d)&&c.n[d].f){var q=c.n[d].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[d].f}}else{delete c.f;for(d in c.n)c.n[e](d)&&c.n[d].f&&delete c.n[d].f}c=c.n}},k.once=function(a,b){var c=function(){return k.unbind(a,c),b.apply(this,arguments)};return k.on(a,c)},k.version=d,k.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=k:"undefined"!=typeof define?define("eve",[],function(){return k}):a.eve=k}(this),function(a,b){"function"==typeof define&&define.amd?define(["eve"],function(c){return b(a,c)}):b(a,a.eve)}(this,function(a,b){function c(a){if(c.is(a,"function"))return u?a():b.on("raphael.DOMload",a);if(c.is(a,V))return c._engine.create[D](c,a.splice(0,3+c.is(a[0],T))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],"function")){var e=d.pop();return u?e.call(c._engine.create[D](c,d)):b.on("raphael.DOMload",function(){e.call(c._engine.create[D](c,d))})}return c._engine.create[D](c,arguments)}function d(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[z](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[D](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*N.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);Q(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(O(a,c)<P(e,g)||P(a,c)>O(e,g)||O(b,d)<P(f,h)||P(b,d)>O(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+P(a,c).toFixed(2)||n>+O(a,c).toFixed(2)||n<+P(e,g).toFixed(2)||n>+O(e,g).toFixed(2)||o<+P(b,d).toFixed(2)||o>+O(b,d).toFixed(2)||o<+P(f,h).toFixed(2)||o>+O(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=O(~~(g/5),1),k=O(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=Q(u.x-t.x)<.001?"y":"x",y=Q(w.x-v.x)<.001?"y":"x",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+Q((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+Q((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:P(A,1),t2:P(B,1)}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if("M"==v[0])g=k=v[1],h=l=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+H+this.y+H+this.width+" × "+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,Q(f)<b)return e;if(h=(3*l*e+2*k)*e+j,Q(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),Q(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[z](e)&&(d[_(e)]=a[e],c.push(_(e)));c.sort(lb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=_(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,x=ic.length;x>v;v++){var u=ic[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(ic.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,x=a.percents.length;x>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var y in i)if(i[z](y)&&(db[z](y)||d.paper.customAttributes[z](y)))switch(r[y]=d.attr(y),null==r[y]&&(r[y]=cb[y]),s[y]=i[y],db[y]){case T:t[y]=(s[y]-r[y])/p;break;case"colour":r[y]=c.getRGB(r[y]);var A=c.getRGB(s[y]);t[y]={r:(A.r-r[y].r)/p,g:(A.g-r[y].g)/p,b:(A.b-r[y].b)/p};break;case"path":var B=Kb(r[y],s[y]),C=B[1];for(r[y]=B[0],t[y]=[],v=0,x=r[y].length;x>v;v++){t[y][v]=[0];for(var D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(C[v][D]-r[y][v][D])/p}break;case"transform":var G=d._,H=Pb(G[y],s[y]);if(H)for(r[y]=H.from,s[y]=H.to,t[y]=[],t[y].real=!0,v=0,x=r[y].length;x>v;v++)for(t[y][v]=[r[y][v][0]],D=1,F=r[y][v].length;F>D;D++)t[y][v][D]=(s[y][v][D]-r[y][v][D])/p;else{var K=d.matrix||new o,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[y]=[K.a,K.b,K.c,K.d,K.e,K.f],Nb(L,s[y]),s[y]=L._.transform,t[y]=[(L.matrix.a-K.a)/p,(L.matrix.b-K.b)/p,(L.matrix.c-K.c)/p,(L.matrix.d-K.d)/p,(L.matrix.e-K.e)/p,(L.matrix.f-K.f)/p]}break;case"csv":var M=I(i[y])[J](w),N=I(r[y])[J](w);if("clip-rect"==y)for(r[y]=N,t[y]=[],v=N.length;v--;)t[y][v]=(M[v]-r[y][v])/p;s[y]=M;break;default:for(M=[][E](i[y]),N=[][E](r[y]),t[y]=[],v=d.paper.customAttributes[y].length;v--;)t[y][v]=((M[v]||0)-(N[v]||0))/p}var O=i.easing,P=c.easing_formulas[O];if(!P)if(P=I(O).match(Z),P&&5==P.length){var Q=P;P=function(a){return q(a,+Q[1],+Q[2],+Q[3],+Q[4],p)}}else P=nb;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},ic.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==ic.length))return kc();k&&(u.start=new Date-u.ms*f),1==ic.length&&jc(kc)}b("raphael.anim.start."+d.id,d,a)}}function t(a){for(var b=0;b<ic.length;b++)ic[b].el.paper==a&&ic.splice(b--,1)}c.version="2.1.2",c.eve=b;var u,v,w=/[, ]+/,x={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},y=/\{(\d+)\}/g,z="hasOwnProperty",A={doc:document,win:a},B={was:Object.prototype[z].call(A.win,"Raphael"),is:A.win.Raphael},C=function(){this.ca=this.customAttributes={}},D="apply",E="concat",F="ontouchstart"in A.win||A.win.DocumentTouch&&A.doc instanceof DocumentTouch,G="",H=" ",I=String,J="split",K="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[J](H),L={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},M=I.prototype.toLowerCase,N=Math,O=N.max,P=N.min,Q=N.abs,R=N.pow,S=N.PI,T="number",U="string",V="array",W=Object.prototype.toString,X=(c._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Y={NaN:1,Infinity:1,"-Infinity":1},Z=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,$=N.round,_=parseFloat,ab=parseInt,bb=I.prototype.toUpperCase,cb=c._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},db=c._availableAnimAttrs={blur:T,"clip-rect":"csv",cx:T,cy:T,fill:"colour","fill-opacity":T,"font-size":T,height:T,opacity:T,path:"path",r:T,rx:T,ry:T,stroke:"colour","stroke-opacity":T,"stroke-width":T,transform:"transform",width:T,x:T,y:T},eb=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,fb={hs:1,rg:1},gb=/,?([achlmqrstvxz]),?/gi,hb=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ib=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,jb=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,kb=(c._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),lb=function(a,b){return _(a)-_(b)},mb=function(){},nb=function(a){return a},ob=c._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},pb=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},qb=c._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return pb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ob(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ob(b.x,b.y,b.width,b.height)}},rb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Kb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=A,c.type=A.win.SVGAngle||A.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==c.type){var sb,tb=A.doc.createElement("div");if(tb.innerHTML='<v:shape adj="1"/>',sb=tb.firstChild,sb.style.behavior="url(#default#VML)",!sb||"object"!=typeof sb.adj)return c.type=G;tb=null}c.svg=!(c.vml="VML"==c.type),c._Paper=C,c.fn=v=C.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=M.call(b),"finite"==b?!Y[z](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||W.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*N.atan2(-i,-h)/S+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*S/180},c.deg=function(a){return 180*a/S%360},c.snapTo=function(a,b,d){if(d=c.is(d,"finite")?d:10,c.is(a,V)){for(var e=a.length;e--;)if(Q(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b},c.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=0|16*N.random(),c="x"==a?b:8|3&b;return c.toString(16)}),c.setWindow=function(a){b("raphael.setWindow",c,A.win,a),A.win=a,A.doc=A.win.document,c._engine.initWin&&c._engine.initWin(A.win)};var ub=function(a){if(c.vml){var b,d=/^\s+|\s+$/g;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();ub=f(function(a){try{b.style.color=I(a).replace(d,G);var c=h.queryCommandValue("ForeColor");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,"#"+("000000"+c.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=A.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",A.doc.body.appendChild(i),ub=f(function(a){return i.style.color=a,A.doc.defaultView.getComputedStyle(i,G).getPropertyValue("color")})}return ub(a)},vb=function(){return"hsb("+[this.h,this.s,this.b]+")"},wb=function(){return"hsl("+[this.h,this.s,this.l]+")"},xb=function(){return this.hex},yb=function(a,b,d){if(null==b&&c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,U)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},zb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:xb};return c.is(e,"finite")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,"string")&&(a=c.getRGB(a)),c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=xb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-Q(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-Q(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],zb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=O(a,b,c),g=f-P(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=60*((d+360)%6)/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:vb}},c.rgb2hsl=function(a,b,c){c=yb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=O(a,b,c),h=P(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=60*((d+360)%6)/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:wb}},c._path2string=function(){return this.join(",").replace(gb,"$1")},c._preload=function(a,b){var c=A.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,A.doc.body.removeChild(this)},c.onerror=function(){A.doc.body.removeChild(this)},A.doc.body.appendChild(c),c.src=a},c.getRGB=f(function(a){if(!a||(a=I(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:g};!(fb[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=ub(a));var b,d,e,f,h,i,j=a.match(X);return j?(j[2]&&(e=ab(j[2].substring(5),16),d=ab(j[2].substring(3,5),16),b=ab(j[2].substring(1,3),16)),j[3]&&(e=ab((h=j[3].charAt(3))+h,16),d=ab((h=j[3].charAt(2))+h,16),b=ab((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][J](eb),b=_(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=_(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=_(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(f=_(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex="#"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,"finite")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Ab(a);if(b.arr)return Cb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,V)&&c.is(a[0],V)&&(e=Cb(a)),e.length||I(a).replace(hb,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(jb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][E](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][E](f));else for(;f.length>=d[g]&&(e.push([b][E](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Cb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,V)&&c.is(a[0],V)&&(b=Cb(a)),b.length||I(a).replace(ib,function(a,c,d){var e=[];M.call(c),d.replace(jb,function(a,b){b&&e.push(+b)}),b.push([c][E](e))}),b.toString=c._path2string,b});var Ab=function(a){var b=Ab.ps=Ab.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[z](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=R(j,3),l=R(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*N.atan2(q-s,r-t)/S;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,"array")||(a=[a,b,d,e,f,g,h,i]);var j=Jb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&1==n(a,[["M",b,d],["H",e.x2+10]],1)%2},c._removedFactory=function(a){return function(){b("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var Bb=c.pathBBox=function(a){var b=Ab(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Kb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],"M"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Jb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[E](k.min.x,k.max.x),h=h[E](k.min.y,k.max.y),e=c[5],f=c[6]}var l=P[D](0,g),m=P[D](0,h),n=O[D](0,g),o=O[D](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Cb=function(a){var b=d(a);return b.toString=c._path2string,b},Db=c._pathToRelative=function(a){var b=Ab(a);if(b.rel)return Cb(b.rel);c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=M.call(m[0]))switch(l[0]=M.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Cb(d),d},Eb=c._pathToAbsolute=function(a){var b=Ab(a);if(b.abs)return Cb(b.abs);if(c.is(a,V)&&c.is(a&&a[0],V)||(a=c.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=bb.call(l[0]))switch(k[0]=bb.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][E](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[E](h(p,m));break;case"M":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][E](l.slice(1)),d.pop(),d=d[E](h(p,m)),k=["R"][E](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Cb(d),d},Fb=function(a,b,c,d){return[a,b,c,d,c,d]},Gb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Hb=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*S/180,n=S/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*N.cos(c)-b*N.sin(c),e=a*N.sin(c)+b*N.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(N.cos(S/180*e),N.sin(S/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=N.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*N.sqrt(Q((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=N.asin(((b-x)/d).toFixed(9)),z=N.asin(((j-x)/d).toFixed(9));y=w>a?S-y:y,z=w>i?S-z:z,0>y&&(y=2*S+y),0>z&&(z=2*S+z),h&&y>z&&(y-=2*S),!h&&z>y&&(z-=2*S)}var A=z-y;if(Q(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*N.cos(z),j=x+d*N.sin(z),o=Hb(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var F=N.cos(y),G=N.sin(y),H=N.cos(z),I=N.sin(z),K=N.tan(A/4),L=4/3*c*K,M=4/3*d*K,O=[a,b],P=[a+L*G,b-M*F],R=[i+L*I,j-M*H],T=[i,j];if(P[0]=2*O[0]-P[0],P[1]=2*O[1]-P[1],k)return[P,R,T][E](o);o=[P,R,T][E](o).join()[J](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ib=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:R(j,3)*a+3*R(j,2)*i*c+3*j*i*i*e+R(i,3)*g,y:R(j,3)*b+3*R(j,2)*i*d+3*j*i*i*f+R(i,3)*h}},Jb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+N.sqrt(k*k-4*j*l))/2/j,n=(-k-N.sqrt(k*k-4*j*l))/2/j,Q(m)>"1e12"&&(m=.5),Q(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ib(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ib(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:P[D](0,p),y:P[D](0,o)},max:{x:O[D](0,p),y:O[D](0,o)}}}),Kb=c._path2curve=f(function(a,b){var c=!b&&Ab(a);if(!b&&c.curve)return Cb(c.curve);for(var d=Eb(a),e=b&&Eb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][E](Hb[D](0,[b.x,b.y][E](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][E](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][E](Gb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][E](Gb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][E](Fb(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][E](Fb(b.x,b.y,a[1],b.y));break;case"V":a=["C"][E](Fb(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][E](Fb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)a.splice(b++,0,["C"][E](c.splice(0,6)));a.splice(b,1),l=O(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=O(d.length,e&&e.length||0))},k=0,l=O(d.length,e&&e.length||0);l>k;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var m=d[k],n=e&&e[k],o=m.length,p=e&&n.length;f.x=m[o-2],f.y=m[o-1],f.bx=_(m[o-4])||f.x,f.by=_(m[o-3])||f.y,g.bx=e&&(_(n[p-4])||g.x),g.by=e&&(_(n[p-3])||g.y),g.x=e&&n[p-2],g.y=e&&n[p-1]}return e||(c.curve=Cb(d)),e?[d,e]:d},null,Cb),Lb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=_(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=_(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+"%"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Mb=(c._tofront=function(a,b){b.top!==a&&(Lb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Lb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Lb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Lb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Bb(a),d={_:{transform:G},getBBox:function(){return c}};return Nb(d,b),d.matrix}),Nb=(c.transformPath=function(a,b){return rb(a,Mb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=I(b).replace(/\.{3}|\u2026/g,a._.transform||G);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=I(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ob=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Pb=c._equaliseTransform=function(a,b){b=I(b).replace(/\.{3}|\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];for(var d,e,f,g,h=O(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ob(b[k]),g=b[k]||Ob(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=O(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])
}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,"object")?a:A.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Db,c._engine={},c.path2curve=Kb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=N.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+N.cos(a).toFixed(9),f=+N.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[I.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=N.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=N.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(N.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(N.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[J]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:G)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:G)+(b.rotate?"r"+[b.rotate,0,0]:G)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Qb=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);v.safari="Apple Computer, Inc."==navigator.vendor&&(Qb&&Qb[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Qb&&Qb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:mb;for(var Rb=function(){this.returnValue=!1},Sb=function(){return this.originalEvent.preventDefault()},Tb=function(){this.cancelBubble=!0},Ub=function(){return this.originalEvent.stopPropagation()},Vb=function(a){var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,c=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Wb=function(){return A.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Vb(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),F&&L[b]){var f=function(b){for(var e=Vb(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Sb,b.stopPropagation=Ub;break}return c.call(d,b,e.x,e.y)};a.addEventListener(L[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),F&&L[b]&&a.removeEventListener(L[b],e,!1),!0}}:A.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||A.win.event;var b=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,e=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Rb,a.stopPropagation=a.stopPropagation||Tb,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Xb=[],Yb=function(a){for(var c,d=a.clientX,e=a.clientY,f=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,g=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft,h=Xb.length;h--;){if(c=Xb[h],F&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;A.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,A.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,b("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},Zb=function(a){c.unmousemove(Yb).unmouseup(Zb);for(var d,e=Xb.length;e--;)d=Xb[e],d.el._drag={},b("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);Xb=[]},$b=c.el={},_b=K.length;_b--;)!function(a){c[a]=$b[a]=function(b,d){return c.is(b,"function")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:Wb(this.shape||this.node||A.doc,a,b,d||this)})),this},c["un"+a]=$b["un"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,"undefined")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(K[_b]);$b.data=function(a,d){var e=kb[this.id]=kb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[z](f)&&this.data(f,a[f]);return this}return b("raphael.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("raphael.data.set."+this.id,this,d,a),this},$b.removeData=function(a){return null==a?kb[this.id]={}:kb[this.id]&&delete kb[this.id][a],this},$b.getData=function(){return d(kb[this.id]||{})},$b.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},$b.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var ac=[];$b.drag=function(a,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=A.doc.documentElement.scrollTop||A.doc.body.scrollTop,m=A.doc.documentElement.scrollLeft||A.doc.body.scrollLeft;if(this._drag.id=i.identifier,F&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Xb.length&&c.mousemove(Yb).mouseup(Zb),Xb.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("raphael.drag.start."+this.id,d),a&&b.on("raphael.drag.move."+this.id,a),e&&b.on("raphael.drag.end."+this.id,e),b("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},ac.push({el:this,start:i}),this.mousedown(i),this},$b.onDragOver=function(a){a?b.on("raphael.drag.over."+this.id,a):b.unbind("raphael.drag.over."+this.id)},$b.undrag=function(){for(var a=ac.length;a--;)ac[a].el==this&&(this.unmousedown(ac[a].start),ac.splice(a,1),b.unbind("raphael.drag.*."+this.id));!ac.length&&c.unmousemove(Yb).unmouseup(Zb),Xb=[]},v.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},v.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},v.path=function(a){a&&!c.is(a,U)&&!c.is(a[0],V)&&(a+=G);var b=c._engine.path(c.format[D](c,arguments),this);return this.__set__&&this.__set__.push(b),b},v.image=function(a,b,d,e,f){var g=c._engine.image(this,a||"about:blank",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},v.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,I(d));return this.__set__&&this.__set__.push(e),e},v.set=function(a){!c.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new mc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type="set",b},v.setStart=function(a){this.__set__=a||this.set()},v.setFinish=function(){var a=this.__set__;return delete this.__set__,a},v.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},v.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},v.top=v.bottom=null,v.raphael=c;var bc=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(A.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(A.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};v.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=A.doc.elementFromPoint(a,b);if(A.win.opera&&"svg"==e.tagName){var f=bc(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},v.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},v.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},v.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},v.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},$b.isPointInside=function(a,b){var d=this.realPath=qb[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=c.transformPath(d,this.attr("transform"))),c.isPointInsidePath(d,a,b)},$b.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=qb[this.type](this),b.bboxwt=Bb(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=qb[this.type](this)),b.bbox=Bb(rb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},$b.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},$b.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||qb[this.type](this);f=this.matrix?rb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},dc=function(a,b){return function(d,e,f){d=Kb(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=cc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},ec=dc(1),fc=dc(),gc=dc(0,1);c.getTotalLength=ec,c.getPointAtLength=fc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return gc(a,b).end;var d=gc(a,c,1);return b?gc(d,b).end:d},$b.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():ec(a)},$b.getPointAtLength=function(a){var b=this.getPath();if(b)return fc(b,a)},$b.getPath=function(){var a,b=c._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return b&&(a=b(this)),a},$b.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var hc=c.easing_formulas={linear:function(a){return a},"<":function(a){return R(a,1.7)},">":function(a){return R(a,.48)},"<>":function(a){var b=.48-a/1.04,c=N.sqrt(.1734+b*b),d=c-b,e=R(Q(d),1/3)*(0>d?-1:1),f=-c-b,g=R(Q(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:R(2,-10*a)*N.sin((a-.075)*2*S/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};hc.easeIn=hc["ease-in"]=hc["<"],hc.easeOut=hc["ease-out"]=hc[">"],hc.easeInOut=hc["ease-in-out"]=hc["<>"],hc["back-in"]=hc.backIn,hc["back-out"]=hc.backOut;var ic=[],jc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},kc=function(){for(var a=+new Date,d=0;d<ic.length;d++){var e=ic[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&ic.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[z](r)){switch(db[r]){case T:f=+k[r]+q*i*l[r];break;case"colour":f="rgb("+[lc($(k[r].r+q*i*l[r].r)),lc($(k[r].g+q*i*l[r].g)),lc($(k[r].b+q*i*l[r].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(H)}f=f.join(H);break;case"transform":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][E](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b("raphael.anim.frame."+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b("raphael.anim.frame."+d.id,d,e),b("raphael.anim.finish."+d.id,d,e),c.is(a,"function")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),ic.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[z](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),ic.length&&jc(kc)},lc=function(a){return a>255?255:0>a?0:a};$b.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=ic.length;k>j;j++)if(ic[j].anim==b&&ic[j].el==a){ic[k-1].start=ic[j].start;break}return h},$b.onAnimation=function(a){return a?b.on("raphael.anim.frame."+this.id,a):b.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=N.floor(O(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[z](g)&&_(g)!=g&&_(g)+"%"!=g&&(f=!0,h[g]=a[g]);return f?(d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b)):new r(a,b)},$b.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},$b.setTime=function(a,b){return a&&null!=b&&this.status(a,P(b,a.ms)/a.ms),this},$b.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,P(b,1)),this;for(c=ic.length;c>f;f++)if(d=ic[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},$b.pause=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.pause."+this.id,this,ic[c].anim)!==!1&&(ic[c].paused=!0);return this},$b.resume=function(a){for(var c=0;c<ic.length;c++)if(ic[c].el.id==this.id&&(!a||ic[c].anim==a)){var d=ic[c];b("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},$b.stop=function(a){for(var c=0;c<ic.length;c++)ic[c].el.id!=this.id||a&&ic[c].anim!=a||b("raphael.anim.stop."+this.id,this,ic[c].anim)!==!1&&ic.splice(c--,1);return this},b.on("raphael.remove",t),b.on("raphael.clear",t),$b.toString=function(){return"Raphaël’s object"};var mc=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=$b.constructor&&a[b].constructor!=mc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},nc=mc.prototype;nc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=$b.constructor&&a.constructor!=mc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},nc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},nc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var oc in $b)$b[z](oc)&&(nc[oc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][D](c,b)})}}(oc));return nc.attr=function(a,b){if(a&&c.is(a,V)&&c.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},nc.clear=function(){for(;this.length;)this.pop()},nc.splice=function(a,b){a=0>a?O(this.length+a,0):a,b=O(0,P(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new mc(e)},nc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},nc.animate=function(a,b,d,e){(c.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,U)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},nc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},nc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=P[D](0,a),b=P[D](0,b),c=O[D](0,c),d=O[D](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},nc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},nc.toString=function(){return"Raphaël‘s set"},nc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},nc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(console.log("runned"),c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[z](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=ab(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[z](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[z](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},v.getFont=function(a,b,d,e){if(e=e||"normal",d=d||"normal",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,G)+"(\\s|$)","i");for(var h in c.fonts)if(c.fonts[z](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=b||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},v.print=function(a,b,d,e,f,g,h,i){g=g||"middle",h=O(P(h||0,1),-1),i=O(P(i||1,3),1);var j,k=I(d)[J](G),l=0,m=0,n=G;if(c.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[J](w),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=c.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},v.add=function(a){if(c.is(a,"array"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},x[z](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,V)?[0][E](b):arguments;return a&&c.is(a,U)&&d.length-1&&(a=a.replace(y,function(a,b){return null==d[++b]?G:d[b]})),a||G},c.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return B.was?A.win.Raphael=B.is:delete Raphael,c},c.st=nc,function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),b.on("raphael.DOMload",function(){u=!0}),function(){if(c.svg){var a="hasOwnProperty",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};c.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(a,e){var j="linear",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+"Gradient",{id:k}),a.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"href":case"title":var u=q("title"),w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u);break;case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var u=q("a");x.insertBefore(u,i),u.appendChild(i),x=u}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var z=b(p).split(j);if(4==z.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var A=q("clipPath"),B=q("rect");A.id=c.createUUID(),q(B,{x:z[0],y:z[1],width:z[2],height:z[3]}),A.appendChild(B),d.paper.defs.appendChild(A),q(i,{"clip-path":"url(#"+A.id+")"}),d.clip=B}if(!p){var C=i.getAttribute("clip-path");if(C){var D=c._g.doc.getElementById(C.replace(/(^url\(#|\)$)/g,l));D&&D.parentNode.removeChild(D),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var E=b(p).match(c._ISURL);if(E){A=q("pattern");var F=q("image");A.id=c.createUUID(),q(A,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":E[1]}),A.appendChild(F),function(a){c._preload(E[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(F,{width:b,height:c}),d.paper.safari()})}(A),d.paper.defs.appendChild(A),q(i,{fill:"url(#"+A.id+")"}),d.pattern=A,d.pattern&&s(d);break}var G=c.getRGB(p);if(G.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,"undefined")&&c.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!c.is(k["fill-opacity"],"undefined")&&c.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});G[a]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=c.getRGB(p),i.setAttribute(o,G.hex),"stroke"==o&&G[a]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p);break;case"opacity":k.gradient&&!k[a]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[a]("text")||f[a]("font")||f[a]("font-size")||f[a]("x")||f[a]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;
if(f[a]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},A=c.el;z.prototype=A,A.constructor=z,c._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},A.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,c,e]])),this},A.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this},A.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",a,c]])),this)},A.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},A.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},A.remove=function(){if(!this.removed&&this.node.parentNode){var a=this.paper;a.__set__&&a.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&a.defs.removeChild(this.gradient),c._tear(this,a),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var b in this)this[b]="function"==typeof this[b]?c._removedFactory(b):null;this.removed=!0}},A._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}return a&&this.hide(),b},A.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if("fill"==b&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,"array")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,"object")&&(m=b);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},A.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var a=this.paper;return a.top!=this&&c._tofront(this,a),this},A.toBack=function(){if(this.removed)return this;var a=this.node.parentNode;return"a"==a.tagName.toLowerCase()?a.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):a.firstChild!=this.node&&a.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper),this.paper,this},A.insertAfter=function(a){if(this.removed)return this;var b=a.node||a[a.length-1].node;return b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):b.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this},A.insertBefore=function(a){if(this.removed)return this;var b=a.node||a[0].node;return b.parentNode.insertBefore(this.node,b),c._insertbefore(this,a,this.paper),this},A.blur=function(a){var b=this;if(0!==+a){var d=q("filter"),e=q("feGaussianBlur");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:"url(#"+d.id+")"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute("filter");return b},c._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},c._engine.text=function(a,b,d,e){var f=q("text");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={x:b,y:d,"text-anchor":"middle",text:e,font:c._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),1==b?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=g(c/this.width,d/this.height),j=this.top,l=e?"meet":"xMinYMin";for(null==a?(this._vbSize&&(i=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=i,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:l});i&&j;)h="stroke-width"in j.attrs?j.attrs["stroke-width"]:1,j.attr({"stroke-width":h}),j._.dirty=1,j._.dirtyT=1,j=j.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},c.prototype.clear=function(){c.eve("raphael.clear",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël "+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q("defs"))},c.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null};var B=c.st;for(var C in A)A[a](C)&&!B[a](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}}(),function(){if(c.vml){var a="hasOwnProperty",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=c.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};c.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf("r")?c._pathToAbsolute(m.path):m.path),"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=b(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement("div"),I=H.style;I.clip=c.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type="solid",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),i["stroke-dasharray"]){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[a](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=c.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i="linear",j=".5 .5";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\.{3}|\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf("-"),l=!b(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return d&&(this._.transform=d),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind("raphael.*.*."+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if(b==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,"array")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,"object")&&(n=b);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+".Blur(pixelradius="+(+a||1.5)+")",b.margin=c.format("-{0}px 0 0 -{0}px",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},c._engine.ellipse=function(a,b,c,d,e){var f=a.path();return f.attrs,f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){var e=a.path();return e.attrs,e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=c.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,a),l={fill:"#000",stroke:"none",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+="px"),b==+b&&(b+="px"),d.width=a,d.height=b,d.clip="rect(0 "+a+" "+b+" 0)",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve("raphael.setViewBox",this,this._viewBox,[a,b,d,e,f]);var h,i,j=this.width,k=this.height,l=1/g(d/j,e/k);return f&&(h=k/e,i=j/d,j>d*h&&(a-=(j-d*h)/2/h),k>e*i&&(b-=(k-e*i)/2/i)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:l},this.forEach(function(a){a.transform("...")}),this};var F;c._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error("VML container not found.");var h=new c._Paper,i=h.canvas=c._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=c._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}(),B.was?A.win.Raphael=c:Raphael=c,c});
var $=jQuery;
$(document).ready(function (){
'use strict';
if(careerfy_framework_vars.is_sticky=='on'){
jQuery(window).scroll(function (){
if(jQuery(this).scrollTop() > 170){
jQuery('body').addClass("careerfy-sticky-header");
}else{
jQuery('body').removeClass("careerfy-sticky-header");
}});
}
if(jQuery('.word-counter').length > 0){
jQuery('.word-counter').countUp({
delay: 190,
time: 3000,
});
}
if(jQuery('.careerfy_twitter_widget_wrap').length > 0){
jQuery('.careerfy_twitter_widget_wrap').slick({
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
infinite: true,
dots: false,
prevArrow: "",
nextArrow: "",
});
}
if(jQuery('.careerfy-testimonial-slider').length > 0){
jQuery('.careerfy-testimonial-slider').slick({
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
infinite: true,
dots: false,
prevArrow: "<span class='slick-arrow-left'><i class='careerfy-icon careerfy-arrow-right-bold'></i></span>",
nextArrow: "<span class='slick-arrow-right'><i class='careerfy-icon careerfy-arrow-right-bold'></i></span>",
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
}},
{
breakpoint: 800,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}},
{
breakpoint: 400,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}}
]
});
}
if(jQuery('.careerfy-service-slider').length > 0){
jQuery('.careerfy-service-slider').slick({
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
infinite: true,
dots: false,
centerMode: true,
centerPadding: '0px',
prevArrow: "<span class='slick-arrow-left'><i class='careerfy-icon careerfy-arrow-right-bold'></i></span>",
nextArrow: "<span class='slick-arrow-right'><i class='careerfy-icon careerfy-arrow-right-bold'></i></span>",
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
}},
{
breakpoint: 800,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}},
{
breakpoint: 400,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}}
]
});
}
if(jQuery('.careerfy-partner-slider').length > 0){
jQuery('.careerfy-partner-slider').slick({
slidesToShow: 6,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
infinite: true,
dots: false,
centerMode: true,
centerPadding: '0px',
arrows: false,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
}},
{
breakpoint: 800,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}},
{
breakpoint: 400,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}}
]
});
}
if(jQuery('.careerfy-partnertwo-slider').length > 0){
jQuery('.careerfy-partnertwo-slider').slick({
slidesToShow: 6,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
infinite: true,
dots: false,
prevArrow: "<span class='slick-arrow-left'><i class='careerfy-icon careerfy-arrow-pointing-to-left'></i></span>",
nextArrow: "<span class='slick-arrow-right'><i class='careerfy-icon careerfy-arrow-pointing-to-right'></i></span>",
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
}},
{
breakpoint: 1250,
settings: {
slidesToShow: 4,
slidesToScroll: 1,
infinite: true,
}},
{
breakpoint: 800,
settings: {
slidesToShow: 2,
slidesToScroll: 1
}},
{
breakpoint: 400,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}}
]
});
}
if(jQuery('.careerfy-testimonial-styletwo').length > 0){
jQuery('.careerfy-testimonial-styletwo').slick({
slidesToShow: 2,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
infinite: true,
dots: true,
prevArrow: "<span class='slick-arrow-left'><i class='careerfy-icon careerfy-right-arrow-long'></i></span>",
nextArrow: "<span class='slick-arrow-right'><i class='careerfy-icon careerfy-right-arrow-long'></i></span>",
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
}},
{
breakpoint: 800,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}},
{
breakpoint: 400,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}}
]
});
}
if(jQuery('.careerfy-testimonial-slider-style3').length > 0){
jQuery('.careerfy-testimonial-slider-style3').slick({
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
infinite: true,
dots: true,
fade: true,
adaptiveHeight: true,
prevArrow: $('.careerfy-prev'),
nextArrow: $('.careerfy-next'),
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
}},
{
breakpoint: 800,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}},
{
breakpoint: 400,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}}
]
});
}
if(jQuery('.careerfy-partner-style3').length > 0){
jQuery('.careerfy-partner-style3').slick({
slidesToShow: 6,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,
infinite: true,
dots: false,
arrows: false,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
infinite: true,
}},
{
breakpoint: 800,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}},
{
breakpoint: 400,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}}
]
});
}});
jQuery(document).on('click', '.careerfy-ct-form', function (e){
e.preventDefault();
var this_id=$(this).data('id'),
msg_form=$('#ct-form-' + this_id),
ajax_url=msg_form.data('ajax-url'),
msg_con=msg_form.find('.careerfy-ct-msg'),
msg_name=msg_form.find('input[name="u_name"]'),
msg_email=msg_form.find('input[name="u_email"]'),
msg_subject=msg_form.find('input[name="u_subject"]'),
msg_phone=msg_form.find('input[name="u_number"]'),
msg_type=msg_form.find('input[name="u_type"]'),
msg_txt=msg_form.find('textarea[name="u_msg"]'),
error=0;
var email_pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
if(msg_name.val()==''){
error=1;
msg_name.css({"border": "1px solid #ff0000"});
}else{
msg_name.css({"border": "1px solid #d3dade"});
}
if(msg_subject.val()==''){
error=1;
msg_subject.css({"border": "1px solid #ff0000"});
}else{
msg_subject.css({"border": "1px solid #d3dade"});
}
if(msg_email.val()==''){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
if(!email_pattern.test(msg_email.val())){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
msg_email.css({"border": "1px solid #d3dade"});
}}
if(msg_txt.val()==''){
error=1;
msg_txt.css({"border": "1px solid #ff0000"});
}else{
msg_txt.css({"border": "1px solid #d3dade"});
}
if(error==0){
msg_con.html('<i class="fa fa-refresh fa-spin"></i>');
var request=$.ajax({
url: ajax_url,
method: "POST",
data: {
u_name: msg_name.val(),
u_email: msg_email.val(),
u_subject: msg_subject.val(),
u_phone: msg_phone.val(),
u_msg: msg_txt.val(),
u_type: msg_type.val(),
action: 'careerfy_contact_form_submit',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'){
msg_name.val('');
msg_email.val('');
msg_subject.val('');
msg_phone.val('');
msg_txt.val('');
msg_con.html(response.msg);
}else{
msg_con.html(kingdom_study_vars.error_msg);
}});
request.fail(function (jqXHR, textStatus){
msg_con.html(kingdom_study_vars.error_msg);
});
}
return false;
});
jQuery(document).on('click', '.careerfy-post-like-btn', function (){
'use strict';
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var icon_class='fa fa-heart-o';
var icon_fill_class='fa fa-heart';
var this_loader=_this.find('i');
var this_counter=_this.find('span');
this_loader.attr('class', 'fa fa-refresh fa-spin');
var request=$.ajax({
url: careerfy_funnc_vars.ajax_url,
method: "POST",
data: {
post_id: this_id,
action: 'careerfy_post_likes_count',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.counter!=='undefined'&&response.counter!=''){
this_counter.html(response.counter);
}
_this.removeAttr('class');
_this.find('i').attr('class', icon_fill_class);
});
request.fail(function (jqXHR, textStatus){
_this.find('i').attr('class', icon_class);
});
});
jQuery(document).on('click', '.careerfy-post-dislike-btn', function (){
'use strict';
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var icon_class='fa fa-thumbs-o-down';
var icon_fill_class='fa fa-thumbs-down';
var this_loader=_this.find('i');
var this_counter=_this.find('span');
this_loader.attr('class', 'fa fa-refresh fa-spin');
var request=$.ajax({
url: careerfy_funnc_vars.ajax_url,
method: "POST",
data: {
post_id: this_id,
action: 'careerfy_post_dislikes_count',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.counter!=='undefined'&&response.counter!=''){
this_counter.html(response.counter);
}
_this.removeAttr('class');
_this.find('i').attr('class', icon_fill_class);
});
request.fail(function (jqXHR, textStatus){
_this.find('i').attr('class', icon_class);
});
});
!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&n.message!==undefined?n.message:undefined;if(!(n=e.extend({},e.blockUI.defaults,n||{})).ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=y===undefined?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,g={};e(t).data("blockUI.history",g),g.el=m,g.parent=m.parentNode,g.display=m.style.display,g.position=m.style.position,g.parent&&g.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var v,I,w,U,x=n.baseZ;v=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x+++';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&v.css("opacity",0);var C=[v,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=a(t,"borderTopWidth"),T=a(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",e<2)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel&&document.documentElement.clientWidth||document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight||document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah=document.documentElement.scrollTop ? document.documentElement.scrollTop:document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i="((document.documentElement.scrollTop ? document.documentElement.scrollTop:document.body.scrollTop) + "+(n.css&&n.css.top?parseInt(n.css.top,10):0)+') + "px"';o.setExpression("top",i)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&v.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock.bind(w)();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):d(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,d=e(t),a=d.data("blockUI.history"),c=d.data("blockUI.timeout");c&&(clearTimeout(c),d.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=d.data("blockUI.onUnblock"),d.removeData("blockUI.onUnblock"));var r;r=l?e(document.body).children().filter(".blockUI").add("body > .blockUI"):d.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0==--s&&n(r,a,o,t)})):n(r,a,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.el.style.cursor="default",o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),d=l.width(),a=l[0].style.width;l.width(d-1).width(d),l[0].style.width=a}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var d="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(d,n,s):e(document).unbind(d,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,d=e(t.target);return d.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),d.parents("div."+s.blockMsgClass).length>0||0===d.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[!0===e?b.length-1:0];t&&t.focus()}}function d(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-a(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-a(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function a(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),n===undefined&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});
jQuery(function(o){o(".woocommerce-ordering").on("change","select.orderby",function(){o(this).closest("form").submit()}),o("input.qty:not(.product-quantity input.qty)").each(function(){var e=parseFloat(o(this).attr("min"));e>=0&&parseFloat(o(this).val())<e&&o(this).val(e)}),o(".woocommerce-store-notice__dismiss-link").click(function(){Cookies.set("store_notice","hidden",{path:"/"}),o(".woocommerce-store-notice").hide()}),"hidden"===Cookies.get("store_notice")?o(".woocommerce-store-notice").hide():o(".woocommerce-store-notice").show(),o(document.body).on("click",function(){o(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),o(".woocommerce-input-wrapper").on("click",function(o){o.stopPropagation()}),o(".woocommerce-input-wrapper :input").on("keydown",function(e){var t=o(this).parent().find("span.description");if(27===e.which&&t.length&&t.is(":visible"))return t.prop("aria-hidden",!0).slideUp(250),e.preventDefault(),!1}).on("focus",function(){var e=o(this).parent(),t=e.find("span.description");e.addClass("currentTarget"),o(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),t.length&&t.is(":hidden")&&t.prop("aria-hidden",!1).slideDown(250),e.removeClass("currentTarget")}),o.scroll_to_notices=function(e){var t="scrollBehavior"in document.documentElement.style;e.length&&(t?e[0].scrollIntoView({behavior:"smooth",block:"center"}):o("html, body").animate({scrollTop:e.offset().top-100},1e3))}});
(function ($){
$(function (){
$(".email-jobs-top").click(function (){
$(".job-alert-container-top .validation").slideUp();
$(".job-alert-container-top").slideToggle();
$(".job-alert-container-top").parent('.jobsearch-search-filter-wrap').toggleClass('jobsearch-add-padding');
return false;
});
$(".btn-close-job-alert-box").click(function (){
$(".job-alert-container-top").slideToggle();
return false;
});
$(".jobalert-submit").click(function (){
$(".job-alert-container-top .validation").slideUp();
$(".jobalert-submit").attr('disabled', true);
$(".jobalert-submit").html('<i class="fa fa-refresh fa-spin"></i>');
var email=$(".email-input-top").val();
var name=$(".name-input-top").val();
var frequency=$('input[name="alert-frequency"]:checked').val();
if(typeof frequency=="undefined"){
frequency="never";
}
var re=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(re.test(email)){
var request=$.ajax({
"type": "POST",
"url": jobsearch_jobalerts_vars.ajax_url,
"data": {
"action": "jobsearch_create_job_alert",
"email": email,
"name": name,
"frequency": frequency,
"window_location": window.location.toString(),
"search_query": $(".jobs_query").text(),
},
"dataType": "json",
});
request.done(function (response){
if(response.success==true){
$(".job-alert-container-top .validation").removeClass("error").addClass("success").slideDown();
$(".job-alert-container-top .validation label").text(response.message);
}else{
$(".job-alert-container-top .validation").removeClass("success").addClass("error").slideDown();
$(".job-alert-container-top .validation label").text(response.message);
}
$(".jobalert-submit").html(jobsearch_jobalerts_vars.submit_txt);
$(".jobalert-submit").removeAttr('disabled');
});
request.fail(function (jqXHR, textStatus){
$(".jobalert-submit").html(jobsearch_jobalerts_vars.submit_txt);
$(".jobalert-submit").removeAttr('disabled');
});
}else{
$(".jobalert-submit").html(jobsearch_jobalerts_vars.submit_txt);
$(".jobalert-submit").removeAttr('disabled');
$(".job-alert-container-top .validation").addClass("error").slideDown();
}
return false;
});
});
})(jQuery);
jQuery(document).on('click', '.jobsearch-del-user-job-alert', function (){
var _this=jQuery(this);
var this_id=_this.attr('data-id');
if(this_id > 0){
var conf=confirm('Are you sure!');
if(conf){
_this.find('i').attr('class', 'fa fa-refresh fa-spin');
var request=jQuery.ajax({
url: jobsearch_jobalerts_vars.ajax_url,
method: "POST",
data: {
'alert_id': this_id,
'action': 'jobsearch_user_job_alert_delete',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.msg!=='undefined'&&response.msg!=''){
_this.find('i').removeAttr('class').html(response.msg);
return false;
}
_this.parents('tr').fadeOut();
});
request.fail(function (jqXHR, textStatus){
_this.parents('tr').fadeOut();
});
}}
});
if(typeof jQuery==='undefined'){
throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($){
'use strict';
var version=$.fn.jquery.split(' ')[0].split('.')
if((version[0] < 2&&version[1] < 9)||(version[0]==1&&version[1]==9&&version[2] < 1)||(version[0] > 3)){
throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
}}(jQuery);
+function ($){
'use strict';
function transitionEnd(){
var el=document.createElement('bootstrap')
var transEndEventNames={
WebkitTransition:'webkitTransitionEnd',
MozTransition:'transitionend',
OTransition:'oTransitionEnd otransitionend',
transition:'transitionend'
}
for (var name in transEndEventNames){
if(el.style[name]!==undefined){
return { end: transEndEventNames[name] }}
}
return false
}
$.fn.emulateTransitionEnd=function (duration){
var called=false
var $el=this
$(this).one('bsTransitionEnd', function (){ called=true })
var callback=function (){ if(!called) $($el).trigger($.support.transition.end) }
setTimeout(callback, duration)
return this
}
$(function (){
$.support.transition=transitionEnd()
if(!$.support.transition) return
$.event.special.bsTransitionEnd={
bindType: $.support.transition.end,
delegateType: $.support.transition.end,
handle: function (e){
if($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
}}
})
}(jQuery);
+function ($){
'use strict';
var dismiss='[data-dismiss="alert"]'
var Alert=function (el){
$(el).on('click', dismiss, this.close)
}
Alert.VERSION='3.3.7'
Alert.TRANSITION_DURATION=150
Alert.prototype.close=function (e){
var $this=$(this)
var selector=$this.attr('data-target')
if(!selector){
selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/, '')
}
var $parent=$(selector==='#' ? []:selector)
if(e) e.preventDefault()
if(!$parent.length){
$parent=$this.closest('.alert')
}
$parent.trigger(e=$.Event('close.bs.alert'))
if(e.isDefaultPrevented()) return
$parent.removeClass('in')
function removeElement(){
$parent.detach().trigger('closed.bs.alert').remove()
}
$.support.transition&&$parent.hasClass('fade') ?
$parent
.one('bsTransitionEnd', removeElement)
.emulateTransitionEnd(Alert.TRANSITION_DURATION) :
removeElement()
}
function Plugin(option){
return this.each(function (){
var $this=$(this)
var data=$this.data('bs.alert')
if(!data) $this.data('bs.alert', (data=new Alert(this)))
if(typeof option=='string') data[option].call($this)
})
}
var old=$.fn.alert
$.fn.alert=Plugin
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function (){
$.fn.alert=old
return this
}
$(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)
}(jQuery);
+function ($){
'use strict';
var Button=function (element, options){
this.$element=$(element)
this.options=$.extend({}, Button.DEFAULTS, options)
this.isLoading=false
}
Button.VERSION='3.3.7'
Button.DEFAULTS={
loadingText: 'loading...'
}
Button.prototype.setState=function (state){
var d='disabled'
var $el=this.$element
var val=$el.is('input') ? 'val':'html'
var data=$el.data()
state +='Text'
if(data.resetText==null) $el.data('resetText', $el[val]())
setTimeout($.proxy(function (){
$el[val](data[state]==null ? this.options[state]:data[state])
if(state=='loadingText'){
this.isLoading=true
$el.addClass(d).attr(d, d).prop(d, true)
}else if(this.isLoading){
this.isLoading=false
$el.removeClass(d).removeAttr(d).prop(d, false)
}}, this), 0)
}
Button.prototype.toggle=function (){
var changed=true
var $parent=this.$element.closest('[data-toggle="buttons"]')
if($parent.length){
var $input=this.$element.find('input')
if($input.prop('type')=='radio'){
if($input.prop('checked')) changed=false
$parent.find('.active').removeClass('active')
this.$element.addClass('active')
}else if($input.prop('type')=='checkbox'){
if(($input.prop('checked'))!==this.$element.hasClass('active')) changed=false
this.$element.toggleClass('active')
}
$input.prop('checked', this.$element.hasClass('active'))
if(changed) $input.trigger('change')
}else{
this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
this.$element.toggleClass('active')
}}
function Plugin(option){
return this.each(function (){
var $this=$(this)
var data=$this.data('bs.button')
var options=typeof option=='object'&&option
if(!data) $this.data('bs.button', (data=new Button(this, options)))
if(option=='toggle') data.toggle()
else if(option) data.setState(option)
})
}
var old=$.fn.button
$.fn.button=Plugin
$.fn.button.Constructor=Button
$.fn.button.noConflict=function (){
$.fn.button=old
return this
}
$(document)
.on('click.bs.button.data-api', '[data-toggle^="button"]', function (e){
var $btn=$(e.target).closest('.btn')
Plugin.call($btn, 'toggle')
if(!($(e.target).is('input[type="radio"], input[type="checkbox"]'))){
e.preventDefault()
if($btn.is('input,button')) $btn.trigger('focus')
else $btn.find('input:visible,button:visible').first().trigger('focus')
}})
.on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e){
$(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
})
}(jQuery);
+function ($){
'use strict';
var Carousel=function (element, options){
this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.paused=null
this.sliding=null
this.interval=null
this.$active=null
this.$items=null
this.options.keyboard&&this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))
this.options.pause=='hover'&&!('ontouchstart' in document.documentElement)&&this.$element
.on('mouseenter.bs.carousel', $.proxy(this.pause, this))
.on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
}
Carousel.VERSION='3.3.7'
Carousel.TRANSITION_DURATION=600
Carousel.DEFAULTS={
interval: 5000,
pause: 'hover',
wrap: true,
keyboard: true
}
Carousel.prototype.keydown=function (e){
if(/input|textarea/i.test(e.target.tagName)) return
switch (e.which){
case 37: this.prev(); break
case 39: this.next(); break
default: return
}
e.preventDefault()
}
Carousel.prototype.cycle=function (e){
e||(this.paused=false)
this.interval&&clearInterval(this.interval)
this.options.interval
&& !this.paused
&& (this.interval=setInterval($.proxy(this.next, this), this.options.interval))
return this
}
Carousel.prototype.getItemIndex=function (item){
this.$items=item.parent().children('.item')
return this.$items.index(item||this.$active)
}
Carousel.prototype.getItemForDirection=function (direction, active){
var activeIndex=this.getItemIndex(active)
var willWrap=(direction=='prev'&&activeIndex===0)
|| (direction=='next'&&activeIndex==(this.$items.length - 1))
if(willWrap&&!this.options.wrap) return active
var delta=direction=='prev' ? -1:1
var itemIndex=(activeIndex + delta) % this.$items.length
return this.$items.eq(itemIndex)
}
Carousel.prototype.to=function (pos){
var that=this
var activeIndex=this.getItemIndex(this.$active=this.$element.find('.item.active'))
if(pos > (this.$items.length - 1)||pos < 0) return
if(this.sliding)       return this.$element.one('slid.bs.carousel', function (){ that.to(pos) })
if(activeIndex==pos) return this.pause().cycle()
return this.slide(pos > activeIndex ? 'next':'prev', this.$items.eq(pos))
}
Carousel.prototype.pause=function (e){
e||(this.paused=true)
if(this.$element.find('.next, .prev').length&&$.support.transition){
this.$element.trigger($.support.transition.end)
this.cycle(true)
}
this.interval=clearInterval(this.interval)
return this
}
Carousel.prototype.next=function (){
if(this.sliding) return
return this.slide('next')
}
Carousel.prototype.prev=function (){
if(this.sliding) return
return this.slide('prev')
}
Carousel.prototype.slide=function (type, next){
var $active=this.$element.find('.item.active')
var $next=next||this.getItemForDirection(type, $active)
var isCycling=this.interval
var direction=type=='next' ? 'left':'right'
var that=this
if($next.hasClass('active')) return (this.sliding=false)
var relatedTarget=$next[0]
var slideEvent=$.Event('slide.bs.carousel', {
relatedTarget: relatedTarget,
direction: direction
})
this.$element.trigger(slideEvent)
if(slideEvent.isDefaultPrevented()) return
this.sliding=true
isCycling&&this.pause()
if(this.$indicators.length){
this.$indicators.find('.active').removeClass('active')
var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)])
$nextIndicator&&$nextIndicator.addClass('active')
}
var slidEvent=$.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction })
if($.support.transition&&this.$element.hasClass('slide')){
$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
$active
.one('bsTransitionEnd', function (){
$next.removeClass([type, direction].join(' ')).addClass('active')
$active.removeClass(['active', direction].join(' '))
that.sliding=false
setTimeout(function (){
that.$element.trigger(slidEvent)
}, 0)
})
.emulateTransitionEnd(Carousel.TRANSITION_DURATION)
}else{
$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger(slidEvent)
}
isCycling&&this.cycle()
return this
}
function Plugin(option){
return this.each(function (){
var $this=$(this)
var data=$this.data('bs.carousel')
var options=$.extend({}, Carousel.DEFAULTS, $this.data(), typeof option=='object'&&option)
var action=typeof option=='string' ? option:options.slide
if(!data) $this.data('bs.carousel', (data=new Carousel(this, options)))
if(typeof option=='number') data.to(option)
else if(action) data[action]()
else if(options.interval) data.pause().cycle()
})
}
var old=$.fn.carousel
$.fn.carousel=Plugin
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function (){
$.fn.carousel=old
return this
}
var clickHandler=function (e){
var href
var $this=$(this)
var $target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/, ''))
if(!$target.hasClass('carousel')) return
var options=$.extend({}, $target.data(), $this.data())
var slideIndex=$this.attr('data-slide-to')
if(slideIndex) options.interval=false
Plugin.call($target, options)
if(slideIndex){
$target.data('bs.carousel').to(slideIndex)
}
e.preventDefault()
}
$(document)
.on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
.on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)
$(window).on('load', function (){
$('[data-ride="carousel"]').each(function (){
var $carousel=$(this)
Plugin.call($carousel, $carousel.data())
})
})
}(jQuery);
+function ($){
'use strict';
var Collapse=function (element, options){
this.$element=$(element)
this.options=$.extend({}, Collapse.DEFAULTS, options)
this.$trigger=$('[data-toggle="collapse"][href="#' + element.id + '"],' +
'[data-toggle="collapse"][data-target="#' + element.id + '"]')
this.transitioning=null
if(this.options.parent){
this.$parent=this.getParent()
}else{
this.addAriaAndCollapsedClass(this.$element, this.$trigger)
}
if(this.options.toggle) this.toggle()
}
Collapse.VERSION='3.3.7'
Collapse.TRANSITION_DURATION=350
Collapse.DEFAULTS={
toggle: true
}
Collapse.prototype.dimension=function (){
var hasWidth=this.$element.hasClass('width')
return hasWidth ? 'width':'height'
}
Collapse.prototype.show=function (){
if(this.transitioning||this.$element.hasClass('in')) return
var activesData
var actives=this.$parent&&this.$parent.children('.panel').children('.in, .collapsing')
if(actives&&actives.length){
activesData=actives.data('bs.collapse')
if(activesData&&activesData.transitioning) return
}
var startEvent=$.Event('show.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented()) return
if(actives&&actives.length){
Plugin.call(actives, 'hide')
activesData||actives.data('bs.collapse', null)
}
var dimension=this.dimension()
this.$element
.removeClass('collapse')
.addClass('collapsing')[dimension](0)
.attr('aria-expanded', true)
this.$trigger
.removeClass('collapsed')
.attr('aria-expanded', true)
this.transitioning=1
var complete=function (){
this.$element
.removeClass('collapsing')
.addClass('collapse in')[dimension]('')
this.transitioning=0
this.$element
.trigger('shown.bs.collapse')
}
if(!$.support.transition) return complete.call(this)
var scrollSize=$.camelCase(['scroll', dimension].join('-'))
this.$element
.one('bsTransitionEnd', $.proxy(complete, this))
.emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
}
Collapse.prototype.hide=function (){
if(this.transitioning||!this.$element.hasClass('in')) return
var startEvent=$.Event('hide.bs.collapse')
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented()) return
var dimension=this.dimension()
this.$element[dimension](this.$element[dimension]())[0].offsetHeight
this.$element
.addClass('collapsing')
.removeClass('collapse in')
.attr('aria-expanded', false)
this.$trigger
.addClass('collapsed')
.attr('aria-expanded', false)
this.transitioning=1
var complete=function (){
this.transitioning=0
this.$element
.removeClass('collapsing')
.addClass('collapse')
.trigger('hidden.bs.collapse')
}
if(!$.support.transition) return complete.call(this)
this.$element
[dimension](0)
.one('bsTransitionEnd', $.proxy(complete, this))
.emulateTransitionEnd(Collapse.TRANSITION_DURATION)
}
Collapse.prototype.toggle=function (){
this[this.$element.hasClass('in') ? 'hide':'show']()
}
Collapse.prototype.getParent=function (){
return $(this.options.parent)
.find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
.each($.proxy(function (i, element){
var $element=$(element)
this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
}, this))
.end()
}
Collapse.prototype.addAriaAndCollapsedClass=function ($element, $trigger){
var isOpen=$element.hasClass('in')
$element.attr('aria-expanded', isOpen)
$trigger
.toggleClass('collapsed', !isOpen)
.attr('aria-expanded', isOpen)
}
function getTargetFromTrigger($trigger){
var href
var target=$trigger.attr('data-target')
|| (href=$trigger.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/, '')
return $(target)
}
function Plugin(option){
return this.each(function (){
var $this=$(this)
var data=$this.data('bs.collapse')
var options=$.extend({}, Collapse.DEFAULTS, $this.data(), typeof option=='object'&&option)
if(!data&&options.toggle&&/show|hide/.test(option)) options.toggle=false
if(!data) $this.data('bs.collapse', (data=new Collapse(this, options)))
if(typeof option=='string') data[option]()
})
}
var old=$.fn.collapse
$.fn.collapse=Plugin
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function (){
$.fn.collapse=old
return this
}
$(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e){
var $this=$(this)
if(!$this.attr('data-target')) e.preventDefault()
var $target=getTargetFromTrigger($this)
var data=$target.data('bs.collapse')
var option=data ? 'toggle':$this.data()
Plugin.call($target, option)
})
}(jQuery);
+function ($){
'use strict';
var backdrop='.dropdown-backdrop'
var toggle='[data-toggle="dropdown"]'
var Dropdown=function (element){
$(element).on('click.bs.dropdown', this.toggle)
}
Dropdown.VERSION='3.3.7'
function getParent($this){
var selector=$this.attr('data-target')
if(!selector){
selector=$this.attr('href')
selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/, '')
}
var $parent=selector&&$(selector)
return $parent&&$parent.length ? $parent:$this.parent()
}
function clearMenus(e){
if(e&&e.which===3) return
$(backdrop).remove()
$(toggle).each(function (){
var $this=$(this)
var $parent=getParent($this)
var relatedTarget={ relatedTarget: this }
if(!$parent.hasClass('open')) return
if(e&&e.type=='click'&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0], e.target)) return
$parent.trigger(e=$.Event('hide.bs.dropdown', relatedTarget))
if(e.isDefaultPrevented()) return
$this.attr('aria-expanded', 'false')
$parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
})
}
Dropdown.prototype.toggle=function (e){
var $this=$(this)
if($this.is('.disabled, :disabled')) return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){
if('ontouchstart' in document.documentElement&&!$parent.closest('.navbar-nav').length){
$(document.createElement('div'))
.addClass('dropdown-backdrop')
.insertAfter($(this))
.on('click', clearMenus)
}
var relatedTarget={ relatedTarget: this }
$parent.trigger(e=$.Event('show.bs.dropdown', relatedTarget))
if(e.isDefaultPrevented()) return
$this
.trigger('focus')
.attr('aria-expanded', 'true')
$parent
.toggleClass('open')
.trigger($.Event('shown.bs.dropdown', relatedTarget))
}
return false
}
Dropdown.prototype.keydown=function (e){
if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName)) return
var $this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled')) return
var $parent=getParent($this)
var isActive=$parent.hasClass('open')
if(!isActive&&e.which!=27||isActive&&e.which==27){
if(e.which==27) $parent.find(toggle).trigger('focus')
return $this.trigger('click')
}
var desc=' li:not(.disabled):visible a'
var $items=$parent.find('.dropdown-menu' + desc)
if(!$items.length) return
var index=$items.index(e.target)
if(e.which==38&&index > 0)                 index--
if(e.which==40&&index < $items.length - 1) index++
if(!~index)                                    index=0
$items.eq(index).trigger('focus')
}
function Plugin(option){
return this.each(function (){
var $this=$(this)
var data=$this.data('bs.dropdown')
if(!data) $this.data('bs.dropdown', (data=new Dropdown(this)))
if(typeof option=='string') data[option].call($this)
})
}
var old=$.fn.dropdown
$.fn.dropdown=Plugin
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function (){
$.fn.dropdown=old
return this
}
$(document)
.on('click.bs.dropdown.data-api', clearMenus)
.on('click.bs.dropdown.data-api', '.dropdown form', function (e){ e.stopPropagation() })
.on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
.on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
.on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)
}(jQuery);
+function ($){
'use strict';
var Modal=function (element, options){
this.options=options
this.$body=$(document.body)
this.$element=$(element)
this.$dialog=this.$element.find('.modal-dialog')
this.$backdrop=null
this.isShown=null
this.originalBodyPad=null
this.scrollbarWidth=0
this.ignoreBackdropClick=false
if(this.options.remote){
this.$element
.find('.modal-content')
.load(this.options.remote, $.proxy(function (){
this.$element.trigger('loaded.bs.modal')
}, this))
}}
Modal.VERSION='3.3.7'
Modal.TRANSITION_DURATION=300
Modal.BACKDROP_TRANSITION_DURATION=150
Modal.DEFAULTS={
backdrop: true,
keyboard: true,
show: true
}
Modal.prototype.toggle=function (_relatedTarget){
return this.isShown ? this.hide():this.show(_relatedTarget)
}
Modal.prototype.show=function (_relatedTarget){
var that=this
var e=$.Event('show.bs.modal', { relatedTarget: _relatedTarget })
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented()) return
this.isShown=true
this.checkScrollbar()
this.setScrollbar()
this.$body.addClass('modal-open')
this.escape()
this.resize()
this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
this.$dialog.on('mousedown.dismiss.bs.modal', function (){
that.$element.one('mouseup.dismiss.bs.modal', function (e){
if($(e.target).is(that.$element)) that.ignoreBackdropClick=true
})
})
this.backdrop(function (){
var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){
that.$element.appendTo(that.$body)
}
that.$element
.show()
.scrollTop(0)
that.adjustDialog()
if(transition){
that.$element[0].offsetWidth
}
that.$element.addClass('in')
that.enforceFocus()
var e=$.Event('shown.bs.modal', { relatedTarget: _relatedTarget })
transition ?
that.$dialog
.one('bsTransitionEnd', function (){
that.$element.trigger('focus').trigger(e)
})
.emulateTransitionEnd(Modal.TRANSITION_DURATION) :
that.$element.trigger('focus').trigger(e)
})
}
Modal.prototype.hide=function (e){
if(e) e.preventDefault()
e=$.Event('hide.bs.modal')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented()) return
this.isShown=false
this.escape()
this.resize()
$(document).off('focusin.bs.modal')
this.$element
.removeClass('in')
.off('click.dismiss.bs.modal')
.off('mouseup.dismiss.bs.modal')
this.$dialog.off('mousedown.dismiss.bs.modal')
$.support.transition&&this.$element.hasClass('fade') ?
this.$element
.one('bsTransitionEnd', $.proxy(this.hideModal, this))
.emulateTransitionEnd(Modal.TRANSITION_DURATION) :
this.hideModal()
}
Modal.prototype.enforceFocus=function (){
$(document)
.off('focusin.bs.modal')
.on('focusin.bs.modal', $.proxy(function (e){
if(document!==e.target &&
this.$element[0]!==e.target &&
!this.$element.has(e.target).length){
this.$element.trigger('focus')
}}, this))
}
Modal.prototype.escape=function (){
if(this.isShown&&this.options.keyboard){
this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e){
e.which==27&&this.hide()
}, this))
}else if(!this.isShown){
this.$element.off('keydown.dismiss.bs.modal')
}}
Modal.prototype.resize=function (){
if(this.isShown){
$(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
}else{
$(window).off('resize.bs.modal')
}}
Modal.prototype.hideModal=function (){
var that=this
this.$element.hide()
this.backdrop(function (){
that.$body.removeClass('modal-open')
that.resetAdjustments()
that.resetScrollbar()
that.$element.trigger('hidden.bs.modal')
})
}
Modal.prototype.removeBackdrop=function (){
this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null
}
Modal.prototype.backdrop=function (callback){
var that=this
var animate=this.$element.hasClass('fade') ? 'fade':''
if(this.isShown&&this.options.backdrop){
var doAnimate=$.support.transition&&animate
this.$backdrop=$(document.createElement('div'))
.addClass('modal-backdrop ' + animate)
.appendTo(this.$body)
this.$element.on('click.dismiss.bs.modal', $.proxy(function (e){
if(this.ignoreBackdropClick){
this.ignoreBackdropClick=false
return
}
if(e.target!==e.currentTarget) return
this.options.backdrop=='static'
? this.$element[0].focus()
: this.hide()
}, this))
if(doAnimate) this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback) return
doAnimate ?
this.$backdrop
.one('bsTransitionEnd', callback)
.emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
callback()
}else if(!this.isShown&&this.$backdrop){
this.$backdrop.removeClass('in')
var callbackRemove=function (){
that.removeBackdrop()
callback&&callback()
}
$.support.transition&&this.$element.hasClass('fade') ?
this.$backdrop
.one('bsTransitionEnd', callbackRemove)
.emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
callbackRemove()
}else if(callback){
callback()
}}
Modal.prototype.handleUpdate=function (){
this.adjustDialog()
}
Modal.prototype.adjustDialog=function (){
var modalIsOverflowing=this.$element[0].scrollHeight > document.documentElement.clientHeight
this.$element.css({
paddingLeft:  !this.bodyIsOverflowing&&modalIsOverflowing ? this.scrollbarWidth:'',
paddingRight: this.bodyIsOverflowing&&!modalIsOverflowing ? this.scrollbarWidth:''
})
}
Modal.prototype.resetAdjustments=function (){
this.$element.css({
paddingLeft: '',
paddingRight: ''
})
}
Modal.prototype.checkScrollbar=function (){
var fullWindowWidth=window.innerWidth
if(!fullWindowWidth){
var documentElementRect=document.documentElement.getBoundingClientRect()
fullWindowWidth=documentElementRect.right - Math.abs(documentElementRect.left)
}
this.bodyIsOverflowing=document.body.clientWidth < fullWindowWidth
this.scrollbarWidth=this.measureScrollbar()
}
Modal.prototype.setScrollbar=function (){
var bodyPad=parseInt((this.$body.css('padding-right')||0), 10)
this.originalBodyPad=document.body.style.paddingRight||''
if(this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
}
Modal.prototype.resetScrollbar=function (){
this.$body.css('padding-right', this.originalBodyPad)
}
Modal.prototype.measureScrollbar=function (){
var scrollDiv=document.createElement('div')
scrollDiv.className='modal-scrollbar-measure'
this.$body.append(scrollDiv)
var scrollbarWidth=scrollDiv.offsetWidth - scrollDiv.clientWidth
this.$body[0].removeChild(scrollDiv)
return scrollbarWidth
}
function Plugin(option, _relatedTarget){
return this.each(function (){
var $this=$(this)
var data=$this.data('bs.modal')
var options=$.extend({}, Modal.DEFAULTS, $this.data(), typeof option=='object'&&option)
if(!data) $this.data('bs.modal', (data=new Modal(this, options)))
if(typeof option=='string') data[option](_relatedTarget)
else if(options.show) data.show(_relatedTarget)
})
}
var old=$.fn.modal
$.fn.modal=Plugin
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function (){
$.fn.modal=old
return this
}
$(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e){
var $this=$(this)
var href=$this.attr('href')
var $target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/, '')))
var option=$target.data('bs.modal') ? 'toggle':$.extend({ remote: !/#/.test(href)&&href }, $target.data(), $this.data())
if($this.is('a')) e.preventDefault()
$target.one('show.bs.modal', function (showEvent){
if(showEvent.isDefaultPrevented()) return
$target.one('hidden.bs.modal', function (){
$this.is(':visible')&&$this.trigger('focus')
})
})
Plugin.call($target, option, this)
})
}(jQuery);
+function ($){
'use strict';
var Tooltip=function (element, options){
this.type=null
this.options=null
this.enabled=null
this.timeout=null
this.hoverState=null
this.$element=null
this.inState=null
this.init('tooltip', element, options)
}
Tooltip.VERSION='3.3.7'
Tooltip.TRANSITION_DURATION=150
Tooltip.DEFAULTS={
animation: true,
placement: 'top',
selector: false,
template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
trigger: 'hover focus',
title: '',
delay: 0,
html: false,
container: false,
viewport: {
selector: 'body',
padding: 0
}}
Tooltip.prototype.init=function (type, element, options){
this.enabled=true
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.$viewport=this.options.viewport&&$($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element):(this.options.viewport.selector||this.options.viewport))
this.inState={ click: false, hover: false, focus: false }
if(this.$element[0] instanceof document.constructor&&!this.options.selector){
throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
}
var triggers=this.options.trigger.split(' ')
for (var i=triggers.length; i--;){
var trigger=triggers[i]
if(trigger=='click'){
this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
}else if(trigger!='manual'){
var eventIn=trigger=='hover' ? 'mouseenter':'focusin'
var eventOut=trigger=='hover' ? 'mouseleave':'focusout'
this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
}}
this.options.selector ?
(this._options=$.extend({}, this.options, { trigger: 'manual', selector: '' })) :
this.fixTitle()
}
Tooltip.prototype.getDefaults=function (){
return Tooltip.DEFAULTS
}
Tooltip.prototype.getOptions=function (options){
options=$.extend({}, this.getDefaults(), this.$element.data(), options)
if(options.delay&&typeof options.delay=='number'){
options.delay={
show: options.delay,
hide: options.delay
}}
return options
}
Tooltip.prototype.getDelegateOptions=function (){
var options={}
var defaults=this.getDefaults()
this._options&&$.each(this._options, function (key, value){
if(defaults[key]!=value) options[key]=value
})
return options
}
Tooltip.prototype.enter=function (obj){
var self=obj instanceof this.constructor ?
obj:$(obj.currentTarget).data('bs.' + this.type)
if(!self){
self=new this.constructor(obj.currentTarget, this.getDelegateOptions())
$(obj.currentTarget).data('bs.' + this.type, self)
}
if(obj instanceof $.Event){
self.inState[obj.type=='focusin' ? 'focus':'hover']=true
}
if(self.tip().hasClass('in')||self.hoverState=='in'){
self.hoverState='in'
return
}
clearTimeout(self.timeout)
self.hoverState='in'
if(!self.options.delay||!self.options.delay.show) return self.show()
self.timeout=setTimeout(function (){
if(self.hoverState=='in') self.show()
}, self.options.delay.show)
}
Tooltip.prototype.isInStateTrue=function (){
for (var key in this.inState){
if(this.inState[key]) return true
}
return false
}
Tooltip.prototype.leave=function (obj){
var self=obj instanceof this.constructor ?
obj:$(obj.currentTarget).data('bs.' + this.type)
if(!self){
self=new this.constructor(obj.currentTarget, this.getDelegateOptions())
$(obj.currentTarget).data('bs.' + this.type, self)
}
if(obj instanceof $.Event){
self.inState[obj.type=='focusout' ? 'focus':'hover']=false
}
if(self.isInStateTrue()) return
clearTimeout(self.timeout)
self.hoverState='out'
if(!self.options.delay||!self.options.delay.hide) return self.hide()
self.timeout=setTimeout(function (){
if(self.hoverState=='out') self.hide()
}, self.options.delay.hide)
}
Tooltip.prototype.show=function (){
var e=$.Event('show.bs.' + this.type)
if(this.hasContent()&&this.enabled){
this.$element.trigger(e)
var inDom=$.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
if(e.isDefaultPrevented()||!inDom) return
var that=this
var $tip=this.tip()
var tipId=this.getUID(this.type)
this.setContent()
$tip.attr('id', tipId)
this.$element.attr('aria-describedby', tipId)
if(this.options.animation) $tip.addClass('fade')
var placement=typeof this.options.placement=='function' ?
this.options.placement.call(this, $tip[0], this.$element[0]) :
this.options.placement
var autoToken=/\s?auto?\s?/i
var autoPlace=autoToken.test(placement)
if(autoPlace) placement=placement.replace(autoToken, '')||'top'
$tip
.detach()
.css({ top: 0, left: 0, display: 'block' })
.addClass(placement)
.data('bs.' + this.type, this)
this.options.container ? $tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
this.$element.trigger('inserted.bs.' + this.type)
var pos=this.getPosition()
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(autoPlace){
var orgPlacement=placement
var viewportDim=this.getPosition(this.$viewport)
placement=placement=='bottom'&&pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
placement=='top'&&pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
placement=='right'&&pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
placement=='left'&&pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
placement
$tip
.removeClass(orgPlacement)
.addClass(placement)
}
var calculatedOffset=this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
this.applyPlacement(calculatedOffset, placement)
var complete=function (){
var prevHoverState=that.hoverState
that.$element.trigger('shown.bs.' + that.type)
that.hoverState=null
if(prevHoverState=='out') that.leave(that)
}
$.support.transition&&this.$tip.hasClass('fade') ?
$tip
.one('bsTransitionEnd', complete)
.emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
complete()
}}
Tooltip.prototype.applyPlacement=function (offset, placement){
var $tip=this.tip()
var width=$tip[0].offsetWidth
var height=$tip[0].offsetHeight
var marginTop=parseInt($tip.css('margin-top'), 10)
var marginLeft=parseInt($tip.css('margin-left'), 10)
if(isNaN(marginTop))  marginTop=0
if(isNaN(marginLeft)) marginLeft=0
offset.top  +=marginTop
offset.left +=marginLeft
$.offset.setOffset($tip[0], $.extend({
using: function (props){
$tip.css({
top: Math.round(props.top),
left: Math.round(props.left)
})
}}, offset), 0)
$tip.addClass('in')
var actualWidth=$tip[0].offsetWidth
var actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){
offset.top=offset.top + height - actualHeight
}
var delta=this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)
if(delta.left) offset.left +=delta.left
else offset.top +=delta.top
var isVertical=/top|bottom/.test(placement)
var arrowDelta=isVertical ? delta.left * 2 - width + actualWidth:delta.top * 2 - height + actualHeight
var arrowOffsetPosition=isVertical ? 'offsetWidth':'offsetHeight'
$tip.offset(offset)
this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
}
Tooltip.prototype.replaceArrow=function (delta, dimension, isVertical){
this.arrow()
.css(isVertical ? 'left':'top', 50 * (1 - delta / dimension) + '%')
.css(isVertical ? 'top':'left', '')
}
Tooltip.prototype.setContent=function (){
var $tip=this.tip()
var title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html ? 'html':'text'](title)
$tip.removeClass('fade in top bottom left right')
}
Tooltip.prototype.hide=function (callback){
var that=this
var $tip=$(this.$tip)
var e=$.Event('hide.bs.' + this.type)
function complete(){
if(that.hoverState!='in') $tip.detach()
if(that.$element){
that.$element
.removeAttr('aria-describedby')
.trigger('hidden.bs.' + that.type)
}
callback&&callback()
}
this.$element.trigger(e)
if(e.isDefaultPrevented()) return
$tip.removeClass('in')
$.support.transition&&$tip.hasClass('fade') ?
$tip
.one('bsTransitionEnd', complete)
.emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
complete()
this.hoverState=null
return this
}
Tooltip.prototype.fixTitle=function (){
var $e=this.$element
if($e.attr('title')||typeof $e.attr('data-original-title')!='string'){
$e.attr('data-original-title', $e.attr('title')||'').attr('title', '')
}}
Tooltip.prototype.hasContent=function (){
return this.getTitle()
}
Tooltip.prototype.getPosition=function ($element){
$element=$element||this.$element
var el=$element[0]
var isBody=el.tagName=='BODY'
var elRect=el.getBoundingClientRect()
if(elRect.width==null){
elRect=$.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
}
var isSvg=window.SVGElement&&el instanceof window.SVGElement
var elOffset=isBody ? { top: 0, left: 0 }:(isSvg ? null:$element.offset())
var scroll={ scroll: isBody ? document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop() }
var outerDims=isBody ? { width: $(window).width(), height: $(window).height() }:null
return $.extend({}, elRect, scroll, outerDims, elOffset)
}
Tooltip.prototype.getCalculatedOffset=function (placement, pos, actualWidth, actualHeight){
return placement=='bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
placement=='top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
placement=='left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }}
Tooltip.prototype.getViewportAdjustedDelta=function (placement, pos, actualWidth, actualHeight){
var delta={ top: 0, left: 0 }
if(!this.$viewport) return delta
var viewportPadding=this.options.viewport&&this.options.viewport.padding||0
var viewportDimensions=this.getPosition(this.$viewport)
if(/right|left/.test(placement)){
var topEdgeOffset=pos.top - viewportPadding - viewportDimensions.scroll
var bottomEdgeOffset=pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
if(topEdgeOffset < viewportDimensions.top){
delta.top=viewportDimensions.top - topEdgeOffset
}else if(bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height){
delta.top=viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
}}else{
var leftEdgeOffset=pos.left - viewportPadding
var rightEdgeOffset=pos.left + viewportPadding + actualWidth
if(leftEdgeOffset < viewportDimensions.left){
delta.left=viewportDimensions.left - leftEdgeOffset
}else if(rightEdgeOffset > viewportDimensions.right){
delta.left=viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
}}
return delta
}
Tooltip.prototype.getTitle=function (){
var title
var $e=this.$element
var o=this.options
title=$e.attr('data-original-title')
|| (typeof o.title=='function' ? o.title.call($e[0]):o.title)
return title
}
Tooltip.prototype.getUID=function (prefix){
do prefix +=~~(Math.random() * 1000000)
while (document.getElementById(prefix))
return prefix
}
Tooltip.prototype.tip=function (){
if(!this.$tip){
this.$tip=$(this.options.template)
if(this.$tip.length!=1){
throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
}}
return this.$tip
}
Tooltip.prototype.arrow=function (){
return (this.$arrow=this.$arrow||this.tip().find('.tooltip-arrow'))
}
Tooltip.prototype.enable=function (){
this.enabled=true
}
Tooltip.prototype.disable=function (){
this.enabled=false
}
Tooltip.prototype.toggleEnabled=function (){
this.enabled = !this.enabled
}
Tooltip.prototype.toggle=function (e){
var self=this
if(e){
self=$(e.currentTarget).data('bs.' + this.type)
if(!self){
self=new this.constructor(e.currentTarget, this.getDelegateOptions())
$(e.currentTarget).data('bs.' + this.type, self)
}}
if(e){
self.inState.click = !self.inState.click
if(self.isInStateTrue()) self.enter(self)
else self.leave(self)
}else{
self.tip().hasClass('in') ? self.leave(self):self.enter(self)
}}
Tooltip.prototype.destroy=function (){
var that=this
clearTimeout(this.timeout)
this.hide(function (){
that.$element.off('.' + that.type).removeData('bs.' + that.type)
if(that.$tip){
that.$tip.detach()
}
that.$tip=null
that.$arrow=null
that.$viewport=null
that.$element=null
})
}
function Plugin(option){
return this.each(function (){
var $this=$(this)
var data=$this.data('bs.tooltip')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option)) return
if(!data) $this.data('bs.tooltip', (data=new Tooltip(this, options)))
if(typeof option=='string') data[option]()
})
}
var old=$.fn.tooltip
$.fn.tooltip=Plugin
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.noConflict=function (){
$.fn.tooltip=old
return this
}}(jQuery);
+function ($){
'use strict';
var Popover=function (element, options){
this.init('popover', element, options)
}
if(!$.fn.tooltip) throw new Error('Popover requires tooltip.js')
Popover.VERSION='3.3.7'
Popover.DEFAULTS=$.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
placement: 'right',
trigger: 'click',
content: '',
template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
})
Popover.prototype=$.extend({}, $.fn.tooltip.Constructor.prototype)
Popover.prototype.constructor=Popover
Popover.prototype.getDefaults=function (){
return Popover.DEFAULTS
}
Popover.prototype.setContent=function (){
var $tip=this.tip()
var title=this.getTitle()
var content=this.getContent()
$tip.find('.popover-title')[this.options.html ? 'html':'text'](title)
$tip.find('.popover-content').children().detach().end()[
this.options.html ? (typeof content=='string' ? 'html':'append'):'text'
](content)
$tip.removeClass('fade top bottom left right in')
if(!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
}
Popover.prototype.hasContent=function (){
return this.getTitle()||this.getContent()
}
Popover.prototype.getContent=function (){
var $e=this.$element
var o=this.options
return $e.attr('data-content')
|| (typeof o.content=='function' ?
o.content.call($e[0]) :
o.content)
}
Popover.prototype.arrow=function (){
return (this.$arrow=this.$arrow||this.tip().find('.arrow'))
}
function Plugin(option){
return this.each(function (){
var $this=$(this)
var data=$this.data('bs.popover')
var options=typeof option=='object'&&option
if(!data&&/destroy|hide/.test(option)) return
if(!data) $this.data('bs.popover', (data=new Popover(this, options)))
if(typeof option=='string') data[option]()
})
}
var old=$.fn.popover
$.fn.popover=Plugin
$.fn.popover.Constructor=Popover
$.fn.popover.noConflict=function (){
$.fn.popover=old
return this
}}(jQuery);
+function ($){
'use strict';
function ScrollSpy(element, options){
this.$body=$(document.body)
this.$scrollElement=$(element).is(document.body) ? $(window):$(element)
this.options=$.extend({}, ScrollSpy.DEFAULTS, options)
this.selector=(this.options.target||'') + ' .nav li > a'
this.offsets=[]
this.targets=[]
this.activeTarget=null
this.scrollHeight=0
this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
this.refresh()
this.process()
}
ScrollSpy.VERSION='3.3.7'
ScrollSpy.DEFAULTS={
offset: 10
}
ScrollSpy.prototype.getScrollHeight=function (){
return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}
ScrollSpy.prototype.refresh=function (){
var that=this
var offsetMethod='offset'
var offsetBase=0
this.offsets=[]
this.targets=[]
this.scrollHeight=this.getScrollHeight()
if(!$.isWindow(this.$scrollElement[0])){
offsetMethod='position'
offsetBase=this.$scrollElement.scrollTop()
}
this.$body
.find(this.selector)
.map(function (){
var $el=$(this)
var href=$el.data('target')||$el.attr('href')
var $href=/^#./.test(href)&&$(href)
return ($href
&& $href.length
&& $href.is(':visible')
&& [[$href[offsetMethod]().top + offsetBase, href]])||null
})
.sort(function (a, b){ return a[0] - b[0] })
.each(function (){
that.offsets.push(this[0])
that.targets.push(this[1])
})
}
ScrollSpy.prototype.process=function (){
var scrollTop=this.$scrollElement.scrollTop() + this.options.offset
var scrollHeight=this.getScrollHeight()
var maxScroll=this.options.offset + scrollHeight - this.$scrollElement.height()
var offsets=this.offsets
var targets=this.targets
var activeTarget=this.activeTarget
var i
if(this.scrollHeight!=scrollHeight){
this.refresh()
}
if(scrollTop >=maxScroll){
return activeTarget!=(i=targets[targets.length - 1])&&this.activate(i)
}
if(activeTarget&&scrollTop < offsets[0]){
this.activeTarget=null
return this.clear()
}
for (i=offsets.length; i--;){
activeTarget!=targets[i]
&& scrollTop >=offsets[i]
&& (offsets[i + 1]===undefined||scrollTop < offsets[i + 1])
&& this.activate(targets[i])
}}
ScrollSpy.prototype.activate=function (target){
this.activeTarget=target
this.clear()
var selector=this.selector +
'[data-target="' + target + '"],' +
this.selector + '[href="' + target + '"]'
var active=$(selector)
.parents('li')
.addClass('active')
if(active.parent('.dropdown-menu').length){
active=active
.closest('li.dropdown')
.addClass('active')
}
active.trigger('activate.bs.scrollspy')
}
ScrollSpy.prototype.clear=function (){
$(this.selector)
.parentsUntil(this.options.target, '.active')
.removeClass('active')
}
function Plugin(option){
return this.each(function (){
var $this=$(this)
var data=$this.data('bs.scrollspy')
var options=typeof option=='object'&&option
if(!data) $this.data('bs.scrollspy', (data=new ScrollSpy(this, options)))
if(typeof option=='string') data[option]()
})
}
var old=$.fn.scrollspy
$.fn.scrollspy=Plugin
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.noConflict=function (){
$.fn.scrollspy=old
return this
}
$(window).on('load.bs.scrollspy.data-api', function (){
$('[data-spy="scroll"]').each(function (){
var $spy=$(this)
Plugin.call($spy, $spy.data())
})
})
}(jQuery);
+function ($){
'use strict';
var Tab=function (element){
this.element=$(element)
}
Tab.VERSION='3.3.7'
Tab.TRANSITION_DURATION=150
Tab.prototype.show=function (){
var $this=this.element
var $ul=$this.closest('ul:not(.dropdown-menu)')
var selector=$this.data('target')
if(!selector){
selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/, '')
}
if($this.parent('li').hasClass('active')) return
var $previous=$ul.find('.active:last a')
var hideEvent=$.Event('hide.bs.tab', {
relatedTarget: $this[0]
})
var showEvent=$.Event('show.bs.tab', {
relatedTarget: $previous[0]
})
$previous.trigger(hideEvent)
$this.trigger(showEvent)
if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented()) return
var $target=$(selector)
this.activate($this.closest('li'), $ul)
this.activate($target, $target.parent(), function (){
$previous.trigger({
type: 'hidden.bs.tab',
relatedTarget: $this[0]
})
$this.trigger({
type: 'shown.bs.tab',
relatedTarget: $previous[0]
})
})
}
Tab.prototype.activate=function (element, container, callback){
var $active=container.find('> .active')
var transition=callback
&& $.support.transition
&& ($active.length&&$active.hasClass('fade')||!!container.find('> .fade').length)
function next(){
$active
.removeClass('active')
.find('> .dropdown-menu > .active')
.removeClass('active')
.end()
.find('[data-toggle="tab"]')
.attr('aria-expanded', false)
element
.addClass('active')
.find('[data-toggle="tab"]')
.attr('aria-expanded', true)
if(transition){
element[0].offsetWidth
element.addClass('in')
}else{
element.removeClass('fade')
}
if(element.parent('.dropdown-menu').length){
element
.closest('li.dropdown')
.addClass('active')
.end()
.find('[data-toggle="tab"]')
.attr('aria-expanded', true)
}
callback&&callback()
}
$active.length&&transition ?
$active
.one('bsTransitionEnd', next)
.emulateTransitionEnd(Tab.TRANSITION_DURATION) :
next()
$active.removeClass('in')
}
function Plugin(option){
return this.each(function (){
var $this=$(this)
var data=$this.data('bs.tab')
if(!data) $this.data('bs.tab', (data=new Tab(this)))
if(typeof option=='string') data[option]()
})
}
var old=$.fn.tab
$.fn.tab=Plugin
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function (){
$.fn.tab=old
return this
}
var clickHandler=function (e){
e.preventDefault()
Plugin.call($(this), 'show')
}
$(document)
.on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
.on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)
}(jQuery);
+function ($){
'use strict';
var Affix=function (element, options){
this.options=$.extend({}, Affix.DEFAULTS, options)
this.$target=$(this.options.target)
.on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
.on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))
this.$element=$(element)
this.affixed=null
this.unpin=null
this.pinnedOffset=null
this.checkPosition()
}
Affix.VERSION='3.3.7'
Affix.RESET='affix affix-top affix-bottom'
Affix.DEFAULTS={
offset: 0,
target: window
}
Affix.prototype.getState=function (scrollHeight, height, offsetTop, offsetBottom){
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
var targetHeight=this.$target.height()
if(offsetTop!=null&&this.affixed=='top') return scrollTop < offsetTop ? 'top':false
if(this.affixed=='bottom'){
if(offsetTop!=null) return (scrollTop + this.unpin <=position.top) ? false:'bottom'
return (scrollTop + targetHeight <=scrollHeight - offsetBottom) ? false:'bottom'
}
var initializing=this.affixed==null
var colliderTop=initializing ? scrollTop:position.top
var colliderHeight=initializing ? targetHeight:height
if(offsetTop!=null&&scrollTop <=offsetTop) return 'top'
if(offsetBottom!=null&&(colliderTop + colliderHeight >=scrollHeight - offsetBottom)) return 'bottom'
return false
}
Affix.prototype.getPinnedOffset=function (){
if(this.pinnedOffset) return this.pinnedOffset
this.$element.removeClass(Affix.RESET).addClass('affix')
var scrollTop=this.$target.scrollTop()
var position=this.$element.offset()
return (this.pinnedOffset=position.top - scrollTop)
}
Affix.prototype.checkPositionWithEventLoop=function (){
setTimeout($.proxy(this.checkPosition, this), 1)
}
Affix.prototype.checkPosition=function (){
if(!this.$element.is(':visible')) return
var height=this.$element.height()
var offset=this.options.offset
var offsetTop=offset.top
var offsetBottom=offset.bottom
var scrollHeight=Math.max($(document).height(), $(document.body).height())
if(typeof offset!='object')         offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')    offsetTop=offset.top(this.$element)
if(typeof offsetBottom=='function') offsetBottom=offset.bottom(this.$element)
var affix=this.getState(scrollHeight, height, offsetTop, offsetBottom)
if(this.affixed!=affix){
if(this.unpin!=null) this.$element.css('top', '')
var affixType='affix' + (affix ? '-' + affix:'')
var e=$.Event(affixType + '.bs.affix')
this.$element.trigger(e)
if(e.isDefaultPrevented()) return
this.affixed=affix
this.unpin=affix=='bottom' ? this.getPinnedOffset():null
this.$element
.removeClass(Affix.RESET)
.addClass(affixType)
.trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
}
if(affix=='bottom'){
this.$element.offset({
top: scrollHeight - height - offsetBottom
})
}}
function Plugin(option){
return this.each(function (){
var $this=$(this)
var data=$this.data('bs.affix')
var options=typeof option=='object'&&option
if(!data) $this.data('bs.affix', (data=new Affix(this, options)))
if(typeof option=='string') data[option]()
})
}
var old=$.fn.affix
$.fn.affix=Plugin
$.fn.affix.Constructor=Affix
$.fn.affix.noConflict=function (){
$.fn.affix=old
return this
}
$(window).on('load', function (){
$('[data-spy="affix"]').each(function (){
var $spy=$(this)
var data=$spy.data()
data.offset=data.offset||{}
if(data.offsetBottom!=null) data.offset.bottom=data.offsetBottom
if(data.offsetTop!=null) data.offset.top=data.offsetTop
Plugin.call($spy, data)
})
})
}(jQuery);
var $=jQuery;
jQuery(function ($){
'use strict';
$('body').addClass('js');
$(".navbar li").each(function (){
var each_li=$(this);
if(each_li.find('ul').length > 0){
each_li.append("<span class='has-subnav'><i class='fa fa-angle-down'></i></span>");
}});
});
$(document).on("click", '.menu-link', function (e){
e.preventDefault();
if($(this).hasClass('active')){
$(this).removeClass('active');
}else{
$(this).addClass('active');
}
if($('#menu').hasClass('active')){
$('#menu').removeClass('active');
}else{
$('#menu').addClass('active');
}});
$(document).on("click", '.has-subnav', function (e){
e.preventDefault();
var $this=$(this);
$this.parent('li').find('> ul').toggleClass('active');
});
jQuery(document).on('click', '.careerfy-nav-toogle', function (){
'use strict';
var _this=jQuery(this);
var nav_bar=jQuery('.careerfy-nav-area');
if(nav_bar.hasClass('nav-active')){
nav_bar.removeClass('nav-active');
_this.find('img').attr('src', careerfy_funnc_vars.nav_open_img);
nav_bar.hide('slide', {direction: 'left'}, 500);
}else{
nav_bar.addClass('nav-active');
_this.find('img').attr('src', careerfy_funnc_vars.nav_close_img);
nav_bar.show("slide", { direction: "left" }, 500);
}});
jQuery(".navbar-nav .sub-menu").parent("li").addClass("submenu-addicon");
jQuery(window).resize(function(){
'use strict';
var $=jQuery;
var $menu=$('#menu'),
$menulink=$('.menu-link');
$menu.removeClass('active');
$menulink.addClass('active');
if(jQuery('.careerfy-header-one').length > 0){
var sub_nav=jQuery('.careerfy-header-one').find('.navigation-sub');
var sub_nav_html=sub_nav.html();
if(window.innerWidth < 765){
var car_right_dev=jQuery('.careerfy-header-one').find('.careerfy-right');
sub_nav.remove();
car_right_dev.html('<div class="navigation-sub">' + sub_nav_html + '</div>' + car_right_dev.html());
}else{
var logo_con=jQuery('.careerfy-header-one').find('.careerfy-logo-con');
sub_nav.remove();
logo_con.html(logo_con.html() + '<div class="navigation-sub">' + sub_nav_html + '</div>');
}}
if(jQuery('.careerfy-header-three').length > 0){
var sub_nav=jQuery('.careerfy-header-three').find('.navigation-subthree');
var sub_nav_html=sub_nav.html();
if(window.innerWidth > 520&&window.innerWidth < 980){
var car_right_dev=jQuery('.careerfy-header-three').find('.careerfy-logo-con');
sub_nav.remove();
if(car_right_dev.find('.navigation-subthree').length==0){
car_right_dev.html('<div class="navigation-subthree">' + sub_nav_html + '</div>' + car_right_dev.html());
}}else{
var logo_con=jQuery('.careerfy-header-three').find('.careerfy-right');
sub_nav.remove();
if(logo_con.find('.navigation-subthree').length==0){
logo_con.html(logo_con.html() + '<div class="navigation-subthree">' + sub_nav_html + '</div>');
}}
}});
(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0];var i=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";var s=document.createElement("div");s.innerHTML='<p>x</p><style id="fit-vids-style">'+i+"</style>";r.appendChild(s.childNodes[1])}if(t){e.extend(n,t)}return this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];if(n.customSelector){t.push(n.customSelector)}var r=".fitvidsignore";if(n.ignore){r=r+", "+n.ignore}var i=e(this).find(t.join(","));i=i.not("object object");i=i.not(r);i.each(function(){var t=e(this);if(t.parents(r).length>0){return}if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length){return}if(!t.css("height")&&!t.css("width")&&(isNaN(t.attr("height"))||isNaN(t.attr("width")))){t.attr("height",9);t.attr("width",16)}var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=!isNaN(parseInt(t.attr("width"),10))?parseInt(t.attr("width"),10):t.width(),s=n/i;if(!t.attr("id")){var o="fitvid"+Math.floor(Math.random()*999999);t.attr("id",o)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",s*100+"%");t.removeAttr("height").removeAttr("width")})})}})(window.jQuery||window.Zepto);
var $=jQuery;
jQuery(document).on('click', '.jobsearch-add-job-to-favourite', function (){
var _this=jQuery(this);
var this_id=_this.attr('data-id');
var before_icon=_this.attr('data-before-icon');
var after_icon=_this.attr('data-after-icon');
var this_loader=_this.find('i');
var msg_con=_this.next('.job-to-fav-msg-con');
this_loader.attr('class', 'fa fa-refresh fa-spin');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
job_id: this_id,
action: 'jobsearch_add_candidate_job_to_favourite',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.error!=='undefined'&&response.error=='1'){
msg_con.html(response.msg);
this_loader.attr('class', before_icon);
return false;
}
if(typeof response.msg!=='undefined'&&response.msg!=''){
this_loader.attr('class', after_icon);
_this.removeClass('jobsearch-add-job-to-favourite');
}});
request.fail(function (jqXHR, textStatus){
this_loader.attr('class', before_icon);
});
});
var ajaxCustomFieldRequestText;
var ajaxCustomFieldRequestHeading;
var ajaxCustomFieldRequestNumber;
var ajaxCustomFieldRequestEmail;
var ajaxCustomFieldRequestDate;
var ajaxCustomFieldRequestRange;
var ajaxCustomFieldRequestSalary;
var ajaxCustomFieldRequestTextarea;
var ajaxCustomFieldRequestDropdown;
var ajaxCustomFieldSaveRequest;
jQuery(document).on('click', '.jobsearch-custom-field-add-field', function (){
"use strict";
global_custom_field_counter++;
var ajax_url=jobsearch_customfield_common_vars.ajax_url,
$this=jQuery(this),
randid=$this.data('randid'),
form_element=jQuery('#jobsearch-custom-field-form-' + randid),
fieldtype=$this.data('fieldtype'),
fieldlabel=$this.data('fieldlabel'),
field_container=jQuery('#foo' + randid),
all_fields_count=form_element.find('input[name="custom-fields-all-names-count"]'),
all_fields_string=form_element.find('input[name="custom-fields-all-names"]'),
empty_container=field_container.find('.custom-field-empty-msg');
var action='';
var old_text=fieldlabel;
$this.html('<i class="dashicons dashicons-update fa-spin"></i>');
action='jobsearch_custom_field_html';
var dataString='action=' + action + '&fieldtype=' + fieldtype + '&global_custom_field_counter=' + global_custom_field_counter;
if(fieldtype=='heading'){
if(typeof (ajaxCustomFieldRequestHeading)!='undefined'){
ajaxCustomFieldRequestHeading.abort();
}
ajaxCustomFieldRequestHeading=jQuery.ajax({
type: "POST",
url: ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(response!='error'){
$this.html(old_text);
empty_container.hide();
field_container.append(response.html);
var all_fields_count_val=all_fields_count.val();
all_fields_count_val++;
all_fields_count.val(all_fields_count_val);
}else{
$this.html(' There is an error.');
}}
});
}else if(fieldtype=='text'){
if(typeof (ajaxCustomFieldRequestText)!='undefined'){
ajaxCustomFieldRequestText.abort();
}
ajaxCustomFieldRequestText=jQuery.ajax({
type: "POST",
url: ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(response!='error'){
$this.html(old_text);
empty_container.hide();
field_container.append(response.html);
var all_fields_count_val=all_fields_count.val();
all_fields_count_val++;
all_fields_count.val(all_fields_count_val);
}else{
$this.html(' There is an error.');
}}
});
}else if(fieldtype=='number'){
if(typeof (ajaxCustomFieldRequestNumber)!='undefined'){
ajaxCustomFieldRequestNumber.abort();
}
ajaxCustomFieldRequestNumber=jQuery.ajax({
type: "POST",
url: ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(response!='error'){
$this.html(old_text);
empty_container.hide();
field_container.append(response.html);
var all_fields_count_val=all_fields_count.val();
all_fields_count_val++;
all_fields_count.val(all_fields_count_val);
}else{
$this.html(' There is an error.');
}}
});
}else if(fieldtype=='date'){
if(typeof (ajaxCustomFieldRequestDate)!='undefined'){
ajaxCustomFieldRequestDate.abort();
}
ajaxCustomFieldRequestDate=jQuery.ajax({
type: "POST",
url: ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(response!='error'){
$this.html(old_text);
empty_container.hide();
field_container.append(response.html);
var all_fields_count_val=all_fields_count.val();
all_fields_count_val++;
all_fields_count.val(all_fields_count_val);
}else{
$this.html(' There is an error.');
}}
});
}else if(fieldtype=='range'){
if(typeof (ajaxCustomFieldRequestRange)!='undefined'){
ajaxCustomFieldRequestRange.abort();
}
ajaxCustomFieldRequestRange=jQuery.ajax({
type: "POST",
url: ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(response!='error'){
$this.html(old_text);
empty_container.hide();
field_container.append(response.html);
var all_fields_count_val=all_fields_count.val();
all_fields_count_val++;
all_fields_count.val(all_fields_count_val);
}else{
$this.html(' There is an error.');
}}
});
}else if(fieldtype=='salary'){
if(typeof (ajaxCustomFieldRequestSalary)!='undefined'){
ajaxCustomFieldRequestSalary.abort();
}
ajaxCustomFieldRequestSalary=jQuery.ajax({
type: "POST",
url: ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(response!='error'){
$this.html(old_text);
empty_container.hide();
field_container.append(response.html);
var all_fields_count_val=all_fields_count.val();
all_fields_count_val++;
all_fields_count.val(all_fields_count_val);
}else{
$this.html(' There is an error.');
}}
});
}else if(fieldtype=='email'){
if(typeof (ajaxCustomFieldRequestEmail)!='undefined'){
ajaxCustomFieldRequestEmail.abort();
}
ajaxCustomFieldRequestEmail=jQuery.ajax({
type: "POST",
url: ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(response!='error'){
$this.html(old_text);
empty_container.hide();
field_container.append(response.html);
var all_fields_count_val=all_fields_count.val();
all_fields_count_val++;
all_fields_count.val(all_fields_count_val);
}else{
$this.html(' There is an error.');
}}
});
}else if(fieldtype=='dropdown'){
if(typeof (ajaxCustomFieldRequestDropdown)!='undefined'){
ajaxCustomFieldRequestDropdown.abort();
}
ajaxCustomFieldRequestDropdown=jQuery.ajax({
type: "POST",
url: ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(response!='error'){
$this.html(old_text);
empty_container.hide();
field_container.append(response.html);
var all_fields_count_val=all_fields_count.val();
all_fields_count_val++;
all_fields_count.val(all_fields_count_val);
}else{
$this.html(' There is an error.');
}}
});
}else if(fieldtype=='textarea'){
if(typeof (ajaxCustomFieldRequestTextarea)!='undefined'){
ajaxCustomFieldRequestTextarea.abort();
}
ajaxCustomFieldRequestTextarea=jQuery.ajax({
type: "POST",
url: ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(response!='error'){
$this.html(old_text);
empty_container.hide();
field_container.append(response.html);
var all_fields_count_val=all_fields_count.val();
all_fields_count_val++;
all_fields_count.val(all_fields_count_val);
}else{
$this.html(' There is an error.');
}}
});
}
return false;
});
jQuery(document).on('click', '.custom-fields-remove', function (){
"use strict";
var $this=jQuery(this),
randid=$this.data('randid'),
randid=$this.data('randid');
var parent_ul=jQuery('.custom-field-class-' + randid).parents('ul');
jQuery('.custom-field-class-' + randid).slideUp("normal").promise().done(function (){
jQuery(this).remove();
if(parent_ul.children().length <=1){
parent_ul.find('.custom-field-empty-msg').show('slow');
}});
});
jQuery(document).on('click', '.custom-fields-submit', function (){
"use strict";
var ajax_url=jobsearch_customfield_common_vars.ajax_url,
$this=jQuery(this),
randid=$this.data('randid'),
entitytype=$this.data('entitytype'),
btntext=$this.data('btntext'),
submited_form=jQuery('#jobsearch-custom-field-form-' + randid);
$this.html('<i class="dashicons dashicons-update fa-spin"></i>');
jQuery('.custom-field-msg-' + randid).html('')
var dataString='action=jobsearch_custom_fields_save&entitytype=' + entitytype + '&' + submited_form.serialize();
if(typeof (ajaxCustomFieldSaveRequest)!=='undefined'){
ajaxCustomFieldSaveRequest.abort();
}
ajaxCustomFieldSaveRequest=jQuery.ajax({
type: "POST",
url: ajax_url,
data: dataString,
dataType: "json",
success: function (response){
$this.html(btntext);
if(response!='error'){
jQuery('.custom-field-msg-' + randid).html(response.msg);
}else{
jQuery('.custom-field-msg-' + randid).html('There is an error.');
}
jQuery('.custom-field-msg-' + randid).show();
}});
return false;
});
jQuery(document).on("click", ".option-field-add-btn", function (e){
"use strict";
e.preventDefault();
var _this=jQuery(this),
b=_this.closest('div.field-options-list');
b.clone().insertAfter(b);
});
jQuery(document).on("click", ".option-field-remove", function (e){
"use strict";
e.preventDefault();
var _this=jQuery(this);
_this.parents('div.field-options-list').remove();
});
jQuery(document).on("change", ".check-name-availability", function (e){
"use strict";
var ajax_url=jobsearch_customfield_common_vars.ajax_url,
_this=jQuery(this),
parentForm=_this.closest('form'),
this_string=_this.val(),
custom_all_fileds=parentForm.find('input[name="custom-fields-all-names"]'),
custom_all_fileds_val=custom_all_fileds.val(),
custom_all_fileds_count=parentForm.find('input[name="custom-fields-all-names-count"]'),
custom_all_fileds_count_val=custom_all_fileds_count.val(),
msg_container=_this.nextAll('.available-msg:first');
msg_container.html('<i class="dashicons dashicons-update fa-spin"></i>');
var dataString='action=jobsearch_custom_fields_avalibility&custom_all_fileds=' + custom_all_fileds_val + '&this_string=' + this_string;
jQuery.ajax({
type: "POST",
url: ajax_url,
data: dataString,
dataType: "json",
success: function (response){
if(response.type!='error'){
custom_all_fileds.val(custom_all_fileds.val() + "," + this_string);
custom_all_fileds_count_val++;
custom_all_fileds_count.val(custom_all_fileds_count_val);
msg_container.html(response.message);
}else{
msg_container.html(response.message);
}}
});
});
function jobsearch_member_job_job_application(thisObj, job_id, member_id, jobapplication, jobapplicationd, before_icon, after_icon, strings){
"use strict";
var job_application_icon_class=jQuery(thisObj).find("i").attr('class');
var loader_class='fa fa-spinner fa-spin';
jQuery(thisObj).find("i").removeClass(job_application_icon_class).addClass(loader_class);
var dataString='job_id=' + job_id + '&member_id=' + member_id + '&action=jobsearch_job_application_submit';
jQuery.ajax({
type: "POST",
url: jobsearch_job_application.admin_url,
data: dataString,
dataType: "json",
success: function (response){
if(response.status==true){
jQuery(thisObj).removeClass('jobapplication').addClass('jobapplication');
jQuery(thisObj).find("i").removeClass(loader_class).addClass(after_icon);
jQuery(thisObj).find(".option-content span").html(jobapplicationd);
var msg_obj={msg: strings.added, type: 'success'};
jobsearch_show_response(msg_obj);
if(response.job_count!=='undefined'&&response.job_count!==''){
jQuery(thisObj).find(".likes-count span").text(response.job_count);
}}else{
if(response.current_user==true){
jQuery(thisObj).find("i").removeClass(loader_class).addClass(before_icon);
var msg_obj={msg: response.msg, type: 'success'};
jobsearch_show_response(msg_obj);
}else{
jQuery(thisObj).removeClass('jobapplication').addClass('jobapplication');
jQuery(thisObj).find("i").removeClass(loader_class).addClass(before_icon);
jQuery(thisObj).find(".option-content span").html(jobapplication);
var msg_obj={msg: strings.removed, type: 'success'};
jobsearch_show_response(msg_obj);
if(response.job_count!=='undefined'&&response.job_count!==''){
jQuery(thisObj).find(".likes-count span").text(response.job_count);
}}
}}
});
}
function jobsearch_member_job_application(thisObj, job_id, member_id, jobapplication, jobapplicationd, before_icon, after_icon, strings){
"use strict";
var job_application_icon_class=jQuery(thisObj).find("i").attr('class');
var loader_class='fa fa-spinner fa-spin';
jQuery(thisObj).find("i").removeClass(job_application_icon_class).addClass(loader_class);
var dataString='job_id=' + job_id + '&member_id=' + member_id + '&action=jobsearch_job_application_submit';
jQuery.ajax({
type: "POST",
url: jobsearch_job_application.admin_url,
data: dataString,
dataType: "json",
success: function (response){
console.log(response);
if(response.status==true){
jQuery(thisObj).removeClass('jobapplication').addClass('jobapplication');
jQuery(thisObj).html(after_icon + jobapplicationd);
var msg_obj={msg: strings.added, type: 'success'};
jobsearch_show_response(msg_obj);
if(response.job_count!=='undefined'&&response.job_count!==''){
jQuery(thisObj).parent().find(".likes-count span").text(response.job_count);
}}else{
if(response.current_user==true){
jQuery(thisObj).html(before_icon + jobapplication);
var msg_obj={msg: response.msg, type: 'success'};
jobsearch_show_response(msg_obj);
}else{
jQuery(thisObj).removeClass('jobapplication').addClass('jobapplication');
jQuery(thisObj).html(before_icon + jobapplication);
var msg_obj={msg: strings.removed, type: 'success'};
jobsearch_show_response(msg_obj);
if(response.job_count!=='undefined'&&response.job_count!==''){
jQuery(thisObj).parent().find(".likes-count span").text(response.job_count);
}}
}}
});
}
jQuery(document).on("click", 'input[type="radio"][name="cv_file_item"]', function (){
jQuery('.jobsearch-apply-withcvs .user-cvs-list').find('li').removeClass('active');
jQuery(this).parents('li').addClass('active');
});
jQuery(document).on("click", ".jobsearch-apply-btn", function (){
var thisObj=jQuery(this);
var job_id=thisObj.data('jobid');
var btn_before_label=thisObj.data('btnbeforelabel');
var btn_after_label=thisObj.data('btnafterlabel');
if(typeof jQuery('input[type="radio"][name="cv_file_item"]:checked').val()!=='undefined'){
var cv_attach=jQuery('input[type="radio"][name="cv_file_item"]:checked').val();
var dataString='job_id=' + job_id + '&attach_cv=' + cv_attach;
}else{
var dataString='job_id=' + job_id;
}
if(typeof jQuery(thisObj).parent('div').find('.jobsearch-user-form')!=='undefined'){
dataString=dataString + '&' + jQuery(thisObj).parent('div').find('.jobsearch-user-form').find('input').serialize();
}
thisObj.html('<i class="fa fa-spinner fa-spin"></i>');
thisObj.next('.apply-bmsg').attr('class', 'apply-bmsg');
thisObj.next('.apply-bmsg').html('');
jQuery.ajax({
type: 'POST',
dataType: 'JSON',
url: jobsearch_job_application.admin_url,
data: 'action=jobsearch_job_application_submit&' + dataString,
success: function (response){
if(response.status==true){
thisObj.html(btn_after_label);
thisObj.removeClass('jobsearch-apply-btn');
thisObj.addClass('jobsearch-applied-job-btn');
thisObj.removeAttr('href');
}else{
thisObj.html(btn_before_label);
var apply_msg=thisObj.next('.apply-bmsg');
apply_msg.html(response.msg);
apply_msg.addClass('alert-msg alert-danger');
}}
});
return false;
});
function jobsearch_apply_job_cv_upload_url(input){
if(input.files&&input.files[0]){
var loader_con=jQuery('#jobsearch-upload-cv-main').find('.fileUpLoader');
var cv_file=input.files[0];
var file_size=cv_file.size;
var file_type=cv_file.type;
var file_name=cv_file.name;
jQuery('#jobsearch-uploadfile').attr('placeholder', file_name);
jQuery('#jobsearch-uploadfile').val(file_name);
var allowed_types=["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"];
file_size=parseFloat(file_size / 1024).toFixed(2);
if(file_size <=1024){
if(allowed_types.indexOf(file_type) >=0){
loader_con.html('<i class="fa fa-refresh fa-spin"></i>');
var formData=new FormData();
formData.append('on_apply_cv_file', cv_file);
formData.append('action', 'jobsearch_apply_job_with_cv_file');
var request=$.ajax({
url: jobsearch_job_application.admin_url,
method: "POST",
data: formData,
processData: false,
contentType: false,
dataType: "json"
});
request.done(function (response){
if(typeof response.err_msg!=='undefined'&&response.err_msg!=''){
loader_con.html(response.err_msg);
return false;
}
if(typeof response.filehtml!=='undefined'&&response.filehtml!=''){
jQuery('.jobsearch-apply-withcvs .user-cvs-list').append(response.filehtml);
jQuery('.jobsearch-apply-withcvs .user-cvs-list li:last-child').find('input').trigger('click');
}
loader_con.html('');
});
request.fail(function (jqXHR, textStatus){
loader_con.html(jobsearch_job_application.error_msg);
loader_con.html('');
});
}else{
alert(jobsearch_job_application.cv_file_types);
}}else{
alert(jobsearch_job_application.com_file_size);
}}
}
jQuery(document).on('change', 'input[name="on_apply_cv_file"]', function (){
jobsearch_apply_job_cv_upload_url(this);
});
jQuery(document).on('click', '.jobsearch-nonuser-apply-btn', function (){
jobsearch_modal_popup_open('JobSearchNonuserApplyModal');
});
jQuery(document).on('click', '.jobsearch-applyin-withemail', function (e){
e.preventDefault();
var _this=$(this);
var this_id=_this.attr('data-jobid');
var rand_id=_this.attr('data-randid');
var this_con=jQuery('#apply-withemail-' + rand_id);
var ajax_url=jobsearch_job_application.admin_url;
var msg_con=this_con.find('.apply-job-form-msg');
var msg_loader=this_con.find('.apply-job-loader');
var msg_name=this_con.find('input[name="user_fullname"]');
var msg_email=this_con.find('input[name="user_email"]');
var user_msg=this_con.find('textarea[name="user_msg"]');
var error=0;
var email_pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
if(msg_name.val()==''){
error=1;
msg_name.css({"border": "1px solid #ff0000"});
}else{
msg_name.css({"border": "1px solid #efefef"});
}
if(msg_email.val()==''){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
if(!email_pattern.test(msg_email.val())){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
msg_email.css({"border": "1px solid #efefef"});
}}
if(error==0){
msg_loader.html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: ajax_url,
method: "POST",
data: {
'job_id':this_id,
'user_name':msg_name.val(),
'user_email':msg_email.val(),
'user_msg':user_msg.val(),
'action':'jobsearch_applying_job_with_email',
},
dataType: "json"
});
request.done(function (response){
var msg_before='';
var msg_after='';
if(typeof response.error!=='undefined'){
if(response.error=='1'){
msg_before='<div class="alert alert-danger"><i class="fa fa-times"></i> ';
msg_after='</div>';
}else if(response.error=='0'){
msg_before='<div class="alert alert-success"><i class="fa fa-check"></i> ';
msg_after='</div>';
}}
if(typeof response.msg!=='undefined'){
msg_con.html(msg_before + response.msg + msg_after);
if(typeof response.error!=='undefined'&&response.error=='0'){
msg_name.val('');
msg_email.val('');
this_con.find('ul.apply-fields-list').slideUp();
}}else{
msg_con.html(jobsearch_job_application.error_msg);
}
msg_loader.html('');
});
request.fail(function (jqXHR, textStatus){
msg_con.html(jobsearch_job_application.error_msg);
msg_loader.html('');
});
}
return false;
});
jQuery(document).on('click', '.jobsearch-apply-woutreg-btn', function (e){
e.preventDefault();
var this_id=$(this).data('id'),
msg_form=$('#apply-form-' + this_id),
ajax_url=jobsearch_job_application.admin_url,
msg_con=msg_form.find('.apply-job-form-msg'),
msg_loader=msg_form.find('.form-loader'),
msg_name=msg_form.find('input[name="user_fullname"]'),
msg_email=msg_form.find('input[name="user_email"]'),
cv_file=msg_form.find('input[name="candidate_cv_file"]'),
error=0;
var email_pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
if(msg_name.val()==''){
error=1;
msg_name.css({"border": "1px solid #ff0000"});
}else{
msg_name.css({"border": "1px solid #efefef"});
}
if(msg_email.val()==''){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
if(!email_pattern.test(msg_email.val())){
error=1;
msg_email.css({"border": "1px solid #ff0000"});
}else{
msg_email.css({"border": "1px solid #efefef"});
}}
var phone_pattern=new RegExp(/^[0-9\-\(\)\/\+\s]*$/);
var num_pattern=new RegExp('^[0-9]+$');
var phone_number=msg_form.find('input[name="user_phone"]');
var curr_salary=msg_form.find('input[name="user_salary"]');
if(phone_number.val()!=''&&!phone_pattern.test(phone_number.val())){
error=1;
phone_number.css({"border": "1px solid #ff0000"});
}else{
phone_number.css({"border": "1px solid #efefef"});
}
if(curr_salary.val()!=''&&!num_pattern.test(curr_salary.val())){
error=1;
curr_salary.css({"border": "1px solid #ff0000"});
}else{
curr_salary.css({"border": "1px solid #efefef"});
}
if(cv_file.val()!=''){
cv_file=cv_file.prop('files')[0];
var file_size=cv_file.size;
var file_type=cv_file.type;
var allowed_types=["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/pdf"];
file_size=parseFloat(file_size / 1024).toFixed(2);
if(file_size > 1024){
alert('file size exceed.');
error=1;
}
if(allowed_types.indexOf(file_type) < 0){
alert('file type not allowed.');
error=1;
}}
if(error==0){
msg_loader.html('<i class="fa fa-refresh fa-spin"></i>');
var form_data=new FormData(msg_form[0]);
var request=$.ajax({
url: ajax_url,
method: "POST",
data: form_data,
processData: false,
contentType: false,
dataType: "json"
});
request.done(function (response){
var msg_before='';
var msg_after='';
if(typeof response.error!=='undefined'){
if(response.error=='1'){
msg_before='<div class="alert alert-danger"><i class="fa fa-times"></i> ';
msg_after='</div>';
}else if(response.error=='0'){
msg_before='<div class="alert alert-success"><i class="fa fa-check"></i> ';
msg_after='</div>';
}}
if(typeof response.msg!=='undefined'){
msg_con.html(msg_before + response.msg + msg_after);
if(typeof response.error!=='undefined'&&response.error=='0'){
msg_name.val('');
msg_email.val('');
msg_form.find('ul.apply-fields-list').slideUp();
}}else{
msg_con.html(jobsearch_job_application.error_msg);
}
msg_loader.html('');
});
request.fail(function (jqXHR, textStatus){
msg_con.html(jobsearch_job_application.error_msg);
msg_loader.html('');
});
}
return false;
});
jQuery(document).on('change', 'input[name="candidate_cv_file"]', function (){
var filename=jQuery(this)[0].files.length ? jQuery(this)[0].files[0].name:"";
jQuery('#jobsearch-uploadfile').attr('placeholder', filename);
jQuery('#jobsearch-uploadfile').val(filename);
});
jQuery(document).ready(function ($){
$(document).on('click', '.jobsearch-demo-login-btn', function (){
var _this=jQuery(this);
var user_type='candidate';
var icon_class='jobsearch-icon jobsearch-user';
if(_this.hasClass('employer-login-btn')){
user_type='employer';
icon_class='jobsearch-icon jobsearch-building';
}
_this.find('i').attr('class', 'fa fa-refresh fa-spin');
var request=$.ajax({
url: jobsearch_login_register_common_vars.ajax_url,
method: "POST",
data: {
'user_type': user_type,
'action': 'jobsearch_demo_user_login',
},
dataType: "json"
});
request.done(function (response){
if(typeof response.redirect!=='undefined'){
window.location.href=response.redirect;
return false;
}
window.location.reload(true);
});
request.fail(function (jqXHR, textStatus){
_this.find('i').attr('class', icon_class);
});
});
$(document).on('click', '.jobsearch-login-submit-btn', function (e){
e.preventDefault();
var _this=$(this),
this_id=$(this).data('id'),
login_form=$('#login-form-' + this_id),
msg_con=login_form.find('.login-reg-errors'),
loader_con=login_form.find('.form-loader');
var button=$(this).find('button');
var btn_html=button.html();
msg_con.hide();
_this.addClass('disabled-btn');
_this.attr('disabled', 'disabled');
loader_con.show();
loader_con.html('<i class="fa fa-refresh fa-spin"></i>');
$.post(jobsearch_login_register_common_vars.ajax_url, login_form.serialize(), function (data){
var obj=$.parseJSON(data);
msg_con.html(obj.message);
loader_con.hide();
loader_con.html('');
_this.removeClass('disabled-btn');
_this.removeAttr('disabled');
msg_con.slideDown('slow');
if(obj.error==false){
if(typeof obj.redirect!=='undefined'){
window.location.href=obj.redirect;
}
button.hide();
}
button.html(btn_html);
});
});
$(document).on('click', '.lost-password', function (e){
e.preventDefault();
var this_id=$(this).data('id');
$('.login-form-' + this_id).slideUp();
$('.reset-password-' + this_id).slideDown();
});
$(document).on('click', '.login-form-btn', function (e){
e.preventDefault();
var this_id=$(this).data('id');
$('.login-form-' + this_id).slideDown();
$('.reset-password-' + this_id).slideUp();
});
$(document).on('click', '.register-form', function (e){
e.preventDefault();
var this_id=$(this).data('id');
$('.reset-password-' + this_id).slideUp();
$('.register-' + this_id).slideDown();
$('.login-form-' + this_id).slideUp();
});
$(document).on('click', '.reg-tologin-btn', function (e){
e.preventDefault();
var this_id=$(this).data('id');
$('.reset-password-' + this_id).slideUp();
$('.register-' + this_id).slideUp();
$('.login-form-' + this_id).slideDown();
});
$(document).on('click', '.user-type-chose-btn', function (){
var this_type=$(this).attr('data-type');
if(this_type=='jobsearch_candidate'){
$('.user-employer-spec-field').slideUp();
$('.employer-cus-field').slideUp();
$('.candidate-cus-field').slideDown();
$('.jobsearch-register-form').find('.jobsearch-box-title-sub').slideDown();
$('.jobsearch-register-form').find('.jobsearch-login-media').slideDown();
}else{
$('.user-employer-spec-field').slideDown();
$('.employer-cus-field').slideDown();
$('.candidate-cus-field').slideUp();
$('.jobsearch-register-form').find('.jobsearch-box-title-sub').slideUp();
$('.jobsearch-register-form').find('.jobsearch-login-media').slideUp();
}
$(this).parents('.jobsearch-user-type-choose').find('li').removeClass('active');
$(this).parent('li').addClass('active');
$(this).parents('form').find('input[name="pt_user_role"]').val(this_type);
});
$(document).on('change', 'input[type="radio"][name="pt_user_role"]', function (){
if($(this).val()=='jobsearch_candidate'){
$('.user-employer-spec-field').slideUp();
$('.employer-cus-field').slideUp();
$('.candidate-cus-field').slideDown();
}else{
$('.user-employer-spec-field').slideDown();
$('.employer-cus-field').slideDown();
$('.candidate-cus-field').slideUp();
}});
$(document).on('click', '.jobsearch-reset-password-submit-btn', function (e){
e.preventDefault();
var _this=$(this),
this_id=$(this).data('id'),
reset_password_form=$('#reset-password-form-' + this_id),
msg_con=reset_password_form.find('.reset-password-errors'),
loader_con=reset_password_form.find('.form-loader');
var button=$(this).find('button');
var btn_html=button.html();
msg_con.hide();
_this.addClass('disabled-btn');
_this.attr('disabled', 'disabled');
loader_con.show();
loader_con.html('<i class="fa fa-refresh fa-spin"></i>');
$.post(jobsearch_login_register_common_vars.ajax_url, reset_password_form.serialize(), function (data){
var obj=$.parseJSON(data);
msg_con.html(obj.message);
msg_con.slideDown('slow');
_this.removeClass('disabled-btn');
_this.removeAttr('disabled');
loader_con.hide();
loader_con.html('');
button.html(btn_html);
});
});
$(document).on('click', '.jobsearch-register-submit-btn', function (e){
e.preventDefault();
var _this=$(this),
this_id=$(this).data('id'),
registration_form=$('#registration-form-' + this_id),
msg_con=registration_form.find('.registration-errors'),
loader_con=registration_form.find('.form-loader');
var get_terr_val=jobsearch_accept_terms_cond_pop(registration_form);
if(get_terr_val!='yes'){
return false;
}
var button=$(this).find('button');
var btn_html=button.html();
msg_con.hide();
_this.addClass('disabled-btn');
_this.attr('disabled', 'disabled');
loader_con.show();
loader_con.html('<i class="fa fa-refresh fa-spin"></i>');
$.post(jobsearch_login_register_common_vars.ajax_url, registration_form.serialize(), function (data){
var obj=$.parseJSON(data);
msg_con.html(obj.message);
msg_con.slideDown('slow');
button.html(btn_html);
_this.removeClass('disabled-btn');
_this.removeAttr('disabled');
if(typeof obj.error!=='undefined'&&obj.error==true){
loader_con.hide();
loader_con.html('');
}
if(typeof obj.redirect!=='undefined'){
window.location.href=obj.redirect;
}else{
loader_con.html('');
}});
});
});
jQuery(document).on('click', '.user-passreset-submit-btn', function (e){
e.preventDefault();
var _this=jQuery(this);
var _user_id=_this.attr('data-id');
var _user_key=_this.attr('data-key');
var this_form=_this.parents('form');
var this_loader=this_form.find('.loader-box');
var this_msg_con=this_form.find('.message-box');
var new_pass=this_form.find('input[name="new_pass"]');
var conf_pass=this_form.find('input[name="conf_pass"]');
var error=0;
if(new_pass.val()==''){
error=1;
new_pass.css({"border": "1px solid #ff0000"});
}else{
new_pass.css({"border": "1px solid #d3dade"});
}
if(conf_pass.val()==''){
error=1;
conf_pass.css({"border": "1px solid #ff0000"});
}else{
conf_pass.css({"border": "1px solid #d3dade"});
}
if(error==0){
this_msg_con.hide();
this_loader.html('<i class="fa fa-refresh fa-spin"></i>');
var request=jQuery.ajax({
url: jobsearch_plugin_vars.ajax_url,
method: "POST",
data: {
user_id: _user_id,
user_key: _user_key,
new_pass: new_pass.val(),
conf_pass: conf_pass.val(),
action: 'jobsearch_pass_reseting_by_redirect_url',
},
dataType: "json"
});
request.done(function (response){
var msg_before='';
var msg_after='';
if(typeof response.error!=='undefined'){
if(response.error=='1'){
msg_before='<div class="alert alert-danger"><i class="fa fa-times"></i> ';
msg_after='</div>';
}else if(response.error=='0'){
msg_before='<div class="alert alert-success"><i class="fa fa-check"></i> ';
msg_after='</div>';
}}
if(typeof response.msg!=='undefined'){
this_msg_con.html(msg_before + response.msg + msg_after);
this_msg_con.slideDown();
if(typeof response.error!=='undefined'&&response.error=='0'){
new_pass.val('');
conf_pass.val('');
this_form.find('ul.email-fields-list').slideUp();
}}else{
this_msg_con.html(jobsearch_plugin_vars.error_msg);
}
this_loader.html('');
});
request.fail(function (jqXHR, textStatus){
this_loader.html(jobsearch_plugin_vars.error_msg);
});
}});
!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);
function vc_js(){vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_googleplus(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),vc_google_fonts(),vc_gridBehaviour(),vc_rowBehaviour(),vc_prepareHoverBox(),vc_googleMapsPointer(),vc_ttaActivation(),jQuery(document).trigger("vc_js"),window.setTimeout(vc_waypoints,500)}function getSizeName(){var screen_w=jQuery(window).width();return 1170<screen_w?"desktop_wide":960<screen_w&&1169>screen_w?"desktop":768<screen_w&&959>screen_w?"tablet":300<screen_w&&767>screen_w?"mobile":300>screen_w?"mobile_portrait":""}function loadScript(url,$obj,callback){var script=document.createElement("script");script.type="text/javascript",script.readyState&&(script.onreadystatechange=function(){"loaded"!==script.readyState&&"complete"!==script.readyState||(script.onreadystatechange=null,callback())}),script.src=url,$obj.get(0).appendChild(script)}function vc_ttaActivation(){jQuery("[data-vc-accordion]").on("show.vc.accordion",function(e){var $=window.jQuery,ui={};ui.newPanel=$(this).data("vc.accordion").getTarget(),window.wpb_prepare_tab_content(e,ui)})}function vc_accordionActivate(event,ui){if(ui.newPanel.length&&ui.newHeader.length){var $pie_charts=ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=ui.newPanel.find(".vc_round-chart"),$line_charts=ui.newPanel.find(".vc_line-chart"),$carousel=ui.newPanel.find('[data-ride="vc_carousel"]');void 0!==jQuery.fn.isotope&&ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),vc_carouselBehaviour(ui.newPanel),vc_plugin_flexslider(ui.newPanel),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),ui.newPanel.parents(".isotope").length&&ui.newPanel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}}function initVideoBackgrounds(){return window.console&&window.console.warn&&window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),vc_initVideoBackgrounds()}function vc_initVideoBackgrounds(){jQuery("[data-vc-video-bg]").each(function(){var youtubeUrl,youtubeId,$element=jQuery(this);$element.data("vcVideoBg")?(youtubeUrl=$element.data("vcVideoBg"),youtubeId=vcExtractYoutubeId(youtubeUrl),youtubeId&&($element.find(".vc_video-bg").remove(),insertYoutubeVideoAsBackground($element,youtubeId)),jQuery(window).on("grid:items:added",function(event,$grid){$element.has($grid).length&&vcResizeVideoBackground($element)})):$element.find(".vc_video-bg").remove()})}function insertYoutubeVideoAsBackground($element,youtubeId,counter){if("undefined"==typeof YT||void 0===YT.Player)return 100<(counter=void 0===counter?0:counter)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){insertYoutubeVideoAsBackground($element,youtubeId,counter++)},100);var $container=$element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");new YT.Player($container[0],{width:"100%",height:"100%",videoId:youtubeId,playerVars:{playlist:youtubeId,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1,wmode:"transparent"},events:{onReady:function(event){event.target.mute().setLoop(!0)}}}),vcResizeVideoBackground($element),jQuery(window).bind("resize",function(){vcResizeVideoBackground($element)})}function vcResizeVideoBackground($element){var iframeW,iframeH,marginLeft,marginTop,containerW=$element.innerWidth(),containerH=$element.innerHeight();containerW/containerH<16/9?(iframeW=containerH*(16/9),iframeH=containerH,marginLeft=-Math.round((iframeW-containerW)/2)+"px",marginTop=-Math.round((iframeH-containerH)/2)+"px",iframeW+="px",iframeH+="px"):(iframeW=containerW,iframeH=containerW*(9/16),marginTop=-Math.round((iframeH-containerH)/2)+"px",marginLeft=-Math.round((iframeW-containerW)/2)+"px",iframeW+="px",iframeH+="px"),$element.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:marginLeft,marginTop:marginTop,width:iframeW,height:iframeH})}function vcExtractYoutubeId(url){if(void 0===url)return!1;var id=url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!==id&&id[1]}function vc_googleMapsPointer(){var $=window.jQuery,$wpbGmapsWidget=$(".wpb_gmaps_widget");$wpbGmapsWidget.click(function(){$("iframe",this).css("pointer-events","auto")}),$wpbGmapsWidget.mouseleave(function(){$("iframe",this).css("pointer-events","none")}),$(".wpb_gmaps_widget iframe").css("pointer-events","none")}function vc_setHoverBoxPerspective(hoverBox){hoverBox.each(function(){var $this=jQuery(this),width=$this.width(),perspective=4*width+"px";$this.css("perspective",perspective)})}function vc_setHoverBoxHeight(hoverBox){hoverBox.each(function(){var $this=jQuery(this),hoverBoxInner=$this.find(".vc-hoverbox-inner");hoverBoxInner.css("min-height",0);var frontHeight=$this.find(".vc-hoverbox-front-inner").outerHeight(),backHeight=$this.find(".vc-hoverbox-back-inner").outerHeight(),hoverBoxHeight=frontHeight>backHeight?frontHeight:backHeight;hoverBoxHeight<250&&(hoverBoxHeight=250),hoverBoxInner.css("min-height",hoverBoxHeight+"px")})}function vc_prepareHoverBox(){var hoverBox=jQuery(".vc-hoverbox");vc_setHoverBoxHeight(hoverBox),vc_setHoverBoxPerspective(hoverBox)}document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",function(){for(var prefix=["-webkit-","-moz-","-ms-","-o-",""],i=0;i<prefix.length;i++)prefix[i]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")}(),"function"!=typeof window.vc_plugin_flexslider&&(window.vc_plugin_flexslider=function($parent){($parent?$parent.find(".wpb_flexslider"):jQuery(".wpb_flexslider")).each(function(){var this_element=jQuery(this),sliderTimeout=1e3*parseInt(this_element.attr("data-interval")),sliderFx=this_element.attr("data-flex_fx"),slideshow=!0;0===sliderTimeout&&(slideshow=!1),this_element.is(":visible")&&this_element.flexslider({animation:sliderFx,slideshow:slideshow,slideshowSpeed:sliderTimeout,sliderSpeed:800,smoothHeight:!0})})}),"function"!=typeof window.vc_googleplus&&(window.vc_googleplus=function(){0<jQuery(".wpb_googleplus").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="//apis.google.com/js/plusone.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_pinterest&&(window.vc_pinterest=function(){0<jQuery(".wpb_pinterest").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="//assets.pinterest.com/js/pinit.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_progress_bar&&(window.vc_progress_bar=function(){void 0!==jQuery.fn.waypoint&&jQuery(".vc_progress_bar").waypoint(function(){jQuery(this).find(".vc_single_bar").each(function(index){var $this=jQuery(this),bar=$this.find(".vc_bar"),val=bar.data("percentage-value");setTimeout(function(){bar.css({width:val+"%"})},200*index)})},{offset:"85%"})}),"function"!=typeof window.vc_waypoints&&(window.vc_waypoints=function(){void 0!==jQuery.fn.waypoint&&jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function(){jQuery(this).addClass("wpb_start_animation animated")},{offset:"85%"})}),"function"!=typeof window.vc_toggleBehaviour&&(window.vc_toggleBehaviour=function($el){function event(e){e&&e.preventDefault&&e.preventDefault();var title=jQuery(this),element=title.closest(".vc_toggle"),content=element.find(".vc_toggle_content");element.hasClass("vc_toggle_active")?content.slideUp({duration:300,complete:function(){element.removeClass("vc_toggle_active")}}):content.slideDown({duration:300,complete:function(){element.addClass("vc_toggle_active")}})}$el?$el.hasClass("vc_toggle_title")?$el.unbind("click").click(event):$el.find(".vc_toggle_title").unbind("click").click(event):jQuery(".vc_toggle_title").unbind("click").on("click",event)}),"function"!=typeof window.vc_tabsBehaviour&&(window.vc_tabsBehaviour=function($tab){if(jQuery.ui){var $call=$tab||jQuery(".wpb_tabs, .wpb_tour"),ver=jQuery.ui&&jQuery.ui.version?jQuery.ui.version.split("."):"1.10",old_version=1===parseInt(ver[0])&&9>parseInt(ver[1]);$call.each(function(index){var $tabs,interval=jQuery(this).attr("data-interval"),tabs_array=[];if($tabs=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(event,ui){wpb_prepare_tab_content(event,ui)},beforeActivate:function(event,ui){1!==ui.newPanel.index()&&ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")},activate:function(event,ui){wpb_prepare_tab_content(event,ui)}}),interval&&0<interval)try{$tabs.tabs("rotate",1e3*interval)}catch(e){window.console&&window.console.log&&console.log(e)}jQuery(this).find(".wpb_tab").each(function(){tabs_array.push(this.id)}),jQuery(this).find(".wpb_tabs_nav li").click(function(e){return e.preventDefault(),old_version?$tabs.tabs("select",jQuery("a",this).attr("href")):$tabs.tabs("option","active",jQuery(this).index()),!1}),jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function(e){if(e.preventDefault(),old_version){var index=$tabs.tabs("option","selected");jQuery(this).parent().hasClass("wpb_next_slide")?index++:index--,0>index?index=$tabs.tabs("length")-1:index>=$tabs.tabs("length")&&(index=0),$tabs.tabs("select",index)}else{var index=$tabs.tabs("option","active"),length=$tabs.find(".wpb_tab").length;index=jQuery(this).parent().hasClass("wpb_next_slide")?index+1>=length?0:index+1:0>index-1?length-1:index-1,$tabs.tabs("option","active",index)}})})}}),"function"!=typeof window.vc_accordionBehaviour&&(window.vc_accordionBehaviour=function(){jQuery(".wpb_accordion").each(function(index){var $tabs,$this=jQuery(this),active_tab=($this.attr("data-interval"),!isNaN(jQuery(this).data("active-tab"))&&0<parseInt($this.data("active-tab"))&&parseInt($this.data("active-tab"))-1),collapsible=!1===active_tab||"yes"===$this.data("collapsible");$tabs=$this.find(".wpb_accordion_wrapper").accordion({header:"> div > h3",autoHeight:!1,heightStyle:"content",active:active_tab,collapsible:collapsible,navigation:!0,activate:vc_accordionActivate,change:function(event,ui){void 0!==jQuery.fn.isotope&&ui.newContent.find(".isotope").isotope("layout"),vc_carouselBehaviour(ui.newPanel)}}),!0===$this.data("vcDisableKeydown")&&($tabs.data("uiAccordion")._keydown=function(){})})}),"function"!=typeof window.vc_teaserGrid&&(window.vc_teaserGrid=function(){var layout_modes={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function(){var $container=jQuery(this),$thumbs=$container.find(".wpb_thumbnails"),layout_mode=$thumbs.attr("data-layout-mode");$thumbs.isotope({itemSelector:".isotope-item",layoutMode:void 0===layout_modes[layout_mode]?"fitRows":layout_modes[layout_mode]}),$container.find(".categories_filter a").data("isotope",$thumbs).click(function(e){e.preventDefault();var $thumbs=jQuery(this).data("isotope");jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),$thumbs.isotope({filter:jQuery(this).attr("data-filter")})}),jQuery(window).bind("load resize",function(){$thumbs.isotope("layout")})})}),"function"!=typeof window.vc_carouselBehaviour&&(window.vc_carouselBehaviour=function($parent){($parent?$parent.find(".wpb_carousel"):jQuery(".wpb_carousel")).each(function(){var $this=jQuery(this);if(!0!==$this.data("carousel_enabled")&&$this.is(":visible")){$this.data("carousel_enabled",!0),getColumnsCount(jQuery(this)),jQuery(this).hasClass("columns_count_1");var carousele_li=jQuery(this).find(".wpb_thumbnails-fluid li");carousele_li.css({"margin-right":carousele_li.css("margin-left"),"margin-left":0});var fluid_ul=jQuery(this).find("ul.wpb_thumbnails-fluid");fluid_ul.width(fluid_ul.width()+300),jQuery(window).resize(function(){var before_resize=screen_size;screen_size=getSizeName(),before_resize!=screen_size&&window.setTimeout("location.reload()",20)})}})}),"function"!=typeof window.vc_slidersBehaviour&&(window.vc_slidersBehaviour=function(){jQuery(".wpb_gallery_slides").each(function(index){var $imagesGrid,this_element=jQuery(this);if(this_element.hasClass("wpb_slider_nivo")){var sliderTimeout=1e3*this_element.attr("data-interval");0===sliderTimeout&&(sliderTimeout=9999999999),this_element.find(".nivoSlider").nivoSlider({effect:"boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",slices:15,boxCols:8,boxRows:4,animSpeed:800,pauseTime:sliderTimeout,startSlide:0,directionNav:!0,directionNavHide:!0,controlNav:!0,keyboardNav:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next"})}else this_element.hasClass("wpb_image_grid")&&(jQuery.fn.imagesLoaded?$imagesGrid=this_element.find(".wpb_image_grid_ul").imagesLoaded(function(){$imagesGrid.isotope({itemSelector:".isotope-item",layoutMode:"fitRows"})}):this_element.find(".wpb_image_grid_ul").isotope({itemSelector:".isotope-item",layoutMode:"fitRows"}))})}),"function"!=typeof window.vc_prettyPhoto&&(window.vc_prettyPhoto=function(){try{jQuery&&jQuery.fn&&jQuery.fn.prettyPhoto&&jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({animationSpeed:"normal",hook:"data-rel",padding:15,opacity:.7,showTitle:!0,allowresize:!0,counter_separator_label:"/",hideflash:!1,deeplinking:!1,modal:!1,callback:function(){location.href.indexOf("#!prettyPhoto")>-1&&(location.hash="")},social_tools:""})}catch(err){window.console&&window.console.log&&console.log(err)}}),"function"!=typeof window.vc_google_fonts&&(window.vc_google_fonts=function(){return!1}),window.vcParallaxSkroll=!1,"function"!=typeof window.vc_rowBehaviour&&(window.vc_rowBehaviour=function(){function fullWidthRow(){var $elements=$('[data-vc-full-width="true"]');$.each($elements,function(key,item){var $el=$(this);$el.addClass("vc_hidden");var $el_full=$el.next(".vc_row-full-width");if($el_full.length||($el_full=$el.parent().next(".vc_row-full-width")),$el_full.length){var el_margin_left=parseInt($el.css("margin-left"),10),el_margin_right=parseInt($el.css("margin-right"),10),offset=0-$el_full.offset().left-el_margin_left,width=$(window).width();if($el.css({position:"relative",left:offset,"box-sizing":"border-box",width:$(window).width()}),!$el.data("vcStretchContent")){var padding=-1*offset;0>padding&&(padding=0);var paddingRight=width-padding-$el_full.width()+el_margin_left+el_margin_right;0>paddingRight&&(paddingRight=0),$el.css({"padding-left":padding+"px","padding-right":paddingRight+"px"})}$el.attr("data-vc-full-width-init","true"),$el.removeClass("vc_hidden"),$(document).trigger("vc-full-width-row-single",{el:$el,offset:offset,marginLeft:el_margin_left,marginRight:el_margin_right,elFull:$el_full,width:width})}}),$(document).trigger("vc-full-width-row",$elements)}function fullHeightRow(){var $element=$(".vc_row-o-full-height:first");if($element.length){var $window,windowHeight,offsetTop,fullHeight;$window=$(window),windowHeight=$window.height(),offsetTop=$element.offset().top,offsetTop<windowHeight&&(fullHeight=100-offsetTop/(windowHeight/100),$element.css("min-height",fullHeight+"vh"))}$(document).trigger("vc-full-height-row",$element)}var $=window.jQuery;$(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour",fullWidthRow).on("resize.vcRowBehaviour",fullHeightRow),fullWidthRow(),fullHeightRow(),function(){(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))&&$(".vc_row-o-full-height").each(function(){"flex"===$(this).css("display")&&$(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')})}(),vc_initVideoBackgrounds(),function(){var vcSkrollrOptions,callSkrollInit=!1;window.vcParallaxSkroll&&window.vcParallaxSkroll.destroy(),$(".vc_parallax-inner").remove(),$("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),$("[data-vc-parallax]").each(function(){var skrollrSpeed,skrollrSize,skrollrStart,skrollrEnd,$parallaxElement,parallaxImage,youtubeId;callSkrollInit=!0,"on"===$(this).data("vcParallaxOFade")&&$(this).children().attr("data-5p-top-bottom","opacity:0;").attr("data-30p-top-bottom","opacity:1;"),skrollrSize=100*$(this).data("vcParallax"),$parallaxElement=$("<div />").addClass("vc_parallax-inner").appendTo($(this)),$parallaxElement.height(skrollrSize+"%"),parallaxImage=$(this).data("vcParallaxImage"),youtubeId=vcExtractYoutubeId(parallaxImage),youtubeId?insertYoutubeVideoAsBackground($parallaxElement,youtubeId):void 0!==parallaxImage&&$parallaxElement.css("background-image","url("+parallaxImage+")"),skrollrSpeed=skrollrSize-100,skrollrStart=-skrollrSpeed,skrollrEnd=0,$parallaxElement.attr("data-bottom-top","top: "+skrollrStart+"%;").attr("data-top-bottom","top: "+skrollrEnd+"%;")}),!(!callSkrollInit||!window.skrollr)&&(vcSkrollrOptions={forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}},window.vcParallaxSkroll=skrollr.init(vcSkrollrOptions),window.vcParallaxSkroll)}()}),"function"!=typeof window.vc_gridBehaviour&&(window.vc_gridBehaviour=function(){jQuery.fn.vcGrid&&jQuery("[data-vc-grid]").vcGrid()}),"function"!=typeof window.getColumnsCount&&(window.getColumnsCount=function(el){for(var find=!1,i=1;!1===find;){if(el.hasClass("columns_count_"+i))return find=!0,i;i++}});var screen_size=getSizeName();"function"!=typeof window.wpb_prepare_tab_content&&(window.wpb_prepare_tab_content=function(event,ui){var $ui_panel,$google_maps,panel=ui.panel||ui.newPanel,$pie_charts=panel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=panel.find(".vc_round-chart"),$line_charts=panel.find(".vc_line-chart"),$carousel=panel.find('[data-ride="vc_carousel"]');if(vc_carouselBehaviour(),vc_plugin_flexslider(panel),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),$ui_panel=panel.find(".isotope, .wpb_image_grid_ul"),$google_maps=panel.find(".wpb_gmaps_widget"),0<$ui_panel.length&&$ui_panel.isotope("layout"),$google_maps.length&&!$google_maps.is(".map_ready")){var $frame=$google_maps.find("iframe");$frame.attr("src",$frame.attr("src")),$google_maps.addClass("map_ready")}panel.parents(".isotope").length&&panel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}),window.vc_googleMapsPointer,jQuery(document).ready(vc_prepareHoverBox),jQuery(window).resize(vc_prepareHoverBox),jQuery(document).ready(function($){window.vc_js()});
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
!function(t){"use strict";t.fn.countUp=function(e){var a=t.extend({time:2e3,delay:10},e);return this.each(function(){var e=t(this),n=a,u=function(){e.data("counterupTo")||e.data("counterupTo",e.text());var t=parseInt(e.data("counter-time"))>0?parseInt(e.data("counter-time")):n.time,a=parseInt(e.data("counter-delay"))>0?parseInt(e.data("counter-delay")):n.delay,u=t/a,r=e.data("counterupTo"),o=[r],c=/[0-9]+,[0-9]+/.test(r);r=r.replace(/,/g,"");for(var d=(/^[0-9]+$/.test(r),/^[0-9]+\.[0-9]+$/.test(r)),s=d?(r.split(".")[1]||[]).length:0,i=u;i>=1;i--){var p=parseInt(Math.round(r/u*i));if(d&&(p=parseFloat(r/u*i).toFixed(s)),c)for(;/(\d+)(\d{3})/.test(p.toString());)p=p.toString().replace(/(\d+)(\d{3})/,"$1,$2");o.unshift(p)}e.data("counterup-nums",o),e.text("0");var f=function(){e.text(e.data("counterup-nums").shift()),e.data("counterup-nums").length?setTimeout(e.data("counterup-func"),a):(delete e.data("counterup-nums"),e.data("counterup-nums",null),e.data("counterup-func",null))};e.data("counterup-func",f),setTimeout(e.data("counterup-func"),a)};e.waypoint(u,{offset:"100%",triggerOnce:!0})})}}(jQuery);
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});