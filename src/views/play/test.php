<?php 
include_once('../global.php');


// 记录所有请求的日志
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestTime = date('Y-m-d H:i:s');
$requestDomain = $_SERVER['HTTP_HOST'];
$requestUri = $_SERVER['REQUEST_URI'];
$requestParams = print_r($_REQUEST, true);

// 日志内容
$logContent = "Time: $requestTime\nDomain: $requestDomain\nMethod: $requestMethod\nURI: $requestUri\nParams: $requestParams\n\n";

// 日志文件路径
$logFilePath = $_SERVER['DOCUMENT_ROOT'] . '/log/request_log.txt';

// 写入日志
file_put_contents($logFilePath, $logContent, FILE_APPEND);

if($_GET['action'] == 'gongshi'){
    $arr = $db->table('jingpinziliao')->where(array('status'=>1))->order('sort asc')->select();

    $data = array();
    $where['type'] = $_POST['type']; 
    $where['leixing'] = 0;
    $type = array();
	foreach ($arr as $key => $value) {
        $type[$key]['id'] = $value['id'];
        $type[$key]['title'] = $value['title'];
        $type[$key]['picture'] = $value['picture'];
        $type[$key]['link'] = $value['link'];
        $type[$key]['jianjie'] = explode(',', $value['jianjie']);
        $db=new db();
        $where['mokuai'] = $value['id'];
        $data['list'][$value['id']] = $db->table('wangzhituijian')->where($where)->limit('0,8')->order('sort desc')->select();
    }
    $data['type'] = $type;
    $system = $db->table('system')->select();
    $data['ljtzlink'] = $system[0]['kefulink'];
    if($data){
        echo ajaxReturn('获取成功',$data,0);
      }else{
        echo ajaxReturn('暂无更多数据','',1);
      }
}
if($_GET['action'] == 'jihua'){
    $where['qishu'] = array('>'=>$_POST['jhzhyt']);
    $data = $db->table('yixiaojiema')->where($where)->order('qishu asc')->select();
    if($data){
        echo ajaxReturn('获取成功',$data,0);
      }else{
        echo ajaxReturn('暂无更多数据','',1);
      }
}
if($_GET['action'] == 'gonggao'){
   $data = $db->table('lxjm')->where(array('id'=>2))->select();
   $data1['link']=$data[0]['link'];
   $data1['linkaz']=$data[0]['linkaz'];
   $data1['linkios']=$data[0]['linkios'];
   $data1['jianjie']=$data[0]['jianjie'];
   $data1['desc']=$data[0]['desc'];
$data1['android']=$data[0]['isshow'];
$data1['ios']=$data[0]['status'];
$data1['pc']=$data[0]['remen'];
    if($data){
        echo ajaxReturn('获取成功',$data1,0);
      }else{
        echo ajaxReturn('暂无更多数据','',1);
      }
}
if($_GET['action'] == 'jsyx'){
    gongshijs('绝杀一肖',$_GET['type']);
}
if($_GET['action'] == 'jslx'){
    gongshijs('绝杀两肖',$_GET['type']);
}
if($_GET['action'] == 'jssx'){
    gongshijs('绝杀三肖',$_GET['type']);
}
if($_GET['action'] == 'ptx'){
    gongshijs('平特肖',$_GET['type']);
}
if($_GET['action'] == 'jygs'){
    gongshijs('家野',$_GET['type']);
}
if($_GET['action'] == 'tmds'){
    gongshijs('特码单双',$_GET['type']);
}
if($_GET['action'] == 'tmdx'){
    gongshijs('特码大小',$_GET['type']);
}
if($_GET['action'] == 'bsgs'){
    gongshijs('波色',$_GET['type']);
}
if($_GET['action'] == 'ptw'){
    gongshijs('平特尾',$_GET['type']);
}
if($_GET['action'] == 'dsh'){
    gongshijs('单双合',$_GET['type']);
}
if($_GET['action'] == 'dxh'){
    gongshijs('大小合',$_GET['type']);
}
function gongshijs($title,$type){
    if($type=='xg'){
        $type = 1;
    }
    if($type=='am'){
        $type = 2;
    }
    if($type=='xam'){
        $type = 3;
    }
$db = new db();
    $arr = $db->table('jingpinziliao')->where(array('status'=>1,'title'=>$title))->select();

    $data = array();
    $where['type'] = $type;
    $where['leixing'] = 0;
    $types = array();
	foreach ($arr as $key => $value) {
        $types[$key]['id'] = $value['id'];
        $types[$key]['title'] = $value['title'];
        $types[$key]['jianjie'] = explode(',', $value['jianjie']);
        $db=new db();
        $where['mokuai'] = $value['id'];
        $data['list'][$value['id']] = $db->table('wangzhituijian')->where($where)->limit('0,8')->order('sort desc')->select();
    }
    $data['type'] = $types;
    if($data){
        echo $_GET['callback'].'('.json_encode($data).')';
      }
}
if($_GET['action'] == 'gsdetailjs'){
     if($_GET['type']=='xg'){
        $type = 1;
    }
    if($_GET['type']=='am'){
        $type = 2;
    }
    if($_GET['type']=='xam'){
        $type = 3;
    }
    $where['type'] = $type;
    $where['mokuai'] = $_GET['name'];
    $where['leixing'] = $_GET['fenlei'];

    $data = $db->table('wangzhituijian')->where($where)->limit('0,8')->order('sort desc')->select();
    if($data){
       echo $_GET['callback'].'('.json_encode($data).')';
      }
}
if($_GET['action'] == 'gsdetail'){
    $where['type'] = $_POST['type'];
    $where['mokuai'] = $_POST['name'];
    $where['leixing'] = $_POST['fenlei'];

    $data['list'] = $db->table('wangzhituijian')->where($where)->limit('0,8')->order('sort desc')->select();
    $system = $db->table('system')->select();
    $data['ljtzlink'] = $system[0]['kefulink'];
    if($data){
        echo ajaxReturn('获取成功',$data,0);
      }else{
        echo ajaxReturn('暂无更多数据','',1);
      }
}
if($_GET['action'] == 'beiyongwangzhi'){
  $system = $db->table('system')->select();
    $data['wangzhi'] = explode(',',$system[0]['jtewm']);
    $data['gg'] = $db->table('yuqiancaixiao')->where(array('type'=>2))->order('sort asc')->select();
    echo ajaxReturn('获取成功',$data,0);
}
if($_GET['action'] == 'gesxtp'){
    $info = $db->table('sxtp')->where(array('type'=>$_GET['type']))->select();
    if($info){
		echo ajaxReturn('获取成功',$info[0],0);
	}else{
		echo ajaxReturn('暂无更多数据','',1);
	}
    
}
if($_GET['action'] == 'toupiao'){
    $data[$_POST['ziduan']] = $_POST['num'];
    $res = $db->table('sxtp')->where(array('type'=>$_POST['type']))->update($data);
    if($res){
		echo ajaxReturn('获取成功','',0);
	}else{
		echo ajaxReturn('暂无更多数据','',1);
	}
    
}
if($_GET['action'] == 'getdetail'){
    $where['id'] = $_POST['id'];
    
    $info = $db->table('wangzhituijian')->where($where)->select();
    $sc = $db->table('shoucang')->where(array('userid'=>$_SESSION['id'],'wzid'=>$info[0]['id']))->select();

    // if($info[0]['type'] == 1){
    //     $type = 1;
    // }
    // if($info[0]['type'] ==2){
    //     $type = 2;
    // }
    // if($info[0]['type'] == 3){
    //     $type = 5;
    // }
    //$kj = $db->table('kaijiang')->where(array('period'=>$info[0]['qishu'],'type'=>$type))->select();
    //$kj[0]['numberList'] = unserialize($kj[0]['numberList']);
    $data['info'] = $info[0];
    $data['scid'] = $sc[0]['id'];
    $string = $info[0]['title'];
    preg_match_all('/\d+/', $string, $matches);
    $numbers = $matches[0];
    $data['qishu'] = $numbers[0];
    //$data['kj'] = $kj[0];
     $data['lunbo'] = $db->table('news2')->order('sort asc')->select();
     $system = $db->table('system')->select();
    $downwz = explode(',',$system[0]['beian']);
    $randomKey = array_rand($downwz);
    $data['downwz'] = $downwz[$randomKey];
    if($data){
        echo ajaxReturn('获取成功',$data,0);
      }else{
        echo ajaxReturn('暂无更多数据','',1);
      }
}
if($_GET['type'] == 'getpinglunlist'){
    $where=[];
  $where['wzid'] = $_POST['id'];
  $where['status'] = 1; 
  //分页
  $plnum = $db->table('pinglun')->where($where)->count();
  $PageCount = empty($_POST['PageCount']) ? 40 : $_POST['PageCount'];
  $page = empty($_POST['page']) ? 1 : $_POST['page'];
  $start = ($page-1)*$PageCount;
  $data['pinglun'] = $db->table('pinglun')->where($where)->limit($start.",".$PageCount)->order('addtime desc')->select();
  $data['plnum'] = $plnum;
  if($data){
    echo ajaxReturn('获取成功',$data,0);
  }else{
    echo ajaxReturn('暂无更多数据','',1);
  }
  
}
if($_GET['action'] == 'lhsq'){
  $data['list'] = $db->table('jieguanjiapo')->order('sort asc')->select();
  $data['hezuo'] = $db->table('yuqiancaixiao')->where(array('type'=>1))->order('sort asc')->select();
   $system = $db->table('system')->select();
    $data['bah'] = $system[0]['tsy'];
    
    echo ajaxReturn('获取成功',$data,0);
}
if($_GET['type'] == 'getindex'){
    $system = $db->table('system')->select();
    $data['jtjs'] = $system[0]['jtjs'];
    $data['company'] = $system[0]['company'];
    $data['keywords'] = $system[0]['keywords'];
    $data['content'] = $system[0]['content'];
    $data['tongji'] = $system[0]['tongji'];
    $data['xiazaiyelink'] = $system[0]['xiazaiyelink'];
    $data['lunbo'] = $db->table('news')->order('sort asc')->select();
	if($data){
		echo ajaxReturn('获取成功',$data,0);
	}else{
		echo ajaxReturn('获取成功','',1);
	}
	
}
//计划文案
if($_GET['action']=='jhwa'){
    $jhwa = $db->table('lxjm')->where(array('id'=>1))->select();
    $data = $jhwa[0]['desc'];    
    if($data){
		echo ajaxReturn('获取成功',$data,0);
	}else{
		echo ajaxReturn('获取成功','',1);
	}
}
// if($_GET['action']=='ozkjlishi'){
//     //$res = geturl('https://hkc.kx139704.com/api/getHistory?r=0.11045909511604735&lotteryCode=europe&year=&type=2&date=');
//     $tiaoma = $db->table('tiaoma')->select();
//     if(empty($_GET['limit'])){//历史页
//         $res = geturl('https://apis.mylot00pcweb.com/api/europe/history?date='.$_GET['date']);
//     }else{//首页
//         $res = geturl('https://apis.mylot00pcweb.com/api/europe/history');
//     }
//     $res1 = json_decode($res,true);
//     $arr = [];
//     $qihao = [];
//     foreach ($res1 as $key => $value){
//         $kjtime = timezh($value['drawTime']);
//         $numlist = [];
//         foreach (explode(',',$value['openNumbers']) as $k => $v){
//             $numlist[$k]['number'] = $v;
//             $numlist[$k]['color'] = bose($tiaoma,$v);
//             $numlist[$k]['shengXiao'] = shengxiao($tiaoma,$v);
//             $numlist[$k]['wuXing'] = wuxing($tiaoma,$v);
//         }
//         $arr[$key]['period'] = padWithZeros($value['period']);
//         $arr[$key]['riqi'] = '20'.date('ymd',strtotime($value['drawTime']));
//         $arr[$key]['datetime'] = '20'.date('y-m-d H:i',strtotime($kjtime));
//         $arr[$key]['numberList'] = $numlist;
//         $qihao[$key] = $arr[$key]['riqi'].$arr[$key]['period'];
//     }
//     if(!empty($_GET['limit'])){
//         $arr = array_slice($arr, 0, $_GET['limit']);
//     }
    
//     if($_GET['sort']==0){
//         $arr=array_reverse($arr);
//     }
//     $data['lishi'] = $arr;
//     //计划
//     if(!empty($_GET['limit'])){
//         //只取当天的数据
//         if(!empty($qihao)){
//             $wherejh['qishu'] = array('in'=>'('.implode(',',$qihao).')');
//             $jihua = $db->table('yixiaojiema')->where($wherejh)->order('qishu asc')->select();
//             $jharr = [];
//             foreach ($jihua as $key => $value){
//                 $jharr[$value['qishu']] = $value;
//             }
//             foreach ($res1 as $key => $value){
//                 $sxarr=[];
//                 foreach (explode(',',$value['openNumbers']) as $k => $v){
//                     $sxarr[$k] = shengxiao($tiaoma,$v);
//                 }
         
//                 $period = padWithZeros($value['period']);
//                 $riqi = '20'.date('ymd',strtotime($value['drawTime']));
//                 $qishu = $riqi.$period;
//                 if(!empty($jharr[$qishu])){
//                     if(in_array($jharr[$qishu]['jianjie'],$sxarr)){
//                          $jharr[$qishu]['zhun'] = '准';
//                     }else{
//                          $jharr[$qishu]['zhun'] = '';
//                     }
                   
//                 }
//             }
//             $data['jihua'] = $jharr;
//         }else{
//             $data['jihua'] = [];
//         }
        
//     }
    
//     echo ajaxReturn('获取成功',$data,0);
// }
if($_GET['action']=='ozkjlishi'){
    //$res = geturl('https://hkc.kx139704.com/api/getHistory?r=0.11045909511604735&lotteryCode=europe&year=&type=2&date=');
    $tiaoma = $db->table('tiaoma')->select();
    if(empty($_GET['limit'])){//历史页
        $res = geturl('https://apis.mylot00pcweb.com/api/europe/history?date='.$_GET['date']);
    }else{//首页
        $res = geturl('https://apis.mylot00pcweb.com/api/europe/history');
    }
// if(empty($_GET['limit'])){//历史页
//         $res = geturl('http://107.149.163.168:6688/home/controller/index.php?action=ozkjlishi&date='.$_GET['date']);
//     }else{//首页
//         $res = geturl('http://107.149.163.168:6688/home/controller/index.php?action=ozkjlishi&limit=4');
//     }
    $res1 = json_decode($res,true);
    $arr = [];
    foreach ($res1 as $key => $value){
        $kjtime = timezh($value['drawTime']);
        $numlist = [];
        foreach (explode(',',$value['openNumbers']) as $k => $v){
            $numlist[$k]['number'] = $v;
            $numlist[$k]['color'] = bose($tiaoma,$v);
            $numlist[$k]['shengXiao'] = shengxiao($tiaoma,$v);
            $numlist[$k]['wuXing'] = wuxing($tiaoma,$v);
        }
        $arr[$key]['period'] = padWithZeros($value['period']);
        $arr[$key]['riqi'] = '20'.date('ymd',strtotime($value['drawTime']));
        $arr[$key]['datetime'] = '20'.date('y-m-d H:i',strtotime($kjtime));
        $arr[$key]['numberList'] = $numlist;
    }
    if(!empty($_GET['limit'])){
        $arr = array_slice($arr, 0, $_GET['limit']);
    }
    
    if($_GET['sort']==0){
        $arr=array_reverse($arr);
    }
    $data['lishi'] = $arr;
    //计划
    if(!empty($_GET['limit'])){
        $jihua = $db->table('yixiaojiema')->order('qishu asc')->select();
        $jharr = [];
        foreach ($jihua as $key => $value){
            $jharr[$value['qishu']] = $value;
        }
        foreach ($res1 as $key => $value){
            $sxarr=[];
            foreach (explode(',',$value['openNumbers']) as $k => $v){
                $sxarr[$k] = shengxiao($tiaoma,$v);
            }
     
            $period = padWithZeros($value['period']);
            $riqi = '20'.date('ymd',strtotime($value['drawTime']));
            $qishu = $riqi.$period;
            if(!empty($jharr[$qishu])){
                if(in_array($jharr[$qishu]['jianjie'],$sxarr)){
                     $jharr[$qishu]['zhun'] = '准';
                }else{
                     $jharr[$qishu]['zhun'] = '';
                }
               
            }
        }
        $data['jihua'] = $jharr;
    }
    
    echo ajaxReturn('获取成功',$data,0);
}
function padWithZeros($number, $length = 3) {
    return str_pad($number, $length, '0', STR_PAD_LEFT);
}
function bose($list,$num){
    $red = explode(',',$list[19]['numberList']);
    $blue = explode(',',$list[20]['numberList']);
    $green = explode(',',$list[21]['numberList']);
    if(in_array($num,$red)){return 1;}
    if(in_array($num,$blue)){return 2;}
    if(in_array($num,$green)){return 3;}
}
function wuxing($list,$num){
    $jin = explode(',',$list[14]['numberList']);
    $mu = explode(',',$list[15]['numberList']);
    $shui = explode(',',$list[16]['numberList']);
    $huo = explode(',',$list[17]['numberList']);
    $tu = explode(',',$list[18]['numberList']);
    if(in_array($num,$jin)){return '金';}
    if(in_array($num,$mu)){return '木';}
    if(in_array($num,$shui)){return '水';}
    if(in_array($num,$huo)){return '火';}
    if(in_array($num,$tu)){return '土';}
}
function shengxiao($list,$num){
    $shu = explode(',',$list[30]['numberList']);
    $niu = explode(',',$list[31]['numberList']);
    $hu = explode(',',$list[32]['numberList']);
    $tuzi = explode(',',$list[33]['numberList']);
    $long = explode(',',$list[34]['numberList']);
    $she = explode(',',$list[35]['numberList']);
    $ma = explode(',',$list[36]['numberList']);
    $yang = explode(',',$list[37]['numberList']);
    $hou = explode(',',$list[38]['numberList']);
    $ji = explode(',',$list[39]['numberList']);
    $gou = explode(',',$list[40]['numberList']);
    $zhu = explode(',',$list[41]['numberList']);
    if(in_array($num,$shu)){return '鼠';}
    if(in_array($num,$niu)){return '牛';}
    if(in_array($num,$hu)){return '虎';}
    if(in_array($num,$tuzi)){return '兔';}
    if(in_array($num,$long)){return '龙';}
    if(in_array($num,$she)){return '蛇';}
    if(in_array($num,$ma)){return '马';}
    if(in_array($num,$yang)){return '羊';}
    if(in_array($num,$hou)){return '猴';}
    if(in_array($num,$ji)){return '鸡';}
    if(in_array($num,$gou)){return '狗';}
    if(in_array($num,$zhu)){return '猪';}
}
function timezh($gmtTimeString){
 
    // 创建DateTime对象，设置时区为GMT+2
    $dateTimeGmt = new DateTime($gmtTimeString, new DateTimeZone('GMT+2'));
     
    // 转换到北京时间，即DateTimeZone('Asia/Shanghai')
    $dateTimeBeijing = $dateTimeGmt->setTimezone(new DateTimeZone('Asia/Shanghai'));
     
    // 输出转换后的时间
    return $dateTimeBeijing->format('Y-m-d H:i:s');
}
if($_GET['action']=='ozkj'){
    //$res = geturl('https://hkc.kx139704.com/api/getHistory?r=0.11045909511604735&lotteryCode=europe&year=&type=2&date=');
    $res = geturl('https://hkc.kx139704.com/api/awardData?r=0.'.time().'&lotteryCode=europe');
    $res1 = json_decode($res,true);
    $res = $res1['data']['current'];
    $arr = [];
    $num = explode(',',$res['number']);
    $wx = explode(',',$res['wx']);
    $sx = explode(',',$res['sx']);
    $color = explode(',',$res['bs']);
    foreach ($num as $key => $value){
        if($color[$key]=='red'){
            $arr[$key]['color'] = 1;
        }
        if($color[$key]=='blue'){
            $arr[$key]['color'] = 2;
        }
        if($color[$key]=='green'){
            $arr[$key]['color'] = 3;
        }
        $arr[$key]['number'] = $value;
        $arr[$key]['shengXiao'] = $sx[$key];
        $arr[$key]['wuXing'] = $wx[$key];
    }
    $s1 = strtotime($res1['data']['next']['time']) - strtotime($res1['data']['current']['dateTime']);
    
    if($s1 == 10*60 || $s1 == (10*60*60 + 10*60)){
        $res['isnext'] = 1;
    }else{
        $res['isnext'] =0;
    }
    $res['numberList'] = $arr;
    $res['nexttime'] = date('Y/m/d H:i',strtotime($res1['data']['next']['time']));
    $res['title'] = '第'.$res1['data']['next']['period'].'期 '.$res['nexttime'].' '.$res1['data']['next']['week'];
    echo ajaxReturn('获取成功',$res,0);
}
function geturl1($url,$type){
        $headerArray =array("Content-type:application/json;","Accept:application/json","lotteryType:".$type);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch,CURLOPT_HTTPHEADER,$headerArray);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
        
}
function geturl($url){
        $headerArray =array("Content-type:application/json;","Accept:application/json");
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch,CURLOPT_HTTPHEADER,$headerArray);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output;
        
}

if($_GET['action']=='getplmore'){
    $where['wzid'] = $_POST['wzid'];
    $RsCount = $db->table('pinglun')->where($where)->count();
  //分页
  $PageCount = 10;
  $page = $_POST['page'];
  $start = ($page-1)*$PageCount;
  $result = $db->table('pinglun')->where($where)->limit($start.",".$PageCount)->order('id desc')->select();
  if(!empty($result)){
        echo ajaxReturn('获取成功',$result,0);
    }else{
        echo ajaxReturn('获取成功','',1);
    }
  
}
//评论点赞
if($_GET['action'] == 'plzan'){
    $info = $db->table('pinglun')->where(array('id'=>$_POST['id']))->select();
    $data['zan'] = $info[0]['zan'] + 1;
    $res = $db->table('pinglun')->where(array('id'=>$_POST['id']))->update($data);
    if($res){
        echo ajaxReturn('点赞成功','',0);
    }else{
        echo ajaxReturn('点赞失败','',1);
    }
}
//评论
if($_GET['action'] == 'pinglun'){
    $system = $db->table('system')->select();
    if($system[0]['kg'] == 2){
        echo ajaxReturn($system[0]['tsy'],'',1);
    }
    $data = $_POST;
    $data['addtime'] = date('Y-m-d H:i:s');
    
    $res = $db->table('pinglun')->insert($data);
    $data['id'] = $res;
    if($res){
        echo ajaxReturn('评论成功',$data,0);
    }else{
        echo ajaxReturn('评论失败','',1);
    }
}

function nl(){
    //示例代码：
    $days = array(
        '0' => '星期日',
        '1' => '星期一',
        '2' => '星期二',
        '3' => '星期三',
        '4' => '星期四',
        '5' => '星期五',
        '6' => '星期六'
    );
    $w = $days[date('w')];
    $lunar=new Lunar();
    $today=$lunar->convertSolarToLunar(date(Y),date(m),date(d));
    $qi = date('Y年m月d日 H:i:s').' '.$w.' '.$today[1].$today[2];
    return $qi;
}
class Lunar
{
  var $MIN_YEAR = 1891;
  var $MAX_YEAR = 2100;
  var $lunarInfo = array(
  array(0,2,9,21936),array(6,1,30,9656),array(0,2,17,9584),array(0,2,6,21168),array(5,1,26,43344),array(0,2,13,59728),
  array(0,2,2,27296),array(3,1,22,44368),array(0,2,10,43856),array(8,1,30,19304),array(0,2,19,19168),array(0,2,8,42352),
  array(5,1,29,21096),array(0,2,16,53856),array(0,2,4,55632),array(4,1,25,27304),array(0,2,13,22176),array(0,2,2,39632),
  array(2,1,22,19176),array(0,2,10,19168),array(6,1,30,42200),array(0,2,18,42192),array(0,2,6,53840),array(5,1,26,54568),
  array(0,2,14,46400),array(0,2,3,54944),array(2,1,23,38608),array(0,2,11,38320),array(7,2,1,18872),array(0,2,20,18800),
  array(0,2,8,42160),array(5,1,28,45656),array(0,2,16,27216),array(0,2,5,27968),array(4,1,24,44456),array(0,2,13,11104),
  array(0,2,2,38256),array(2,1,23,18808),array(0,2,10,18800),array(6,1,30,25776),array(0,2,17,54432),array(0,2,6,59984),
  array(5,1,26,27976),array(0,2,14,23248),array(0,2,4,11104),array(3,1,24,37744),array(0,2,11,37600),array(7,1,31,51560),
  array(0,2,19,51536),array(0,2,8,54432),array(6,1,27,55888),array(0,2,15,46416),array(0,2,5,22176),array(4,1,25,43736),
  array(0,2,13,9680),array(0,2,2,37584),array(2,1,22,51544),array(0,2,10,43344),array(7,1,29,46248),array(0,2,17,27808),
  array(0,2,6,46416),array(5,1,27,21928),array(0,2,14,19872),array(0,2,3,42416),array(3,1,24,21176),array(0,2,12,21168),
  array(8,1,31,43344),array(0,2,18,59728),array(0,2,8,27296),array(6,1,28,44368),array(0,2,15,43856),array(0,2,5,19296),
  array(4,1,25,42352),array(0,2,13,42352),array(0,2,2,21088),array(3,1,21,59696),array(0,2,9,55632),array(7,1,30,23208),
  array(0,2,17,22176),array(0,2,6,38608),array(5,1,27,19176),array(0,2,15,19152),array(0,2,3,42192),array(4,1,23,53864),
  array(0,2,11,53840),array(8,1,31,54568),array(0,2,18,46400),array(0,2,7,46752),array(6,1,28,38608),array(0,2,16,38320),
  array(0,2,5,18864),array(4,1,25,42168),array(0,2,13,42160),array(10,2,2,45656),array(0,2,20,27216),array(0,2,9,27968),
  array(6,1,29,44448),array(0,2,17,43872),array(0,2,6,38256),array(5,1,27,18808),array(0,2,15,18800),array(0,2,4,25776),
  array(3,1,23,27216),array(0,2,10,59984),array(8,1,31,27432),array(0,2,19,23232),array(0,2,7,43872),array(5,1,28,37736),
  array(0,2,16,37600),array(0,2,5,51552),array(4,1,24,54440),array(0,2,12,54432),array(0,2,1,55888),array(2,1,22,23208),
  array(0,2,9,22176),array(7,1,29,43736),array(0,2,18,9680),array(0,2,7,37584),array(5,1,26,51544),array(0,2,14,43344),
  array(0,2,3,46240),array(4,1,23,46416),array(0,2,10,44368),array(9,1,31,21928),array(0,2,19,19360),array(0,2,8,42416),
  array(6,1,28,21176),array(0,2,16,21168),array(0,2,5,43312),array(4,1,25,29864),array(0,2,12,27296),array(0,2,1,44368),
  array(2,1,22,19880),array(0,2,10,19296),array(6,1,29,42352),array(0,2,17,42208),array(0,2,6,53856),array(5,1,26,59696),
  array(0,2,13,54576),array(0,2,3,23200),array(3,1,23,27472),array(0,2,11,38608),array(11,1,31,19176),array(0,2,19,19152),
  array(0,2,8,42192),array(6,1,28,53848),array(0,2,15,53840),array(0,2,4,54560),array(5,1,24,55968),array(0,2,12,46496),
  array(0,2,1,22224),array(2,1,22,19160),array(0,2,10,18864),array(7,1,30,42168),array(0,2,17,42160),array(0,2,6,43600),
  array(5,1,26,46376),array(0,2,14,27936),array(0,2,2,44448),array(3,1,23,21936),array(0,2,11,37744),array(8,2,1,18808),
  array(0,2,19,18800),array(0,2,8,25776),array(6,1,28,27216),array(0,2,15,59984),array(0,2,4,27424),array(4,1,24,43872),
  array(0,2,12,43744),array(0,2,2,37600),array(3,1,21,51568),array(0,2,9,51552),array(7,1,29,54440),array(0,2,17,54432),
  array(0,2,5,55888),array(5,1,26,23208),array(0,2,14,22176),array(0,2,3,42704),array(4,1,23,21224),array(0,2,11,21200),
  array(8,1,31,43352),array(0,2,19,43344),array(0,2,7,46240),array(6,1,27,46416),array(0,2,15,44368),array(0,2,5,21920),
  array(4,1,24,42448),array(0,2,12,42416),array(0,2,2,21168),array(3,1,22,43320),array(0,2,9,26928),array(7,1,29,29336),
  array(0,2,17,27296),array(0,2,6,44368),array(5,1,26,19880),array(0,2,14,19296),array(0,2,3,42352),array(4,1,24,21104),
  array(0,2,10,53856),array(8,1,30,59696),array(0,2,18,54560),array(0,2,7,55968),array(6,1,27,27472),array(0,2,15,22224),
  array(0,2,5,19168),array(4,1,25,42216),array(0,2,12,42192),array(0,2,1,53584),array(2,1,21,55592),array(0,2,9,54560)
  );
  /**
  * 将阳历转换为阴历
  * @param year 公历-年
  * @param month 公历-月
  * @param date 公历-日
  */
  function convertSolarToLunar($year,$month,$date)
  {
    //debugger;
    $yearData = $this->lunarInfo[$year-$this->MIN_YEAR];
    if($year==$this->MIN_YEAR&&$month<=2&&$date<=9) return array(1891,'正月','初一','辛卯',1,1,'兔');
    return $this->getLunarByBetween($year,$this->getDaysBetweenSolar($year,$month,$date,$yearData[1],$yearData[2]));
  }
  function convertSolarMonthToLunar($year,$month)
  {
    $yearData = $this->lunarInfo[$year-$this->MIN_YEAR];
    if($year==$this->MIN_YEAR&&$month<=2&&$date<=9) return array(1891,'正月','初一','辛卯',1,1,'兔');
    $month_days_ary = array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    $dd = $month_days_ary[$month];
    if($this->isLeapYear($year) && $month == 2) $dd++;
    $lunar_ary = array();
    for ($i = 1; $i < $dd; $i++)
    {
      $array = $this->getLunarByBetween($year,$this->getDaysBetweenSolar($year, $month, $i, $yearData[1], $yearData[2]));
      $array[] = $year . '-' . $month . '-' . $i;
      $lunar_ary[$i] = $array;
    }
    return $lunar_ary;
  }
  /**
  * 将阴历转换为阳历
  * @param year 阴历-年
  * @param month 阴历-月，闰月处理：例如如果当年闰五月，那么第二个五月就传六月，相当于阴历有13个月，只是有的时候第13个月的天数为0
  * @param date 阴历-日
  */
  function convertLunarToSolar($year,$month,$date)
  {
    $yearData = $this->lunarInfo[$year-$this->MIN_YEAR];
    $between = $this->getDaysBetweenLunar($year,$month,$date);
    $res = mktime(0,0,0,$yearData[1],$yearData[2],$year);
    $res = date('Y-m-d', $res+$between*24*60*60);
    $day = explode('-', $res);
    $year = $day[0];
    $month= $day[1];
    $day = $day[2];
    return array($year, $month, $day);
  }
  /**
  * 判断是否是闰年
  * @param year
  */
  function isLeapYear($year)
  {
    return (($year%4==0 && $year%100 !=0) || ($year%400==0));
  }
  /**
  * 获取干支纪年
  * @param year
  */
  function getLunarYearName($year)
  {
    $sky = array('庚','辛','壬','癸','甲','乙','丙','丁','戊','己');
    $earth = array('申','酉','戌','亥','子','丑','寅','卯','辰','巳','午','未');
    $year = $year.'';
    return $sky[$year[3]].$earth[$year%12];
  }
  /**
  * 根据阴历年获取生肖
  * @param year 阴历年
  */
  function getYearZodiac($year)
  {
    $zodiac = array('猴','鸡','狗','猪','鼠','牛','虎','兔','龙','蛇','马','羊');
    return $zodiac[$year%12];
  }
  /**
  * 获取阳历月份的天数
  * @param year 阳历-年
  * @param month 阳历-月
  */
  function getSolarMonthDays($year,$month)
  {
    $monthHash = array('1'=>31,'2'=>$this->isLeapYear($year)?29:28,'3'=>31,'4'=>30,'5'=>31,'6'=>30,'7'=>31,'8'=>31,'9'=>30,'10'=>31,'11'=>30,'12'=>31);
    return $monthHash["$month"];
  }
  /**
  * 获取阴历月份的天数
  * @param year 阴历-年
  * @param month 阴历-月，从一月开始
  */
  function getLunarMonthDays($year,$month)
  {
    $monthData = $this->getLunarMonths($year);
    return $monthData[$month-1];
  }
  /**
  * 获取阴历每月的天数的数组
  * @param year
  */
  function getLunarMonths($year)
  {
    $yearData = $this->lunarInfo[$year - $this->MIN_YEAR];
    $leapMonth = $yearData[0];
    $bit = decbin($yearData[3]);
    for ($i = 0; $i < strlen($bit);$i ++) $bitArray[$i] = substr($bit, $i, 1);
    for($k=0,$klen=16-count($bitArray);$k<$klen;$k++) array_unshift($bitArray, '0');
    $bitArray = array_slice($bitArray,0,($leapMonth==0?12:13));
    for($i=0; $i<count($bitArray); $i++) $bitArray[$i] = $bitArray[$i] + 29;
    return $bitArray;
  }
  /**
  * 获取农历每年的天数
  * @param year 农历年份
  */
  function getLunarYearDays($year)
  {
    $yearData = $this->lunarInfo[$year-$this->MIN_YEAR];
    $monthArray = $this->getLunarYearMonths($year);
    $len = count($monthArray);
    return ($monthArray[$len-1]==0?$monthArray[$len-2]:$monthArray[$len-1]);
  }
  function getLunarYearMonths($year)
  {
    //debugger;
    $monthData = $this->getLunarMonths($year);
    $res=array();
    $temp=0;
    $yearData = $this->lunarInfo[$year-$this->MIN_YEAR];
    $len = ($yearData[0]==0?12:13);
    for($i=0;$i<$len;$i++)
    {
      $temp=0;
      for($j=0;$j<=$i;$j++) $temp+=$monthData[$j];
      array_push($res, $temp);
    }
    return $res;
  }
  /**
  * 获取闰月
  * @param year 阴历年份
  */
  function getLeapMonth($year)
  {
    $yearData = $this->lunarInfo[$year-$this->MIN_YEAR];
    return $yearData[0];
  }
  /**
  * 计算阴历日期与正月初一相隔的天数
  * @param year
  * @param month
  * @param date
  */
  function getDaysBetweenLunar($year,$month,$date)
  {
    $yearMonth = $this->getLunarMonths($year);
    $res=0;
    for($i=1;$i<$month;$i++) $res +=$yearMonth[$i-1];
    $res+=$date-1;
    return $res;
  }
  /**
  * 计算2个阳历日期之间的天数
  * @param year 阳历年
  * @param cmonth
  * @param cdate
  * @param dmonth 阴历正月对应的阳历月份
  * @param ddate 阴历初一对应的阳历天数
  */
  function getDaysBetweenSolar($year,$cmonth,$cdate,$dmonth,$ddate)
  {
    $a = mktime(0,0,0,$cmonth,$cdate,$year);
    $b = mktime(0,0,0,$dmonth,$ddate,$year);
    return ceil(($a-$b)/24/3600);
  }
  /**
  * 根据距离正月初一的天数计算阴历日期
  * @param year 阳历年
  * @param between 天数
  */
  function getLunarByBetween($year,$between)
  {
    //debugger;
    $lunarArray = array();
    $yearMonth=array();
    $t=0;
    $e=0;
    $leapMonth=0;
    $m='';
    if($between==0)
    {
      array_push($lunarArray, $year,'正月','初一');
      $t = 1;
      $e = 1;
    }
    else
    {
      $year = $between>0? $year : ($year-1);
      $yearMonth = $this->getLunarYearMonths($year);
      $leapMonth = $this->getLeapMonth($year);
      $between = $between>0?$between : ($this->getLunarYearDays($year)+$between);
      for($i=0;$i<13;$i++)
      {
        if($between==$yearMonth[$i])
        {
          $t=$i+2;
          $e=1;
          break;
        }else if($between<$yearMonth[$i])
        {
          $t=$i+1;
          $e=$between-(empty($yearMonth[$i-1])?0:$yearMonth[$i-1])+1;
          break;
        }
      }
      $m = ($leapMonth!=0&&$t==$leapMonth+1)?('闰'.$this->getCapitalNum($t- 1,true)):$this->getCapitalNum(($leapMonth!=0&&$leapMonth+1<$t?($t-1):$t),true);
      array_push($lunarArray,$year,$m,$this->getCapitalNum($e,false));
    }
    array_push($lunarArray,$this->getLunarYearName($year));// 天干地支
    array_push($lunarArray,$t,$e);
    array_push($lunarArray,$this->getYearZodiac($year));// 12生肖
    array_push($lunarArray,$leapMonth);// 闰几月
    return $lunarArray;
  }
  /**
  * 获取数字的阴历叫法
  * @param num 数字
  * @param isMonth 是否是月份的数字
  */
  function getCapitalNum($num,$isMonth)
  {
    $isMonth = $isMonth || false;
    $dateHash=array('0'=>'','1'=>'一','2'=>'二','3'=>'三','4'=>'四','5'=>'五','6'=>'六','7'=>'七','8'=>'八','9'=>'九','10'=>'十 ');
    $monthHash=array('0'=>'','1'=>'正月','2'=>'二月','3'=>'三月','4'=>'四月','5'=>'五月','6'=>'六月','7'=>'七月','8'=>'八月','9'=>'九月','10'=>'十月','11'=>'冬月','12'=>'腊月');
    $res='';
    if($isMonth) $res = $monthHash[$num];
    else
    {
      if($num<=10) $res = '初'.$dateHash[$num];
      else if($num>10&&$num<20) $res = '十'.$dateHash[$num-10];
      else if($num==20) $res = "二十";
      else if($num>20&&$num<30) $res = "廿".$dateHash[$num-20];
      else if($num==30) $res = "三十";
    }
    return $res;
  }
  /*
   * 节气通用算法
   */
  function getJieQi($_year,$month,$day)
  {
    $year = substr($_year,-2)+0;
    $coefficient = array(
      array(5.4055,2019,-1),//小寒
      array(20.12,2082,1),//大寒
      array(3.87),//立春
      array(18.74,2026,-1),//雨水
      array(5.63),//惊蛰
      array(20.646,2084,1),//春分
      array(4.81),//清明
      array(20.1),//谷雨
      array(5.52,1911,1),//立夏
      array(21.04,2008,1),//小满
      array(5.678,1902,1),//芒种
      array(21.37,1928,1),//夏至
      array(7.108,2016,1),//小暑
      array(22.83,1922,1),//大暑
      array(7.5,2002,1),//立秋
      array(23.13),//处暑
      array(7.646,1927,1),//白露
      array(23.042,1942,1),//秋分
      array(8.318),//寒露
      array(23.438,2089,1),//霜降
      array(7.438,2089,1),//立冬
      array(22.36,1978,1),//小雪
      array(7.18,1954,1),//大雪
      array(21.94,2021,-1)//冬至
    );
    $term_name = array(
    "小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨",
    "立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑",
    "白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
    $idx1 = ($month-1)*2;
    $_leap_value = floor(($year-1)/4);
    $day1 = floor($year*0.2422+$coefficient[$idx1][0])-$_leap_value;
    if(isset($coefficient[$idx1][1])&&$coefficient[$idx1][1]==$_year) $day1 += $coefficient[$idx1][2];
    $day2 = floor($year*0.2422+$coefficient[$idx1+1][0])-$_leap_value;
    if(isset($coefficient[$idx1+1][1])&&$coefficient[$idx1+1][1]==$_year) $day1 += $coefficient[$idx1+1][2];
    //echo __FILE__.'->'.__LINE__.' $day1='.$day1,',$day2='.$day2.'<br/>'.chr(10);
    $data=array();
    if($day<$day1){
      $data['name1']=$term_name[$idx1-1];
      $data['name2']=$term_name[$idx1-1].'后';
    }else if($day==$day1){
      $data['name1']=$term_name[$idx1];
      $data['name2']=$term_name[$idx1];
    }else if($day>$day1 && $day<$day2){
      $data['name1']=$term_name[$idx1];
      $data['name2']=$term_name[$idx1].'后';
    }else if($day==$day2){
      $data['name1']=$term_name[$idx1+1];
      $data['name2']=$term_name[$idx1+1];
    }else if($day>$day2){
      $data['name1']=$term_name[$idx1+1];
      $data['name2']=$term_name[$idx1+1].'后';
    }
    return $data;
  }
  /*
   * 获取节日：特殊的节日只能修改此函数来计算
   */
  function getFestival($today, $nl_info = false,$config = 1)
  {
    if($config == 1)
    {
      $arr_lunar=array('01-01'=>'春节','01-15'=>'元宵节','02-02'=>'二月二','05-05'=>'端午节','07-07'=>'七夕节','08-15'=>'中秋节','09-09'=>'重阳节','12-08'=>'腊八节','12-23'=>'小年');
      $arr_solar=array('01-01'=>'元旦','02-14'=>'情人节','03-12'=>'植树节','04-01'=>'愚人节','05-01'=>'劳动节','06-01'=>'儿童节','10-01'=>'国庆节','10-31'=>'万圣节','12-24'=>'平安夜','12-25'=>'圣诞节');
    }//需要不同节日的，用不同的$config,然后配置$arr_lunar和$arr_solar
    $festivals = array();
    list($y,$m,$d) = explode('-',$today);
    if(!$nl_info) $nl_info = $this->convertSolarToLunar($y,intval($m),intval($d));
    if($nl_info[7]>0&&$nl_info[7]<$nl_info[4]) $nl_info[4]-=1;
    $md_lunar = substr('0'.$nl_info[4],-2).'-'.substr('0'.$nl_info[5],-2);
    $md_solar=substr_replace($today,'',0,5);
    isset($arr_lunar[$md_lunar])?array_push($festivals, $arr_lunar[$md_lunar]):'';
    isset($arr_solar[$md_solar])?array_push($festivals, $arr_solar[$md_solar]):'';
    $glweek = date("w",strtotime($today));  //0-6
    if($m==5&&($d>7)&&($d<15)&&($glweek==0))array_push($festivals, "母亲节");
    if($m==6&&($d>14)&&($d<22)&&($glweek==0))array_push($festivals,"父亲节");
    $jieqi = $this->getJieQi($y,$m,$d);
    if($jieqi)array_push($festivals,$jieqi);
    return implode('/',$festivals);
  }
   /*
   * 获取当前时间属于哪个时辰
   @param int $time 时间戳
   */
  function getTheHour($h){
    $d=$h;
    if($d==23 || $d==0){
      return '子时';
    }else if($d==1 || $d==2){
      return '丑时';
    }else if($d==3 || $d==4){
      return '寅时';
    }else if($d==5 || $d==6){
      return '卯时';
    }else if($d==7 || $d==8){
      return '辰时';
    }else if($d==9 || $d==10){
      return '巳时';
    }else if($d==11 || $d==12){
      return '午时';
    }else if($d==13 || $d==14){
      return '未时';
    }else if($d==15 || $d==16){
      return '申时';
    }else if($d==17 || $d==18){
      return '酉时';
    }else if($d==19 || $d==20){
      return '戌时';
    }else if($d==21 || $d==22){
      return '亥时';
    }
  }
}