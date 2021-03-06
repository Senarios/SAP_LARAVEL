<?php

namespace App\Http\Controllers;
use App\Models\sap_data;
use App\Models\ScriptFileName;
use App\Models\ExportScript;
use Validator;

use Illuminate\Http\Request;
use App\Exports\ScriptExport;

use App\Imports\IndustoryCountImport;
use App\Imports\ModelNamesImport;
use App\Imports\ProductCountImport;
use App\Imports\ProductUsedIndustoryImport;
use App\Imports\LineOfBusiness;

use App\Models\Product_Used_Industry;
use App\Models\Product_Count;
use App\Models\Industry_Count;
use App\Models\model_names;
use App\Models\LineOfBusiness as Business;

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
        try{
            ExportScript::truncate();
            $fileName = ScriptFileName::latest()->first('filename');
            if($fileName){
                $number = $fileName->filename + 1;
                ScriptFileName::insert(['filename' => $number]);
                $date = date('Y-m-d H:i:s');
                $name = 'script_'. $number .'_'.$date.'.xlsx';
            }
            else{
                ScriptFileName::insert(['filename' => 315]);
                $date = date('Y-m-d H:i:s');
                $name = 'script_315' . '_' . $date . '.xlsx';
            }
            $data = $request->all();
            $dataScript = [
                'fileName' => $name?$name:'',
                'Ind' => isset($data['Ind'])?$data['Ind']:'',
                'PN' => isset($data['PN'])?$data['PN']:'',
                'LOB1' => isset($data['LOB1'])?$data['LOB1']:'',
                'LOB2' => isset($data['LOB2'])?$data['LOB2']:'',
                'LOB3' => isset($data['LOB3'])?$data['LOB3']:'',
                'Use_Case' => isset($data['Use_Case'])?$data['Use_Case']:'',
                'Intro' => isset($data['Intro'])?$data['Intro']:'',
                'Protagonist_1' => isset($data['Protagonist_1'])?$data['Protagonist_1']:'',
                'BO_1' => isset($data['BO_1'])?$data['BO_1']:'',
                'Demo_1' => isset($data['Demo_1'])?$data['Demo_1']:'',
                'Demo_1_key_points' => isset($data['Demo_1_key_points'])?$data['Demo_1_key_points']:'',
                'Protagonist_2' => isset($data['Protagonist_2'])?$data['Protagonist_2']:'',
                'BO_2' => isset($data['BO_2'])?$data['BO_2']:'',
                'Demo_2' => isset($data['Demo_2'])?$data['Demo_2']:'',
                'Demo_2_key_points' => isset($data['Demo_2_key_points'])?$data['Demo_2_key_points']:'',
                'Protagonist_3' => isset($data['Protagonist_3'])?$data['Protagonist_3']:'',
                'BO_3' => isset($data['BO_3'])?$data['BO_3']:'',
                'Demo_3' => isset($data['Demo_3'])?$data['Demo_3']:'',
                'Demo_3_key_points' => isset($data['Demo_3_key_points'])?$data['Demo_3_key_points']:'',
                'Protagonist_4' => isset($data['Protagonist_4'])?$data['Protagonist_4']:'',
                'BO_4' => isset($data['BO_4'])?$data['BO_4']:'',
                'Demo_4' => isset($data['Demo_4'])?$data['Demo_4']:'',
                'Demo_4_key_points' => isset($data['Demo_4_key_points'])?$data['Demo_4_key_points']:'',
                'Outro' => isset($data['Outro'])?$data['Outro']:'',
            ];
            ExportScript::insert($dataScript);
    
            if(Excel::store(new ScriptExport(2018), 'saved-scripts/'.$name,'s3', \Maatwebsite\Excel\Excel::XLSX)){
                return response()->json(['success' => true, 'filename' => $name, 'message' => 'Data captured successfully!', 'data' => $dataScript]);
            }
            else{
                return response()->json(['success' => false, 'message' => 'Something went wrong!']);
            }
        }
        catch(\Exception $e){
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
        
       
    }

    public function readScriptFiles(){
        try{
            Product_Used_Industry::truncate();
            Product_Count::truncate();
            Industry_Count::truncate();
            model_names::truncate();
            $fileName = 'config_and_graph_data/Industry_Count.xlsx';
            $fileName1 = 'config_and_graph_data/Heatmap.xlsx';
            $fileName2 = 'config_and_graph_data/Product_Count.xlsx';
            $fileName3 = 'config_and_graph_data/model_names.xlsx';
            $fileName4 = 'config_and_graph_data/Line_of_Business.xlsx';
    
            $s3_file = Storage::disk('s3')->get($fileName);
            $s3 = Storage::disk('public_uploads')->put($fileName, $s3_file);
            $s3_file = Storage::disk('s3')->get($fileName1);
            $s3 = Storage::disk('public_uploads')->put($fileName1, $s3_file);
            $s3_file = Storage::disk('s3')->get($fileName2);
            $s3 = Storage::disk('public_uploads')->put($fileName2, $s3_file);
            $s3_file = Storage::disk('s3')->get($fileName3);
            $s3 = Storage::disk('public_uploads')->put($fileName3, $s3_file);
            $s3_file = Storage::disk('s3')->get($fileName4);
            $s3 = Storage::disk('public_uploads')->put($fileName4, $s3_file);
    
            $var = public_path('uploads/s3/'.$fileName);
            Excel::import(new IndustoryCountImport,$var);
            $var1 = public_path('uploads/s3/'.$fileName1);
            Excel::import(new ProductUsedIndustoryImport,$var1);
            $var2 = public_path('uploads/s3/'.$fileName2);
            Excel::import(new ProductCountImport,$var2);
            $var3 = public_path('uploads/s3/'.$fileName3);
            Excel::import(new ModelNamesImport,$var3);
            $var4 = public_path('uploads/s3/'.$fileName4);
            Excel::import(new LineOfBusiness,$var4);
    
            Storage::disk('public_uploads')->delete($fileName);
            Storage::disk('public_uploads')->delete($fileName1);
            Storage::disk('public_uploads')->delete($fileName2);
            Storage::disk('public_uploads')->delete($fileName3);
            Storage::disk('public_uploads')->delete($fileName4);
            
            $Product_Used_Industry = Product_Used_Industry::get(['x','y','heat'])->skip(1);
            $Product_Count = Product_Count::get(['name','value'])->skip(1);
            $Industry_Count = Industry_Count::get(['name','value'])->skip(1);
            $model_names = model_names::get(['Demo_Model','Intro_Model','Outro_Model'])->skip(1);
            $LineOfBusiness = Business::get(['id','name'])->skip(2);
            
            $LineOfBusiness_array = array();
            foreach($LineOfBusiness as $business){
                $LineOfBusinessArray = [
                    'id' => $business->id,
                    'name' => $business->name,
                ];
                array_push($LineOfBusiness_array,$LineOfBusinessArray);
            }

            $Product_Used_Industry_array = array();
            foreach($Product_Used_Industry as $industry){
                $Product_Used_IndustryArray = [
                    'x' => $industry->x,
                    'y' => $industry->y,
                    'heat' => $industry->heat,
                ];
                array_push($Product_Used_Industry_array,$Product_Used_IndustryArray);
            }
            
            $Industry_Count_array = array();
            foreach($Industry_Count as $industry){
                $industryArray = [
                    'name' => $industry->name,
                    'value' => $industry->value,
                ];
                array_push($Industry_Count_array,$industryArray);
            }

            $Product_Count_array = array();
            foreach($Product_Count as $product){
                $Product_CountArray = [
                    'name' => $product->name,
                    'value' => $product->value,
                ];
                array_push($Product_Count_array,$Product_CountArray);
            }
    
            return response()->json(['success' => true,
                'Product_Used_Industry' => $Product_Used_Industry_array,
                'Product_Count' => $Product_Count_array,
                'Industry_Count' => $Industry_Count_array,
                'model_names' => $model_names["1"],
                'business_array' => $LineOfBusiness_array
            ]);
        }
        catch(\Exception $e){
            return response()->json(['success' => false,
                 'message' => $e->getMessage()
            ]);
        }
        
    }
}