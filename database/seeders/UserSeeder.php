<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name'      => 'Super Admin 2',
            'email'     => 'superadminn@example.com',
            'password'  => Hash::make('password'),
            'phone' => '08123456789',
            'is_superAdmin' => 1,
        ]);

        User::create([
            'name'      => 'Admin 2',
            'email'     => 'adminn@example.com',
            'password'  => Hash::make('password'),
            'phone' => '08123456789',
            'is_superAdmin' => 1,
        ]);
    }
}
