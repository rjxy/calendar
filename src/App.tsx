import { useRef } from "react";
import Page from "./Page";
import { useReactToPrint } from "react-to-print";
import Month from "./Month";

function App() {
  const contentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef, // 告诉它你要打印哪个引用的内容
    documentTitle: "name", // PDF 文件名
  });

  const year = 2026;

  return (
    <>
      {/* 按钮在打印时会自动被隐藏 */}
      <button
        className="no-print"
        onClick={handlePrint}
        style={{ position: "fixed", top: 40, right: 20 }}
      >
        导出 PDF / 打印
      </button>

      {/* 打印区域 */}
      <div ref={contentRef}>
        {
          Array.from({ length: 12 }).map((_, index) => (
            <Page key={index}>
              <Month year={year} month={index + 1} />
            </Page>
          ))
        }
      </div>
    </>
  );
}

export default App;
