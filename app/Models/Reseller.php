<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reseller extends Model
{
    use HasFactory;

    public $table = 'resellers';
    
    protected $fillable = [
        'name', 'phone', 'email', 'brand', 'address', 'logo_path', 'link_social', 'is_active'
    ];
}
