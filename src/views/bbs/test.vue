<template>
  <div>
      <!-- 搜索 -->
      <div style="margin-top:20px;">
          <input v-show="false" ref="fileRef" multiple type="file" @change="fileChange">
          <el-button style="float:left" type="primary" icon="el-icon-upload" size="medium" @click="uploadFile">上传媒体文件
          </el-button>
          <el-input size="large" placeholder="请输入内容" v-model="fileName"
              style="width: 500px;margin-bottom: 20px; margin-left: 50px;">
              <template slot="prepend">文件名</template>
              <el-button slot="append" icon="el-icon-search" size="small" @click="search"></el-button>
          </el-input>

      </div>
      <!-- 上传文件弹框 -->
      <div>
          <el-dialog title="上传文件" :visible.sync="dialogFormVisible" width="40%" :before-close="fileClose">
              <div style="width: 100%;height: 500px;overflow: hidden;overflow-y: scroll;">
                  <div v-for="item in fileList" :key="item.name">
                      <div v-if="item.appear == true" style="width:100%;display: table;">
                          <div style="display:table-cell;vertical-align:middle;text-align: center;width: 15%;">
                              <img src="../../../assets/file.png" style="display:inline-block;" width="50px"
                                  height="60px" />
                          </div>
                          <div style="display:table-cell;width: 70%;">
                              <div style="font-weight:700;font-size:medium">{{item.files.name}}</div>
                              <div>
                                  <el-progress :percentage="item.percentage" :color="item.color"></el-progress>
                              </div>
                              <div>
                                  <span v-if="item.err == true" style="color:#F56C6C">{{item.meassage}}</span>
                                  <span v-if="item.succ == true" style="color:#67C23A">{{item.meassage}}</span>
                              </div>
                          </div>
                          <div style="vertical-align:middle;text-align: center;display:table-cell;width: 15%;">
                              <img @click="stop(item)" v-if="item.show == 0"
                                  style="display:inline-block;cursor: pointer;" src="../../../assets/stop.png"
                                  width="30px" height="30px">
                              <img @click="continued(item)" v-if="item.show == 1"
                                  style="display:inline-block;cursor: pointer;" src="../../../assets/continue.png"
                                  width="30px" height="30px">
                              <img @click="deleted(item)" v-if="item.show == 1"
                                  style="display:inline-block;margin-left: 10px;cursor: pointer;"
                                  src="../../../assets/delete.png" width="30px" height="30px">
                              <img @click="continued(item)" v-if="item.show == 2 || item.show == 4"
                                  style="display:inline-block;cursor: pointer;" src="../../../assets/retry.png"
                                  width="30px" height="30px">
                          </div>
                      </div>
                      <el-divider v-if="item.appear == true" style="margin-top:0%"></el-divider>
                  </div>
              </div>
          </el-dialog>
      </div>
      <!-- 表格 -->
      <div>
          <el-table :data="tableData" style="width: 100%;font-size: 10px" @sort-change="change"
              @filter-change="filterChange">
              <el-table-column prop="fid" label="文件" width="300px">
                  <template slot-scope="scope">
                      <el-link style="font-size: 10px" @click="detail(scope.row)">{{ scope.row.fid }}</el-link>
                  </template>
              </el-table-column>
              <el-table-column prop="name" label="文件名" width="350px" :show-overflow-tooltip=true>
              </el-table-column>
              <el-table-column prop="size" label="大小" width="150px"></el-table-column>
              <el-table-column prop="transcoding" label="转码生成文件" width="120px"
                  :filters="[{ text: '否', value: false }, { text: '是', value: true }]" column-key="filterTag">
                  <template slot-scope="scope">
                      <span v-if="scope.row.transcoding === true" style="color:#409EFF">是</span>
                      <span v-if="scope.row.transcoding === false">否</span>
                  </template>
              </el-table-column>
              <el-table-column prop="createTime" label="创建时间" sortable="custom" :formatter="tableColumnFormatTime">
              </el-table-column>
              <el-table-column prop="expireTime" label="过期时间" :formatter="tableColumnFormatTime"></el-table-column>
              <el-table-column label="操作" width="150px">
                  <template slot-scope="scope">
                      <el-button type="text" style="color:#E6A23C" @click="detail(scope.row)" size="small">详情
                      </el-button>
                      <el-button type="text" style="color:#409EFF" @click="downLoad(scope.row)" size="small"> 下载
                      </el-button>
                      <el-popconfirm confirm-button-text='删除' cancel-button-text='取消' icon="el-icon-delete"
                          icon-color="red" title="确定删除此媒体文件吗？" @confirm="deleted(scope.row)" style="margin-left:10px">
                          <el-button type="text" style="color:#F56C6C" slot="reference" :disabled="!scope.row.status"
                              size="small">删除</el-button>
                      </el-popconfirm>

                  </template>
              </el-table-column>
          </el-table>
      </div>
      <!-- 分页 -->
      <div style="margin-top:20px;float: right;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="currentPage" :page-sizes="[5, 10, 20, 30]" :page-size='pageSize'
              layout="total, sizes, prev, pager, next, jumper" :total='total'>
          </el-pagination>
      </div>
      <!-- 详情弹窗 -->
      <div>
          <el-dialog :visible.sync="dialogTableVisible" v-dialogDrag>
              <template #title>
                  <div>
                      <span style="font-size:20px;line-height:24px;color: #303133;">文件详情</span><br><br>
                      <span style="font-size:xx-small;color:grey">提示：双击弹窗头部，可使弹窗全屏展示</span>
                  </div>
              </template>
              <el-descriptions title="" direction="vertical" :column="2" border>
                  <el-descriptions-item label="文件">{{ myDetails.fid }}</el-descriptions-item>
                  <el-descriptions-item label="文件名">{{ myDetails.name }}</el-descriptions-item>
                  <el-descriptions-item label="文件大小">{{ myDetails.size }}</el-descriptions-item>
                  <el-descriptions-item label="文件后缀">{{ myDetails.suffix }}</el-descriptions-item>

                  <el-descriptions-item label="创建时间">{{ myDetails.creatAt }}</el-descriptions-item>
                  <el-descriptions-item label="状态">
                      <el-tag type="success" v-if="myDetails.status == 1">上传成功</el-tag>
                      <el-tag type="danger" v-if="myDetails.status == 2">待上传</el-tag>
                      <el-tag type="danger" v-if="myDetails.status == 0">待上传</el-tag>
                      <el-tag type="danger" v-if="myDetails.status == -1">已删除</el-tag>
                      <el-tag type="danger" v-if="myDetails.status == 3">已删除</el-tag>
                      <el-button type="text" style="color:#409EFF;margin-left: 20px;" @click="downLoad(myDetails)"
                          size="small" v-if="myDetails.status == 1"> 下载</el-button>
                  </el-descriptions-item>
                  <el-descriptions-item label="信息流">
                      <span style="white-space:pre-wrap">
                          {{ myDetails.meta }}
                      </span>

                  </el-descriptions-item>
              </el-descriptions>
          </el-dialog>
      </div>
      <!-- <div>
          <button @click="test()">按钮</button>
      </div> -->
  </div>
</template>

<script>
import { getMediaFileList, getFileDetails, fileUpload, changeStatus, getDownloadUrl } from '../../../utils/api'
import SparkMD5 from "../../../components/spark-md5.min.js";
import * as binconv from 'binconv';
const chunkSize = 5 * 1024 * 1024;//定义分片的大小 为5M  采用分片上传时，只能并且只有有最后一个分片的size 小于 指定值（默认5M），不然就会报错
const {
  S3Client,
  CreateMultipartUploadCommand,
  ListMultipartUploadsCommand,
  GetObjectCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand,
  AbortMultipartUploadCommand
} = require("@aws-sdk/client-s3");
export default {
  data() {
      return {
          tableData: [],
          fileName: '',
          order: false,
          currentPage: 1,
          pageSize: 10,
          total: 0,
          dialogTableVisible: false,
          myDetails: {
              id: "",
              name: "",
              size: "",
              suffix: "",
              md5: "",
              meta: "",
              creatAt: "",
              status: ''
          },
          isScreen: 0,
          dialogFormVisible: false,
          fileList: [],//文件
          errorFiles: [],//上传失败文件
      }
  },
  watch: {

  },
  methods: {
      //文件下载
      async downLoad(row) {
          let key = row.fid;
          let s3Information = {
              accessKey: "",
              bucket: "",
              endPoint: "",
              secretKey: ""
          }
          //1、判断在bucket中是否存在该文件
          let param = {
              fid: key
          }
          await getDownloadUrl(param).then(res => {
              if (res.data.hasOwnProperty("returnCode")) {
                  if (res.data.returnCode == 0) {
                      s3Information = res.data;
                  } else {
                      return this.$message.error(res.data.errMessage);
                  }
              } else {
                  return this.$message.error("错误请求");
              }
          }).catch(err => {
              return this.$message.error("获取文件下载信息过程错误：" + err)
          })
          var s3 = new S3Client({
              endpoint: "https://" + s3Information.endPoint,
              s3ForcePathStyle: true,
              signatureVersion: 'v4',
              region: 'us-east-1',
              forcePathStyle: true,
              credentials: {
                  accessKeyId: s3Information.accessKey,
                  secretAccessKey: s3Information.secretKey,
              }
          });
          let isExistence = await this.getObject(s3Information.bucket, key, s3, row.name)
          if (isExistence == 1) {
              return this.$message.error("bucket中不存在该文件");
          }
      },
      //判断在bucket中是否存在该文件
      async getObject(bucket, key, s3, name) {
          const params = {
              Bucket: bucket,
              Key: key
          };
          const res = async () => {
              try {
                  const data = await s3.send(new GetObjectCommand(params));
                  //将readableStream 转换成blob
                  const blob = await binconv.readableStreamToBlob(data.Body);
                  var newBlob = new Blob([blob], { type: data.ContentType });

                  var elink = document.createElement('a');
                  elink.download = name;
                  elink.style.display = 'none';
                  const src = URL.createObjectURL(newBlob);
                  elink.href = src;
                  document.body.appendChild(elink);
                  elink.click();
                  document.body.removeChild(elink);
                  URL.revokeObjectURL(src)
                  return 0;
              } catch (err) {
                  console.log("There was an error listing your albums: " + err.message);
                  return 1;
              }
          }
          return res()
      },
      //点击选择文件
      uploadFile() {
          this.$refs.fileRef.dispatchEvent(new MouseEvent('click'))
      },
      //文件弹窗关闭
      fileClose(done) {
          for (let i = 0; i < this.fileList.length; i++) {
              if (this.fileList[i].err == false && this.fileList[i].succ == false) {
                  return this.$message.warning("请等待所有文件处理完成后关闭弹窗");
              }
          }
          this.fileList = [];
          this.errorFiles = [];
          done();
      },
      //删除还未上传成功文件
      deleted(item) {
          item.appear = false;
      },
      //继续上传
      async continued(item) {
          item.fid = '';
          item.err = false;
          item.succ = false;
          item.message = "";
          item.show = 0;
          item.color = "#409EFF"
          item.s3 = {
              endPoint: '',
              accessKeyId: '',
              secretAccessKey: '',
              bucket: ''
          };
          this.errorFiles.push(item);
          //for (let i = 0; i < this.errorFiles.length; i++)
          while (this.errorFiles.length != 0) {
              let errFile = this.errorFiles.pop();
              //1、获取bucket基本信息
              let isOk = await this.inputFile(errFile);
              //2、建立连接
              if (isOk == 0) {
                  var s3 = new S3Client({
                      endpoint: errFile.s3.endPoint,
                      s3ForcePathStyle: true,
                      signatureVersion: 'v4',
                      region: 'us-east-1',
                      forcePathStyle: true,
                      credentials: {
                          accessKeyId: errFile.s3.accessKeyId,
                          secretAccessKey: errFile.s3.secretAccessKey,
                      }
                  });
                  var isConnect = await this.createMultipartUpload(errFile.s3.bucket, errFile.fid, s3, errFile.files.type)
                  if (isConnect != 1) {
                      //连接成功
                      /**
                       * 3、传送文件
                       * 3.1将文件分片
                       * 3.2分片文件循环上传
                       */
                      const chunkCount = Math.ceil(errFile.files.size / chunkSize)//分片数

                      var isUpload = 0;//用来判断分片是否上传成功
                      var sharding = [];//成功分片信息
                      for (let j = 0; j < chunkCount; j++) {
                          let start = j * chunkSize;
                          let end = Math.min(errFile.files.size, start + chunkSize)
                          let _chunkFile = errFile.files.slice(start, end)
                          isUpload = await this.uploadPart(_chunkFile, isConnect.UploadId, errFile.fid, errFile.s3.bucket, j + 1, s3);
                          if (isUpload == 1 || errFile.show == 1) {
                              isUpload = 1;
                              //断开连接
                              await this.abortMultipartUpload(errFile.s3.bucket, errFile.fid, isConnect.UploadId, s3)
                              break;
                          } else {
                              //成功
                              //将分片信息存起来
                              errFile.percentage = Math.min(99, Math.ceil(errFile.percentage + 100 / chunkCount))
                              sharding.push({ ETag: isUpload.ETag, PartNumber: j + 1 })
                          }
                      }
                      if (isUpload == 1) {
                          //取消连接
                          //向用户输出文件上传失败，并将前端页面改变
                          errFile.err = true;
                          sharding = [];
                          if (errFile.show == 1) {
                              errFile.meassage = "暂停";
                          } else {
                              errFile.show = 2;
                              errFile.meassage = "上传分片失败";
                          }
                          errFile.color = "#F56C6C";
                          continue;
                      } else {
                          //4、合并分片
                          let isMerge = await this.completeMultipartUpload(errFile.s3.bucket, errFile.fid, sharding, isConnect.UploadId, s3);
                          if (isMerge == 1) {
                              //失败，将消息返回给页面
                              errFile.err = true;
                              errFile.show = 2;
                              errFile.color = "#F56C6C";
                              errFile.meassage = "合并分片失败";
                              continue;
                          } else {
                              //5、将合并成功信息传给后端 
                              let success = await this.upLoadIsOk(errFile.fid);
                              if (success == 0) {
                                  errFile.succ = true;
                                  errFile.meassage = "上传成功";
                                  errFile.show = 3;
                                  errFile.color = "#67C23A";
                                  errFile.percentage = 100;
                                  await this.init();
                              } else {
                                  errFile.err = true;
                                  errFile.color = "#F56C6C";
                                  errFile.show = 4;
                                  errFile.meassage = success;
                                  continue;
                              }
                          }
                      }
                  } else {
                      errFile.err = true;
                      errFile.show = 2;
                      errFile.color = "#F56C6C";
                      errFile.meassage = "与bucket建立连接失败";
                      continue;
                  }
              } else {
                  errFile.err = true;
                  errFile.color = "#F56C6C";
                  errFile.meassage = isOk;
                  errFile.show = 2;
                  continue;
              }
          }
      },
      //暂停上传
      stop(item) {
          item.show = 1;
      },
      //文件上传
      async fileChange(event) {
          // 将上传文件传到文件列表
          let files = event.target.files;
          this.fileList = [];
          for (let i = 0; i < files.length; i++) {
              this.fileList.push({
                  appear: true, color: "#409EFF",
                  fid: '', percentage: 0, files: files[i], err: false, succ: false, message: "", show: 0, s3: {
                      endPoint: '',
                      accessKeyId: '',
                      secretAccessKey: '',
                      bucket: ''
                  }
              })
          }
          this.dialogFormVisible = true;

          for (let i = 0; i < this.fileList.length; i++) {
              //1、获取bucket基本信息
              let isOk = await this.inputFile(this.fileList[i]);
              //2、建立连接
              if (isOk == 0) {
                  var s3 = new S3Client({
                      endpoint: this.fileList[i].s3.endPoint,
                      s3ForcePathStyle: true,
                      signatureVersion: 'v4',
                      region: 'us-east-1',
                      forcePathStyle: true,
                      credentials: {
                          accessKeyId: this.fileList[i].s3.accessKeyId,
                          secretAccessKey: this.fileList[i].s3.secretAccessKey,
                      }
                  });
                  var isConnect = await this.createMultipartUpload(this.fileList[i].s3.bucket, this.fileList[i].fid, s3, this.fileList[i].files.type)
                  if (isConnect != 1) {
                      //连接成功
                      /**
                       * 3、传送文件
                       * 3.1将文件分片
                       * 3.2分片文件循环上传
                       */
                      const chunkCount = Math.ceil(this.fileList[i].files.size / chunkSize)//分片数

                      var isUpload = 0;//用来判断分片是否上传成功
                      var sharding = [];//成功分片信息
                      for (let j = 0; j < chunkCount; j++) {
                          let start = j * chunkSize;
                          let end = Math.min(this.fileList[i].files.size, start + chunkSize)
                          let _chunkFile = this.fileList[i].files.slice(start, end)
                          isUpload = await this.uploadPart(_chunkFile, isConnect.UploadId, this.fileList[i].fid, this.fileList[i].s3.bucket, j + 1, s3);
                          if (isUpload == 1 || this.fileList[i].show == 1) {
                              isUpload = 1;
                              //断开连接
                              await this.abortMultipartUpload(this.fileList[i].s3.bucket, this.fileList[i].fid, isConnect.UploadId, s3)
                              break;
                          } else {
                              //成功
                              //将分片信息存起来
                              this.fileList[i].percentage = Math.min(99, Math.ceil(this.fileList[i].percentage + 100 / chunkCount))
                              sharding.push({ ETag: isUpload.ETag, PartNumber: j + 1 })
                          }
                      }
                      if (isUpload == 1) {
                          //取消连接
                          //向用户输出文件上传失败，并将前端页面改变
                          this.fileList[i].err = true;
                          sharding = [];
                          if (this.fileList[i].show == 1) {
                              this.fileList[i].meassage = "暂停";
                          } else {
                              this.fileList[i].show = 2;
                              this.fileList[i].meassage = "上传分片失败";
                          }
                          this.fileList[i].color = "#F56C6C";
                          continue;
                      } else {
                          //4、合并分片
                          let isMerge = await this.completeMultipartUpload(this.fileList[i].s3.bucket, this.fileList[i].fid, sharding, isConnect.UploadId, s3);
                          if (isMerge == 1) {
                              //失败，将消息返回给页面
                              this.fileList[i].err = true;
                              this.fileList[i].show = 2;
                              this.fileList[i].color = "#F56C6C";
                              this.fileList[i].meassage = "合并分片失败";
                              continue;
                          } else {
                              //5、将合并成功信息传给后端 
                              let success = await this.upLoadIsOk(this.fileList[i].fid);
                              if (success == 0) {
                                  this.fileList[i].succ = true;
                                  this.fileList[i].meassage = "上传成功";
                                  this.fileList[i].percentage = 100;
                                  this.fileList[i].show = 3;
                                  this.fileList[i].color = "#67C23A";
                                  await this.init();
                              } else {
                                  this.fileList[i].err = true;
                                  this.fileList[i].show = 4;
                                  this.fileList[i].color = "#F56C6C";
                                  this.fileList[i].meassage = success;
                                  continue;
                              }
                          }
                      }
                  } else {
                      this.fileList[i].err = true;
                      this.fileList[i].show = 2;
                      this.fileList[i].color = "#F56C6C";
                      this.fileList[i].meassage = "与bucket建立连接失败";
                      continue;
                  }
              } else {
                  this.fileList[i].err = true;
                  this.fileList[i].meassage = isOk;
                  this.fileList[i].show = 2;
                  this.fileList[i].color = "#F56C6C";
                  continue;
              }
          }
          this.$refs["fileRef"].value = '';
          return
      },
      //通知后端，文件上传成功
      async upLoadIsOk(fid) {
          let success = 0;
          let param = {
              fid: fid
          }
          await changeStatus(param).then(res => {
              if (res.data.hasOwnProperty("returnCode")) {
                  if (res.data.returnCode == 0) {
                      return success = 0;
                  } else {
                      this.$message.error(fid + res.data.errMessage);
                      return success = res.data.errMessage;
                  }
              } else {
                  this.$message.error(fid + "文件请求错误");
                  return success = "文件请求错误";
              }
          }).catch(err => {
              this.$message.error(fid + "上传文件过程失败");
              return success = "上传文件过程失败";
          })
          return success
      },
      //取消连接
      async abortMultipartUpload(bucket, key, uploadId, s3) {
          const params = {
              Bucket: bucket,
              Key: key,
              UploadId: uploadId
          };
          const res = async () => {
              try {
                  const data = await s3.send(new AbortMultipartUploadCommand(params));
                  return data
              } catch (err) {
                  console.log("取消连接失败: " + err.message);
                  return 1
              }

          }
          return res()
      },
      //将分片合并
      async completeMultipartUpload(bucket, key, parts, uploadId, s3) {
          const params = {
              Bucket: bucket,
              Key: key,
              MultipartUpload: {
                  Parts: parts
              },
              UploadId: uploadId
          };
          const res = async () => {
              try {
                  const data = await s3.send(new CompleteMultipartUploadCommand(params));
                  return data
              } catch (err) {
                  console.log("合并分片失败: ", err.message);
                  return 1
              }

          }
          return res()
      },
      //上传一个分片
      async uploadPart(f, uploadId, key, bucket, num, s3) {
          const params = {
              Bucket: bucket,
              Key: key,
              PartNumber: num,
              UploadId: uploadId,
              Body: f
          };
          const res = async () => {
              try {
                  const data = await s3.send(new UploadPartCommand(params));
                  return data;
              } catch (err) {
                  // return alert("There was an error listing your albums: " + err.message);
                  console.log('上传分片错误信息', err.message)
                  return 1;
              }

          }
          return res();
      },
      //建立连接
      async createMultipartUpload(bucket, key, s3, type) {// string, string
          const params = {
              Bucket: bucket,
              Key: key,
              ContentType: type
          };
          const res = async () => {
              try {
                  const data = await s3.send(new CreateMultipartUploadCommand(params));
                  return data;
              } catch (err) {
                  console.log('建立连接失败：', err.message)
                  return 1;
              }

          }
          return res()
      },
      //上传文件基本信息，获取bucket基本信息
      async inputFile(file) {
          let m = await this.getEasyMd5(file.files)
          let param = {
              fileName: file.files.name,
              etag: m.m,
              size: file.files.size
          }
          let isOk = 0;
          await fileUpload(param).then(res => {
              if (res.data.hasOwnProperty("returnCode")) {
                  if (res.data.returnCode == 0) {
                      file.s3.endPoint = "https://" + res.data.endPoint;
                      file.s3.bucket = res.data.bucket;
                      file.s3.secretAccessKey = res.data.secretKey;
                      file.s3.accessKeyId = res.data.accessKey;
                      file.fid = res.data.fileId;
                      return isOk = 0;
                  } else {
                      this.$message.error(res.data.errMessage);
                      return isOk = res.data.errMessage;
                  }
              } else {
                  this.$message.error("请求错误");
                  return isOk = "请求错误";
              }
          }).catch(err => {
              this.$message.error("上传文件过程失败");
              return isOk = "上传过程失败";
          })
          return isOk
      },
      //获取md5值
      async getEasyMd5(file) {
          var blobSlice =
              File.prototype.slice ||
              File.prototype.mozSlice ||
              File.prototype.webkitSlice;
          var chunkSize = 524288; //512KB
          if (file.size > chunkSize * 5) {
              let l = await new Promise((resolve, reject) => {
                  var chunks = Math.floor(file.size / chunkSize);
                  var step = Math.floor(chunks / 5);
                  var currentChunk = 0;
                  var spark = new SparkMD5.ArrayBuffer();
                  var fileReader = new FileReader();
                  var counter = 0;
                  fileReader.onload = function (e) {
                      if (counter < 5) {
                          spark.append(e.target.result); // Append array buffer
                      }
                      currentChunk += step;
                      var md5_progress = Math.ceil((currentChunk / chunks) * 100);
                      if (counter < 5) {
                          counter += 1;
                          loadNext();
                      } else {
                          if (md5_progress != 100) {
                          }
                          var m = spark.end();
                          let temp = {
                              m: m
                          }
                          resolve(temp);
                      }
                  };
                  fileReader.onerror = function () {
                  };

                  function loadNext() {
                      var start = currentChunk * chunkSize;
                      var end = start + chunkSize >= file.size ? file.size : start + chunkSize;
                      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
                  }
                  loadNext();
              })
              return l;
          } else {
              let l = await new Promise((resolve, reject) => {
                  const fileReader = new FileReader();
                  var spark = new SparkMD5.ArrayBuffer();
                  fileReader.readAsArrayBuffer(file);
                  fileReader.onload = (e) => {
                      spark.append(e.target.result);
                      var m = spark.end();
                      let temp = {
                          m: m
                      }
                      resolve(temp);
                  };

              })
              return l;
          }
      },
      //过滤转码后的文件
      filterChange(filterObj) {
          if (filterObj.filterTag.length == 0 || filterObj.filterTag.length == 2) {
              this.isScreen = 0;
              this.init();
          } else {
              if (filterObj.filterTag[0] == true) {
                  this.isScreen = 1;
                  this.init();
              } else {
                  this.isScreen = 2;
                  this.init();
              }

          }
      },
      //详细信息
      detail(row) {
          let param = {
              fid: row.fid
          }
          getFileDetails(param).then(res => {
              if (res.status == 401) {
                  this.$message.error("身份验证过期，请重新登录");
              }
              if (res.status == 200 || res.status == 201) {
                  if (res.data.returnCode == 0) {
                      this.myDetails = res.data.file;
                      // if (res.data.file.status == 1) {
                      //     this.myDetails['status'] = '上传成功';
                      // } else if (res.data.file.status == 2) {
                      //     this.myDetails['status'] = '系统待上传';
                      // }
                  } else {
                      return this.$message.error(res.data.errMessage);
                  }
              }
          }).catch(err => {
              return this.$message.error("获取详情过程失败");
          })
          this.dialogTableVisible = true;
      },
      //查找
      search() {
          this.init();
      },
      //改变当前页数
      handleSizeChange(val) {
          this.pageSize = val;
          this.currentPage = 1;
          this.init();
      },
      //改变当前页
      handleCurrentChange(val) {
          this.currentPage = val;
          this.init();
      },
      //初始化
      async init() {
          let param = {
              pageNum: this.currentPage,
              pageSize: this.pageSize,
              order: 'create_time',
              asc: this.order,
              status: 1
          }
          if (this.fileName != null && this.fileName != '') {
              param['fileName'] = this.fileName;
          }
          if (this.isScreen == 1) {
              param['transcoding'] = true;
          } else if (this.isScreen == 2) {
              param['transcoding'] = false;
          }
          await getMediaFileList(param).then(res => {
              if (res.status == 401) {
                  this.$message.error("身份验证过期，请重新登录");
              }
              if (res.status == 200 || res.status == 201) {
                  if (res.data.returnCode == 0) {
                      this.tableData = res.data.files;
                      this.total = res.data.total;
                  } else {
                      return this.$message.error(res.data.errMessage);
                  }
              }
          })
      },
      //改变排序
      change(column) {
          if (column.order == "descending") {
              this.order = false;
              this.init();
          } else {
              this.order = true;
              this.init();
          }
      },
      //格式化时间时区
      tableColumnFormatTime(row, column, cellValue, index) {
          // yyyy-MM-dd hh:mm:ss
          let date = new Date(cellValue);
          return date.Format("yyyy-MM-dd hh:mm:ss")
      }
  },
  created() {
      this.init();
  }
}
</script>

<style lang="less" scoped>
/deep/.el-divider--horizontal {
  margin: 0 0;
}

.on {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #FFF;
  border: 1px solid #DCDFE6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #FFF;
  background-color: #409EFF;
  border-color: #409EFF;
}

.active {
  color: #409EFF;
  cursor: pointer;
}

.out {
  color: #606266;
}

.dia {
  /deep/.el-dialog__body {
      align-items: center;
      flex-direction: column;
      display: flex;
  }
}

/deep/.el-link.el-link--default {
  color: #6aaef1;
}
</style>