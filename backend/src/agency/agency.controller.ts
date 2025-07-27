export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Post('register')
  @UseInterceptors(
    FileInterceptor('nidImage', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, Date.now() + '-' + file.originalname);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|webp)$/)) {
          cb(null, true);
        } else {
          cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'Only image files allowed'), false);
        }
      },
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    }),
  )
  @UsePipes(new ValidationPipe())
  createAgency(
    @UploadedFile() file: Express.Multer.File,
    @Body() agencyDto: CreateAgencyDto
  ) {
    if (!file) {
      throw new BadRequestException('NID image is required');
    }

    agencyDto.fileName = file.filename;
    return this.agencyService.createAgency(agencyDto);
  }

  @Get('image/:filename')
  getImage(@Param('filename') filename: string, @Res() res) {
    const path = `./uploads/${filename}`;
    if (fs.existsSync(path)) {
      res.sendFile(filename, { root: './uploads' });
    } else {
      res.status(404).send('Image not found');
    }
  }
}
