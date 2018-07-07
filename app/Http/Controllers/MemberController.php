<?php

namespace App\Http\Controllers;

use Session;
use App\User;
use App\Member;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         $mem = Member::with('User')->get();
        return view('member.index',compact('mem'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $us = User::all();
        return view('member.create',compact('us'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $this->validate($request,[
            'foto' => 'required|',
            'alamat' => 'required|',
            'user_id' => 'required|'
        ]);
        $mem = new Member;
        $mem->foto = $request->foto;
        $mem->alamat = $request->alamat;
        $mem->user_id = $request->user_id;
        $mem->save();
        Session::flash("flash_notification", [
        "level"=>"success",
        "message"=>"Berhasil menyimpan <b>$mem->email</b>"
        ]);
        if ($request->hasFile('foto')) {
            $file = $request->file('foto');
            $filename = str_random(6).'_'.$file->getClientOriginalName();
            $destinationPath = public_path().'/assets/img/fotomem/';
            $uploadSucces = $file->move($destinationPath, $filename);
            $mem->foto = $filename;
        }
        $mem->save();
        return redirect()->route('member.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function show(Member $member)
    {
        $mem = Member::findOrFail($id);
        return view('member.show',compact('mem'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $mem = Member::findOrFail($id);
        $us = User::all();
        $selectedus = Member::findOrFail($id)->user_id;
        return view('member.edit',compact('us','mem','selectedus'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $this->validate($request,[
            'alamat' => 'required|',
            'user_id' => 'required'
        ]);
        $mem = Member::findOrFail($id);
        $mem->alamat = $request->alamat;
        $mem->user_id = $request->user_id;
        $mem->save();
        Session::flash("flash_notification", [
        "level"=>"success",
        "message"=>"Berhasil mengedit <b>$mem->email</b>"
        ]);
        return redirect()->route('member.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Member  $member
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $mem = Member::FindOrFail($id);
        $mem->delete();
        Session::flash("flash_notification", [
        "level"=>"success",
        "message"=>"Data Berhasil dihapus"
        ]);
        return redirect()->route('member.index');
    }

}