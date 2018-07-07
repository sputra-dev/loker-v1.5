@extends('layouts.admin')
@section('content')
<div class="row">
	<div class="container">
		<div class="col-md-12">
			<div class="panel panel-primary">
			  <div class="panel-heading">Lihat Perusahaan  
			  	<div class="panel-title pull-right"><a href="{{ url()->previous() }}">Back</a>
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
			  			<img src="{{ asset('assets/img/logopers/'.$per->logo) }}" style="max-height:85px;max-width:80px;margin-top:9px;">
			  		</div>

        			<div class="form-group">
			  			<label class="control-label">Deskripsi</label>	
			  			<textarea type="text" name="deskripsi" class="ckeditor" cols="30" rows="20" readonly>{!! $per->deskripsi !!}</textarea>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Telepon</label>	
			  			<input type="text" name="telepon" class="form-control" value="{{ $per->telepon }}"  readonly>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Userame</label>	
			  			<input type="text" name="user_id" class="form-control" value="{{ $per->User->name }}"  readonly>
			  		</div>
			  	</div>
			</div>	
		</div>
	</div>
</div>
@endsection