<!-- @extends('layouts.admin')
@section('content')
<div class="row">
	<div class="container">
		<div class="col-md-12">
			<div class="panel panel-succes">
			  <div class="panel-heading">
			  	 
			  </div>
			  <div class="panel-body">
			  	@role('admin')
			  	<div class="table-responsive">
				  <table class="table">
				  	<thead>
			  		<tr>
			  		  <th>No</th>
			  		  <th>Telepon</th>
			  		  <th>Pesan</th>
					  <th>Lowongan</th>
					  <th>File Cv</th>
					  
					  <th colspan="3">Action</th>
			  		</tr>
				  	</thead>
				  	<tbody>
				  		<?php $nomor = 1; ?>
				  		@php $no = 1; @endphp
				  		@foreach($lamaran_admin as $data)
				  	  <tr>
				    	<td>{{ $no++ }}</td>
				    	<td>{{ $data->Pelamar->telepon }}</td>
				    	<td>{{ $data->Pelamar->pesan }}</td>	
				    	<td><p>{{ $data->Lowongan->nama_low }}</p></td>
				    	<td><form method="get" action="{{ asset('assets/cv/'.$data->file_cv) }}" target="_blank"> <button type="submit"><i class="fa fa-chain"></i>{{ $data->Pelamar->file_cv }}</button></form></td>
						<td>
							<a class="btn btn-warning" href="{{ route('lamaran.edit',$data->id) }}"><i class="fas fa-edit"></i>Ubah</a>
						</td>
						<td>
							<form method="post" action="{{ route('lamaran.destroy',$data->id) }}">
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
				@endrole
				@role('perusahaan')
			  	<div class="table-responsive">
				  <table class="table">
				  	<thead>
			  		<tr>
			  		  <th>No</th>
			  		  <th>Telepon</th>
			  		  <th>Pesan</th>
					  <th>File Cv</th>
					  <th>Lowongan</th>
					  <th colspan="3">Action</th>
			  		</tr>
				  	</thead>
				  	<tbody>
				  		<?php $nomor = 1; ?>
				  		@php $no = 1; @endphp
				  		@foreach($lamaran_pers as $data)
				  	  <tr>
				    	<td>{{ $no++ }}</td>
				    	<td>{{ $data->Pelamar->telepon }}</td>
				    	<td>{!! str_limit($data->Pelamar->pesan, 20) !!}</td>
				    	<td><p>{{ $data->Lowongan->nama_low }}</p></td>
				    	<td><form method="get" action="{{ asset('assets/cv/'.$data->file_cv) }}" target="_blank"> <button type="submit"><i class="fa fa-chain"></i>{{ $data->Pelamar->file_cv }}</button></form></td>
				    	
						<td>
							<form method="post" action="{{ route('lamaran.destroy',$data->id) }}">
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
				@endrole
				@role('pelamar')
			  	<div class="table-responsive">
				  <table class="table">
				  	<thead>
			  		<tr>
			  		  <th>No</th>
			  		  <th>Telepon</th>
			  		  <th>Pesan</th>
					  <th>File Cv</th>
					  <th>Lowongan</th>
					  <th colspan="3">Action</th>
			  		</tr>
				  	</thead>
				  	<tbody>
				  		<?php $nomor = 1; ?>
				  		@php $no = 1; @endphp
				  		@foreach($lamaran_pel as $data)
				  	  <tr>
				    	<td>{{ $no++ }}</td>
				    	<td>{{ $data->Pelamar->telepon }}</td>
				    	<td>{{ $data->Pelamar->pesan }}</td>
				    	<td><p>{{ $data->Lowongan->nama_low }}</p></td>
				    	<td><form method="get" action="{{ asset('assets/cv/'.$data->file_cv) }}" target="_blank"> <button type="submit"><i class="fa fa-chain"></i>{{ $data->Pelamar->file_cv }}</button></form></td></td>
				    	
						<td>
							<a class="btn btn-warning" href="{{ route('lamaran.edit',$data->id) }}"><i class="fas fa-edit"></i>Ubah</a>
						</td>
						<td>
							<form method="post" action="{{ route('lamaran.destroy',$data->id) }}">
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
				@endrole
			  </div>
			</div>	
		</div>
	</div>
</div>
@endsection -->