@extends('layouts.admin')
@section('content')
<div class="row">
	<div class="container">
		<div class="col-md-12">
			<div class="panel panel-primary">
			  <div class="panel-heading">Lihat Lamaran  
			  	<div class="panel-title pull-right"><a href="{{ url()->previous() }}">Back</a>
			  	</div>
			  </div>
			  <div class="panel-body">
			  		<div class="form-group">
			  			<label class="control-label">Telepon</label>	
			  			<input type="text" name="telepon" class="form-control" value="{{ $pel->telepon }}"  readonly>
			  		</div>

        			<div class="form-group">
			  			<label class="control-label">Pesan</label>	
			  			<textarea type="textarea" name="pesan" class="ckeditor"  readonly>{!! $pel->pesan !!}</textarea>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Lowongan</label>	
			  			<input type="text" name="nama_low" class="form-control" value="{{ $pel->Lowongan->nama_low }}"  readonly>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">File CV</label>	
			  			 <embed src="{{ asset('assets/cv/'.$pel->file_cv) }}" type="application/pdf" width="80%" height="150px" />
			  		</div>
			  	</div>
			</div>	
		</div>
	</div>
</div>
@endsection