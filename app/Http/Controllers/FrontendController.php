<?php

namespace App\Http\Controllers;

use App\Lowongan;
use App\Perusahaan;
use App\Kategori_lowongan;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function index()
    {
        $kategori = Kategori_lowongan::all();
    	$lowongan = Lowongan::where('status',1)->get();
        $perusahaan = Perusahaan::all();
        return view('frontend.index',compact('lowongan','perusahaan','kategori'));
    }
    public function detail_lowongan($id)
    {
    	$lowongan = Lowongan::find($id);
        return view('frontend.detail_lowongan',compact('lowongan'));
    }
     public function cari_lowongan(Request $request)
    {
        $lowongan = Lowongan::where('nama_low','like','%'.$request->nama_low.'%')->where('lokasi','like','%'.$request->lokasi.'%')->where('kategori_id','=',$request->nama_kategori)->get();
        // dd($lowongan);
        return view('frontend.hasil_pencarian',compact('lowongan'));
    }

}
