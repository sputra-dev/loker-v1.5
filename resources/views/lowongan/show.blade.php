@extends('layouts.admin')
@section('content')
<div class="row">
	<div class="container">
		<div class="col-md-12">
			<div class="panel panel-primary">
			  <div class="panel-heading">View Lowongan  
			  	<div class="panel-title pull-right"><a href="{{ url()->previous() }}">Back</a>
			  	</div>
			  </div>
			  <div class="panel-body">
			  		<div class="form-group">
			  			<label class="control-label">Nama Lowongan</label>	
			  			<input type="text" name="nama_low" class="form-control" value="{{ $low->nama_low }}"  readonly>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Tanggal mulai</label>	
			  			<input type="text" name="tgl_mulai" class="form-control" value="{{ $low->tgl_mulai }}"  readonly>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Lokasi</label>	
			  			<input type="text" name="lokasi" class="form-control" value="{{ $low->lokasi }}"  readonly>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Gaji</label>	
			  			<input type="text" name="gaji" class="form-control" value="{{ $low->gaji }}"  readonly>
			  		</div>

        			<div class="form-group">
			  			<label class="control-label">Deskripsi iklan</label>	
			  			<textarea type="text" name="deskripsi_iklan" class="ckeditor" cols="30" rows="20" readonly>{!! $low->deskripsi_iklan !!}</textarea>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Perusahaan</label>	
			  			<input type="text" name="nama_pers" class="form-control" value="{{ $low->Perusahaan->nama_pers }}"  readonly>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Kategori</label>	
			  			<input type="text" name="nama_kategori" class="form-control" value="{{ $low->Kategori->nama_kategori }}"  readonly>
			  		</div>
			  	</div>
			</div>	
		</div>
	</div>
</div>
@endsection