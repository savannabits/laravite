<?php

namespace Modules\Crm\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Crm\Database\factories\CustomerFactory;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        "first_name",
        "middle_name",
        "surname",
        "email",
        "phone_number",
    ];

    protected static function newFactory(): CustomerFactory
    {
        return CustomerFactory::new();
    }
}
