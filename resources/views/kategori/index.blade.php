@extends('layouts.admin')
@section('content')

	<div class="row">
	<div class="container">
	<div class="col-md-16">
			<div class="panel panel-success">
			  <div class="panel-heading"><a href="{{ route('kategori.create') }}" class="au-btn au-btn-icon au-btn--green au-btn--small"> <i class="zmdi zmdi-plus"></i> Add</a>
			  	
			  	</div>
			  
			 <div class="row">
     			<div class="col-md-12">
                 <!-- DATA TABLE-->
                   <div class="table-responsive m-b-40">
					<table class="table table-data2">
				  	<thead>
			  		<tr>
			  		  <th>No</th>
			  		  <th>Nama kategori</th>
					  <th colspan="3">Action</th>
			  		</tr>
				  	</thead>
				  	<tbody>
				  		<?php $nomor = 1; ?>
				  		@php $no = 1; @endphp
				  		@foreach($kat as $data)
				  	  <tr>
				    	<td>{{ $no++ }}</td>
				    	<td>{{ $data->nama_kategori }}</td>
<td>
	<a class="btn btn-warning" href="{{ route('kategori.edit',$data->id) }}"><i class="fas fa-edit"></i>Ubah</a>
</td>
<td>
	<form method="post" action="{{ route('kategori.destroy',$data->id) }}">
		<input name="_token" type="hidden" value="{{ csrf_token() }}">
		<input type="hidden" name="_method" value="DELETE">

		<button type="submit" class="btn btn-danger" onclick="return confirm('Apakah anda yakin akan menghapus data ini?')"><i class="fas fa-eraser"></i>Hapus</button>
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