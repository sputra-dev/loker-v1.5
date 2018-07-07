<!-- @extends('layouts.admin')
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
			  	<form action="{{ route('lamaran.update',$lar->id) }}" method="post" enctype="multipart/form-data">
			  		<input name="_method" type="hidden" value="PATCH">
        			{{ csrf_field() }}
			  		<div class="form-group {{ $errors->has('file_cv') ? ' has-error' : '' }}">
			  			<label class="control-label">File Cv</label>	
			  			<input type="file" name="file_cv" class="form-control" value="{{ $lar->file_cv }}" required>
			  			@if ($errors->has('file_cv'))
                            <span class="help-block">
                                <strong>{{ $errors->first('file_cv') }}</strong>
                            </span>
                        @endif
			  		</div>

			  		<div class="form-group {{ $errors->has('status') ? ' has-error' : '' }}">
			  			<label class="control-label">Status</label>	
			  			<input type="text"  name="status" class="form-control" value="{{ $lar->status }}"  required>
			  			@if ($errors->has('status'))
                            <span class="help-block">
                                <strong>{{ $errors->first('status') }}</strong>
                            </span>
                        @endif
			  		</div>

			  		<div class="form-group {{ $errors->has('low_id') ? ' has-error' : '' }}">
			  			<label class="control-label">Lowongan</label>	
			  			<select name="low_id" class="form-control">
			  				@foreach($low as $data)
			  				<option value="{{ $data->id }}" {{ $selectedlar == $data->id ? 'selected="selected"' : '' }} >{{ $data->nama_low }}</option>
			  				@endforeach
			  			</select>
			  			@if ($errors->has('low_id'))
                            <span class="help-block">
                                <strong>{{ $errors->first('low_id') }}</strong>
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
@endsection -->