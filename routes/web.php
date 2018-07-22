<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['prefix'=>'admin','middleware'=>['auth','role:admin']],function(){
	Route::resource('user','UserController');
	// Route::resource('member','MemberController');
	Route::resource('kategori','KategoriLowonganController');
	Route::resource('perusahaan','PerusahaanController');
	Route::resource('lowongan','LowonganController');
	Route::resource('pelamar','PelamarController');
	// Route::resource('lamaran','LamaranController');
});

Route::group(['prefix'=>'pers','middleware'=>['auth','role:admin|perusahaan']],function(){
Route::resource('perusahaan','PerusahaanController');
	Route::resource('lowongan','LowonganController');
	Route::resource('pelamar','PelamarController');
	});
Route::group(['prefix'=>'jobpel','middleware'=>['auth','role:admin|perusahaan|pelamar']],function(){
	Route::resource('pelamar','PelamarController');
});
Route::get('/', 'FrontendController@index');
Route::get('/detail_lowongan/{id}', 'FrontendController@detail_lowongan');
Route::get('/konfirmasilowongan/{id}', 'LowonganController@konfirmasi_lowongan');
Route::get('/konfirmasipelamar/{id}', 'PelamarController@konfirmasi_pelamar');
Route::post('/carilowongan', 'FrontendController@cari_lowongan');

