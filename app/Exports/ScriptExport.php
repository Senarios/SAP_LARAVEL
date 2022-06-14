<?php

namespace App\Exports;

use App\Models\ExportScript;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class ScriptExport implements FromCollection,WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return ExportScript::all();
    }

    public function headings(): array
    {
        return [
            'File_name Asset Name','HUB (Industry)','Product Name', 'LOB1', 'LOB2', 'LOB3',
            'Use_Case','Intro','Protagonist 1', 'BO-1','Demo-1','Demo-1-key-points',
            'Protagonist 2', 'BO-2','Demo-2','Demo-2-key-points','Protagonist 3','BO-3' ,
            'Demo-3' ,'Demo-3-key-points','Protagonist 4','BO-4','Demo-4','Demo-4-key-points',
            'Outro'
        ];
    }
}
