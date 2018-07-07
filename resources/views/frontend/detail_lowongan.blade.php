@extends('layouts.frontend')
@section('content')

<section class="job-detail section">
         <div class="container">
            <div class="row">
               <div class="col-md-12 col-sm-12 col-xs-12">
                  <div class="header-detail">
                     <div class="header-content pull-left">
                        <h3><a href="#">{{ $lowongan->nama_low }}</a></h3>
                        <p><span>Tanggal mulai: {{ $lowongan->tgl_mulai }}</span></p>
                        <p>Gaji: <strong class="price">Rp.{{ $lowongan->gaji }}</strong></p>
                     </div>
                     <div class="detail-company pull-right text-right">
                        <div class="img-thum">
                           <img class="img-responsive" src="assets/img/jobs/recent-job-detail.jpg" alt="">
                        </div>
                        <div class="name">
                           <h4>{{ $lowongan->Perusahaan->nama_pers }}</h4>
                           <h5>{{ $lowongan->lokasi }} </h5>
                        </div>
                     </div>
                     <div class="clearfix">
                        <div class="meta">
                           
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-8 col-sm-12 col-xs-12">
                  <div class="content-area">
                     <div class="clearfix">
                        <div class="box">
                           <h4>Deskripsi lowongan</h4>
                           <p>{!! $lowongan->deskripsi_iklan !!}</p>
                           @guest
                           <a href="#" class="btn btn-common" data-toggle="modal" data-target="#lamaran">Kirim Lamaran</a>
                           @else
                           @php
                           $check_lamaran = App\Pelamar::where('user_id',Auth::user()->id)->where('low_id',$lowongan->id)->count();
                           @endphp
                           @if($check_lamaran == 0)
                           <a href="#" class="btn btn-common" data-toggle="modal" data-target="#lamaran">Kirim Lamaran</a>
                           @else
                           <a href="#" class="btn btn-common" disabled>Anda sudah melamar</a>
                           @endif
                           @endguest
                           
                        </div>
                     </div>
                  </div>
                 
               </div>
               <div class="col-md-4 col-sm-12 col-xs-12">
                  <aside>
                     <div class="sidebar">
                        <div class="box">
                           <h2 class="small-title">Detail Lowongan</h2>
                           <ul class="detail-list">
                              <li>
                                 <a href="#">Lowongan id</a>
                                 <span class="type-posts">{{ $lowongan->id}}</span>
                              </li>
                              <li>
                                 <a href="#">Lokasi</a>
                                 <span class="type-posts">{{ $lowongan->lokasi }}</span>
                              </li>
                              <li>
                                 <a href="#">Perusahaan</a>
                                 <span class="type-posts">{{ $lowongan->Perusahaan->nama_pers }}</span>
                              </li>
                              <li>
                                 <a href="#">Kategori</a>
                                 <span class="type-posts">{{ $lowongan->Kategori->nama_kategori}}</span>
                              </li>
                              
                           </ul>
                        </div>
                       
                        
                     </div>
                  </aside>
               </div>
            </div>
         </div>
      </section>
     <div class="modal fade" id="lamaran" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Lamaran</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form action="{{ route('pelamar.store') }}" method="post" enctype="multipart/form-data" >
               {{ csrf_field() }}
               <input type="hidden" name="low_id" value="{{$lowongan->id}}">
               <div class="form-group {{ $errors->has('telepon') ? ' has-error' : '' }}">
                  <label class="control-label">Telepon</label> 
                  <input type="text" name="telepon" class="form-control"  required>
                  @if ($errors->has('telepon'))
                            <span class="help-block">
                                <strong>{{ $errors->first('telepon') }}</strong>
                            </span>
                        @endif
               </div>
                  <div class="form-group {{ $errors->has('pesan') ? ' has-error' : '' }}">
                  <label class="control-label">Pesan</label>   
                  <textarea type="text" name="pesan" class="form-control"  required></textarea>
                  @if ($errors->has('pesan'))
                            <span class="help-block">
                                <strong>{{ $errors->first('pesan') }}</strong>
                            </span>
                        @endif
               <p>Buat pesan max : 15</p>
               </div>

               <div class="form-group {{ $errors->has('file_cv') ? ' has-error' : '' }}">
                  <label class="control-label">File CV</label>  
                  <input type="file" name="file_cv" required>
                  @if ($errors->has('file_cv'))
                            <span class="help-block">
                                <strong>{{ $errors->first('file_cv') }}</strong>
                            </span>
                        @endif
               </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
        <button type="submit" class="btn btn-primary" href=>Kirim lamaran</button>
        </form>
      </div>
    </div>
  </div>
</div>
@endsection