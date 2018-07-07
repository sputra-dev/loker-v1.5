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
        			<div class="form-group">
			  			<label class="control-label">File Cv</label>	
			  			<input type="text" name="file_cv" class="form-control" value="{{$lar->file_cv }}"  readonly>
			  		</div>

			  		<div class="form-group">
			  			<label class="control-label">Status</label>
						<input type="text" name="status" class="form-control" value="{{$lar->status }}"  readonly>
			  		</div>
			  		<div class="form-group">
			  			<label class="control-label">Lowongan</label>
						<input type="text" name="low_id" class="form-control" value="{{ $lar->Lowongan->nama_low }}"  readonly>
			  		</div>
			  		
			  	</div>
			</div>	
		</div>
	</div>
</div>
@endsection -->