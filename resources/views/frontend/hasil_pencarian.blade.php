@extends('layouts.frontend')
@section('content')
<section class="find-job section">
  <div class="container">
    <h2 class="section-title">Lowongan Pekerjaan</h2>
    @if($lowongan->count() == 0)
    <i class="fa fa-search"></i>Pencarian tidak ditemukan
    @endif
     @foreach($lowongan as $data)
    <div class="row">
      <div class="col-md-12">
        <div class="job-list">
          <div class="thumb">
            <a href="job-details.html"><img src="{{ asset('assets/img/logopers/'. $data->Perusahaan->logo )}}" height="100px" alt=""></a>
          </div>
          <div class="job-list-content">
            <h4><a href="job-details.html">{{ $data->nama_low }}</a></h4>
            <p>{!! str_limit($data->deskripsi_iklan, 290) !!}</p>
            <div class="job-tag">
              <div class="pull-left">
                <div class="meta-tag">
                  <span><a href="browse-categories.html"><i class="ti-brush"></i>{{ $data->Kategori->nama_kategori }}</a></span>
                  <span><i class="ti-location-pin"></i>{{ $data->lokasi}}</span>
                  <span><i class="ti-time"></i>{{ $data->tgl_mulai }}</span>
                </div>
              </div>
              <div class="pull-right">
                <div class="icon">
                  <i class="ti-heart"></i>
                </div>
                <a href="{{ url('detail_lowongan',$data->id) }}" class="btn btn-common btn-rm">Terapkan Pekerjaan</a>
              </div>
            </div>
          </div>
        </div>
       @endforeach
</section>
@endsection