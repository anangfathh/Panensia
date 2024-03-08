<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;
    public $table = 'product_images';
    protected $guarded = ['id'];

    public function product()
    {
        return $this->belongsTo('product');
    }
}