var content = "<h2 id='40288287609aff0201609b1d012b000b' class=' title_2'>一、项目简介</h2>\n" +
	"<h2 id='40288287609aff0201609b1d2f9f000c' class=' title_2'>二、实验流程</h2>\n" +
	"<p class='p'>16S rRNA位于原核细胞核糖体小亚基上，包括10个保守区域（Conserved Regions）和9个高变区域（Hypervariable Regions），\n" +
	"    其中保守区在细菌间差异不大，高变区具有属或种的特异性，随亲缘关系不同而有一定的差异。因此，16S rDNA可以做作为揭示生物物种的特征核酸序列，被认为是最适于细菌系统发育和分类鉴定的指标。16S rDNA扩增子测序（16S\n" +
	"    rDNAAmplicon Sequencing），通常是选择某个或某几个变异区域，利用保守区设计通用引物进行PCR扩增，然后对高变区进行测序分析和菌种鉴定，16S\n" +
	"    rDNA扩增子测序技术已成为研究环境样品中微生物群落组成结构的重要手段。</p>\n" +
	"\n" +
	"<div class='imgs_single'><img src='data\\img\\liuchengtu.png' alt='16S rDNA建库测序流程图' title='16S rDNA建库测序流程图'>\n" +
	"    <p class='img_title'>图1 16S rDNA建库测序流程图</p></div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\img\\liuchengtu.png'>data\\img\\liuchengtu.png</option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h2 id='40288287609aff0201609b1d5d31000d' class=' title_2'>三、 信息分析流程</h2>\n" +
	"<p class='p'>测序得到的原始数据（Raw Data），存在一定比例的干扰数据（Dirty Data），为了使信息分析的结果更加准确、可靠，首先对原始数据进行拼接、过滤，得到有效数据（Clean\n" +
	"    Data）。然后基于有效数据进行OTUs（Operational Taxonomic Units ）聚类和物种分类分析。\n" +
	"    根据OTUs聚类结果，一方面对每个OTU的代表序列做物种注释，得到对应的物种信息和基于物种的丰度分布情况。同时，对OTUs进行丰度、Alpha多样性计算、Venn图和花瓣图等分析，以得到样品内物种丰富度和均匀度信息、不同样品或分组间的共有和特有OTUs信息等。另一方面，可以对OTUs进行多序列比对并构建系统发生树，并进一步得到不同样品和分组的群落结构差异，通过PCoA和PCA、NMDS等降维图和样品聚类树进行展示。为进一步挖掘分组样品间的群落结构差异，选用T-test、MetaStat、LEfSe、Anosim和MRPP等统计分析方法对分组样品的物种组成和群落结果进行差异显著性检验。同时，\n" +
	"    也可结合环境因素进行CCA/RDA分析和多样性指数与环境因子的相关性分析，得到显著影响组间群落变化的环境影响因子。获得下机数据后的信息分析流程如下图：</p>\n" +
	"\n" +
	"<div class='imgs_single'><img src='data\\img\\标准信息分析流程图.png' alt='16S rDNA标准信息分析流程图' title='16S rDNA标准信息分析流程图'>\n" +
	"    <p class='img_title'>图2 16S rDNA标准信息分析流程图</p>\n" +
	"    <div class='annotation'><p class='annotation-title'> 注: </p>\n" +
	"        <ul class='annotation-content'>\n" +
	"            <li>样品数小于3个，不能进行Beta\n" +
	"                Diversity分析，统计分析和环境因子关联分析；若无分组信息或者生物学重复少于3个，则不能进行统计分析和环境因子关联分析；环境因子关联分析需要客户提供环境因子数据，不包含在标准分析内容中。\n" +
	"            </li>\n" +
	"        </ul>\n" +
	"    </div>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\img\\标准信息分析流程图.png'>data\\img\\标准信息分析流程图.png</option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h2 id='40288287609aff0201609b1d88b4000e' class=' title_2'>四、项目结果展示及说明</h2>\n" +
	"<h3 id='40288287609b998501609b9f58a00002' class=' title_3'>1 测序数据处理</h3><h4 id='40288287609b998501609b9f8e3e0003'\n" +
	"                                                                            class=' title_4'>1.1 原始测序数据</h4>\n" +
	"<p class='p'> 高通量测序（Illumina HiSeq）得到的原始图像数据经CASAVA碱基识别（Base calling）分析转化为原始测序序列（sequenced\n" +
	"    Reads），我们称之为RawData或RawReads，结果以FASTQ（简称为fq）文件格式存储。FASTQ是一种存储了生物序列（通常是核酸序列）以及相应的质量评价的文本格式，FASTQ以ASCII编码，为现行高通量测序的标准格式。\n" +
	"\n" +
	"    FASTQ格式的序列一般包含四行，包含Reads及对应的质量信息（quality values）。在FASTQ格式文件中，每个碱基质量字符对应的ASCII码值减去33，即为该碱基的测序质量得分Q（Phred quality\n" +
	"    score）。不同Q代表不同的碱基测序错误率，如果测序错误率用e表示，计算Q 的公式为：\n" +
	"\n" +
	"    QPhred = - 10 * log10(e)\n" +
	"\n" +
	"    根据以上公式，QPhred 值为20和30分别表示碱基测序错误率为1.0%和0.1%。</p>\n" +
	"\n" +
	"<div class='imgs_single'><img src='data\\img\\FASTQ文件格式示例.png' alt='FASTQ文件格式示例' title='FASTQ文件格式示例'>\n" +
	"    <p class='img_title'>图3 FASTQ文件格式示例</p>\n" +
	"    <div class='annotation'><p class='annotation-title'> 注: </p>\n" +
	"        <ul class='annotation-content'>\n" +
	"            <li>第一行由'@'开始，包含序列的描述信息；第二行是碱基序列信息；第三行由'+'开始，后面也可以跟序列描述信息；第四行是序列对应的测序质量信息，字符数应跟第二行序列字符数相等。</li>\n" +
	"        </ul>\n" +
	"    </div>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\img\\FASTQ文件格式示例.png'>data\\img\\FASTQ文件格式示例.png</option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<div class='table-component'><p class='table-title'>表1 原始下机数据统计表</p>\n" +
	"    <table class='table table-hover'>\n" +
	"        <tr>\n" +
	"            <td>#Sample_name</td>\n" +
	"            <td>Total_reads</td>\n" +
	"            <td>Combined_reads</td>\n" +
	"            <td>Uncombined_reads</td>\n" +
	"            <td>Percent_combined(%)</td>\n" +
	"            <td>Combined_base(bp)</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>16_HYC</td>\n" +
	"            <td>73,312</td>\n" +
	"            <td>70,089</td>\n" +
	"            <td>3,223</td>\n" +
	"            <td>95.60</td>\n" +
	"            <td>28,518,485</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>18_HYC</td>\n" +
	"            <td>77,559</td>\n" +
	"            <td>73,990</td>\n" +
	"            <td>3,569</td>\n" +
	"            <td>95.40</td>\n" +
	"            <td>30,341,188</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>19_HYC</td>\n" +
	"            <td>65,869</td>\n" +
	"            <td>62,808</td>\n" +
	"            <td>3,061</td>\n" +
	"            <td>95.35</td>\n" +
	"            <td>25,790,829</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>1_ZTP</td>\n" +
	"            <td>62,511</td>\n" +
	"            <td>59,319</td>\n" +
	"            <td>3,192</td>\n" +
	"            <td>94.89</td>\n" +
	"            <td>24,269,516</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>20_HYC</td>\n" +
	"            <td>68,660</td>\n" +
	"            <td>64,832</td>\n" +
	"            <td>3,828</td>\n" +
	"            <td>94.42</td>\n" +
	"            <td>27,212,045</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>22_HYC</td>\n" +
	"            <td>74,128</td>\n" +
	"            <td>52,819</td>\n" +
	"            <td>21,309</td>\n" +
	"            <td>71.25</td>\n" +
	"            <td>22,149,465</td>\n" +
	"        </tr>\n" +
	"    </table>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\00.rawdata\\assemble_stat.xls'>data\\00.rawdata\\assemble_stat.xls</option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h4 id='40288287609b998501609b9fba390004' class=' title_4'>1.2 Clean Data</h4>\n" +
	"<p class='p'> 测序得到的raw data，含有接头和barcode序列，信息分析前需要去除这些reads； 然后使用FLASH (Magoč & Salzberg, 2011)\n" +
	"    软件将有overlap的reads进行拼接，使用QIIME (Caporaso et al., 2010) 对拼接数据进行过滤，过滤掉含N较多或者低质量序列，最后进行嵌合体过滤，得到可用于后续分析的有效数据，即Effective\n" +
	"    Tags，统计信息如下：\n" +
	"\n" +
	"    过滤得到的数据统计信息见下表：</p>\n" +
	"\n" +
	"<div class='table-component'><p class='table-title'>表2 Clean tag数据统计表</p>\n" +
	"    <table class='table table-hover'>\n" +
	"        <tr>\n" +
	"            <td>#Sample_name</td>\n" +
	"            <td>Raw_PE</td>\n" +
	"            <td>Combined</td>\n" +
	"            <td>Qualified</td>\n" +
	"            <td>Nochime</td>\n" +
	"            <td>Base(nt)</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>16_HYC</td>\n" +
	"            <td>73,312</td>\n" +
	"            <td>70,089</td>\n" +
	"            <td>66,074</td>\n" +
	"            <td>62,009</td>\n" +
	"            <td>25,217,875</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>18_HYC</td>\n" +
	"            <td>77,559</td>\n" +
	"            <td>73,990</td>\n" +
	"            <td>69,723</td>\n" +
	"            <td>68,410</td>\n" +
	"            <td>28,027,557</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>19_HYC</td>\n" +
	"            <td>65,869</td>\n" +
	"            <td>62,808</td>\n" +
	"            <td>58,838</td>\n" +
	"            <td>58,194</td>\n" +
	"            <td>23,874,142</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>1_ZTP</td>\n" +
	"            <td>62,511</td>\n" +
	"            <td>59,319</td>\n" +
	"            <td>55,836</td>\n" +
	"            <td>55,643</td>\n" +
	"            <td>22,742,915</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>20_HYC</td>\n" +
	"            <td>68,660</td>\n" +
	"            <td>64,832</td>\n" +
	"            <td>59,233</td>\n" +
	"            <td>58,491</td>\n" +
	"            <td>24,516,636</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>22_HYC</td>\n" +
	"            <td>74,128</td>\n" +
	"            <td>52,819</td>\n" +
	"            <td>47,674</td>\n" +
	"            <td>46,424</td>\n" +
	"            <td>19,433,111</td>\n" +
	"        </tr>\n" +
	"    </table>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\01.CleanData\\QCstat.xls'>data\\01.CleanData\\QCstat.xls</option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h3 id='40288287609b998501609ba00e420005' class=' title_3'>2 OUT分析和物种注释</h3><h4 id='40288287609b998501609ba045ac0006'\n" +
	"                                                                                class=' title_4'>2.1 OUT分析和物种注释</h4>\n" +
	"<p class='p'> 为了研究样品的物种组成多样性，使用uparse (Edgar, 2013) 软件对所有样品的Effective Tags进行聚类，以97%的一致性（Identity）将序列聚类成为OTUs（Operational\n" +
	"    Taxonomic Units），然后对OTUs的代表序列进行物种注释。\n" +
	"\n" +
	"    为了方便快速全面的了解各样品的OTU聚类情况和注释情况，对各样品的OTU聚类和注释结果进行了综合统计，结果如下: </p>\n" +
	"\n" +
	"<div class='table-component'><p class='table-title'>表3 Tags及OTUs数目统计表</p>\n" +
	"    <table class='table table-hover'>\n" +
	"        <tr>\n" +
	"            <td>Sample</td>\n" +
	"            <td>Total_tags</td>\n" +
	"            <td>Taxon_tags</td>\n" +
	"            <td>Unclassified_tags</td>\n" +
	"            <td>Unique_tags</td>\n" +
	"            <td>OTUs</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>16_HYC</td>\n" +
	"            <td>62009</td>\n" +
	"            <td>61467</td>\n" +
	"            <td>0</td>\n" +
	"            <td>542</td>\n" +
	"            <td>148</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>18_HYC</td>\n" +
	"            <td>68410</td>\n" +
	"            <td>67154</td>\n" +
	"            <td>0</td>\n" +
	"            <td>1256</td>\n" +
	"            <td>169</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>19_HYC</td>\n" +
	"            <td>58194</td>\n" +
	"            <td>57581</td>\n" +
	"            <td>0</td>\n" +
	"            <td>613</td>\n" +
	"            <td>146</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>1_ZTP</td>\n" +
	"            <td>55643</td>\n" +
	"            <td>55348</td>\n" +
	"            <td>0</td>\n" +
	"            <td>295</td>\n" +
	"            <td>113</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>20_HYC</td>\n" +
	"            <td>58491</td>\n" +
	"            <td>57931</td>\n" +
	"            <td>0</td>\n" +
	"            <td>560</td>\n" +
	"            <td>124</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>22_HYC</td>\n" +
	"            <td>46424</td>\n" +
	"            <td>44874</td>\n" +
	"            <td>0</td>\n" +
	"            <td>1550</td>\n" +
	"            <td>386</td>\n" +
	"        </tr>\n" +
	"    </table>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_stat\\Sample_Tag_OTU_stat.xls'>\n" +
	"        data\\02.OTUanalysis\\taxa_stat\\Sample_Tag_OTU_stat.xls\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<div class='imgs_single'><img src='data\\img\\各样品的OTUs聚类和注释情况统计.png' alt='各样品的OTUs聚类和注释情况统计' title='各样品的OTUs聚类和注释情况统计'>\n" +
	"    <p class='img_title'>图4 各样品的OTUs聚类和注释情况统计</p>\n" +
	"    <div class='annotation'><p class='annotation-title'> 注: </p>\n" +
	"        <ul class='annotation-content'>\n" +
	"            <li>横坐标是样品名；上方纵坐标(Tags Number)是Tags数目；Total Tags（橙色）： 指每个样品的总的Tags数目（等同于Effective\n" +
	"                Tags，每个样品用于OTU聚类等后续分析的有效数据）；Taxon Tags（蓝色）：指用于构建OTUs并且获得注释信息的Tags数目； Unique\n" +
	"                Tags（绿色）：指频数为1，并且无法被聚类到OTUs的Tags数目（无法聚类到OTUs的序列将不用于后续分析）；Unclassified Tags（粉色）指没有获得注释信息的Tags数目；\n" +
	"                下方纵坐标(OTUs Number)是OTUs的数目， OTUs（紫色）：指每个样品得到的OTUs数目。\n" +
	"            </li>\n" +
	"        </ul>\n" +
	"    </div>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\img\\各样品的OTUs聚类和注释情况统计.png'>data\\img\\各样品的OTUs聚类和注释情况统计.png</option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<p class='p'>另外，根据物种注释情况，\n" +
	"    统计每个样品注释到各分类水平(界Kingdom{k}、门Phylum{p}、纲Class{c}、目Order{o}、科Family{f}、属Genus{g}、种Species{s})上的序列数目，由此可以了解各分类水平的整体注释情况，结果如下：</p>\n" +
	"\n" +
	"<div class='table-component'><p class='table-title'>表4 各分类水平的Tags数据分布统计表</p>\n" +
	"    <table class='table table-hover'>\n" +
	"        <tr>\n" +
	"            <td>Classification</td>\n" +
	"            <td>16_HYC</td>\n" +
	"            <td>18_HYC</td>\n" +
	"            <td>19_HYC</td>\n" +
	"            <td>1_ZTP</td>\n" +
	"            <td>20_HYC</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>k</td>\n" +
	"            <td>61467</td>\n" +
	"            <td>67153</td>\n" +
	"            <td>57581</td>\n" +
	"            <td>55348</td>\n" +
	"            <td>57931</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>p</td>\n" +
	"            <td>61467</td>\n" +
	"            <td>67153</td>\n" +
	"            <td>57581</td>\n" +
	"            <td>55348</td>\n" +
	"            <td>57931</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>c</td>\n" +
	"            <td>61467</td>\n" +
	"            <td>67153</td>\n" +
	"            <td>57581</td>\n" +
	"            <td>55348</td>\n" +
	"            <td>57931</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>o</td>\n" +
	"            <td>61466</td>\n" +
	"            <td>67144</td>\n" +
	"            <td>57579</td>\n" +
	"            <td>55344</td>\n" +
	"            <td>57928</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>f</td>\n" +
	"            <td>59645</td>\n" +
	"            <td>63186</td>\n" +
	"            <td>56560</td>\n" +
	"            <td>55330</td>\n" +
	"            <td>57873</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>g</td>\n" +
	"            <td>10048</td>\n" +
	"            <td>27963</td>\n" +
	"            <td>20832</td>\n" +
	"            <td>50194</td>\n" +
	"            <td>25636</td>\n" +
	"        </tr>\n" +
	"    </table>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_stat\\kpcofgs_Tag_stat_classify.xls'>\n" +
	"        data\\02.OTUanalysis\\taxa_stat\\kpcofgs_Tag_stat_classify.xls\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<div class='imgs_single'><img src='data\\02.OTUanalysis\\taxa_stat\\AllSamples.kpcofgs_Tag_stat_classify.png'\n" +
	"                              alt='各样品在各分类水平上的序列数目' title='各样品在各分类水平上的序列数目'>\n" +
	"    <p class='img_title'>图5 各样品在各分类水平上的序列数目</p></div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_stat\\AllSamples.kpcofgs_Tag_stat_classify.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_stat\\AllSamples.kpcofgs_Tag_stat_classify.png\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h4 id='40288287609b998501609ba07bbe0007' class=' title_4'>2.2 物种分布情况</h4>\n" +
	"<p class='p'> 物种相对丰度展示\n" +
	"\n" +
	"    根据物种注释结果， 选取每个样品在各分类水平（Phylum、Class、Order、Family、Genus）上最大丰度排名前10的物种，生成物种相对丰度柱形累加图，\n" +
	"    以便直观查看各样品在不同分类水平上，相对丰度较高的物种及其比例。以门水平物种相对丰度柱形图为例展示如下 </p>\n" +
	"\n" +
	"data\\02.OTUanalysis\\top10\\*AllSamples.kpcofgs_top10.png文件路径输入有误！！！data\\02.OTUanalysis\\top10\\*AllSamples.kpcofgs_top10.png文件路径输入有误！！！\n" +
	"<p class='p'> 物种丰度聚类热图\n" +
	"\n" +
	"    根据所有样品在属水平的物种注释及丰度信息，选取丰度排名前35的属，根据其在每个样品中的丰度信息， 从物种和样品两个层面进行聚类，绘制成热图，便于发现哪些物种在哪些样品中聚集较多或含量较低。结果展示见： </p>\n" +
	"\n" +
	"<div class='imgs_single'><img src='data\\02.OTUanalysis\\taxa_heatmap\\cluster\\cluster.taxa.png' alt='物种丰度聚类图'\n" +
	"                              title='物种丰度聚类图'>\n" +
	"    <p class='img_title'>图7 物种丰度聚类图</p>\n" +
	"    <div class='annotation'><p class='annotation-title'> 注: </p>\n" +
	"        <ul class='annotation-content'>\n" +
	"            <li>\n" +
	"                纵向为样品信息，横向为物种注释信息，图中左侧的聚类树为物种聚类树；上方的聚类树为样品组间的聚类树；中间热图对应的值为每一行物种相对丰度经过标准化处理后得到的Z值，即一个样品在某个分类上的Z值为样品在该分类上的相对丰度和所有样品在该分类的平均相对丰度的差除以所有样品在该分类上的标准差所得到的值。\n" +
	"            </li>\n" +
	"        </ul>\n" +
	"    </div>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_heatmap\\cluster\\cluster.taxa.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_heatmap\\cluster\\cluster.taxa.png\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h4 id='40288287609b998501609ba0a7700008' class=' title_4'>2.3 物种分类树分析</h4>\n" +
	"<p class='p'> 特定物种分类树\n" +
	"\n" +
	"    对每个样品的物种分类结果，筛选特别关注的物种（默认选择最大相对丰度前10的属）进行物种分类树统计并进行画图展示，其中单个样品的物种分类树见下第一张图（点击图片显示高清大图）。多个样品的物种分类树见下第二张图。 </p>\n" +
	"\n" +
	"<div class='imgs_more'>\n" +
	"    <div class='imgsBox'>\n" +
	"        <div class='swiper-container gallery-top'>\n" +
	"            <div class='swiper-wrapper'><img class='swiper-slide'\n" +
	"                                             src='data\\02.OTUanalysis\\taxa_tree\\16_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\18_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\19_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\1_ZTP.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\20_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\22_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\23_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\28_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\29_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\2_ZTP.taxa_tree.png'></div>\n" +
	"            <div class='swiper-button-next swiper-button-white'></div>\n" +
	"            <div class='swiper-button-prev swiper-button-white'></div>\n" +
	"        </div>\n" +
	"        <div class='swiper-container gallery-thumbs '>\n" +
	"            <div class='swiper-wrapper'><img class='swiper-slide'\n" +
	"                                             src='data\\02.OTUanalysis\\taxa_tree\\16_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\18_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\19_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\1_ZTP.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\20_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\22_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\23_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\28_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\29_HYC.taxa_tree.png'><img\n" +
	"                    class='swiper-slide' src='data\\02.OTUanalysis\\taxa_tree\\2_ZTP.taxa_tree.png'></div>\n" +
	"        </div>\n" +
	"    </div>\n" +
	"    <p class='img_title'>单样品这种特定物种分类树</p>\n" +
	"    <div class='annotation'><p class='annotation-title'> 注: </p>\n" +
	"        <ul class='annotation-content'>\n" +
	"            <li>\n" +
	"                不同颜色的圆圈表示不同的分类水平，对应左侧图例；圆圈的大小代表该分类的相对丰度大小；分类名下方的两个数字均表示相对丰度百分率，前者表示该分类占该样品中所有分类物种的百分率，后者则表示该分类占该样品所选取的分类物种中的百分率。红色字体的分类表示在该样品中不存在该分类注释，但是存在于其他分析样品中。\n" +
	"            </li>\n" +
	"        </ul>\n" +
	"    </div>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_tree\\16_HYC.taxa_tree.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_tree\\16_HYC.taxa_tree.png\n" +
	"    </option>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_tree\\18_HYC.taxa_tree.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_tree\\18_HYC.taxa_tree.png\n" +
	"    </option>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_tree\\19_HYC.taxa_tree.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_tree\\19_HYC.taxa_tree.png\n" +
	"    </option>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_tree\\1_ZTP.taxa_tree.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_tree\\1_ZTP.taxa_tree.png\n" +
	"    </option>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_tree\\20_HYC.taxa_tree.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_tree\\20_HYC.taxa_tree.png\n" +
	"    </option>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_tree\\22_HYC.taxa_tree.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_tree\\22_HYC.taxa_tree.png\n" +
	"    </option>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_tree\\23_HYC.taxa_tree.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_tree\\23_HYC.taxa_tree.png\n" +
	"    </option>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_tree\\28_HYC.taxa_tree.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_tree\\28_HYC.taxa_tree.png\n" +
	"    </option>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_tree\\29_HYC.taxa_tree.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_tree\\29_HYC.taxa_tree.png\n" +
	"    </option>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_tree\\2_ZTP.taxa_tree.png'>\n" +
	"        data\\02.OTUanalysis\\taxa_tree\\2_ZTP.taxa_tree.png\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<div class='imgs_single'><img src='data\\02.OTUanalysis\\taxa_tree\\all_taxa.png' alt='多样品特定物种分类树' title='多样品特定物种分类树'>\n" +
	"    <p class='img_title'>图9 多样品特定物种分类树</p>\n" +
	"    <div class='annotation'><p class='annotation-title'> 注: </p>\n" +
	"        <ul class='annotation-content'>\n" +
	"            <li>\n" +
	"                圆圈中不同颜色的扇形表示不同的样品，对应左侧图例；扇形的大小表示该样品在该分类上相对丰度的比例大小；分类名下方的数字表示所有样品在该分类上的平均相对丰度百分率，有两个数字，前者表示占所有物种的百分率，后者表示占所选取物种的百分率。\n" +
	"            </li>\n" +
	"        </ul>\n" +
	"    </div>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\02.OTUanalysis\\taxa_tree\\all_taxa.png'>data\\02.OTUanalysis\\taxa_tree\\all_taxa.png</option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<p class='p'> 物种注释结果KRONA展示\n" +
	"\n" +
	"    使用KRONA软件 (Ondov, Bergman, & Phillippy, 2011) 对物种注释结果进行可视化展示，圆圈从内到外依次代表不同的分类级别，扇形的大小代表不同OTU注释结果的相对比例，\n" +
	"    更多详细的信息请参考KRONA展示结果详解。 示例图如下所示: </p>\n" +
	"\n" +
	"文件路径输入有误！！！<h3 id='40288287609b998501609ba0fc080009' class=' title_3'>3 样品复杂度分析（Alpha Diversity）</h3>\n" +
	"<p class='p'>Alpha Diversity用于分析样品内（Within-community）的微生物群落多样性，通过单样本的多样性分析（Alpha 多样性）可以反映样品内的微生物群落的丰富度和多样性，\n" +
	"    包括用物种累积曲线、物种多样性曲线和一系列统计学分析指数来评估各样品中微生物群落的物种丰富度和多样性的差异。</p>\n" +
	"<h4 id='40288287609b998501609ba1b718000b' class=' title_4'>3.1 Alpha Diversity指数表格</h4>\n" +
	"<p class='p'>一般来说，在97%以上的序列一致性下聚类成为一个OTU的序列被认为可能是源自于同一个种（Species Boundary）的序列。因此，对不同样品在97%一致性阈值下的Alpha Diversity\n" +
	"    分析指数进行统计。结果如下：</p>\n" +
	"\n" +
	"<div class='table-component'><p class='table-title'>表5 Alpha Indices统计表</p>\n" +
	"    <table class='table table-hover'>\n" +
	"        <tr>\n" +
	"            <td>-</td>\n" +
	"            <td>PD_whole_tree</td>\n" +
	"            <td>observed_species</td>\n" +
	"            <td>shannon</td>\n" +
	"            <td>simpson</td>\n" +
	"            <td>ace</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>16_HYC</td>\n" +
	"            <td>8.55452</td>\n" +
	"            <td>139.0</td>\n" +
	"            <td>2.75234481277</td>\n" +
	"            <td>0.595063414267</td>\n" +
	"            <td>169.210134671</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>18_HYC</td>\n" +
	"            <td>9.50848</td>\n" +
	"            <td>160.0</td>\n" +
	"            <td>4.54794671474</td>\n" +
	"            <td>0.9221548513</td>\n" +
	"            <td>168.207327134</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>19_HYC</td>\n" +
	"            <td>8.78779</td>\n" +
	"            <td>141.0</td>\n" +
	"            <td>3.32726312458</td>\n" +
	"            <td>0.747588366103</td>\n" +
	"            <td>175.867031887</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>1_ZTP</td>\n" +
	"            <td>6.98587</td>\n" +
	"            <td>105.0</td>\n" +
	"            <td>2.49307228612</td>\n" +
	"            <td>0.715778803917</td>\n" +
	"            <td>139.693854749</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>20_HYC</td>\n" +
	"            <td>8.41883</td>\n" +
	"            <td>123.0</td>\n" +
	"            <td>3.579440155</td>\n" +
	"            <td>0.879836514464</td>\n" +
	"            <td>160.398433754</td>\n" +
	"        </tr>\n" +
	"        <tr>\n" +
	"            <td>22_HYC</td>\n" +
	"            <td>19.34116</td>\n" +
	"            <td>386.0</td>\n" +
	"            <td>5.77634355062</td>\n" +
	"            <td>0.945164426253</td>\n" +
	"            <td>389.3654843</td>\n" +
	"        </tr>\n" +
	"    </table>\n" +
	"    <div class='annotation'><p class='annotation-title'> 注: </p>\n" +
	"        <ul class='annotation-content'>\n" +
	"            <li>1.PD_whole_tree 基于系统发生树来计算的一种多样性指数，它用各个样品中OTUs的代表序列计算出构建系统发生树的距离，将某一样品中的所有代表序列的枝长加和，从而得到的数值。</li>\n" +
	"            <li>2.observed_species 注释到物种数量</li>\n" +
	"            <li>3.shannon 用来估算样品中微生物的多样性指数之一。它与 Simpson 多 样性指数均为常用的反映 alpha 多样性的指数。Shannon值越大，说 明群落多样性越高。</li>\n" +
	"            <li>4.simpson 用来估算样品中微生物的多样性指数之一，由Edward Hugh Simpson ( 1949) 提出，在生态学中常用来定量的描述一个区域的生物 多样性。Simpson\n" +
	"                指数值越大，说明群落多样性越低。\n" +
	"            </li>\n" +
	"            <li>5.ace 用来估计群落中含有OTU 数目的指数，由Chao 提出，是生态 学中估计物种总数的常用指数之一，与Chao1的算法不同</li>\n" +
	"            <li>6.chao1 是用chao1 算法估计群落中含OTU 数目的指数，chao1 在生 态学中常用来估计物种总数，由Chao (1984) 最早提出。</li>\n" +
	"        </ul>\n" +
	"    </div>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\03.AlphaDiversity\\alpha_diversity_index.xls'>data\\03.AlphaDiversity\\alpha_diversity_index.xls\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h4 id='40288287609b998501609ba1e510000c' class=' title_4'>3.2 物种多样性曲线</h4>\n" +
	"<p class='p'>稀释曲线和等级聚类曲线是常见的描述组内样品多样性的曲线。Rarefaction Curve，\n" +
	"    即稀释曲线，是从样品中随机抽取一定测序量的数据，统计它们所代表物种数目（即OTUs数目），以抽取的测序数据量与对应的物种数来构建曲线。稀释曲线可直接反映测序数据量的合理性，并间接反映样品中物种的丰富程度，当曲线趋向平坦时，\n" +
	"    说明测序数据量渐进合理，更多的数据量只会产生少量新的物种（OTUs）。\n" +
	"\n" +
	"    Rank\n" +
	"    Abundance曲线是将样品中的OTUs按相对丰度（或者包含的序列数目）由大到小排序得到对应的排序编号，再以OTUs的排序编号为横坐标，OTUs中的相对丰度（也可用该等级OTU中序列数的相对百分含量）为纵坐标,将这些点用折线连接，即绘制得到Rank\n" +
	"    Abundance曲线，它可直观的反映样品中物种的丰富度和均匀度。在水平方向上， 物种的丰富度由曲线的宽度来反映，物种的丰富度越高，曲线在横轴上的跨度越大；在垂直方向上，曲线的平滑程度，反映了样品中物种的均匀程度， 曲线越平缓，\n" +
	"    物种分布越均匀。 </p>\n" +
	"\n" +
	"<div class='imgs_single'><img src='data\\03.AlphaDiversity\\observed_species\\observed_species.png' alt='稀释曲线'\n" +
	"                              title='稀释曲线'>\n" +
	"    <p class='img_title'>图11 稀释曲线</p></div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\03.AlphaDiversity\\observed_species\\observed_species.png'>\n" +
	"        data\\03.AlphaDiversity\\observed_species\\observed_species.png\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<div class='imgs_single'><img src='data\\03.AlphaDiversity\\Rank_Abundance\\Rank_Abundance.png' alt='Rank Abundance曲线'\n" +
	"                              title='Rank Abundance曲线'>\n" +
	"    <p class='img_title'>图12 Rank Abundance曲线</p>\n" +
	"    <div class='annotation'><p class='annotation-title'> 注: </p>\n" +
	"        <ul class='annotation-content'>\n" +
	"            <li>上图分别为稀释曲线和Rank\n" +
	"                Abundance曲线。稀释曲线中，横坐标为从某个样品中随机抽取的测序条数，纵坐标为基于该测序条数能构建的OTU数量，用来反映测序深度情况，不同的样品使用不同颜色的曲线表示。Rank\n" +
	"                Abundance曲线中，横坐标为按OTUs丰度排序的序号，纵坐标为对应的OTUs的相对丰度，不同的样品使用不同的颜色的折线表示。\n" +
	"            </li>\n" +
	"        </ul>\n" +
	"    </div>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\03.AlphaDiversity\\Rank_Abundance\\Rank_Abundance.png'>\n" +
	"        data\\03.AlphaDiversity\\Rank_Abundance\\Rank_Abundance.png\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h4 id='40288287609b998501609ba213da000d' class=' title_4'>3.3 物种多样性曲线</h4>\n" +
	"<p class='p'>使用QIIME 的make_rarefaction_plot.py做稀释曲线的网页化展示，结果见文件rarefaction_plots.html。</p>\n" +
	"<h4 id='40288287609b998501609ba23945000e' class=' title_4'>3.4 基于OUT的Venn图</h4>\n" +
	"<p class='p'>基于OUT的Venn图</p>\n" +
	"\n" +
	"<div class='imgs_more'>\n" +
	"    <div class='imgsBox'>\n" +
	"        <div class='swiper-container gallery-top'>\n" +
	"            <div class='swiper-wrapper'><img class='swiper-slide'\n" +
	"                                             src='data\\03.AlphaDiversity\\venn_figure\\16_HYC_18_HYC_19_HYC.png'><img\n" +
	"                    class='swiper-slide' src='data\\03.AlphaDiversity\\venn_figure\\1_ZTP_2_ZTP_22_HYC.png'><img\n" +
	"                    class='swiper-slide' src='data\\03.AlphaDiversity\\venn_figure\\20_HYC_23_HYC_28_HYC.png'></div>\n" +
	"            <div class='swiper-button-next swiper-button-white'></div>\n" +
	"            <div class='swiper-button-prev swiper-button-white'></div>\n" +
	"        </div>\n" +
	"        <div class='swiper-container gallery-thumbs '>\n" +
	"            <div class='swiper-wrapper'><img class='swiper-slide'\n" +
	"                                             src='data\\03.AlphaDiversity\\venn_figure\\16_HYC_18_HYC_19_HYC.png'><img\n" +
	"                    class='swiper-slide' src='data\\03.AlphaDiversity\\venn_figure\\1_ZTP_2_ZTP_22_HYC.png'><img\n" +
	"                    class='swiper-slide' src='data\\03.AlphaDiversity\\venn_figure\\20_HYC_23_HYC_28_HYC.png'></div>\n" +
	"        </div>\n" +
	"    </div>\n" +
	"    <p class='img_title'>维恩图</p></div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\03.AlphaDiversity\\venn_figure\\16_HYC_18_HYC_19_HYC.png'>\n" +
	"        data\\03.AlphaDiversity\\venn_figure\\16_HYC_18_HYC_19_HYC.png\n" +
	"    </option>\n" +
	"    <option value='data\\03.AlphaDiversity\\venn_figure\\1_ZTP_2_ZTP_22_HYC.png'>\n" +
	"        data\\03.AlphaDiversity\\venn_figure\\1_ZTP_2_ZTP_22_HYC.png\n" +
	"    </option>\n" +
	"    <option value='data\\03.AlphaDiversity\\venn_figure\\20_HYC_23_HYC_28_HYC.png'>\n" +
	"        data\\03.AlphaDiversity\\venn_figure\\20_HYC_23_HYC_28_HYC.png\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h3 id='40288287609b998501609ba26050000f' class=' title_3'>4 样品复杂度分析（Alpha Diversity）</h3>\n" +
	"<p class='p'>Beta Diversity是对不同样品的微生物群落构成进行比较分析。首先根据所有样品的物种注释结果和OTUs的丰度信息，将相同分类的OTUs信息合并处理得到物种丰度信息表（Profiling\n" +
	"    Table）。同时利用OTUs之间的系统发生关系，进一步计算Unifrac距离（Unweighted Unifrac）。Unifrac距离是一种利用各样品中微生物序列间的进化信息计算样品间距离，\n" +
	"    两个以上的样品，则得到一个距离矩阵。然后，利用OTUs的丰度信息对Unifrac距离（Unweighted Unifrac）进���步构建Weighted Unifrac距离。最后，通过多变量统计学方法主成分分析（PCA，\n" +
	"    Principal Component Analysis），主坐标分析（PCoA， Principal Co-ordinates Analysis），无度量多维标定法（NMDS，Non-Metric\n" +
	"    Multi-Dimensional Scaling）， 非加权组平均聚类分析（UPGMA，Unweighted Pairgroup Method with Arithmetic\n" +
	"    Means）分析以及Beta多样性指数组间差异分析等方法， 从中发现不同样品（组）间的差异。</p>\n" +
	"<h4 id='40288287609b998501609ba2eba00010' class=' title_4'>4.1 系统进化关系展示</h4>\n" +
	"<p class='p'>为了进一步研究OTUs的系统进化关系以及后续Beta多样性指数研究的需要，通过多序列比对得到所有OTUs代表序列的系统发生关系。\n" +
	"    选取相对丰度排名前10的属所对应的OTUs的系统发生关系数据，并结合每个OTUs的相对丰度及其代表序列的物种注释置信度信息，进行整合展示，由此可见这些属中的OTU之间的系统进化关系。 如下图： </p>\n" +
	"\n" +
	"<div class='imgs_single'><img src='data\\04.BetaDiversity\\beta_tree\\unweighted.unifrac.png' alt='OTUs的系统发生关系及物种注释'\n" +
	"                              title='OTUs的系统发生关系及物种注释'>\n" +
	"    <p class='img_title'>图14 OTUs的系统发生关系及物种注释</p></div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\04.BetaDiversity\\beta_tree\\unweighted.unifrac.png'>\n" +
	"        data\\04.BetaDiversity\\beta_tree\\unweighted.unifrac.png\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h4 id='40288287609b998501609ba316450011' class=' title_4'>4.2 多样性指数</h4>\n" +
	"<p class='p'>Beta多样性研究中，选用Weighted Unifrac距离和Unweighted Unifrac两个指标来衡量两个样品间的相异系数，其值越小，表示这两个样品在物种多样性方面存在的差异越小。以Weighted\n" +
	"    Unifrac和Unweighted Unifrac距离绘制的Heatmap展示结果如下图： </p>\n" +
	"\n" +
	"<div class='imgs_more'>\n" +
	"    <div class='imgsBox'>\n" +
	"        <div class='swiper-container gallery-top'>\n" +
	"            <div class='swiper-wrapper'><img class='swiper-slide'\n" +
	"                                             src='data\\04.BetaDiversity\\beta_heatmap\\beta_diversity.heatmap.UnW.png'><img\n" +
	"                    class='swiper-slide' src='data\\04.BetaDiversity\\beta_heatmap\\beta_diversity.heatmap.W.png'></div>\n" +
	"            <div class='swiper-button-next swiper-button-white'></div>\n" +
	"            <div class='swiper-button-prev swiper-button-white'></div>\n" +
	"        </div>\n" +
	"        <div class='swiper-container gallery-thumbs '>\n" +
	"            <div class='swiper-wrapper'><img class='swiper-slide'\n" +
	"                                             src='data\\04.BetaDiversity\\beta_heatmap\\beta_diversity.heatmap.UnW.png'><img\n" +
	"                    class='swiper-slide' src='data\\04.BetaDiversity\\beta_heatmap\\beta_diversity.heatmap.W.png'></div>\n" +
	"        </div>\n" +
	"    </div>\n" +
	"    <p class='img_title'>Beta多样性指数热图</p>\n" +
	"    <div class='annotation'><p class='annotation-title'> 注: </p>\n" +
	"        <ul class='annotation-content'>\n" +
	"            <li>上方的图中方格中的数字是样品两两之间的相异系数，相异系数越小的两个样品，物种多样性的差异越小；同一方格中，上下两个值分别代表Weighted Unifrac和Unweighted\n" +
	"                Unifrac距离;下方左侧图是Weighted Unifrac指数热图，右侧是Unweighted Unifrac指数热图\n" +
	"            </li>\n" +
	"        </ul>\n" +
	"    </div>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\04.BetaDiversity\\beta_heatmap\\beta_diversity.heatmap.UnW.png'>\n" +
	"        data\\04.BetaDiversity\\beta_heatmap\\beta_diversity.heatmap.UnW.png\n" +
	"    </option>\n" +
	"    <option value='data\\04.BetaDiversity\\beta_heatmap\\beta_diversity.heatmap.W.png'>\n" +
	"        data\\04.BetaDiversity\\beta_heatmap\\beta_diversity.heatmap.W.png\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h4 id='40288287609b998501609ba34ef10012' class=' title_4'>4.3 PCA分析</h4>\n" +
	"<p class='p'>主成分分析（PCA，Principal Component\n" +
	"    Analysis），是一种应用方差分解，对多维数据进行降维，从而提取出数据中最主要的元素和结构的方法。应用PCA分析，能够提取出最大程度反映样品间差异的两个坐标轴，从而将多维数据的差异反映在二维坐标图上，\n" +
	"    进而揭示复杂数据背景下的简单规律。如果样品的群落组成越相似，则它们在PCA图中的距离越接近。基于OTU水平的PCA分析结果展示见下图</p>\n" +
	"\n" +
	"<div class='imgs_single'><img src='data\\04.BetaDiversity\\PCA\\PCA.png' alt='PCA分析' title='PCA分析'>\n" +
	"    <p class='img_title'>图16 PCA分析</p>\n" +
	"    <div class='annotation'><p class='annotation-title'> 注: </p>\n" +
	"        <ul class='annotation-content'>\n" +
	"            <li>\n" +
	"                横坐标表示第一主成分，百分比则表示第一主成分对样品差异的贡献值；纵坐标表示第二主成分，百分比表示第二主成分对样品差异的贡献值；图中的每个点表示一个样品，同一个组的样品使用同一种颜色表示；在有聚类圈的PCA图中，以分组信息添加聚类圈\n" +
	"            </li>\n" +
	"        </ul>\n" +
	"    </div>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\04.BetaDiversity\\PCA\\PCA.png'>data\\04.BetaDiversity\\PCA\\PCA.png</option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h4 id='40288287609b998501609ba378400013' class=' title_4'>4.4 PCoA分析</h4>\n" +
	"<p class='p'>主坐标分析（PCoA， Principal Co-ordinates\n" +
	"    Analysis），是一种与PCA类似的降维排序方法，通过一系列的特征值和特征向量排序从多维数据中提取出最主要的元素和结构。区别在于PCA是基于样品的相似系数矩阵来寻找主坐标，而PCoA是基于距离矩阵来寻找主坐标。我们基于Weighted\n" +
	"    Unifrac距离和Unweighted Unifrac\n" +
	"    距离来进行PCoA分析，并选取贡献率最大的主坐标组合进行作图展示。如果样品距离越接近，表示物种组成结构越相似，因此群落结构相似度高的样品倾向于聚集在一起，群落差异很大的样品则会远远分开。结果展示如下：</p>\n" +
	"\n" +
	"data\\04.BetaDiversity\\PCoA\\(un)weighted_unifrac\\(un)weighted.PCoA.png文件路径输入有误！！！data\\04.BetaDiversity\\PCoA\\(un)weighted_unifrac\\(un)weighted.PCoA.png文件路径输入有误！！！\n" +
	"<h4 id='40288287609b998501609ba3a9ec0014' class=' title_4'>4.5 NMDS分析</h4>\n" +
	"<p class='p'>无度量多维标定法（NMDS，Non-Metric Multi-Dimensional\n" +
	"    Scaling）统计是一种适用于生态学研究的排序方法。NMDS是非线性模型，其设计目的是为了克服线性模型（包括PCA、PCoA）的缺点，更好地反映生态学数据的非线性结构。应用NMDS分析，根据样本中包含的物种信息，以点的形式反映在多维空间上，而对不同样本间的差异程度，则是通过点与点间的距离体现，能够反映样本的组间和组内差异等。基于OTU水平的NMDS分析结果展示见下图：</p>\n" +
	"\n" +
	"data\\04.BetaDiversity\\NMDS/NMDS.png文件路径输入有误！！！data\\04.BetaDiversity\\NMDS/NMDS.png文件路径输入有误！！！<h4\n" +
	"        id='40288287609b998501609ba3dc590015' class=' title_4'>4.6 样品聚类分析</h4>\n" +
	"<p class='p'>为了研究不同样品间的相似性，还可以通过对样品进行聚类分析，构建样品的聚类树。在环境生物学中，UPGMA（Unweighted Pair-group Method with Arithmetic\n" +
	"    Mean）是一种较为常用的聚类分析方法，它最早便是用来解决分类问题的。UPGMA\n" +
	"    的基本思想是：首先将距离最小的2个样品聚在一起，并形成一个新的节点（新的样品），其分支点位于2个样品间距离的1/2处；然后计算新的“样品”与其它样品间的平均距离，再找出其中的最小2个样品进行聚类；如此反复，直到所有的样品都聚到一起，最终得到一个完整的聚类树。\n" +
	"\n" +
	"    以Weighted Unifrac距离矩阵和Unweighted Unifrac距离矩阵做UPGMA聚类分析， 并将聚类结果与各样品在门水平上的物种相对丰度整合展示，见下方结果图： </p>\n" +
	"\n" +
	"<div class='imgs_single'><img src='data\\04.BetaDiversity\\beta_tree\\UPGMA.weighted.tree.png'\n" +
	"                              alt='基于Weighted Unifrac距离的UPGMA聚类树' title='基于Weighted Unifrac距离的UPGMA聚类树'>\n" +
	"    <p class='img_title'>图19 基于Weighted Unifrac距离的UPGMA聚类树</p></div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\04.BetaDiversity\\beta_tree\\UPGMA.weighted.tree.png'>\n" +
	"        data\\04.BetaDiversity\\beta_tree\\UPGMA.weighted.tree.png\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<div class='imgs_single'><img src='data\\04.BetaDiversity\\beta_tree\\UPGMA.unweighted.tree.png'\n" +
	"                              alt='基于Unweighted Unifrac距离的UPGMA聚类树' title='基于Unweighted Unifrac距离的UPGMA聚类树'>\n" +
	"    <p class='img_title'>图20 基于Unweighted Unifrac距离的UPGMA聚类树</p>\n" +
	"    <div class='annotation'><p class='annotation-title'> 注: </p>\n" +
	"        <ul class='annotation-content'>\n" +
	"            <li>左侧是UPGMA聚类树结构，右侧的是各样品在门水平上的物种相对丰度分布图</li>\n" +
	"        </ul>\n" +
	"    </div>\n" +
	"</div>\n" +
	"<div class='load_box'><select class='select_box'>\n" +
	"    <option value='data\\04.BetaDiversity\\beta_tree\\UPGMA.unweighted.tree.png'>\n" +
	"        data\\04.BetaDiversity\\beta_tree\\UPGMA.unweighted.tree.png\n" +
	"    </option>\n" +
	"</select>\n" +
	"    <button class='load_btn'>点击下载</button>\n" +
	"</div>\n" +
	"<h2 id='40288287609b998501609ba427a10016' class=' title_2'>五、分析说明</h2>\n" +
	"<h3 id='40288287609b998501609ba476fe0017' class=' title_3'>1 测序数据处理</h3>\n" +
	"<p class='p'>根据Barcode序列和PCR扩增引物序列从下机数据中拆分出各样品数据，截去Barcode和引物序列后使用FLASH (Magoč & Salzberg, 2011)\n" +
	"    对每个样品的reads进行拼接，得到的拼接序列为原始Tags数据（Raw Tags）；拼接得到的Raw Tags，需要经过严格的过滤处理得到高质量的Tags数据（Clean Tags）。参照Qiime (Caporaso et\n" +
	"    al., 2010) 的Tags质量控制流程，进行如下操作：\n" +
	"\n" +
	"    1).Tags截取：将Raw Tags从连续低质量值（默认质量阈值为<=19）碱基数达到设定长度（默认长度值为3）的第一个低质量碱基位点截断；\n" +
	"\n" +
	"    2).Tags长度过滤： Tags经过截取后得到的Tags数据集， 进一步过滤掉其中连续高质量碱基长度小于Tags长度75%的Tags。\n" +
	"\n" +
	"    经过以上处理后得到的Tags需要进行去除嵌合体序列（http://www.drive5.com/usearch/manual/chimera_formation.html）的处理， Tags序列通过UCHIME\n" +
	"    Algorithm与数据库Gold database进行比对 检测嵌合体序列， 并最终去除其中的嵌合体序列，得到最终的有效数据（Effective Tags）。 </p>\n" +
	"<h3 id='40288287609b998501609ba4a7390018' class=' title_3'>2 OUT聚类和物种注释</h3>\n" +
	"<p class='p'>利用Uparse (Edgar, 2013) 对所有样品的全部Effective Tags进行聚类，默认以97%的一致性（Identity）将序列聚类成为OTUs（Operational Taxonomic\n" +
	"    Units），同时会选取OTUs的代表性序列，依据其算法原则，筛选的是OTUs中出现频数最高的序列作为OTUs的代表序列。对OTUs代表序列进行物种注释，用RDP Classifier (Lan, Wang, Cole, &\n" +
	"    Rosen, 2012) 方法与GreenGene数据库（http://greengenes.lbl.gov/cgi-bin/nph-index.cgi）进行物种注释分析（设定阈值为0.8~1），并分别在各个分类水平：\n" +
	"    kingdom（界），phylum（门），class（纲），order（目），family（科），genus（属），species（种）统计各样本的群落组成。使用PyNAST软件（Version\n" +
	"    1.2）与GreenGene数据库中的 'Core Set'\n" +
	"    数据信息进行快速多序列比对，得到所有OTUs代表序列的系统发生关系。最后对各样品的数据进行均一化处理，以样品中数据量最少的为标准进行均一化处理，后续的Alpha多样性分析和Beta多样性分析都是基于均一化处理后的数据。 </p>\n" +
	"<h3 id='40288287609b998501609ba4db940019' class=' title_3'>3 样品复杂度分析（Alpha Diversity）</h3>\n" +
	"<p class='p'>使用Qiime (Caporaso et al., 2010) 计算Observed-species，Chao1，Shannon， Simpson，ACE，Goods-coverage 指数，使用R (R\n" +
	"    Development Core Team, 2011) 绘制稀释曲线，Rank\n" +
	"    abundance曲线，物种累积曲线并使用R软件进行Alpha多样性指数组间差异分析；Alpha多样性指数组间差异分析会分别进行有参数检验和非参数检验，如果只有两组，选用T-test和wilcox检验，如果多于两组，选用的是Tukey检验和agricolae包的wilcox检验。\n" +
	"\n" +
	"    Alpha多样性指数具体描述如下:\n" +
	"\n" +
	"    1、 计算菌群丰度（Community richness）的指数: [Chao - the Chao1 estimator]\n" +
	"    (http://scikit-bio.org/docs/latest/generated/generated/skbio.diversity.alpha.chao1.html#skbio.diversity.alpha.chao1);\n" +
	"    [ACE - the ACE estimator]\n" +
	"\n" +
	"    2、 计算菌群多样性（Community diversity）的指数:[Shannon - the Shannon index]\n" +
	"    (http://scikit-bio.org/docs/latest/generated/generated/skbio.diversity.alpha.shannon.html#skbio.diversity.alpha.shannon);\n" +
	"    [Simpson - the Simpson index]\n" +
	"\n" +
	"    3、 测序深度指数有: [Coverage - the Good’s coverage]\n" +
	"    (http://scikit-bio.org/docs/latest/generated/generated/skbio.diversity.alpha.goods_coverage.html#skbio.diversity.alpha.goods_coverage); </p>\n" +
	"<h3 id='40288287609b998501609ba510a8001a' class=' title_3'>4 多样品比较分析（Beta Diversity）</h3>\n" +
	"<p class='p'>用Qiime (Caporaso et al., 2010) 计算Unifrac距离、构建UPGMA样品聚类树。使用R (R Development Core Team,\n" +
	"    2011)绘制PCA，PCoA和NMDS图。PCA分析使用R的ade4包和ggplot2软件包，PCoA分析使用R的WGCNA，stats和ggplot2软件包，NMDS分析使用R软件的vegan软件包。使用R进行Beta多样性指数组间差异分析，分别进行有参数检验和非参数检验，\n" +
	"    如果只有两组， 选用T-test和wilcox检验，如果多于两组， 选用的是Tukey检验和agricolae包的wilcox检验。 </p>\n" +
	"<h2 id='40288287609b998501609ba53eb2001b' class=' title_2'>六、参考文献</h2>\n" +
	"<p class='p'>\n" +
	"\n" +
	"    Caporaso, J. G., Kuczynski, J., Stombaugh, J., Bittinger, K., Bushman, F. D., Costello, E. K., … Knight, R. (2010).\n" +
	"    QIIME allows analysis of high-throughput community sequencing data. Nature Methods, 7(5), 335–6.\n" +
	"    https://doi.org/10.1038/nmeth.f.303\n" +
	"    Edgar, R. C. (2013). UPARSE: highly accurate OTU sequences from microbial amplicon reads. Nature Methods, 10(10),\n" +
	"    996–998. https://doi.org/10.1038/nmeth.2604\n" +
	"    Lan, Y., Wang, Q., Cole, J. R., & Rosen, G. L. (2012). Using the RDP classifier to predict taxonomic novelty and\n" +
	"    reduce the search space for finding novel organisms. PLoS ONE, 7(3). https://doi.org/10.1371/journal.pone.0032491\n" +
	"    Magoč, T., & Salzberg, S. L. (2011). FLASH: Fast length adjustment of short reads to improve genome assemblies.\n" +
	"    Bioinformatics, 27(21), 2957–2963. https://doi.org/10.1093/bioinformatics/btr507\n" +
	"    Ondov, B. D., Bergman, N. H., & Phillippy, A. M. (2011). Interactive metagenomic visualization in a Web browser. BMC\n" +
	"    Bioinformatics, 12(1), 385. https://doi.org/10.1186/1471-2105-12-385\n" +
	"    R Development Core Team, R. (2011). R: A Language and Environment for Statistical Computing. R Foundation for\n" +
	"    Statistical Computing (Vol. 1). https://doi.org/10.1007/978-3-540-74686-7 </p>\n" +
	"\n" +
	"</p>"