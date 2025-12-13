$(document).ready(function() {
    // 数据存储
    let config = {
        rules: [],
        groups: [],
        settings: {
            enableRuleGenerator: true,
            overwriteOriginalRules: true
        }
    };

    // 默认配置数据
    const defaultConfig = {
        rules: [
            { name: '🎯 全球直连', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/LocalAreaNetwork.list' },
            { name: '🎯 全球直连', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/UnBan.list' },
            { name: '🛑 广告拦截', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/BanAD.list' },
            { name: '🍃 应用净化', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/BanProgramAD.list' },
            { name: '📢 谷歌FCM', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/GoogleFCM.list' },
            { name: '🎯 全球直连', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/GoogleCN.list' },
            { name: '🤖 国外AI', url: 'https://raw.githubusercontent.com/liandu2024/clash/refs/heads/main/list/ChatGPT.list' },
            { name: '🤖 国外AI', url: 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/Claude/Claude.list' },
            { name: '🤖 cursor.sh', url: 'https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/classical/cursor.list' },
            { name: 'Ⓜ️ 微软云盘', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/OneDrive.list' },
            { name: 'Ⓜ️ 微软服务', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Microsoft.list' },
            { name: '🍎 苹果服务', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Apple.list' },
            { name: '📲 电报消息', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Telegram.list' },
            { name: '🎶 网易音乐', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/NetEaseMusic.list' },
            { name: '🎮 游戏平台', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Epic.list' },
            { name: '📹 油管视频', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/YouTube.list' },
            { name: '🎥 奈飞视频', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Netflix.list' },
            { name: '📺 巴哈姆特', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Bahamut.list' },
            { name: '📺 哔哩哔哩', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Ruleset/Bilibili.list' },
            { name: '🌏 国内媒体', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaMedia.list' },
            { name: '🚀 节点选择', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ProxyGFWlist.list' },
            { name: '🎯 全球直连', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaDomain.list' },
            { name: '🎯 全球直连', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/ChinaCompanyIp.list' },
            { name: '🎯 全球直连', url: 'https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Download.list' },
            { name: '🎯 全球直连', url: '[]GEOIP,CN' },
            { name: '🐟 漏网之鱼', url: '[]FINAL' }
        ],
        groups: [
            { name: '🚀 节点选择', type: 'select', options: '[]♻️ 自动选择`[]🇭🇰 私家节点`[]🇭🇰 私家测速`[]🇭🇰 私家均衡`[]🇭🇰 私家节点0.1x`[]🇭🇰 私家测速0.1x`[]🇭🇰 私家均衡0.1x`[]🇭🇰 香港节点`[]🇨🇳 台湾节点`[]🇸🇬 狮城节点`[]🇯🇵 日本节点`[]🇺🇲 美国节点`[]🇰🇷 韩国节点`[]🚀 手动切换`[]DIRECT' },
            { name: '🚀 手动切换', type: 'select', filter: '.*' },
            { name: '♻️ 自动选择', type: 'url-test', filter: '.*', testUrl: 'http://www.gstatic.com/generate_204', interval: 300, tolerance: 50 },
            { name: '🤖 国外AI', type: 'select', options: '[]🚀 节点选择`[]🚀 手动切换`[]🇺🇲 美国节点`[]🚀 手动切换`[]DIRECT' },
            { name: '🤖 cursor.sh', type: 'select', options: '[]🚀 节点选择`[]♻️ 自动选择`[]🇭🇰 私家节点`[]🇭🇰 私家测速`[]🇭🇰 私家均衡`[]🇭🇰 私家节点0.1x`[]🇭🇰 私家测速0.1x`[]🇭🇰 私家均衡0.1x`[]🇭🇰 香港手动`[]🇭🇰 香港节点`[]🇭🇰 香港测速`[]🇭🇰 香港均衡`[]🇨🇳 台湾节点`[]🇯🇵 日本节点`[]🇺🇲 美国节点`[]🇰🇷 韩国节点`[]🚀 手动切换`[]DIRECT' },
            { name: '📲 电报消息', type: 'select', options: '[]🚀 节点选择`[]♻️ 自动选择`[]🇭🇰 私家节点`[]🇭🇰 私家测速`[]🇭🇰 私家均衡`[]🇭🇰 私家节点0.1x`[]🇭🇰 私家测速0.1x`[]🇭🇰 私家均衡0.1x`[]🇭🇰 香港手动`[]🇭🇰 香港节点`[]🇨🇳 台湾节点`[]🇯🇵 日本节点`[]🇺🇲 美国节点`[]🇰🇷 韩国节点`[]🚀 手动切换`[]DIRECT' },
            { name: '🇭🇰 香港节点', type: 'url-test', filter: '(港|HK|Hong Kong)', testUrl: 'http://www.gstatic.com/generate_204', interval: 300, tolerance: 50 },
            { name: '🇯🇵 日本节点', type: 'url-test', filter: '(日本|川日|东京|大阪|泉日|埼玉|沪日|深日|[^-]日|JP|Japan)', testUrl: 'http://www.gstatic.com/generate_204', interval: 300, tolerance: 50 },
            { name: '🇺🇲 美国节点', type: 'url-test', filter: '(美|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|US|United States)', testUrl: 'http://www.gstatic.com/generate_204', interval: 300, tolerance: 150 }
        ]
    };

    let currentEditingRuleIndex = -1;
    let currentEditingGroupIndex = -1;

    // 初始化
    loadConfig();
    initEventListeners();
    renderRules();
    renderGroups();
    updatePreview();

    // 事件监听器
    function initEventListeners() {
        // Tab切换
        $('.tab-button').click(function() {
            const tab = $(this).data('tab');
            switchTab(tab);
        });

        // 导入/导出按钮
        $('#importBtn').click(() => openModal('importModal'));
        $('#exportBtn').click(exportConfig);

        // 添加规则/分组按钮
        $('#addRuleBtn').click(() => openRuleModal());
        $('#addGroupBtn').click(() => openGroupModal());

        // 浮动按钮
        $('#saveConfig').click(saveConfig);
        $('#clearAll').click(clearAllConfig);
        $('#refreshPreview').click(updatePreview);

        // 模态框表单
        $('#ruleForm').submit(saveRule);
        $('#groupForm').submit(saveGroup);
        $('#executeImport').click(executeImport);

        // 分组类型变化
        $('#groupType').change(function() {
            const type = $(this).val();
            if (type === 'url-test' || type === 'load-balance') {
                $('#urlTestOptions').removeClass('hidden');
            } else {
                $('#urlTestOptions').addClass('hidden');
            }
        });

        // 设置变化
        $('#enableRuleGenerator, #overwriteOriginalRules').change(function() {
            config.settings[this.id] = this.checked;
            saveConfig();
            updatePreview();
        });
    }

    // Tab切换
    function switchTab(tab) {
        $('.tab-button').removeClass('active');
        $(`.tab-button[data-tab="${tab}"]`).addClass('active');
        $('.tab-content').removeClass('active');
        $(`#${tab}`).addClass('active');
    }

    // 模态框操作
    function openModal(modalId) {
        $(`#${modalId}`).removeClass('hidden').addClass('flex');
    }

    function closeModal(modalId) {
        $(`#${modalId}`).removeClass('flex').addClass('hidden');
    }

    // 全局函数，供HTML调用
    window.closeModal = closeModal;

    // 规则管理
    function openRuleModal(index = -1) {
        currentEditingRuleIndex = index;
        if (index >= 0) {
            const rule = config.rules[index];
            $('#ruleName').val(rule.name);
            $('#ruleUrl').val(rule.url);
        } else {
            $('#ruleName').val('');
            $('#ruleUrl').val('');
        }
        openModal('ruleModal');
    }

    function saveRule(e) {
        e.preventDefault();
        const rule = {
            name: $('#ruleName').val(),
            url: $('#ruleUrl').val()
        };

        if (!rule.name || !rule.url) {
            alert('请填写完整的规则信息');
            return;
        }

        if (currentEditingRuleIndex >= 0) {
            config.rules[currentEditingRuleIndex] = rule;
        } else {
            config.rules.push(rule);
        }

        renderRules();
        closeModal('ruleModal');
        saveConfig();
        updatePreview();
    }

    function deleteRule(index) {
        if (confirm('确定要删除这条规则吗？')) {
            config.rules.splice(index, 1);
            renderRules();
            saveConfig();
            updatePreview();
        }
    }

    function renderRules() {
        const container = $('#rulesList');
        container.empty();

        if (config.rules.length === 0) {
            container.html(`
                <div class="text-center py-8 text-gray-500">
                    <i class="fas fa-inbox text-4xl mb-4"></i>
                    <p>暂无规则配置</p>
                    <p class="text-sm">点击上方"添加规则"按钮开始配置</p>
                </div>
            `);
            return;
        }

        config.rules.forEach((rule, index) => {
            const ruleElement = $(`
                <div class="rule-item bg-white p-4 rounded-lg shadow-sm">
                    <div class="flex justify-between items-center">
                        <div class="flex-1">
                            <div class="flex items-center space-x-3">
                                <span class="text-lg font-medium text-gray-800">${rule.name}</span>
                                <span class="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">规则</span>
                            </div>
                            <p class="text-sm text-gray-600 mt-1 break-all">${rule.url}</p>
                        </div>
                        <div class="flex space-x-2 ml-4">
                            <button onclick="editRule(${index})" class="text-blue-500 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-all">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button onclick="deleteRule(${index})" class="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-all">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `);
            container.append(ruleElement);
        });
    }

    // 全局函数
    window.editRule = (index) => openRuleModal(index);
    window.deleteRule = deleteRule;

    // 分组管理
    function openGroupModal(index = -1) {
        currentEditingGroupIndex = index;
        if (index >= 0) {
            const group = config.groups[index];
            $('#groupName').val(group.name);
            $('#groupType').val(group.type);
            $('#groupFilter').val(group.filter || '');
            $('#testUrl').val(group.testUrl || 'http://www.gstatic.com/generate_204');
            $('#testInterval').val(group.interval || 300);
            $('#tolerance').val(group.tolerance || 50);
            $('#groupOptions').val(group.options || '');
            
            if (group.type === 'url-test' || group.type === 'load-balance') {
                $('#urlTestOptions').removeClass('hidden');
            } else {
                $('#urlTestOptions').addClass('hidden');
            }
        } else {
            $('#groupName').val('');
            $('#groupType').val('select');
            $('#groupFilter').val('');
            $('#testUrl').val('http://www.gstatic.com/generate_204');
            $('#testInterval').val(300);
            $('#tolerance').val(50);
            $('#groupOptions').val('');
            $('#urlTestOptions').addClass('hidden');
        }
        openModal('groupModal');
    }

    function saveGroup(e) {
        e.preventDefault();
        const group = {
            name: $('#groupName').val(),
            type: $('#groupType').val(),
            filter: $('#groupFilter').val(),
            options: $('#groupOptions').val()
        };

        if (group.type === 'url-test' || group.type === 'load-balance') {
            group.testUrl = $('#testUrl').val();
            group.interval = parseInt($('#testInterval').val());
            group.tolerance = parseInt($('#tolerance').val());
        }

        if (!group.name) {
            alert('请填写分组名称');
            return;
        }

        if (currentEditingGroupIndex >= 0) {
            config.groups[currentEditingGroupIndex] = group;
        } else {
            config.groups.push(group);
        }

        renderGroups();
        closeModal('groupModal');
        saveConfig();
        updatePreview();
    }

    function deleteGroup(index) {
        if (confirm('确定要删除这个分组吗？')) {
            config.groups.splice(index, 1);
            renderGroups();
            saveConfig();
            updatePreview();
        }
    }

    function renderGroups() {
        const container = $('#groupsList');
        container.empty();

        if (config.groups.length === 0) {
            container.html(`
                <div class="text-center py-8 text-gray-500">
                    <i class="fas fa-inbox text-4xl mb-4"></i>
                    <p>暂无分组配置</p>
                    <p class="text-sm">点击上方"添加分组"按钮开始配置</p>
                </div>
            `);
            return;
        }

        config.groups.forEach((group, index) => {
            let typeText = '手动选择';
            let typeColor = 'bg-green-100 text-green-800';
            
            if (group.type === 'url-test') {
                typeText = '延迟测试';
                typeColor = 'bg-blue-100 text-blue-800';
            } else if (group.type === 'load-balance') {
                typeText = '负载均衡';
                typeColor = 'bg-purple-100 text-purple-800';
            }

            const groupElement = $(`
                <div class="group-item bg-white p-4 rounded-lg shadow-sm">
                    <div class="flex justify-between items-center">
                        <div class="flex-1">
                            <div class="flex items-center space-x-3">
                                <span class="text-lg font-medium text-gray-800">${group.name}</span>
                                <span class="text-xs px-2 py-1 ${typeColor} rounded-full">${typeText}</span>
                            </div>
                            <div class="mt-2 space-y-1">
                                ${group.filter ? `<p class="text-sm text-gray-600"><span class="font-medium">筛选:</span> ${group.filter}</p>` : ''}
                                ${group.testUrl ? `<p class="text-sm text-gray-600"><span class="font-medium">测试:</span> ${group.testUrl} (${group.interval}s, ±${group.tolerance}ms)</p>` : ''}
                                ${group.options ? `<p class="text-sm text-gray-600 truncate"><span class="font-medium">选项:</span> ${group.options}</p>` : ''}
                            </div>
                        </div>
                        <div class="flex space-x-2 ml-4">
                            <button onclick="editGroup(${index})" class="text-blue-500 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50 transition-all">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button onclick="deleteGroup(${index})" class="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-all">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `);
            container.append(groupElement);
        });
    }

    // 全局函数
    window.editGroup = (index) => openGroupModal(index);
    window.deleteGroup = deleteGroup;

    // 配置管理
    function loadConfig() {
        const saved = localStorage.getItem('subconverter-config');
        if (saved) {
            try {
                const savedConfig = JSON.parse(saved);
                // 确保配置结构完整
                config = {
                    rules: savedConfig.rules || [],
                    groups: savedConfig.groups || [],
                    settings: {
                        enableRuleGenerator: savedConfig.settings?.enableRuleGenerator !== undefined ? savedConfig.settings.enableRuleGenerator : true,
                        overwriteOriginalRules: savedConfig.settings?.overwriteOriginalRules !== undefined ? savedConfig.settings.overwriteOriginalRules : true
                    }
                };
            } catch (e) {
                console.error('加载配置失败:', e);
                config = JSON.parse(JSON.stringify(defaultConfig));
            }
        } else {
            config = JSON.parse(JSON.stringify(defaultConfig));
        }

        // 更新设置UI
        $('#enableRuleGenerator').prop('checked', config.settings.enableRuleGenerator);
        $('#overwriteOriginalRules').prop('checked', config.settings.overwriteOriginalRules);
    }

    function saveConfig() {
        localStorage.setItem('subconverter-config', JSON.stringify(config));
        showNotification('配置已保存', 'success');
    }

    function clearAllConfig() {
        if (confirm('确定要清空所有配置吗？此操作不可恢复！')) {
            config = {
                rules: [],
                groups: [],
                settings: {
                    enableRuleGenerator: true,
                    overwriteOriginalRules: true
                }
            };
            renderRules();
            renderGroups();
            updatePreview();
            saveConfig();
            showNotification('配置已清空', 'info');
        }
    }

    // 导入导出
    function exportConfig() {
        const configText = generateConfigText();
        
        // 创建下载链接
        const blob = new Blob([configText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'subconverter-config.ini';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification('配置已导出', 'success');
    }

    function executeImport() {
        const importText = $('#importText').val().trim();
        if (!importText) {
            alert('请粘贴配置文本');
            return;
        }

        try {
            parseConfigText(importText);
            renderRules();
            renderGroups();
            updatePreview();
            saveConfig();
            closeModal('importModal');
            showNotification('配置导入成功', 'success');
            $('#importText').val('');
        } catch (e) {
            alert('配置文本格式错误: ' + e.message);
        }
    }

    function parseConfigText(text) {
        const lines = text.split('\n');
        const newRules = [];
        const newGroups = [];
        const newSettings = { ...config.settings };

        for (let line of lines) {
            line = line.trim();
            if (!line || line.startsWith(';')) continue;

            if (line.startsWith('ruleset=')) {
                const parts = line.substring(8).split(',');
                if (parts.length >= 2) {
                    newRules.push({
                        name: parts[0],
                        url: parts[1]
                    });
                }
            } else if (line.startsWith('custom_proxy_group=')) {
                const groupStr = line.substring(19);
                const parts = groupStr.split('`');
                if (parts.length >= 2) {
                    const name = parts[0];
                    const type = parts[1];
                    
                    const group = { name, type };
                    
                    if (parts.length > 2) {
                        if (type === 'url-test' || type === 'load-balance') {
                            group.filter = parts[2] || '';
                            if (parts.length > 3) group.testUrl = parts[3];
                            if (parts.length > 4) group.interval = parseInt(parts[4]) || 300;
                            if (parts.length > 6) group.tolerance = parseInt(parts[6]) || 50;
                        } else {
                            group.options = parts.slice(2).join('`');
                        }
                    }
                    
                    newGroups.push(group);
                }
            } else if (line.startsWith('enable_rule_generator=')) {
                newSettings.enableRuleGenerator = line.substring(22) === 'true';
            } else if (line.startsWith('overwrite_original_rules=')) {
                newSettings.overwriteOriginalRules = line.substring(25) === 'true';
            }
        }

        config.rules = newRules;
        config.groups = newGroups;
        config.settings = newSettings;

        // 更新设置UI
        $('#enableRuleGenerator').prop('checked', config.settings.enableRuleGenerator);
        $('#overwriteOriginalRules').prop('checked', config.settings.overwriteOriginalRules);
    }

    function generateConfigText() {
        let text = '[custom]\n';
        text += ';设置规则标志位\n';

        // 生成规则
        config.rules.forEach(rule => {
            text += `ruleset=${rule.name},${rule.url}\n`;
        });

        text += ';设置规则标志位\n\n';
        text += ';设置分组标志位\n';

        // 生成分组
        config.groups.forEach(group => {
            let line = `custom_proxy_group=${group.name}\`${group.type}`;
            
            if (group.type === 'url-test' || group.type === 'load-balance') {
                if (group.filter) line += `\`${group.filter}`;
                if (group.testUrl) line += `\`${group.testUrl}`;
                if (group.interval) line += `\`${group.interval}`;
                if (group.tolerance) line += `\`\`${group.tolerance}`;
            } else if (group.options) {
                line += `\`${group.options}`;
            }
            
            text += line + '\n';
        });

        text += ';设置分组标志位\n\n';

        // 生成设置
        text += `enable_rule_generator=${config.settings.enableRuleGenerator}\n`;
        text += `overwrite_original_rules=${config.settings.overwriteOriginalRules}\n`;

        return text;
    }

    function updatePreview() {
        const configText = generateConfigText();
        $('#configPreview').text(configText);
    }

    // 通知系统
    function showNotification(message, type = 'info') {
        const colors = {
            success: 'bg-green-500',
            error: 'bg-red-500',
            info: 'bg-blue-500',
            warning: 'bg-yellow-500'
        };

        const notification = $(`
            <div class="fixed top-4 right-4 z-50 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : type === 'warning' ? 'exclamation' : 'info'}-circle"></i>
                    <span>${message}</span>
                </div>
            </div>
        `);

        $('body').append(notification);
        
        setTimeout(() => {
            notification.removeClass('translate-x-full');
        }, 100);

        setTimeout(() => {
            notification.addClass('translate-x-full');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
});