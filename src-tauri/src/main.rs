// use tauri::Manager;

// 创建一个 Rust 命令
// #[tauri::command]
// fn close_splashscreen(window: tauri::Window) {
//   // 关闭启动视图
  
//   if let Some(splashscreen) = window.get_window("splashscreen") {
//     splashscreen.close().unwrap();
//   }
//   // 展示主视图
//   window.get_window("main").unwrap().show().unwrap();
// }
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
fn main() {
  tauri::Builder::default()
    // .invoke_handler(tauri::generate_handler![close_splashscreen])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
