<?php

namespace App\Http\Controllers;
use App\Models\sap_data;
use App\Models\ScriptFileName;
use App\Models\ExportScript;
use Validator;

use Illuminate\Http\Request;
use App\Exports\ScriptExport;
use Excel;
use Response;
use Illuminate\Support\Facades\Storage;

class APIController extends Controller
{
    public function storeScripts(Request $request){
   
        $intro = $request->intro;
        $outro = $request->outro;
        $bo1 = $request->bo1;
        $bo2 = $request->bo2;
        $bo3 = $request->bo3;
        $bo4 = $request->bo4;
        $demo1 = $request->demo1;
        $demo2 = $request->demo2;
        $demo3 = $request->demo3;
        $demo4 = $request->demo4;

         $sapData = new sap_data();
            $sapData->intro = $intro;
            $sapData->outro = $outro;
            $sapData->bo1 = $bo1;
            $sapData->bo2 = $bo2;
            $sapData->bo3 = $bo3;
            $sapData->bo4 = $bo4;
            $sapData->demo1 = $demo1;
            $sapData->demo2 = $demo2;
            $sapData->demo3 = $demo3;
            $sapData->demo4 = $demo4;

            if($sapData->save())
            {
                $response = [
                'success' => true,
                'response' => 200,
                'message' => 'Record Fetch successfully',
            ];
            return response()->json($response);
            }
            else{
                 $response = [
                'success' => false,
                'response' => 400,
                'message' => 'Something Went Wrong',
            ];
            return response()->json($response);
            }

        
    }

    public function storeScriptsFile(Request $request){
        ExportScript::truncate();
        $fileName = ScriptFileName::find(1);
        if($fileName){
            ScriptFileName::where('id',1)->increment('filename');
            $name = 'script_'. $fileName->filename++ .'.xlsx';
        }
        else{
            ScriptFileName::insert(['filename' => 1]);
            $name = 'script_1.xlsx';
        }

        $dataScript = [
            'fileName' => $name?$name:'',
            'Ind' => isset($data->Ind)?$data->Ind:'',
            'PN' => isset($data->PN)?$data->PN:'',
            'Use_Case' => isset($data->Use_Case)?$data->Use_Case:'',
            'Intro' => isset($data->Intro)?$data->Intro:'',
            'Protagonist_1' => isset($data->Protagonist_1)?$data->Protagonist_1:'',
            'BO_1' => isset($data->BO_1)?$data->BO_1:'',
            'Demo_1' => isset($data->Demo_1)?$data->Demo_1:'',
            'Demo_1_key_points' => isset($data->Demo_1_key_points)?$data->Demo_1_key_points:'',
            'Protagonist_2' => isset($data->Protagonist_2)?$data->Protagonist_2:'',
            'BO_2' => isset($data->BO_2)?$data->BO_2:'',
            'Demo_2' => isset($data->Demo_2)?$data->Demo_2:'',
            'Demo_2_key_points' => isset($data->Demo_2_key_points)?$data->Demo_2_key_points:'',
            'Protagonist_3' => isset($data->Protagonist_3)?$data->Protagonist_3:'',
            'BO_3' => isset($data->BO_3)?$data->BO_3:'',
            'Demo_3' => isset($data->Demo_3)?$data->Demo_3:'',
            'Demo_3_key_points' => isset($data->Demo_3_key_points)?$data->Demo_3_key_points:'',
            'Protagonist_4' => isset($data->Protagonist_4)?$data->Protagonist_4:'',
            'BO_4' => isset($data->BO_4)?$data->BO_4:'',
            'Demo_4' => isset($data->Demo_4)?$data->Demo_4:'',
            'Demo_4_key_points' => isset($data->Demo_4_key_points)?$data->Demo_4_key_points:'',
            'Outro' => isset($data->Outro)?$data->Outro:'',
        ];
        
        ExportScript::insert($dataScript);


        
        return Excel::store(new ScriptExport(2018), $name,'public_uploads', \Maatwebsite\Excel\Excel::XLSX);
    }
}