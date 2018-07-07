@extends('layouts.admin')
@section('content')

	<div class="row">
	<div class="container">
	<div class="col-md-16">
			  <div class="panel panel-success">
			  @role('perusahaan')			  
			  <div class="panel-heading"><a href="{{ route('lowongan.create') }}" class="au-btn au-btn-icon au-btn--green au-btn--small"> <i class="zmdi zmdi-plus"></i> Add</a>
			  	</div>
			  <div class="row">
     			<div class="col-md-12">
                 <!-- DATA TABLE-->
                   <div class="table-responsive m-b-40">
					<table class="table table-data2">
				  	<thead>
			  		<tr>
			  		  <th>No</th>
					  <th>Nama Lowongan</th>
					  <th>Tanggal Mulai</th>
					  <th>Lokasi</th>
					  <th>Gaji</th>
					  <th>Deskripsi Iklan</th>
					  <th>Perusahaan</th>
					  <th>Kategori</th>
					  <th>Status</th>
					  <th colspan="3">Action</th>
			  		</tr>
				  	</thead>
				  	<tbody>
				  		<?php $nomor = 1; ?>
				  		@php $no = 1; @endphp
				  		@foreach($low as $data)
				  	  <tr>
				    	<td>{{ $no++ }}</td>
				    	<td>{{ $data->nama_low }}</td>
				    	<td>{{ $data->tgl_mulai }}</td>
				    	<td>{{ $data->lokasi }}</td>
				    	<td>Rp.{{ $data->gaji }}</td>
				    	<td>{!! str_limit($data->deskripsi_iklan, 25) !!}</td>
				    	<td>{{ $data->Perusahaan->nama_pers }}</td>
				    	<td>{{ $data->Kategori->nama_kategori }}</td>
				    	@if($data->status == 0)
				    	<td><button class="btn btn-danger btn-disable">Belum DiKonfirmasi</button></td>
				    	@endif
				    	@if($data->status == 1)
				    	<td><button class="btn btn-success btn-disable">Sudah DiKonfirmasi</button></td>
				    	@endif
				    	
				    	@role('admin')

				    	@if($data->status == 0)
				    	<td>
							<a class="btn btn-primary" href="{{ url('konfirmasilowongan',$data->id) }}"><i class="fas fa-check"></i>Konfirmasi</a>
						</td>
						@endif
						
						<td>
							<form method="post" action="{{ route('lowongan.destroy',$data->id) }}">
								<input name="_token" type="hidden" value="{{ csrf_token() }}">
								<input type="hidden" name="_method" value="DELETE">

								<button type="submit" class="btn btn-danger" onclick="return confirm('Apakah anda yakin akan menghapus data ini?')"><i class="fas fa-eraser"></i>Hapus</button>
							</form>
						</td>
				    	@endrole
				    	
           				@role('perusahaan')
						<td>
							<a class="btn btn-warning" href="{{ route('lowongan.edit',$data->id) }}"><i class="fas fa-edit"></i>Ubah</a>
						</td>
						<td>
							<form method="post" action="{{ route('lowongan.destroy',$data->id) }}">
								<input name="_token" type="hidden" value="{{ csrf_token() }}">
								<input type="hidden" name="_method" value="DELETE">

								<button type="submit" class="btn btn-danger" onclick="return confirm('Apakah anda yakin akan menghapus data ini?')"><i class="fas fa-eraser"></i>Hapus</button>
							</form>
						</td>
						@endrole
				      </tr>
				      @endforeach	
				  	</tbody>
				  </table>
				</div>
			  </div>
			  @endrole

			  @role('admin')
			  <div class="row">
     			<div class="col-md-12">
                 <!-- DATA TABLE-->
                   <div class="table-responsive m-b-40">
					<table class="table table-data2">
				  	<thead>
			  		<tr>
			  		  <th>No</th>
					  <th>Nama Lowongan</th>
					  <th>Tanggal Mulai</th>
					  <th>Lokasi</th>
					  <th>Gaji</th>
					  <th>Deskripsi Iklan</th>
					  <th>Perusahaan</th>
					  <th>Kategori</th>
					  <th>Status</th>
					  <th colspan="3">Action</th>
			  		</tr>
				  	</thead>
				  	<tbody>
				  		<?php $nomor = 1; ?>
				  		@php $no = 1; @endphp
				  		@foreach($low_admin as $data)
				  	  <tr>
				    	<td>{{ $no++ }}</td>
				    	<td>{{ $data->nama_low }}</td>
				    	<td>{{ $data->tgl_mulai }}</td>
				    	<td>{{ $data->lokasi }}</td>
				    	<td>Rp.{{ $data->gaji }}</td>
				    	<td>{!! str_limit($data->deskripsi_iklan, 25) !!}</td>
				    	<td>{{ $data->Perusahaan->nama_pers }}</td>
				    	<td>{{ $data->Kategori->nama_kategori }}</td>
				    	@if($data->status == 0)
				    	<td><button class="btn btn-danger btn-disable">Belum DiKonfirmasi</button></td>
				    	@endif
				    	@if($data->status == 1)
				    	<td><button class="btn btn-success btn-disable">Sudah DiKonfirmasi</button></td>
				    	@endif
				    	
				    	@role('admin')

				    	@if($data->status == 0)
				    	<td>
							<a class="btn btn-primary" href="{{ url('konfirmasilowongan',$data->id) }}"><i class="fas fa-check"></i>Konfirmasi</a>
						</td>
						@endif
						 <td>
                    		<a class="btn btn-primary" href="{{ route('lowongan.show',$data->id) }}"><i class="fas fa-eye"></i>Lihat</a>
                  		</td>
						<td>
							<form method="post" action="{{ route('lowongan.destroy',$data->id) }}">
								<input name="_token" type="hidden" value="{{ csrf_token() }}">
								<input type="hidden" name="_method" value="DELETE">

								<button type="submit" class="btn btn-danger" onclick="return confirm('Apakah anda yakin akan menghapus data ini?')"><i class="fas fa-eraser"></i>Hapus</button>
							</form>
						</td>
				    	@endrole
				    	
           				@role('perusahaan')
						<td>
							<a class="btn btn-warning" href="{{ route('lowongan.edit',$data->id) }}"><i class="fas fa-edit"></i>Edit</a>
						</td>
						<td>
							<form method="post" action="{{ route('lowongan.destroy',$data->id) }}">
								<input name="_token" type="hidden" value="{{ csrf_token() }}">
								<input type="hidden" name="_method" value="DELETE">

								<button type="submit" class="btn btn-danger" onclick="return confirm('Apakah anda yakin akan menghapus data ini?')"><i class="fas fa-eraser"></i>Hapus</button>
							</form>
						</td>
						@endrole
				      </tr>
				      @endforeach	
				  	</tbody>
				  </table>
				</div>
			  </div>
			  @endrole
			</div>	
		</div>
	</div>
</div>
@endsection