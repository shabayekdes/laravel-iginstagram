<?php

use App\User;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Test',
            'email' => 'test@example.com',
            'password' => bcrypt('12345678')
        ]);
    }
}
