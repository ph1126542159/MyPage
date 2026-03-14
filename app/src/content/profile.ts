export type SkillGroup = { title: string; items: string[] }

export type ExperienceItem = {
  period: string
  company: string
  dept: string
  role: string
  details: string[]
}

export type ProjectItem = {
  title: string
  subtitle: string
  description: string
  tags: string[]
}

export type RoboticsFocusItem = {
  title: string
  details: string[]
}

export type AchievementItem = {
  title: string
  metric: string
  description: string
  tags: string[]
}

export type CharmItem = {
  title: string
  description: string
  points: string[]
}

export const profile: {
  name: string
  title: string
  location: string
  phone: string
  email: string
  tagline: string
  highlights: string[]
  about: string[]
  skills: SkillGroup[]
  roboticsFocus: RoboticsFocusItem[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  achievements: AchievementItem[]
  charms: CharmItem[]
} = {
  name: '彭辉',
  title: 'C/C++ 高级软件工程师 · 机器人嵌入式开发',
  location: '上海',
  phone: '17328272654',
  email: 'hp1126370@gmail.com',
  tagline:
    '13+ 年 C++ / Linux / 嵌入式开发经验，长期聚焦机器人感知链路、边缘计算与工业级实时系统交付。',
  highlights: ['C/C++/Linux', 'ROS2/Fast-DDS', 'Qt/OpenGL', 'CAN/LoRa/4G/GPS', 'RK3588/RK3568'],
  about: [
    '具备 13 年以上 C++ 与嵌入式系统研发经验，覆盖机器人感知、工业检测、车载系统、医疗设备等复杂场景。',
    '擅长基于 Linux 的多进程架构、共享内存、高速通信链路（UDP/CAN/串口）与实时图像/点云处理，能够将算法工程与系统工程高效闭环。',
    '在项目中兼顾架构设计、性能优化与工程化发布，强调稳定性、可维护性和可量产交付。',
  ],
  skills: [
    {
      title: '语言与平台',
      items: ['C', 'C++', 'Python', 'Linux', 'Windows', 'Android'],
    },
    {
      title: '嵌入式系统',
      items: ['Rockchip（PX30/RK3399/RK3568/RK3588）', 'OpenWrt', 'FreeRTOS', 'BSP', 'Bootloader'],
    },
    {
      title: '机器人通信与中间件',
      items: ['ROS2', 'Fast-DDS', 'RPC', 'UDP', 'HTTP', '共享内存', 'CAN', '串口'],
    },
    {
      title: '感知与可视化',
      items: ['Qt', 'OpenGL', '点云显示', 'V4L2', 'OpenCV', 'HALCON'],
    },
    {
      title: '工程化能力',
      items: ['CI/CD', '版本发布', '日志诊断', '跨进程任务分发', '性能调优'],
    },
    {
      title: '数据库与工具链',
      items: ['MySQL', 'Klarf', '交叉编译', '系统裁剪', '自动化脚本'],
    },
  ],
  roboticsFocus: [
    {
      title: '机器人感知链路',
      details: ['激光雷达数据接入', '点云去噪/分割/坐标转换', '多传感器时间同步', '实时可视化与状态诊断'],
    },
    {
      title: '嵌入式实时系统',
      details: ['RK35xx 平台驱动与 BSP 适配', '实时队列与多线程调度', '高速图像管线优化', '低延迟通信链路构建'],
    },
    {
      title: '机器人软件工程化',
      details: ['ROS2 + Fast-DDS 组件化', '边缘节点部署', '容错恢复与健康监控', '版本发布与回归测试机制'],
    },
  ],
  experience: [
    {
      period: '2024.02–2025.10',
      company: '上海澈芯科技有限公司',
      dept: '软件部',
      role: 'C/C++ 高级软件工程师',
      details: [
        '负责 SP10 设备晶圆检测（6/8/12 寸）软件系统的核心子模块。',
        '主导 ALS 流程控制，跨进程任务接入，图像共享内存流与分布式算法调度。',
        '实现 Recipe / Result / Calibration 子系统联动，支持缺陷分析与量产级数据闭环。',
        '参与 CI/CD、版本发布和工程稳定性治理。',
      ],
    },
    {
      period: '2021.03–2024.01',
      company: '上海鲲程电子科技有限公司',
      dept: '研发部',
      role: '嵌入式软件工程师',
      details: [
        '带领团队完成 Android+NXP 到 Linux+PX30 的国产化升级。',
        '引入 LoRa 多设备协同机制，实现微秒级时钟校准与同步起爆。',
        '完成 4G/GPS 定位与数据回传链路，并对接后台监管流程。',
      ],
    },
    {
      period: '2019.12–2021.02',
      company: '上海驷格生物有限公司',
      dept: '研发部',
      role: '嵌入式高级工程师',
      details: [
        '主导 RK3568 + Linux 的微纳芯片 PCR 分析仪研发。',
        '完成温控串口驱动、图像采集链路、方案执行流程与结果分析展示。',
        '基于 Fast-DDS 构建多任务多进程异步事务处理机制。',
      ],
    },
    {
      period: '2016.08–2019.11',
      company: '苏州施努卡智能装备有限公司',
      dept: '软件部',
      role: 'C/C++ 高级软件工程师',
      details: [
        '参与车载激光雷达实验设备：UDP 数据接入、点云处理与实时显示。',
        '开发 VIN 车辆识别系统与多进程视觉检测流程。',
        '参与 3/6 轴自由度仿真系统，完成运动数据获取与控制联调。',
      ],
    },
    {
      period: '2012.07–2016.06',
      company: '上海田之金计算机科技有限公司',
      dept: '软件部',
      role: 'C/C++ 软件工程师',
      details: [
        '参与 Qt + Html5 影音娱乐系统开发。',
        '参与高铁沙盘仿真系统与 RS232 控制链路开发。',
      ],
    },
  ],
  projects: [
    {
      title: '晶圆缺陷检测（SP10）',
      subtitle: 'Windows 桌面端 · 多子系统协同',
      description:
        '负责主流程控制、跨进程任务接入、共享内存图像通道、算法调度与结果展示，支撑量产级缺陷分析与数据沉淀。',
      tags: ['C/C++', 'Windows', '共享内存', '分布式处理', 'Klarf', 'CI/CD'],
    },
    {
      title: 'LoRa 协同远程作业系统',
      subtitle: 'Linux + PX30 · 多设备同步',
      description:
        '完成国产化迁移与系统集成，引入 LoRa 与 4G/GPS，构建低时延协同链路与现场数据回传体系。',
      tags: ['Linux', 'PX30', 'LoRa', '4G/GPS', 'Qt', '驱动'],
    },
    {
      title: '微纳芯片 PCR 分析仪',
      subtitle: 'Linux + RK3568 · 快速温控检测',
      description:
        '实现温控、采集、分析与展示全流程，保障设备在医疗检测场景下的效率与稳定性。',
      tags: ['RK3568', 'Linux', 'Qt', '串口', 'USB 摄像头', 'Fast-DDS'],
    },
    {
      title: '车载 BSP 预警系统',
      subtitle: 'Linux + RK3399 · 视觉预警',
      description:
        '基于 V4L2 + OpenCV 的实时目标检测链路，完成多线程队列优化与告警展示。',
      tags: ['RK3399', 'Linux', 'V4L2', 'OpenCV', '多线程'],
    },
    {
      title: '车载激光雷达探测平台',
      subtitle: 'Linux + RK3588 · 点云处理与显示',
      description:
        '搭建千兆网 UDP 点云链路，完成去噪、地面分割、时间同步与压缩处理，支撑研究级实验需求。',
      tags: ['RK3588', 'Linux', 'UDP', '点云', 'OpenGL'],
    },
  ],
  achievements: [
    {
      title: '工业级系统交付经验',
      metric: '20+ 模块',
      description: '长期负责复杂设备的软件主链路，覆盖采集、分析、控制、展示与发布全流程。',
      tags: ['工业检测', '车载系统', '医疗设备'],
    },
    {
      title: '机器人嵌入式融合实践',
      metric: '300m 感知',
      description: '在车载激光雷达实验设备中构建实时点云感知与可视化能力，支持目标探测与状态研判。',
      tags: ['ROS2', '点云', '实时计算'],
    },
    {
      title: '多设备协同与通信能力',
      metric: 'μs 同步',
      description: '在多设备协同系统中实现微秒级同步策略，保障现场作业一致性和可靠性。',
      tags: ['LoRa', '4G/GPS', '时间同步'],
    },
    {
      title: '工程化与稳定性',
      metric: '长期迭代',
      description: '推动版本化交付、CI/CD 与日志诊断体系建设，提升系统可维护性与可追踪性。',
      tags: ['CI/CD', '回归测试', '发布体系'],
    },
  ],
  charms: [
    {
      title: '技术领导力',
      description: '擅长跨角色沟通和任务拆解，在复杂项目中把算法、软件、硬件协同成一个可交付系统。',
      points: ['需求澄清与路线规划', '团队协作推进', '问题闭环与风险控制'],
    },
    {
      title: '工程兴趣与创造力',
      description: '持续关注机器人、边缘计算与智能硬件，喜欢把新技术快速转化为可验证的原型。',
      points: ['机器人底盘与传感器集成', 'ROS2 实验性功能验证', '嵌入式性能调优'],
    },
    {
      title: '个人兴趣',
      description: '热爱技术写作与项目复盘，也关注运动与户外，保持长期学习与执行力。',
      points: ['技术笔记沉淀', '开源工具实践', '跑步与徒步'],
    },
  ],
}
