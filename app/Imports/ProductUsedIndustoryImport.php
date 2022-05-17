<?php

namespace App\Imports;

use App\Models\Product_Used_Industry;
use Maatwebsite\Excel\Concerns\ToModel;

class ProductUsedIndustoryImport implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Product_Used_Industry([
            'name' => $row[0],
            'value' => $row[1],
        ]);
    }
}
