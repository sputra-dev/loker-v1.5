@extends('layouts.admin')
@section('content')

@role('perusahaan')
<div class="row">
	<div class="container">
		<div class="col-md-12">
			<div class="panel panel-danger">
			  <div class="panel-heading"><h4>Lihat Perusahaan  
			  	<div class="panel-title pull-right"><a href="{{ url()->previous() }}">Kembali</a>
			  	</div>
			  </h4>
			  </div>
			  <div class="panel-body">
			  		<div class="form-group">
			  			<label class="control-label">Perusahaan</label>	
			  			<input type="text" name="nama_pers" class="form-control" value="{{ $per->nama_pers }}"  readonly>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Logo</label>
			  			<br>	
			  			<img src="{{ asset('assets/img/logopers/'.$per->logo) }}" style="max-height:1000px;max-width:1000px;margin-top:9px;">
			  		</div>

        			<div class="form-group">
			  			<label class="control-label">Deskripsi</label><br>	
			  			<areatext type="text" name="deskripsi" >{!! $per->deskripsi !!}</areatext>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Telepon</label>	
			  			<input type="text" name="telepon" class="form-control" value="{{ $per->telepon }}"  readonly>
			  		</div>
			  		<div class="form-group">
			  			<label class="control-label">Alamat</label>	
			  			<input type="text" name="alamat" class="form-control" value="{{ $per->alamat }}"  readonly>
			  		</div>
			  		
			  	</div>
			</div>	
		</div>
	</div>
</div>
@endrole

@role('admin')
<div class="row">
	<div class="container">
		<div class="col-md-12">
			<div class="panel panel-primary">
			  <div class="panel-heading">Lihat Perusahaan  
			  	<div class="panel-title pull-right"><a href="{{ url()->previous() }}">Kembali</a>
			  	</div>
			  </div>
			  <div class="panel-body">
			  		<div class="form-group">
			  			<label class="control-label">Perusahaan</label>	
			  			<input type="text" name="nama_pers" class="form-control" value="{{ $per->nama_pers }}"  readonly>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Logo</label>
			  			<br>	
			  			<img src="{{ asset('assets/img/logopers/'.$per->logo) }}" style="max-height:1000px;max-width:1000px;margin-top:9px;">
			  		</div>

        			<div class="form-group">
			  			<label class="control-label">Deskripsi</label>	
			  			<areatext type="text" name="deskripsi" >{!! $per->deskripsi !!}</areatext>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Telepon</label>	
			  			<input type="text" name="telepon" class="form-control" value="{{ $per->telepon }}"  readonly>
			  		</div>
			  		<div class="form-group">
			  			<label class="control-label">Alamat</label>	
			  			<input type="text" name="alamat" class="form-control" value="{{ $per->alamat }}"  readonly>
			  		</div>
			  		<div class="form-group">
			  			<label class="control-label">Username</label>	
			  			<input type="text" name="user_id" class="form-control" value="{{ $per->User->name }}"  readonly>
			  		</div>
			  	</div>
			</div>	
		</div>
	</div>
</div>
@endrole

@endsection