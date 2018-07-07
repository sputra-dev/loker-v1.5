@extends('layouts.admin')
@section('content')

	<div class="row">
	<div class="container">
	<div class="col-md-16">
			<div class="panel panel-primary">
			  <div class="panel-heading">
			  	<br>
			  	<a href="{{ route('member.create') }}" class="au-btn au-btn-icon au-btn--green au-btn--small"> <i class="zmdi zmdi-plus"></i>Add</a>
			  	<div class="panel-title pull-right">
			  	</div>
			  </div>
			  <div class="panel-body">
			  	<div class="table-striped">
				  <table class="table">
				  	<thead>
			  		<tr>
			  		  <th>No</th>
					  <th>Foto</th>
					  <th>Alamat</th>
					  <th>Email</th>
					  <th colspan="3">Action</th>
			  		</tr>
				  	</thead>
				  	<tbody>
				  		<?php $nomor = 1; ?>
				  		@php $no = 1; @endphp
				  		@foreach($mem as $data)
				  	  <tr>
				    	<td>{{ $no++ }}</td>
				    	<td><img src="{{ asset('assets/img/fotomem/'.$data->foto) }}" style="max-height:150px;max-width:150px;margin-top:7px;" /></td>
				    	<td>{{ $data->alamat }}</td>
				    	<td><p>{{ $data->User->email }}</p></td>
<td>
	<a class="btn btn-warning" href="{{ route('member.edit',$data->id) }}">Edit</a>
</td>
<td>
	<form method="post" action="{{ route('member.destroy',$data->id) }}">
		<input name="_token" type="hidden" value="{{ csrf_token() }}">
		<input type="hidden" name="_method" value="DELETE">

		<button type="submit" class="btn btn-danger" onclick="return confirm('Apakah anda yakin akan menghapus data ini?')">Delete</button>
	</form>
</td>
				      </tr>
				      @endforeach	
				  	</tbody>
				  </table>
				</div>
			  </div>
			</div>	
		</div>
	</div>
</div>
@endsection