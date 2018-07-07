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
			  	<form action="{{ route('kategori.store') }}" method="post" enctype="multipart/form-data">
			  		{{ csrf_field() }}
			  		<div class="form-group {{ $errors->has('nama_kategori') ? ' has-error' : '' }}">
			  			<label class="control-label">Nama kategori</label>	
			  			<input type="text" name="nama_kategori" class="form-control"  required>
			  			@if ($errors->has('nama_kategori'))
                            <span class="help-block">
                                <strong>{{ $errors->first('nama_kategori') }}</strong>
                            </span>
                        @endif
			  		</div>
			  		
			  		<div class="form-group">
			  			<button type="submit" class="btn btn-primary">Create</button>
			  		</div>
			  	</form>
			  </div>
			</div>	
		</div>
	</div>
</div>
@endsection