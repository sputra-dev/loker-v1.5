@extends('layouts.admin')
@section('content')

	<div class="row">
<div class="container">
  <div class="col-md-16">
    <div class="panel panel-success">
@role('perusahaan')
      @php
      $check_pers = App\Perusahaan::where('user_id', Auth::user()->id)->count();
      @endphp
      @if($check_pers == 0)
      <div class="panel-heading"><a href="{{ route('perusahaan.create') }}" class="au-btn au-btn-icon au-btn--green au-btn--small"> <i class="zmdi zmdi-plus"></i> Add</a>
      </div>
      @endif
      <div class="row">
        <div class="col-md-12">
          <!-- DATA TABLE-->
          <div class="table-responsive m-b-40">
            <table class="table table-data2">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama perusahaan</th>
                  <th>Logo</th>
                  <th>Deskripsi</th>
                  <th>Telepon</th>
                  <th>Username</th>
                  <th colspan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                <?php $nomor = 1; ?>
                @php $no = 1; @endphp
                @foreach($per as $data)
                <tr>
                  <td>{{ $no++ }}</td>
                  <td>{{ $data->nama_pers }}</td>
                  <td><img src="{{ asset('assets/img/logopers/'.$data->logo) }}" style="max-height:70px;max-width:70px;margin-top:7px;" /></td>
                  <td>{!! str_limit($data->deskripsi, 25) !!}</td>
                  <td>{{ $data->telepon }}</td>
                  <td>
                    <p>{{ $data->User->name }}</p>
                  </td>
                  <td>
                    <a class="btn btn-warning" href="{{ route('perusahaan.edit',$data->id) }}"><i class="fas fa-edit"></i>Ubah</a>
                  </td>
                  <td>
                    <a class="btn btn-primary" href="{{ route('perusahaan.show',$data->id) }}"><i class="fas fa-eye"></i>Lihat</a>
                  </td>
                </tr>
                @endforeach	
              </tbody>
            </table>
          </div>
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
                  <th>Nama perusahaan</th>
                  <th>Logo</th>
                  <th>Deskripsi</th>
                  <th>Telepon</th>
                  <th>Username</th>
                  <th colspan="3">Action</th>
                </tr>
              </thead>
              <tbody>
                <?php $nomor = 1; ?>
                @php $no = 1; @endphp
                @foreach($per_admin as $data)
                <tr>
                  <td>{{ $no++ }}</td>
                  <td>{{ $data->nama_pers }}</td>
                  <td><img src="{{ asset('assets/img/logopers/'.$data->logo) }}" style="max-height:70px;max-width:70px;margin-top:7px;" /></td>
                  <td>{!! str_limit($data->deskripsi, 25) !!}</td>
                  <td>{{ $data->telepon }}</td>
                  <td>
                    <p>{{ $data->User->name }}</p>
                  </td>
                  <td>
                    <a class="btn btn-primary" href="{{ route('perusahaan.show',$data->id) }}"><i class="fas fa-eye"></i>Lihat</a>
                  </td>
                  <td>
                    <form method="post" action="{{ route('perusahaan.destroy',$data->id) }}">
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
@endrole

    </div>
  </div>
</div>
@endsection