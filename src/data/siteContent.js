const baseUrl = (() => {
  const viteBase = import.meta.env?.BASE_URL

  if (viteBase) {
    return viteBase
  }

  const runtimeBase = globalThis.window?.__APP_BASE_PATH__ || './'

  return runtimeBase.endsWith('/') ? runtimeBase : `${runtimeBase}/`
})()

const asset = (path) => `${baseUrl}${path}`

export const siteContent = {
  hero: {
    name: '彭辉',
    role: '万能型系统软件工程师',
    subtitle:
      '13+ 年 C/C++ / Linux / 嵌入式 / Windows 桌面端经验，持续把复杂设备、工业产品与现代 AI 工作流真正落到可交付系统。',
    location: '上海',
    phone: '17328272654',
    email: 'hp1126370@gmail.com',
    tagline: '万能型工程师 / AI 驱动开发者 / 系统级落地者',
    tags: [
      'C/C++',
      'Linux / Windows',
      'Qt / OpenGL / RPC',
      'ROS2 / Fast-DDS',
      'Rockchip 平台',
      'AI Agents / Prompt / Skill',
      '复杂设备联调',
      '工业产品落地',
    ],
    stats: [
      { value: '13+', label: '年系统级开发经验' },
      { value: '5', label: '段完整职业经历' },
      { value: '5+', label: '代表产品方向' },
      { value: '7', label: '现代能力矩阵板块' },
    ],
    portrait: asset('media/photos/profile-formal.jpg'),
    supportImage: asset('media/work/office-robot.jpg'),
  },
  introduction: {
    lead:
      '我的职业主线不是单点技术，而是把语言广度、系统深度、产品落地和 AI 协同组合起来，解决真实复杂工程问题。',
    paragraphs: [
      '长期深耕 C/C++、Linux、嵌入式平台与 Windows 桌面系统，覆盖 Android、Linux、OpenWrt、FreeRTOS、ROS 等环境，既能写底层驱动、通信与多进程架构，也能完成桌面应用、检测配方系统、结果分析系统和设备校准系统。',
      '参与和主导过车载激光雷达、BSP 车载预警系统、微纳芯片核酸扩增 PCR 分析仪、军用级双系统无线爆破器、音乐播放器、高铁沙盘仿真系统等方向，具备从 BSP、驱动、采集、算法调用到最终交互界面的完整落地经验。',
      '除了传统工程能力，我也把现代 AI 协同方式纳入自己的开发体系，用 Agent、Skill、Prompt、自动化测试与代码审查工作流放大交付效率。这部分能力在本页中会明确与“已完成真实商业项目经验”区分展示。',
    ],
    focusCards: [
      {
        title: '语言广度',
        text: 'C/C++ 为核心，延展到 Python、Shell、前端基础以及现代 AI 工具使用。',
        icon: 'mdi-code-braces-box',
      },
      {
        title: '系统深度',
        text: '覆盖驱动、通信、分布式、共享内存、多进程、多线程、性能优化与设备联调。',
        icon: 'mdi-chip',
      },
      {
        title: '产品落地',
        text: '能把实验设备、工业系统与桌面软件真正做成可演示、可使用、可维护的产品。',
        icon: 'mdi-rocket-launch-outline',
      },
      {
        title: 'AI 协同',
        text: '把 Codex、Claude、Cursor、Prompt、AGENT、Skill 串成现代工程工作流。',
        icon: 'mdi-brain',
      },
    ],
    specialThreads: [
      '熟悉 Poco 边缘计算 IoT 框架，并在其思路基础上持续构建个人边缘计算框架。',
      '优化过 ROS2 共享内存多相机图像传输，提升视频链路与多帧率场景下的效率。',
      '同时具备 Windows 桌面端与 Linux 嵌入式端的丰富应用层开发经验。',
    ],
  },
  signatureProjects: [
    {
      title: '军用级双系统无线爆破器',
      company: '上海鲲程电子科技有限公司',
      period: '2021.03 - 2024.01',
      summary:
        '带领团队将原有 Android + NXP 方案国产化为 Linux + 瑞芯微 PX30，并新增 LoRa、4G、GPS、地图与公安校验链路，形成可多设备协同的远程爆破系统。',
      stack: ['PX30', 'Android / Linux', 'LoRa', '4G', 'GPS', 'Qt', 'HTTP'],
      highlights: [
        '实现基于 LoRa 的多设备协同作业，支撑微秒级时钟校准与同步起爆。',
        '完成 4G 网络回传、GPS 定位、在线地图显示、雷管注册与公安数据校验流程。',
        '负责按键、灯、扫描灯等外设驱动控制，完成 Qt 交叉编译移植、BootLoader 配置与根文件系统制作。',
      ],
      media: [
        {
          type: 'video',
          src: asset('media/videos/product-demo-3.mp4'),
          poster: asset('media/posters/product-demo-3.jpg'),
          label: '手持终端演示片段',
        },
        {
          type: 'image',
          src: asset('media/work/controller-board.jpg'),
          label: '控制板卡实物',
        },
      ],
    },
    {
      title: '微纳芯片核酸扩增 PCR 分析仪',
      company: '上海驷格生物有限公司',
      period: '2019.12 - 2021.02',
      summary:
        '疫情期间主导 RK3568 + Linux 微纳芯片核酸扩增分析仪开发，围绕温控、采集、串口驱动和结果展示完成整机软件交付。',
      stack: ['RK3568', 'Linux', 'Qt', 'USB Camera', 'Serial', 'Fast-DDS'],
      highlights: [
        '围绕温控系统与算法优化检测流程，缩短 PCR 扩增耗时并提升整体检测效率。',
        '完成 Qt 交叉编译与 Linux 裁剪移植，编写 USB 摄像头与温控模块串口驱动。',
        '实现检测方案编辑、执行过程中的图像与温度数据采集，以及结果分析与屏幕展示。',
        '使用 Fast-DDS 处理多任务、多进程间异步事务。',
      ],
      media: [
        {
          type: 'image',
          src: asset('media/work/pcr-room.jpg'),
          label: 'PCR 相关工作现场',
        },
        {
          type: 'image',
          src: asset('media/products/calibration-ui.jpg'),
          label: '设备软件界面',
        },
      ],
    },
    {
      title: 'BSP 车载预警系统',
      company: '个人项目亮点 / 相关经历',
      period: '代表性产品经历',
      summary:
        '基于 Linux + RK3399 构建车载预警系统，使用 V4L2 和 OpenCV 对 USB 摄像头数据进行实时处理，检测车辆周边活体目标并触发告警。',
      stack: ['RK3399', 'Linux', 'V4L2', 'OpenCV', 'Multithreading'],
      highlights: [
        '在用户态实时采集每帧图像，落入队列并由算法线程异步消费。',
        '实现车周活体识别与实时安全警报逻辑，兼顾采集与识别效率。',
      ],
      media: [
        {
          type: 'image',
          src: asset('media/work/lab-board.jpg'),
          label: '板卡与联调现场',
        },
      ],
    },
    {
      title: '车载激光雷达探测设备',
      company: '苏州施努卡智能装备有限公司 / 嘉定物理研究所合作',
      period: '2016.08 - 2019.11',
      summary:
        '基于 Linux + RK3588 开发车载激光雷达实验设备，目标探测距离 300 米以内，完成数据接收、点云转换、去噪、地面分割和时间同步等处理。',
      stack: ['RK3588', 'Linux', 'UDP', 'Point Cloud', 'Time Sync'],
      highlights: [
        '实时接收千兆网 UDP 数据，转成 3D 点云并进行运动状态显示。',
        '完成点云去噪、地面分割、坐标转换、时间同步与点云压缩等处理链路。',
      ],
      media: [
        {
          type: 'image',
          src: asset('media/work/factory-floor.jpg'),
          label: '工业设备现场',
        },
        {
          type: 'video',
          src: asset('media/videos/product-demo-1.mp4'),
          poster: asset('media/posters/product-demo-1.jpg'),
          label: '设备软件演示片段 A',
        },
      ],
    },
    {
      title: '分布式边缘计算框架与设备监视系统',
      company: '个人项目亮点 / 相关经历',
      period: '代表性技术实践',
      summary:
        '围绕分布式边缘计算框架与设备监视场景，完成多设备数据接入、监视界面联动与高速采集测试，体现中间件、上位机和硬件协同开发能力。',
      stack: ['OSP', 'Fast-DDS', 'FPGA', 'ZYNQ7020', 'AD7606', 'Qt'],
      highlights: [
        '基于 OSP + Fast-DDS 构建设备侧与监视侧的数据通信框架，支撑分布式边缘节点协同。',
        '结合 FPGA + ZYNQ7020 平台与 AD7606 芯片，完成 48 通道高速采集测试与数据链路验证。',
      ],
      media: [
        {
          type: 'image',
          src: asset('media/products/edge-monitor-demo.gif'),
          label: '设备软件演示片段 B',
        },
      ],
    },
  ],
  evidenceGallery: [
    {
      title: '正式形象照',
      text: '适合作为首屏主视觉，强化专业可信的第一印象。',
      image: asset('media/photos/profile-formal.jpg'),
    },
    {
      title: '工程现场',
      text: '机器人、代码界面与终端调试，体现硬件与软件一体化能力。',
      image: asset('media/products/robot-debug.jpg'),
    },
    {
      title: '工业设备环境',
      text: '大型设备与产线现场，支撑“复杂产品落地”叙事。',
      image: asset('media/work/factory-floor.jpg'),
    },
    {
      title: '团队工作场景',
      text: '工作照与现场记录，让页面不只是简历，更像真实职业画像。',
      image: asset('media/work/event-space.jpg'),
    },
    {
      title: '办公室联调',
      text: '办公环境中的机器人实物与开发过程，适合放在万能型工程师能力区。',
      image: asset('media/work/office-robot.jpg'),
    },
    {
      title: '户外生活照',
      text: '补充人物温度感，避免页面过于冷硬。',
      image: asset('media/photos/profile-green.jpg'),
    },
  ],
  experiences: [
    {
      period: '2024.02 - 2025.10',
      company: '上海澈芯科技有限公司',
      team: '软件部',
      role: 'C/C++ 高级软件工程师',
      summary:
        '负责 SP10 设备晶圆检测系统的软件研发，围绕主流程、Recipe、Result、Calibration 等多个子系统协同构建 Windows 桌面端检测平台。',
      details: [
        '负责 ALS 主流程控制系统，管理十多个子系统协同完成 6 / 8 / 12 寸晶圆缺陷检测。',
        '实现 ALS 跨进程接收 Job、共享内存获取采集图像、分布式调用算法处理、序列化存盘并通知 Result 系统展示。',
        '开发 Recipe 检测配方系统，维护算法参数、设备参数、关键 Klarf 序列化信息并落库。',
        '开发 Result 结果分析系统，输出曲线、柱状图、缺陷图、MAP、HAZE 以及缺陷对比、重分析、Klarf 转储功能。',
        '参与 Calibration 设备与算法校准系统、MicroView 3D 缺陷图显示、光学 / 激光 / 采集卡等子模块。',
        '参与 CD/CI、版本打包发布和代码 ReCodeView 等工程流程。',
      ],
    },
    {
      period: '2021.03 - 2024.01',
      company: '上海鲲程电子科技有限公司',
      team: '研发部',
      role: '嵌入式软件工程师',
      summary:
        '带领团队完成远程爆破设备国产化升级，把 Android + NXP 方案演进为 Linux + PX30，并引入 LoRa、4G、GPS 和地图能力。',
      details: [
        '将原本基于 Android + NXP 的方案国产化为 Linux + 瑞芯微 PX30。',
        '新增 LoRa 无线通信模块，支撑远程多设备协同爆破和微秒级同步。',
        '开发基于 4G 模块的 GPS 定位、在线地图显示和后台 HTTP 数据回传。',
        '接入公安系统雷管激活注册流程，负责多类外设驱动控制与设备联调。',
        '完成 Qt 交叉编译移植、BootLoader 配置编译和根文件系统制作。',
      ],
    },
    {
      period: '2019.12 - 2021.02',
      company: '上海驷格生物有限公司',
      team: '研发部',
      role: '嵌入式高级工程师',
      summary:
        '疫情期间主导微纳芯片核酸扩增 PCR 分析仪软件研发，围绕温控、采集与结果展示形成完整检测闭环。',
      details: [
        '带领团队基于 RK3568 + Linux 开发 PCR 分析仪，显著提高检测效率。',
        '完成 Qt 交叉编译、Linux 裁剪移植、USB 摄像头驱动与温控串口驱动编写。',
        '实现检测方案编辑、串口控制温控流程、实时图像采集与温度数据采集。',
        '在方案执行完成后调用算法分析结果并在屏幕展示。',
        '使用 Fast-DDS 处理多任务、多进程异步事务。',
      ],
    },
    {
      period: '2016.08 - 2019.11',
      company: '苏州施努卡智能装备有限公司',
      team: '软件部',
      role: 'C/C++ 高级软件工程师',
      summary:
        '参与激光雷达、VIN 车辆识别、3 轴 / 6 轴自由度仿真等项目，覆盖理论研究设备与工业识别系统开发。',
      details: [
        '协助嘉定物理研究所开发车载激光雷达设备，服务科学实验和理论研究。',
        '开发 VIN 车辆识别系统，使用 RS232 控制光源，多进程 + libview 采集 PLC 状态，配合 HALCON 完成机器视觉识别与数据库存储。',
        '参与 3 轴 / 6 轴自由度仿真系统，通过 HOOK 获取运动数据并驱动松下电机，由研华控制板卡提供接口。',
      ],
    },
    {
      period: '2012.07 - 2016.06',
      company: '上海田之金计算机科技有限公司',
      team: '软件部',
      role: 'C/C++ 软件工程师',
      summary:
        '围绕嵌入式音视频系统与铁路仿真实验室项目建立早期工程基础。',
      details: [
        '基于 Linux + Rockchip 平台开发音乐播放器，使用 Qt 容器承载 HTML5 页面实现音视频播放。',
        '参与西南交通大学实验室高铁沙盘仿真系统，自动读取 MySQL 表结构生成 Qt C++ 类。',
        '绘制铁路路网、信号机、道岔、发车表示器，并通过 RS232 控制车轨信号机动作与 2D 车模实时显示。',
      ],
    },
  ],
  capabilityFramework: {
    boundary:
      '下面的 7 个板块来自《编程语言与核心技术栈（基础必备）》整理，是我用来定义“现代万能型程序员”能力画像的方法论。其中与简历已直接对应的部分按真实经验理解，其余则作为正在持续强化的现代开发体系展示。',
    groups: [
      {
        title: '1. 编程语言与核心技术栈',
        icon: 'mdi-layers-triple',
        bridge: '这一层体现语言广度 + 工程深度，是万能型工程师的入门门槛。',
        items: [
          { name: 'C/C++', detail: '系统编程、嵌入式、驱动、性能优化', level: '精通' },
          { name: 'Python', detail: 'AI 调用、自动化脚本、测试、数据处理', level: '熟练' },
          { name: 'Rust / Go / Java', detail: '高并发 / 跨平台 / 云端服务开发', level: '基础了解 -> 精通视方向' },
          { name: 'SQL / NoSQL', detail: '数据库设计与优化', level: '熟练' },
          { name: 'Shell / Bash / PowerShell', detail: '构建脚本、部署、自动化', level: '熟练' },
          { name: '前端基础 (JS / TS / React / Vue)', detail: '简单 UI / 仪表板 / 管理工具', level: '基础' },
        ],
        closing: '技能广度 + 深度结合，是万能型选手的第一步。',
      },
      {
        title: '2. 系统架构与工程能力',
        icon: 'mdi-sitemap-outline',
        bridge: '这部分与 PX30、RK3399、RK3568、RK3588、Windows 检测平台等项目经验强相关。',
        items: [
          { name: '操作系统原理', detail: 'Linux / PetaLinux / RTOS 内核理解，进程 / 线程 / 调度' },
          { name: '嵌入式硬件接口', detail: 'SPI / I2C / UART / GPIO 驱动、DMA、寄存器编程' },
          { name: '网络与中间件', detail: 'Fast-DDS、MQTT、gRPC、REST、Socket 编程' },
          { name: '分布式系统', detail: '微服务架构、负载均衡、消息队列、容错设计' },
          { name: '跨平台构建', detail: 'CMake、Ninja、Bazel，跨平台编译和依赖管理' },
          { name: '版本控制 & DevOps', detail: 'Git、CI/CD 流程、Docker、Kubernetes、自动化测试' },
        ],
        closing: '万能型程序员不仅能写代码，还能设计系统和流程。',
      },
      {
        title: '3. AI 与自动化能力',
        icon: 'mdi-creation-outline',
        bridge: '这是页面刻意强调的第二主线，作为现代开发方法论展示，并与既有工程经验组合成更完整的能力画像。',
        items: [
          { name: 'AI 编程助手使用', detail: 'Codex CLI / IDE、Claude、Cursor 等，熟练使用 Agent + Skill' },
          { name: 'Skill / Agent 构建', detail: '编写 AGENTS.md、Skill、Prompt 模板，实现自动化任务' },
          { name: 'Prompt Engineering', detail: '高质量自然语言指令生成正确代码，控制 AI 输出' },
          { name: '自动化代码审查 & 测试', detail: 'code-reviewer、static-analysis、unit-test-generator' },
          { name: 'AI 驱动工作流组合', detail: '构建端到端自动化（测试 -> 编译 -> 部署 -> PR 审查）' },
        ],
        closing: 'AI 将成为智能队友，学会驱动 AI 是万能型程序员的核心竞争力。',
      },
      {
        title: '4. 数据、算法与性能能力',
        icon: 'mdi-chart-timeline-variant',
        bridge: '这部分能力与点云处理、检测结果分析、图像队列处理、多进程事务和高性能 C++ 代码直接相连。',
        items: [
          { name: '算法与数据结构', detail: 'STL、模板、泛型、高性能算法' },
          { name: '内存管理 & 并发', detail: '内存池、锁、atomic、线程安全' },
          { name: '性能调优', detail: 'gprof、perf、Valgrind、profiling 技术' },
          { name: '大数据与流处理', detail: 'Spark、Flink、DDS 流式数据' },
        ],
        closing: '万能型选手必须能写出高性能且健壮的系统。',
      },
      {
        title: '5. 工具链与现代开发环境',
        icon: 'mdi-tools',
        bridge: '工程效率、调试能力和持续交付能力，是把复杂项目长期做下去的底盘。',
        items: [
          { name: 'IDE 高效使用', detail: 'VS Code / CLion、智能插件、调试技巧' },
          { name: '调试工具', detail: 'gdb / lldb、Valgrind、strace、perf' },
          { name: '测试与 CI/CD', detail: 'Google Test、Catch2、Jenkins / GitHub Actions' },
          { name: '容器化与虚拟化', detail: 'Docker、Kubernetes、VM、QEMU' },
          { name: '监控与日志', detail: 'Prometheus、Grafana、ELK、日志分析' },
        ],
        closing: '工具熟练度决定开发效率和系统可维护性。',
      },
      {
        title: '6. 跨领域能力（加分项）',
        icon: 'mdi-earth',
        bridge: '这部分用于展示更高维的延展空间，让“万能型”不仅限于传统嵌入式或桌面开发。',
        items: [
          { name: '云计算 / AI 部署', detail: 'AWS / GCP / Azure，Serverless，ML Ops' },
          { name: '安全与加密', detail: 'TLS / HTTPS，嵌入式安全设计，密码学基础' },
          { name: '前沿技术', detail: 'FPGA 开发，量化计算，自动化机器人' },
          { name: '软技能', detail: '沟通、项目管理、技术文档撰写' },
        ],
      },
      {
        title: '7. 万能型程序员核心能力总结',
        icon: 'mdi-star-four-points-circle-outline',
        bridge: '最终沉淀成四大核心维度，也正是本页整体内容结构的底层逻辑。',
        summary: [
          { name: '技术广度', detail: '多语言、多平台、多领域' },
          { name: '技术深度', detail: '系统级调试、嵌入式驱动、性能优化' },
          { name: 'AI 驱动能力', detail: '使用 AI 生成、审查、测试、部署' },
          { name: '工具与流程能力', detail: '构建系统、自动化、CI/CD、容器化' },
        ],
        closing: '未来 AI 编程时代的程序员，不只是写代码的人，而是系统设计、AI 指导、自动化执行与高效协作的专家。',
      },
    ],
  },
  aiWorkflow: {
    title: 'AI 协同开发方式',
    intro:
      '这部分不是把 AI 当作宣传词，而是把它作为现代工程交付方法来使用：先拆任务，再组织 Agent / Skill，再把代码、测试、构建与部署串起来。',
    cards: [
      {
        title: '需求拆解',
        text: '把模糊需求转成结构化任务、约束、素材边界与验收标准。',
        icon: 'mdi-text-box-search-outline',
      },
      {
        title: 'Agent / Skill 编排',
        text: '用 AGENT.md、Skill、Prompt 模板组织内容提炼、界面实现、发布流程。',
        icon: 'mdi-robot-outline',
      },
      {
        title: '代码与测试',
        text: '让 AI 参与代码生成、重构、review、静态检查与测试补强。',
        icon: 'mdi-test-tube',
      },
      {
        title: '发布与回归',
        text: '把构建、GitHub Pages 发布、资源路径校验与线上回归变成自动链路。',
        icon: 'mdi-source-branch',
      },
    ],
    toolset: [
      'Codex CLI / IDE',
      'Claude / Cursor',
      'Prompt Engineering',
      'AGENTS.md / Skills',
      '自动化代码审查',
      'GitHub Actions / Pages',
    ],
  },
  education: {
    school: '郑州轻工业大学',
    major: '计算机科学与技术（嵌入式软件）',
    period: '2008.09 - 2012.06',
    degree: '本科',
  },
  footer: {
    contactImage: asset('media/photos/profile-street.jpg'),
    note:
      '本页围绕“真实项目履历 + 现代能力体系”构建，既覆盖完整简历，也把《编程语言与核心技术栈（基础必备）》中的 7 个能力板块转成了适合网页阅读的专业表达。',
  },
}
