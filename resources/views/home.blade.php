@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif

                    <a href="{{ route('instagram.login') }}" class="btn btn-danger">Instagram Login</a>
                    <a href="{{ route('accounts.index') }}" class="btn btn-success">My Accounts</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
