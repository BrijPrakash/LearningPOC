import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Peer:any;

@Component({
  selector: 'app-video-streaming',
  templateUrl: './video-streaming.component.html',
  styleUrls: ['./video-streaming.component.css']
})
export class VideoStreamingComponent implements OnInit {

  @ViewChild("myvideo", {static: true}) myVideo: ElementRef;

  peer;
  anotherId;
  mypeerid;

  constructor() { }

  ngOnInit() {
    let video = this.myVideo.nativeElement;
    this.peer = new Peer();
    
    setTimeout(() => {
      console.log(this.peer.id);
      this.mypeerid = this.peer.id;
    },3000);
    
    this.peer.on('connection', function(conn) {
      conn.on('data', function(data){
        // Will print 'hi!'
        console.log(data);
      });
    });

    this.peer.on("error", function(err) {
      console.log("An Error has occured: " + err);
    });

    var n = <any>navigator;
    
    n.getUserMedia =  ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );
    
    this.peer.on('call', function(call) {
      
      n.getUserMedia({video: true, audio: true}, function(stream) {
        call.answer(stream);
        call.on('stream', function(remotestream){
          video.srcObject = remotestream;
          video.play();
        })
      }, function(err) {
        console.log('Failed to get stream', err);
      })
    })
  }

  connect() {
    var conn = this.peer.connect(this.anotherId);
    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function(){
      // here you have conn.id
      conn.send('hi!');
    });
  }


  videoConnect(){
    let video = this.myVideo.nativeElement;
    var localvar = this.peer;
    var fname = this.anotherId;

    var n = <any>navigator;

    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );
    
    n.getUserMedia({video: true, audio: true}, function(stream) {
      var call = localvar.call(fname, stream);
      // call.on('stream', function(remotestream) {
      //   video.srcObject = remotestream;
      //   video.play();
      // })
    }, function(err){
      console.log('Failed to get stream', err);
    })
  }

  stopVideo() {
    var n = <any>navigator;
    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );
    n.getUserMedia({video: true, audio: true}, function(stream) {
      
      stream.stop()
    }, function(err){
      console.log('Failed to get stream', err);
    })
  }

}
