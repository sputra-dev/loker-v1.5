@extends('layouts.admin')
@section('content')
<div class="row">
	<div class="container">
		<div class="col-md-12">
			<div class="panel panel-active">
			  <div class="panel-heading">
			  	<div class="panel-title pull-right"><a href="{{ url()->previous() }}">Back</a>
			  	</div>
			  </div>
			  <div class="panel-body">
			  	<form action="{{ route('lowongan.update',$low->id) }}" method="post" >
			  		<input name="_method" type="hidden" value="PATCH">
        			{{ csrf_field() }}
			  		<div class="form-group {{ $errors->has('nama_low') ? ' has-error' : '' }}">
			  			<label class="control-label">Nama lowongan</label>	
			  			<input type="text" name="nama_low" value="{{ $low->nama_low }}" class="form-control"  required>
			  			@if ($errors->has('nama_low'))
                            <span class="help-block">
                                <strong>{{ $errors->first('nama_low') }}</strong>
                            </span>
                        @endif
			  		</div>

					<div class="form-group {{ $errors->has('tgl_mulai') ? ' has-error' : '' }}">
			  			<label class="control-label">Tgl mulai</label>	
			  			<input type="date" name="tgl_mulai" value="{{ $low->tgl_mulai }}" class="form-control"  required>
			  			@if ($errors->has('tgl_mulai'))
                            <span class="help-block">
                                <strong>{{ $errors->first('tgl_mulai') }}</strong>
                            </span>
                        @endif
			  		</div>
			  		<div class="form-group {{ $errors->has('lokasi') ? ' has-error' : '' }}">
			  			<label class="control-label">Lokasi</label>	
			  			<input type="text" name="lokasi" value="{{ $low->lokasi }}" class="form-control"  required>
			  			@if ($errors->has('lokasi'))
                            <span class="help-block">
                                <strong>{{ $errors->first('lokasi') }}</strong>
                            </span>
                        @endif
			  		</div>

			  		<div class="form-group {{ $errors->has('gaji') ? ' has-error' : '' }}">
			  			<label class="control-label">Gaji</label>	
			  			<input type="number_format" name="gaji" value="{{ $low->gaji }}" class="form-control"  required>
			  			@if ($errors->has('gaji'))
                            <span class="help-block">
                                <strong>{{ $errors->first('gaji') }}</strong>
                            </span>
                        @endif
			  		</div>

			  		<div class="form-group {{ $errors->has('deskripsi_iklan') ? ' has-error' : '' }}">
			  			<label class="control-label">Deskripsi iklan</label>	
			  			<textarea type="text" name="deskripsi_iklan" value="{{ $low->deskripsi_iklan }}" class="ckeditor" required></textarea> 
			  			@if ($errors->has('deskripsi_iklan'))
                            <span class="help-block">
                                <strong>{{ $errors->first('deskripsi_iklan') }}</strong>
                            </span>
                        @endif
			  		</div>
			  		<p>Buat deskripsi min : 30</p>
			  		<div class="form-group {{ $errors->has('pers_id') ? ' has-error' : '' }}">
			  			<label class="control-label">Perusahaan</label>	
			  			<select name="pers_id" class="form-control">
			  				@foreach($per as $data)
			  				<option value="{{ $data->id }}">{{ $data->nama_pers }}</option>
			  				@endforeach
			  			</select>
			  			@if ($errors->has('pers_id'))
                            <span class="help-block">
                                <strong>{{ $errors->first('pers_id') }}</strong>
                            </span>
                        @endif
			  		</div>

			  		<div class="form-group {{ $errors->has('kategori_id') ? ' has-error' : '' }}">
			  			<label class="control-label">Kategori</label>	
			  			<select name="kategori_id" class="form-control">
			  				@foreach($kat as $data)
			  				<option value="{{ $data->id }}">{{ $data->nama_kategori }}</option>
			  				@endforeach
			  			</select>
			  			@if ($errors->has('kategori_id'))
                            <span class="help-block">
                                <strong>{{ $errors->first('kategori_id') }}</strong>
                            </span>
                        @endif
			  		</div>

			  		<div class="form-group">
			  			<button type="submit" class="btn btn-primary">Save</button>
			  		</div>
			  	</form>
			  </div>
			</div>	
		</div>
	</div>
</div>
@endsection
