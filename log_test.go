package jslog

// import (
// 	"fmt"
// 	"net"
// 	"os"
// 	"os/exec"
// 	"path/filepath"
// 	"testing"

// 	"google.golang.org/grpc"
// 	"sxbastudio.com/workermanager/wmworker/proto/golog"
// 	"sxbastudio.com/workermanager/wmworker/proto/gologimpl"
// 	"sxbastudio.com/workermanager/wmworker/wmwdb"
// )

// func init() {
// 	os.RemoveAll(wmwdb.Shared.SavePath)
// 	err := os.MkdirAll(wmwdb.Shared.SavePath, os.ModePerm)
// 	if err != nil {
// 		panic(err)
// 	}
// }

// func TestLog(t *testing.T) {
// 	token, err := wmwdb.NewAccess(100)
// 	if err != nil {
// 		t.Error(err)
// 		return
// 	}
// 	logToken := fmt.Sprintf("%v-%v", 100, token)
// 	listener, _ := net.Listen("tcp", ":0")
// 	srv := grpc.NewServer()
// 	log := gologimpl.NewLogPersisterImpl()
// 	golog.RegisterLogPersisterServer(srv, log)
// 	go srv.Serve(listener)
// 	cmd := exec.Command("node", "log_test.mjs")
// 	cmd.Dir, _ = filepath.Abs("./test")
// 	cmd.Stderr = os.Stderr
// 	cmd.Stdout = os.Stdout
// 	cmd.Env = append(cmd.Env, fmt.Sprintf("LOG_SERVER=%v", listener.Addr()))
// 	cmd.Env = append(cmd.Env, fmt.Sprintf("LOG_TOKEN=%v", logToken))
// 	err = cmd.Run()
// 	if err != nil {
// 		t.Error(err)
// 		return
// 	}
// }
