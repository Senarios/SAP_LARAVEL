<?php

namespace App\Imports;

use App\Models\Product_Count;
use Maatwebsite\Excel\Concerns\ToModel;

class ProductCountImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Product_Count([
            'name' => $row[0],
            'value' => $row[1],
        ]);
    }
}
