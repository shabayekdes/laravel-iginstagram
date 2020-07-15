@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title float-left">My Accounts</h5>
                    <a href="#" class="btn btn-success float-right" data-toggle="modal"
                        data-target="#staticBackdrop">Add account</a>
                    <!-- Modal -->
                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form action="{{ route('accounts.store') }}" method="POST">
                                    @csrf
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label for="inputUsername">Username</label>
                                            <input type="text" class="form-control" name="username" id="inputUsername"
                                                aria-describedby="usernameHelp">
                                            <small id="usernameHelp" class="form-text text-muted">We'll never share your
                                                email with anyone else.</small>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputPassword">Password</label>
                                            <input type="password" name="password" class="form-control" id="inputPassword">
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-body">
                    @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                    @endif
                    @foreach ($tokens as $token)
                    <div class="d-flex bd-highlight">
                        <div class="p-2 align-self-center bd-highlight">
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            </div>
                        </div>
                        <div class="p-2 flex-fill bd-highlight">
                            <div class="form-group">
                                <label for="exampleInputEmail1">{{ $token->username}}</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp">
                            </div>
                        </div>
                        <div class="p-2 align-self-center bd-highlight">
                            <button type="submit" class="btn btn-primary">Go Live</button>
                        </div>
                    </div>
                    @endforeach
                    <button type="submit" class="btn btn-primary">Go Live For Selected</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection